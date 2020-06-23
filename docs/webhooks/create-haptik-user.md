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
  "language_code": "<LANGUAGE_CODE>",
  "custom_data": "<FLAT JSON OBJECT>"
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
- custom_data (optional) - Any additional information about the user _(which could not be captured by any of the above fields)_ should be added as a part of this _flat JSON structure_. <br/>
Thus, additional information like _country_, _city_, _date of birth_, etc. which needs to be stored along with the user, should go here as:
	```json
	{
		"country": "India",
    	"city": "Mumbai",
    	"date_of_birth": "25-03-1985"
	}
	```

	**Rules for valid `custom_data` value:**
	- The value assigned to `custom_data` should always be a _valid JSON_.
	- This value should always be a _flat JSON_. In other words, no property can have a JSON object assigned to it. <br/> For instance, the below JSON, though a valid JSON in itself, will still be considered as an _invalid_ `custom_data` value since the property, _address_, is assigned a JSON object:
		```json
        {
	    	"date_of_birth": "12-8-1993",
			"address": {
				"country": "India",
				"state": "Goa"
			}
		}
        ```
		The suggested way is to flatten the above JSON as:
	    ```json
        {
			"date_of_birth": "12-8-1993",
			"country": "India",
			"state": "Goa"
		}
        ```



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
  -d '{"auth_id": "<AUTH_ID>", "name": "guest user", "language_code":"<LANGUAGE_CODE>",
	"custom_data": {
	    "<key_1>": "<value_1>",
        "<key_2>": "<value_2>"
	}}'
```
### Update User
```
curl -X PUT \
   https://staging-messenger.haptikapi.com/v1.0/user/ \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'client-id: <CLIENT_ID>' \
  -H 'Content-Type: application/json' \
  -d '{"auth_id": "<AUTH_ID>", "name": "guest user", "language_code":"<LANGUAGE_CODE>",
	"custom_data": {
	    "<key_1>": "<value_1>",
        "<key_2>": "<value_2>"
	}}'
```
