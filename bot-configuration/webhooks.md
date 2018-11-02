# Webhooks



## Receive Message via Registered Webhook

The Haptik Platform  sends an event to your registered webhook whenever a bot or an agent has a message for the user. Your webhook must be a single `HTTPS` endpoint exposed by you that accepts  `POST` requests. All messages sent from the Haptik Platform will be in `JSON` format.

1. Messages
    
    A standard message event to emit a message from either an agent or a bot.

    ```json
    {
        "version": "1.0",
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
    - auth_id - This is a alphanumeric user identifier from your System.
    - business_id - This is a the numeric identifier for channel/queue that the user sent the previous message on. 
    - message -  A JSON object containing the message from the bot or the agent. The body object represents [HSL](https://haptik-docs.readthedocs.io/en/latest/bot-builder-advanced/index.html).
    - agent - A JSON object containing information about the sending agent or bot.
     
2. Typing Indicator

     A change in the typing indicator state, that indicates if an agent or a bot is typing. A typing indicator is good UX pattern to keep users engaged while they interact with your chat platform.
    
     Example Message:
       
    ```json
    {
        "version": "1.0",
        "user":{
            "auth_id": "<AUTH_ID>"
        },
        "business_id": 343,
        "event_name": "typing_indicator",
        "typing_indicator": "start"
    }
    ```

    Typing indicator value can either be `start` or `stop` to indicate the change in state of the typing indicator


### Validate Webhook for security

The HTTP request will contain an X-Hub-Signature header which contains the SHA1 signature of the request payload computed using the HMAC algorithm and the secret_key shared in advance, and prefixed with sha1=. Your callback endpoint can verify this signature to validate the integrity and origin of the payload.


### Webhook Performance Requirements

Your webhook should meet the following minimum performance requirements

- 
  Respond to all webhook events with a `200` OK
- Respond to all webhook events in 5 seconds or less

Please note that message delivery will be only attempted *once* for every message. There can be multiple delivery requests within a short time span and it is the responsibility of the client sdk to maintain ordering and QoS in case of failure to accept messages.

A webhook that does not respond within the specified time frame or does not respond with a `200` status code will be deactivated and will not receive notifications until it is verified once more. Visit the Haptik Dashboard to activate the webhook once more.



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
Content-Disposition: form-data; name="image"; filename="image.jpg"
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
- image - contents of the image
- message_body - message body that was logged in the haptik system
### Response

A successful request will return a `200` status code with a JSON response object with a unique message id and other metadata about the messages.

```json
{
    "message_id": 1411200492,
    "message_body": "<MESSAGE_BODY>",
    "created_at": "2018-10-04T12:41:27.980Z",
    "message_type": 1
}
```

- message_id - message id generated by haptik system
- message_body - message body that was logged in the haptik system
- created_at - ISO timestamp denoting when the message was created in the haptik system
- message_type - The message type should be `1` for image


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
  -F "image=@/home/user1/Desktop/test.jpg" \
  -F "message_body="
```

## API Security
To access the Haptik API, you need a token. The Authorization header of each HTTP request should be “Bearer” followed by your token which will be shared with you. If the Authorization header is missing or invalid, then 401 status code is returned. You should ensure that you keep your token secret.
