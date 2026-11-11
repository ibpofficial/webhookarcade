import { test, expect } from '@playwright/test';

test.describe('Webhook Arcade Core End-to-End Workflow', () => {
  test('creates endpoint, ingests webhook live over socket, replays, and inspects comparison', async ({
    page,
    request,
  }) => {
    // 1. Visit landing page
    await page.goto('/');
    await expect(page).toHaveTitle(/Webhook Arcade/);

    // 2. Initialize 1-click ephemeral developer sandbox
    const tryButton = page.getByRole('button', { name: /Try It Now|Open Playground/i }).first();
    await tryButton.click();

    // 3. Confirm transition to Inbox
    await page.waitForURL('**/app/inbox', { timeout: 15000 });
    await expect(page.getByText('Webhook Inbox')).toBeVisible();

    // 4. Retrieve session token from localStorage
    const token = await page.evaluate(() => localStorage.getItem('arcade_token'));
    expect(token).toBeTruthy();

    // Create an endpoint explicitly to obtain the full secret token
    const newEpRes = await request.post('http://localhost:4000/api/endpoints', {
      headers: { authorization: `Bearer ${token}` },
      data: { name: 'E2E Test Inbox' },
    });
    expect(newEpRes.ok()).toBeTruthy();
    const { endpoint } = await newEpRes.json();
    expect(endpoint.fullToken).toBeDefined();

    // Reload page so the new endpoint is loaded in the header selector
    await page.reload();
    await page.waitForSelector('text=Webhook Inbox');

    // 5. Ingest a webhook via HTTP POST
    const webhookPayload = {
      event: 'subscription.created',
      tier: 'arcade_pro',
      units: 3,
      liveTestId: `e2e_${Date.now()}`,
    };

    const ingestResponse = await request.post(endpoint.url, {
      headers: {
        'content-type': 'application/json',
        'x-e2e-source': 'playwright-runner',
      },
      data: webhookPayload,
    });
    expect(ingestResponse.ok()).toBeTruthy();

    // 6. Confirm live appearance of event in Inbox list
    const eventRow = page.locator('button', { hasText: 'POST' }).first();
    await expect(eventRow).toBeVisible({ timeout: 10000 });
    await eventRow.click();

    // 7. Verify event detail view renders captured raw/parsed payload
    await expect(page.getByText('subscription.created')).toBeVisible();

    // 8. Navigate to Replay Page
    await page.goto('/app/replay');
    await expect(page.getByRole('heading', { name: 'Replay Engine' })).toBeVisible();

    // 9. Dispatch Replay to local idempotent demo receiver
    const replayButton = page.getByRole('button', { name: /Dispatch Replay/i });
    await expect(replayButton).toBeVisible();
    await replayButton.click();

    // 10. Verify side-by-side comparison displays status and diff
    await expect(page.getByText('Original Ingest')).toBeVisible({ timeout: 10000 });
    await expect(page.getByText('Replayed Destination')).toBeVisible();
    await expect(page.getByText(/Differentiated|Matched/i).first()).toBeVisible();
  });
});
