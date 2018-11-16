# Webhooks



## Receive Message via Registered Webhook

The Haptik Platform  sends an event to client's registered webhook whenever a bot or an agent has a message for the user. 

<b>Note</b>: Your webhook must be a single `HTTPS` endpoint exposed by you that accepts `POST` requests. 

All messages sent from Haptik Platform to registered client's webhook will always be in `JSON` format.


<table border="1" class="docutils">
   <thead>
      <tr>
         <th>Property Name</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>version</td>
         <td>TODO</td>
      </tr>
      <tr>
         <td>timestamp</td>
         <td>ISO timestamp denoting when the webhook request was created in the haptik system</td>
      </tr>
      <tr>
         <td>user</td>
         <td>All user information will be provided under this</td>
      </tr>
      <tr>
         <td>user.auth_id</td>
         <td>This is a alphanumeric user identifier from client's System.</td>
      </tr>
      <tr>
         <td>business_id</td>
         <td>Business id as provided to the client</td>
      </tr>
      <tr>
         <td>event_name</td>
         <td>Possible Values: `message`, `chat_pinned` and `chat_complete`.</td>
      </tr>
      <tr>
         <td>team_name</td>
         <td>TODO</td>
      </tr>
      <tr>
         <td>agent</td>
         <td>All agent info will be available here</td>
      </tr>
      <tr>
         <td>agent.id</td>
         <td>Unique indentifier for the agent.</td>
      </tr>
      <tr>
         <td>agent.name</td>
         <td>gogo is an internal name for our ai engine, else agent name will appear here.</td>
      </tr>
      <tr>
         <td>agent.profile_image</td>
         <td>TODO</td>
      </tr>
      <tr>
         <td>agent.is_automated</td>
         <td>TODO</td>
      </tr>
      <tr>
         <td>message</td>
         <td>All message oriented info will be available here</td>
      </tr>
      <tr>
         <td>message.id</td>
         <td>Unique identifier for messages</td>
      </tr>
      <tr>
         <td>message.body</td>
         <td>
         Will comprice of hsl elements, for a complete description of hsl elemnets refer 
         [here](https://haptik-docs.readthedocs.io/en/latest/bot-builder-advanced/index.html)
         </td>
      </tr>
    </tbody>
</table>

1. <b>Messages | (event_name = message)</b>

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

2. <b>Chat Agent Pinned | (event_name = chat_pinned)</b>

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

3. <b>Chat Complete | (event_name = chat_complete)</b>

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

### Validate Webhook for security

The HTTP request will contain an `X-Hub-Signature` header which contains the SHA1 signature of the request payload computed using the HMAC algorithm and the secret_key shared in advance, and prefixed with `sha1=`. 

The client's callback endpoint should verify this signature to validate the integrity and origin of the payload.


### Webhook Performance Requirements

Your webhook should meet the following minimum performance requirements

- Respond to all webhook events with a `200` OK
- Respond to all webhook events in `5` seconds or less

#### Implemented FallBacks

<b>If any of the below 3 conditions are observed</b>
1) We cannot connect to client's webhook
2) Client webhook takes to long to response (threshold = `5s`)
3) Client webhook returns non 2xx status code

<b>then</b>

We will retry the request 6 times over the course of `60 minutes` (Retry intervals: 5 seconds, 25 seconds, 125 seconds, 625 seconds, 1410 seconds, 1410 seconds).

If the webhook call is unsuccessful even after the last attempt then it will be dropped and we will automatically disable the webhook. 

After which new requests will be queued for a max duration of `60 minutes`. Once the webhook is enabled by the client, we will attempt to deliver the request.

