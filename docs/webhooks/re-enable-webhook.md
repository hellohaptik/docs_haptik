---
title: How to re-enable Webhook
---

## Enable Webhook via REST API

If the webhook is automatically disabled by Haptik due to [mentioned reasons](https://docs.haptik.ai/webhooks/protocols#error-handling-and-recovering).

You will have to use this API to enable the webhook again via a `POST` request to the Haptik Platform.

The URL to enable webhook will be generated on the Haptik Platform Dashboard.

### URL

`https://**************/v1.0/webhook/`

### Headers

```
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
Content-Type: application/json
```

	- Authorization: The Authorization header of each HTTP request should be “Bearer” followed by your token which will be provided by Haptik
	- client-id: The client id for your account which will be provided by Haptik
	- Content-Type: application/json

### Request

```json
{
  "enabled": true
}
```

- enabled - enabled should be true to enable the webhook again

### Response

A successful API request to the enable webhook will return a `200` status code with a JSON response object.

```json
{
  "enabled": true
}
```

### Error Response

If the Authorization header is missing or invalid, then the API will return a `401` status code.

```json
{
  "error_message": "invalid authorization details"
}
```

## Sample CURL command

```
curl -X POST \
   https://staging-messenger.haptikapi.com/v1.0/webhook/ \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'client-id: <CLIENT_ID>' \
  -H 'Content-Type: application/json' \
  -d '{"enabled": true}'
```
