# Chaos Lab & Assertion Testing Engine

The **Chaos Lab** is Webhook Arcade's core reliability engine. It allows developers to subject webhook receivers to realistic network anomalies and automated assertions before deploying to production.

---

## Fault Injections

| Fault Type | Description | Configurable Parameters |
|---|---|---|
| `duplicate` | Emits identical events in quick succession | `duplicateCount` (1-50), `delayMs` |
| `burst` | Fires concurrent requests simultaneously | `burstCount` (1-100), `burstConcurrency` (1-20) |
| `delay` | Injects network latency before delivery | `delayMs` (0-30000ms) |
| `out_of_order` | Inverts delivery sequence (Event B before Event A) | `orderGapMs` (gap between deliveries) |
| `random_failure`| Drops or errors on requests based on a seeded RNG | `failureRate` (0.0-1.0), `failureStatusCode` |
| `bad_signature` | Corrupts cryptographic HMAC signature headers | `badSignatureKey` (target header name) |
| `missing_headers`| Strips essential HTTP headers | `removeHeaders` (array of header keys) |
| `invalid_payload`| Delivers malformed or truncated JSON bodies | `corruptPayload` (boolean) |

---

## Declarative Assertions

The assertion evaluator assesses responses against test criteria:

- `status_equals`: Asserts that all deliveries return the specified HTTP status code (e.g. `200`).
- `status_range`: Asserts that status codes fall within an acceptable range (e.g. `[200, 299]`).
- `latency_below_ms`: Asserts that p95 latency does not exceed a specified threshold.
- `body_jsonpath_equals`: Checks whether a nested JSON property in the response matches an expected value.
- `body_jsonpath_exists`: Checks whether a required response field exists.
- `header_equals`: Checks response header values.
- `idempotent_processed_once`: Verifies that duplicate webhook deliveries are acknowledged safely without repeated business logic execution.

---

## Built-In Demo Target

Webhook Arcade bundles an in-process demo receiver for instant local testing:
- `POST /demo/naive`: Blindly processes every duplicate and fails on malformed payloads.
- `POST /demo/idempotent`: Tracks event IDs, processes the first event, and safely deduplicates subsequent deliveries with a confirmation message.

