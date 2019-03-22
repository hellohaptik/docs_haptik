---
title: How to create a Haptik User
---

## Create Haptik User API

Eventually when you will be sending messages via Haptik, you will provide Haptik with a unique id for every user (auth_id). This is supposed to be the unique identifier for the user in your system.

Before sending any message to Haptik, you need to register the user, during this phase you could also provide additional information like:

	- name
	- mobile number
	- email

The User API allows you to register the user via a `POST` request to the Haptik Platform.

If the user with auth_id already exists then the user details will be updated in Haptik's system automatically.

### URL

Staging endpoint: `https://staging-messenger.haptikapi.com/v1.0/user/`

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
  "auth_code": "<AUTH_CODE>",
  "mobile_no": "<MOBILE_NO>",
  "email": "<EMAIL>",
  "name": "<NAME>"
}
```

- auth_id - This is an alphanumeric User identifier from your System
- auth_code - We treat this value as the client token (optional)
- mobile_no - Mobile no of the user (optional)
- email - Email of the user (optional)
- name - Name of the user (optional)

### Response

A successful request to the user creation API will return a `200` status code with a JSON response object.

```json
{
  "auth_id": "<AUTH_ID>",
  "mobile_no": "<MOBILE_NO>",
  "email": "<EMAIL>",
  "name": "<NAME>"
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
   https://staging-messenger.haptikapi.com/v1.0/user/ \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'client-id: <CLIENT_ID>' \
  -H 'Content-Type: application/json' \
  -d '{"auth_id": "<AUTH_ID>", "name": "guest user"}'
```
