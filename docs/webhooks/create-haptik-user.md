---
title: How to create/update a Haptik User
---

## Create or Update Haptik User API

Eventually when you will be sending messages via Haptik, you will provide Haptik with a unique id for every user (auth_id). This is supposed to be the unique identifier for the user in your system.

Before sending any message to Haptik, you need to register the user, during this phase you could also provide additional information like:

	- name
	- mobile number
	- email
	- language preference
	- phone model
	- os version
	- package name

The User API allows you to register the user via a `POST` request or update the user info via `PUT` request to the Haptik Platform.

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
  "name": "<NAME>",
  "language_code": "<LANGUAGE_CODE>"
}
```

- auth_id - This is an alphanumeric User identifier from your System
- auth_code (optional) - We treat this value as the client token
- mobile_no (optional) - Mobile no of the user
- email (optional) - Email of the user
- name (optional) - Name of the user
- language_code (optional) - This is a language indentifier for user's preferred language based on `ISO 639-1` (standardized nomenclature used to classify language)
                  Eg: `en` for `English`,
                      `hi` for `Hindi`(optional)
- phone model (optional) - Phone model/type that the user is using
- os version (optional) - OS version of where the user is coming from (Android, iOS, Windows etc.)
- package name (optional)- An identifier to differentiate between different Apps on the device (WhatsApp or custom client app)

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
### Create User
```
curl -X POST \
   https://staging-messenger.haptikapi.com/v1.0/user/ \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'client-id: <CLIENT_ID>' \
  -H 'Content-Type: application/json' \
  -d '{"auth_id": "<AUTH_ID>", "name": "guest user", "language_code":"<LANGUAGE_CODE>"}'
```
### Update User
```
curl -X PUT \
   https://staging-messenger.haptikapi.com/v1.0/user/ \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'client-id: <CLIENT_ID>' \
  -H 'Content-Type: application/json' \
  -d '{"auth_id": "<AUTH_ID>", "name": "guest user", "language_code":"<LANGUAGE_CODE>"}'
```