Client can visit the Haptik Dashboard or use the [REST API](#enable-webhook-via-rest-api) to activate the webhook, If disabled.


<b>Note:</b> There can be multiple delivery requests within a short time span and it is the `client's responsibility` to maintain ordering and QoS in case of failure to accept messages.


###  Support for Rich Messaging

The Haptik Platform is capable of supporting [rich messaging elements](https://haptik-docs.readthedocs.io/en/latest/bot-builder-advanced/index.html) such as Carousels, Buttons, Images and dozens more. Please get in touch with the technical support team for a complete list of rich messaging elements and details on adding support for your platform.


## Create or Update Users in the Haptik System via REST API

During message logging, the client provide Haptik with a unique id for every user (auth_id). This is supposed to be the unique identifier for the user in said client's system.
Before sending the message to Haptik, the client needs to register the user and provide optional user details such as name, mobile number, email etc.

The User API allows you to register the user via a `POST` request to the Haptik Platform.

If the user with auth_id already exists then the user details will be updated in Haptik's system automatically.

The URL for user creation is generated on the Haptik Platform Dashboard.

Example URL

`https://staging-messenger.haptikapi.com/v1.0/user/`


#### Headers
```
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
Content-Type: application/json
```

- Authorization - The Authorization header of each HTTP request should be “Bearer” followed by your token which will be shared with you
- client-id - The client id for your account
- Content-Type - application/json


#### POST Request

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

#### Response

A successful request to the user creation API will return a `200` status code with a JSON response object.

```json
{
    "auth_id": "<AUTH_ID>",
    "mobile_no": "<MOBILE_NO>",
    "email": "<EMAIL>",
    "name": "<NAME>"
}
```

##### Error Response:

If the Authorization header is missing or invalid, then the API will return a `401` status code.


```json
{
   "error_message": "invalid authorization details"
}
```

#### Sample CURL command
```
curl -X POST \
   https://staging-messenger.haptikapi.com/v1.0/user/ \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'client-id: <CLIENT_ID>' \
  -H 'Content-Type: application/json' \
  -d '{"auth_id": "<AUTH_ID>", "name": "guest user"}'
```

## Log Message to Haptik System via REST API

The Log Message API allows you to send messages via a `POST` request to the Haptik Platform. The URL for message logging is generated on the Haptik Platform Dashboard.

Example URL

`https://staging-messenger.haptikapi.com/v1.0/log_message_from_user/`

#### Headers
```
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
Content-Type: application/json
```

- Authorization - The Authorization header of each HTTP request should be “Bearer” followed by your token which will be shared with you
- client-id - The client id for your account
- Content-Type - application/json


#### Request

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
- business_id - This is a the numeric identifier for channel/queue that the client wish to register the message on.
- message_body -  The message body containing the message to be sent to the bot or agent.
- message_type - This defines the processing pipeline for messages, standard messages are of type `0`

#### Response

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

#### Sample CURL command
```
curl -X POST \
    https://staging-messenger.haptikapi.com/v1.0/log_message_from_user/ \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'client-id: <CLIENT_ID>' \
  -H 'Content-Type: application/json' \
  -d '{\
    "message_body": "<MESSAGE_BODY>",\
    "business_id": 343,\
    "message_type": 0,\
    "user": {"auth_id": "<AUTH_ID>"}\
}'
```

## Image Upload

The Image upload API allows the client to upload user images via a `POST` request to the Haptik Platform. The URL for image uploads is generated on the Haptik Platform Dashboard.

Example URL

`https://staging-messenger.haptikapi.com/v1.0/log_file_from_user/`

#### Headers
```
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
Content-Type: multipart/form-data; boundary=MultipartBoundry
```

- Authorization - The Authorization header of each HTTP request should be “Bearer” followed by client's token which will be provided by Haptik
- client-id - The client id account, provided by Haptik
- Content-Type - multipart/form-data; boundary=MultipartBoundry


#### Request

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
- business_id - This is a the numeric identifier for channel/queue on which the message is to be registerd.
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

#### Sample CURL command
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

If a single webhook call is unsuccessful after multiple retries, then the webhook is automatically disabled by Haptik.

Client will have to use Enable webhook API to enable the webhook again via a `POST` request to the Haptik Platform. 
The URL to enable webhook will be generated on the Haptik Platform Dashboard.


Example URL

`https://staging-messenger.haptikapi.com/v1.0/webhook/`


#### Headers
```
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
Content-Type: application/json
```

- Authorization - The Authorization header of each HTTP request should be “Bearer” followed by client's token provided by Haptik
- client-id - The client id for your account
- Content-Type - application/json


#### Request

```json
{
    "enabled": true
}
```

- enabled - enabled should be true to enable the webhook again

#### Response

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

#### Sample CURL command
```
curl -X POST \
   https://staging-messenger.haptikapi.com/v1.0/webhook/ \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'client-id: <CLIENT_ID>' \
  -H 'Content-Type: application/json' \
  -d '{"enabled": true}'
```

## API Security
To access the Haptik API, client's will require a Haptik provided token. The Authorization header of each HTTP request should be “Bearer” followed by said token. If the Authorization header is missing or invalid, then 401 status code is returned.

<b>Note:</b> Clients should never share their token with external parties
