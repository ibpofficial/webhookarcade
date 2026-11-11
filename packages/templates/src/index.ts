import type { EventTemplate } from '@webhook-arcade/shared';

export const BUILT_IN_TEMPLATES: EventTemplate[] = [
  {
    id: 'stripe-payment-intent-succeeded',
    name: 'Payment Succeeded (Stripe)',
    category: 'payment',
    provider: 'Stripe',
    description: 'Triggered when a customer successfully completes a payment intent.',
    method: 'POST',
    defaultHeaders: {
      'content-type': 'application/json',
      'user-agent': 'Stripe/1.0 (+https://stripe.com/docs/webhooks)',
      'stripe-signature': 't=1700000000,v1=calculated_upon_dispatch',
    },
    payload: JSON.stringify(
      {
        id: 'evt_3MtwEN2eZvKYlo2C17fRkEw2',
        object: 'event',
        api_version: '2023-10-16',
        created: 1700000000,
        type: 'payment_intent.succeeded',
        data: {
          object: {
            id: 'pi_3MtwEN2eZvKYlo2C17fRkEw2',
            object: 'payment_intent',
            amount: 7999,
            currency: 'usd',
            status: 'succeeded',
            customer: 'cus_N9fX2V73uYv49G',
            payment_method_types: ['card'],
            metadata: {
              order_id: 'ord_99812',
              user_id: 'usr_44102',
            },
          },
        },
      },
      null,
      2,
    ),
  },
  {
    id: 'stripe-payment-intent-failed',
    name: 'Payment Failed (Stripe)',
    category: 'payment',
    provider: 'Stripe',
    description: 'Triggered when a charge attempt fails due to insufficient funds or card decline.',
    method: 'POST',
    defaultHeaders: {
      'content-type': 'application/json',
      'user-agent': 'Stripe/1.0 (+https://stripe.com/docs/webhooks)',
      'stripe-signature': 't=1700000000,v1=calculated_upon_dispatch',
    },
    payload: JSON.stringify(
      {
        id: 'evt_3MtwEN2eZvKYlo2C17fFail',
        object: 'event',
        api_version: '2023-10-16',
        created: 1700000000,
        type: 'payment_intent.payment_failed',
        data: {
          object: {
            id: 'pi_3MtwEN2eZvKYlo2C17fFail',
            object: 'payment_intent',
            amount: 7999,
            currency: 'usd',
            status: 'requires_payment_method',
            last_payment_error: {
              code: 'card_declined',
              decline_code: 'insufficient_funds',
              message: 'Your card has insufficient funds.',
            },
          },
        },
      },
      null,
      2,
    ),
  },
  {
    id: 'shopify-order-created',
    name: 'Order Created (Shopify)',
    category: 'order',
    provider: 'Shopify',
    description: 'Sent whenever a new customer checkout is authorized and an order is created.',
    method: 'POST',
    defaultHeaders: {
      'content-type': 'application/json',
      'x-shopify-topic': 'orders/create',
      'x-shopify-shop-domain': 'demo-store.myshopify.com',
      'x-shopify-api-version': '2024-01',
    },
    payload: JSON.stringify(
      {
        id: 820982911946154500,
        email: 'dev.customer@example.com',
        created_at: '2026-11-11T05:30:00Z',
        total_price: '149.00',
        subtotal_price: '135.00',
        total_tax: '14.00',
        currency: 'USD',
        financial_status: 'paid',
        line_items: [
          {
            id: 866550311764710800,
            title: 'Mechanical Keyboard Pro',
            price: '135.00',
            quantity: 1,
            sku: 'KB-PRO-01',
          },
        ],
      },
      null,
      2,
    ),
  },
  {
    id: 'github-push-event',
    name: 'Git Push (GitHub)',
    category: 'git',
    provider: 'GitHub',
    description: 'Sent when commits are pushed to a repository branch or tag.',
    method: 'POST',
    defaultHeaders: {
      'content-type': 'application/json',
      'user-agent': 'GitHub-Hookshot/1a2b3c',
      'x-github-event': 'push',
      'x-github-delivery': '72h84f90-9b43-11ef-93e8-5b1234567890',
    },
    payload: JSON.stringify(
      {
        ref: 'refs/heads/main',
        before: '6113728f27ae82c7b1a12f6793ed7f71a68e0e9f',
        after: '883a85ced7aa32c6f350f7904751a133ac5e8a6b',
        repository: {
          id: 1296269,
          name: 'webhook-arcade',
          full_name: 'octocat/webhook-arcade',
          private: false,
        },
        pusher: {
          name: 'octocat',
          email: 'octocat@github.com',
        },
        commits: [
          {
            id: '883a85ced7aa32c6f350f7904751a133ac5e8a6b',
            message: 'feat: add chaos assertion engine',
            timestamp: '2026-11-11T05:31:00Z',
            author: {
              name: 'Octo Cat',
              email: 'octocat@github.com',
            },
          },
        ],
      },
      null,
      2,
    ),
  },
  {
    id: 'clerk-user-created',
    name: 'User Created (Clerk)',
    category: 'auth',
    provider: 'Clerk',
    description: 'Dispatched when a new user signs up and verifies their identity.',
    method: 'POST',
    defaultHeaders: {
      'content-type': 'application/json',
      'user-agent': 'Clerk-Webhooks/1.0',
      'svix-id': 'msg_2MtwEN2eZvKYlo2C',
      'svix-timestamp': '1700000000',
    },
    payload: JSON.stringify(
      {
        data: {
          id: 'user_2Nek4b8aH7q2',
          first_name: 'Alex',
          last_name: 'Morgan',
          email_addresses: [
            {
              id: 'idn_2Nek4b8aH7q2',
              email_address: 'alex.morgan@example.com',
              verification: { status: 'verified' },
            },
          ],
          created_at: 1700000000000,
        },
        object: 'event',
        type: 'user.created',
      },
      null,
      2,
    ),
  },
];

