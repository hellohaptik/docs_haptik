---
title: update user language
---

## Update User language API

The Update User language API allows you to update the preferred language of the user via a `POST` request to the Haptik Platform.

### URL

Staging endpoint: `https://staging-messenger.haptikapi.com/v1.0/update_user_language/`

**Note: ** Production URL will be shared individually

### Headers

```
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
Content-Type: application/json
```

- Authorization - The Authorization header of each HTTP request should be “Bearer” followed by your token which will be provided by Haptik
- client-id - The client id for your account which will be provided by Haptik
- Content-Type - application/json

### Request

```json
{
  "auth_id": "<AUTH_ID>",
  "language_code": "<LANGUAGE_CODE>"
}
```

- auth_id - This is an alphanumeric User identifier from your System
- language_code - This is a language indentifier based on `ISO 639-1` (standardized nomenclature used to classify language)
                  Eg: `en` for `English`, 
                      `hi` for `Hindi`


### Response

A successful request to the user creation API will return a `200` status code with a JSON response object.

```json
{
  "auth_id": "<AUTH_ID>",
  "language_code": "<LANGUAGE_CODE>"
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
   https://staging-messenger.haptikapi.com/v1.0/update_user_language/ \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'client-id: <CLIENT_ID>' \
  -H 'Content-Type: application/json' \
  -d '{"auth_id": "<AUTH_ID>", "language_code": "en"}'
```