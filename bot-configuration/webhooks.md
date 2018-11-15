# Webhooks



## Receive Message via Registered Webhook

The Haptik Platform  sends an event to your registered webhook whenever a bot or an agent has a message for the user. Your webhook must be a single `HTTPS` endpoint exposed by you that accepts  `POST` requests. All messages sent from the Haptik Platform will be in `JSON` format.

1. Messages

    A standard message event to emit a message from either an agent or a bot.

    ```json
    {
        "version": "1.0",
        "timestamp": "2018-10-04T12:41:27.980Z",
        "user": {
            "auth_id": "<AUTH_ID>"
        },
        "business_id": 343,
        "event_name": "message",
        "agent": {
            "id": 4415,
            "name": "gogo",
            "profile_image": "https://assets.haptikapi.com/content/42e123411bk1109823bf.jpg",
            "is_automated": true
        },
        "message": {
            "id": 1982371,
            "body": {
                "text": "Hi",
                "type": "TEXT",
                "data": {
                    "quick_replies": []
                }
            }  
        }
    }
    ```
    - timestamp - ISO timestamp denoting when the webhook request was created in the haptik system
    - auth_id - This is a alphanumeric user identifier from your System.
    - business_id - This is a numeric identifier for channel/queue that the user sent the previous message on. 
    - message -  A JSON object containing the message from the bot or the agent. The body object represents [HSL](https://haptik-docs.readthedocs.io/en/latest/bot-builder-advanced/index.html).
    - agent - A JSON object containing information about the sending agent or bot.

2. Chat Agent Pinned

   A chat has been assigned to an agent

   Example:

   ```json
   {
       "version": "1.0",
       "timestamp": "2018-10-04T12:41:27.980Z",
       "user": {
           "auth_id": "<AUTH_ID>"
       },
       "business_id": 343,
       "event_name": "chat_pinned",
       "team_name": "Refunds",
       "agent": {
           "id": 235,
           "name": "Prateek",
           "profile_image":
   "https://assets.haptikapi.com/content/42e123411bk1109823bf.jpg",
           "is_automated": false
       },
       "message": {
           "id": 1982314,
           "body": {
               "text": "Prateek has entered the Conversation",
               "type": "SYSTEM",
               "data": {
               }
           }  
       }
   }
   ```

3. Chat Complete

   A chat has been marked as complete either by a bot or by an agent. When a chat is marked complete any assigned agent is cleared.

   Example:

   ```json
   {
       "version": "1.0",
       "timestamp": "2018-10-04T12:41:27.980Z",
       "user": {
           "auth_id": "<AUTH_ID>"
       },
       "business_id": 343,
       "event_name": "chat_complete",
       "agent": {
           "id": 4415,
           "name": "gogo",
           "profile_image": "https://assets.haptikapi.com/content/42e123411bk1109823bf.jpg",
           "is_automated": true
       },
       "message": {
           "id": 1982471,
           "body": {
               "text": "The conversation has been completed",
               "type": "SYSTEM",
               "data": {
               }
           }  
       }
       
   }
   ```


​	



### Validate Webhook for security

The HTTP request will contain an `X-Hub-Signature` header which contains the SHA1 signature of the request payload computed using the HMAC algorithm and the secret_key shared in advance, and prefixed with `sha1=`. Your callback endpoint can verify this signature to validate the integrity and origin of the payload.


### Webhook Performance Requirements

Your webhook should meet the following minimum performance requirements

- 
  Respond to all webhook events with a `200` OK
- Respond to all webhook events in 5 seconds or less

If we cannot connect to your webhook or your server takes more than 5 seconds to return the response or returns non 2xx status code, 
then we will retry the request 6 times over the course of 60 minutes (Retry intervals: 5 seconds, 25 seconds, 125 seconds, 625 seconds, 1410 seconds, 1410 seconds). 
If a single webhook call is unsuccessful after the last attempt then it will be dropped and we will automatically disable the webhook. 
Visit the Haptik Dashboard or use the [REST API](#enable-webhook-via-rest-api) to activate the webhook once more. When the webhook is disabled, 
then new requests will be queued for a max duration of 60 minutes. If the webhook was enabled, then we will try to deliver the request.

There can be multiple delivery requests within a short time span and it is your responsibility to maintain ordering and QoS in case of failure to accept messages.



###  Support for Rich Messaging

The Haptik Platform is capable of supporting [rich messaging elements](https://haptik-docs.readthedocs.io/en/latest/bot-builder-advanced/index.html) such as Carousels, Buttons, Images and dozens more. Please get in touch with the technical support team for a complete list of rich messaging elements and details on adding support for your platform.



## Create or Update Users in the Haptik System via REST API

During message logging you provide Haptik with a unique id for every user (auth_id). This is usually the unique identifier for the user in your system.
Before sending the message you need to first register the user and provide optional user details such as name, mobile number, email etc.

The User API allows you to register the user via a `POST` request to the Haptik Platform. If the user with auth_id already exists then the user details will be updated. The URL for user creation is generated on the Haptik Platform Dashboard.

Example URL

`https://staging-messenger.haptikapi.com/v1.0/user/`


### Headers
```
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
Content-Type: application/json
```

- Authorization - The Authorization header of each HTTP request should be “Bearer” followed by your token which will be shared with you
- client-id - The client id for your account
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

- auth_id - This is a alphanumeric User identifier from your System
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

#### Error Response:

If the Authorization header is missing or invalid, then the API will return a `401` status code.


```json
{
   "error_message": "invalid authorization details"
}
```

### Sample CURL command
```
curl -X POST \
   https://staging-messenger.haptikapi.com/v1.0/user/ \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'client-id: <CLIENT_ID>' \
  -H 'Content-Type: application/json' \
  -d '{
    "auth_id": "<AUTH_ID>",
    "name": "guest user"
}
'
```

## Log Message to Haptik System via REST API

The Log Message API allows you to send messages via a `POST` request to the Haptik Platform. The URL for message logging is generated on the Haptik Platform Dashboard.

Example URL

`https://staging-messenger.haptikapi.com/v1.0/log_message_from_user/`

### Headers
```
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
Content-Type: application/json
```

- Authorization - The Authorization header of each HTTP request should be “Bearer” followed by your token which will be shared with you
- client-id - The client id for your account
- Content-Type - application/json


### Request

```json
{
    "user":{ 
        "auth_id": "<AUTH_ID>"
    },
    "message_body": "<MESSAGE_BODY>",
    "message_type": 0,
    "business_id": 343
}
```

- auth_id - This is a alphanumeric User identifier from your system
- business_id - This is a the numeric identifier for channel/queue that you wish to register the message on.
- message_body -  The message body containing the message to be sent to the bot or agent.
- message_type - This defines the processing pipeline for messages, standard messages are of type `0`

### Response

A successful request to the log message sent API will return a `200` status code with a JSON response object with a unique message id and other metadata about the messages.

```json
{
    "message_id": 1411200492,
    "message_body": "<MESSAGE_BODY>",
    "created_at": "2018-10-04T12:41:27.980Z",
    "message_type": 0
}
```

- message_id - message id generated by haptik system
- message_body - message body that was logged in the haptik system
- created_at - ISO timestamp denoting when the message was created in the haptik system
- message_type - This defines the processing pipeline for messages, standard messages are of type `0`


#### Error Response:
If the user with auth_id is not registered, then the API will return a `403` status code.

```json
{
   "error_message": "user is not registered"
}
```

If the Authorization header is missing or invalid, then the API will return a `401` status code.


```json
{
   "error_message": "invalid authorization details"
}
```

### Sample CURL command
```
curl -X POST \
    https://staging-messenger.haptikapi.com/v1.0/log_message_from_user/ \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'client-id: <CLIENT_ID>' \
  -H 'Content-Type: application/json' \
  -d '{
    "message_body": "<MESSAGE_BODY>",
    "business_id": 343,
    "message_type": 0,
    "user": {"auth_id": "<AUTH_ID>"}
}
'
```

## Image Upload

The Image upload API allows you to upload user images via a `POST` request to the Haptik Platform. The URL for image uploads is generated on the Haptik Platform Dashboard.

Example URL

`https://staging-messenger.haptikapi.com/v1.0/log_file_from_user/`

### Headers
```
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
Content-Type: multipart/form-data; boundary=MultipartBoundry
```

- Authorization - The Authorization header of each HTTP request should be “Bearer” followed by your token which will be shared with you
- client-id - The client id for your account
- Content-Type - multipart/form-data; boundary=MultipartBoundry


### Request

```
--MultipartBoundry
Content-Disposition: form-data; name="auth_id"
Content-Length: 44

<AUTH_ID>
--MultipartBoundry
Content-Disposition: form-data; name="business_id"
Content-Length: 3

<BUSINESS_ID>
--MultipartBoundry
Content-Disposition: form-data; name="message_type"
Content-Length: 1

1
--MultipartBoundry
Content-Disposition: form-data; name="file"; filename="image.jpg"
Content-Type: image/jpeg
Content-Length: 151160

contents of the image
--MultipartBoundry
Content-Disposition: form-data; name="message_body"
Content-Length: 0


--MultipartBoundry--
```

- auth_id - This is a alphanumeric User identifier from your system
- business_id - This is a the numeric identifier for channel/queue that you wish to register the message on.
- message_type - The message type should be `1` for image
- file - contents of the image (Supported extensions: jpeg, png)
- message_body - message body that was logged in the haptik system
### Response

A successful request will return a `200` status code with a JSON response object with a unique message id and other metadata about the messages.

```json
{
    "message_id": 1411200492,
    "message_body": "<MESSAGE_BODY>",
    "created_at": "2018-10-04T12:41:27.980Z",
    "message_type": 1,
    "file_url": "https://assets.haptikapi.com/content/42e123411bk1109823bf.jpg"
}
```

- message_id - message id generated by haptik system
- message_body - message body that was logged in the haptik system
- created_at - ISO timestamp denoting when the message was created in the haptik system
- message_type - The message type should be `1` for image
- file_url - The url for the uploaded image


#### Error Response:
If the user with auth_id is not registered, then the API will return a `403` status code.

```json
{
   "error_message": "user is not registered"
}
```

If the Authorization header is missing or invalid, then the API will return a `401` status code.


```json
{
   "error_message": "invalid authorization details"
}
```

### Sample CURL command
```
curl -X POST\
    https://staging-messenger.haptikapi.com/v1.0/log_file_from_user/ \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'client-id: <CLIENT_ID>' \
  -H 'Content-Type: multipart/form-data' \
  -F "auth_id=<AUTH_ID>" \
  -F "business_id=<BUSINESS_ID>" \
  -F "message_type=1" \
  -F "file=@/home/user1/Desktop/test.jpg" \
  -F "message_body="
```

## Enable webhook via REST API

If a single webhook call is unsuccessful after multiple retries, then the webhook is automatically disabled. 
You can use Enable webhook API to enable the webhook again via a `POST` request to the Haptik Platform. 
The URL to enable webhook is generated on the Haptik Platform Dashboard.


Example URL

`https://staging-messenger.haptikapi.com/v1.0/webhook/`


### Headers
```
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
Content-Type: application/json
```

- Authorization - The Authorization header of each HTTP request should be “Bearer” followed by your token which will be shared with you
- client-id - The client id for your account
- Content-Type - application/json


### Request

```json
{
    "enabled": true
}
```

- enabled - enabled should be true to enable the webhook again

### Response

A successful request to the enable webhook API will return a `200` status code with a JSON response object.

```json
{
    "enabled": true
}
```

#### Error Response:

If the Authorization header is missing or invalid, then the API will return a `401` status code.


```json
{
   "error_message": "invalid authorization details"
}
```

### Sample CURL command
```
curl -X POST \
   https://staging-messenger.haptikapi.com/v1.0/webhook/ \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'client-id: <CLIENT_ID>' \
  -H 'Content-Type: application/json' \
  -d '{
    "enabled": true
}
'
```

## API Security
To access the Haptik API, you need a token. The Authorization header of each HTTP request should be “Bearer” followed by your token which will be shared with you. If the Authorization header is missing or invalid, then 401 status code is returned. You should ensure that you keep your token secret.
