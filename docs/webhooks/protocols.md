---
title: Protocols
---

Due to the critical and confidential nature of the data being exchanged, all clients must adhere to the stated rules for implementing a webhook to eliminate potential risks.

## Webhook Requirements

Your webhook should meet the following minimum performance requirements

- Must be a https endpoint
- Respond to all webhook events with a `200` OK
- Respond to all webhook events in `5` seconds or less

## Security Requirements

The HTTP request will contain an `X-Hub-Signature` header which contains the SHA1 signature of the request payload computed using the HMAC algorithm and the secret_key shared in advance, and prefixed with `sha1=`.

Your callback endpoint should verify this signature to validate the integrity and origin of the payload.

## Error Handling and Recovering

<b>If any of the below 3 conditions are observed by Haptik Systems</b>

1. We cannot connect to your webhook
2. Your webhook takes more than '5' seconds to return the response
3. Your webhook returns non 2xx status code

<b>then</b>

We will retry the request 6 times over the course of `60 minutes` (Retry intervals: 5 seconds, 25 seconds, 125 seconds, 625 seconds, 1410 seconds, 1410 seconds).

If the repeated webhook call are unsuccessful even after the last attempt we will automatically disable the webhook.

Once the webhook is disabled, then new requests will be queued for a max duration of `60 minutes`. Once the webhook is enabled by you, then we will attempt to deliver the requests.

You can visit the Haptik Dashboard or use the [REST API](#enable-webhook-via-rest-api) to activate the webhook if it is disabled.

<b>Note:</b> There can be multiple delivery requests within a short time span and it is `your responsibility` to maintain ordering and QoS in case of failure to accept messages.
