---
title: Synchronous Webhooks
---

> Note: This feature is still in beta and the API formats might be changed. Please make sure to visit this documentation page for updates.

Haptik provides a synchronous API that accepts a text query in the request and can return a reply to the query in the response.

## API Format

### Headers

```
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
Content-Type: application/json
```
- Authorization - The Authorization header of each HTTP request should be “Bearer” followed by your token which will be provided by Haptik
- client-id - The client id for your account which will be provided by Haptik
- Content-Type - application/json

### POST Request body

```javascript
{
 "user": {
   "auth_id": "<AUTH_ID>"
 },
 "message_body": "<MESSAGE_BODY>",
 "message_type": 0,
 "business_id": 343
}
```

#### Request Parameters

- auth_id - A unique identifier used for authenticating the user.
- message_body - The text body of the message to be sent to the bot.
- message_type = This defines the processing pipeline for messages, standard messages are of type 0
- business_id - This is a numeric identifier for channel/queue that you wish to register the message on.

### Response
A successful request to the log message sent API will return a 200 status code with a JSON response object. It will contain the response to the text message sent in the POST request.

```javascript
{
    "version": "1.0",
    "timestamp": "2018-10-04T12:41:27.980Z",
    "agent": {
        "id": 4415,
        "name": "gogo",
        "profile_image": "https://assets.haptikapi.com/content/42e123411bk1109823bf.jpg",
        "is_automated": true
    },
    "message": [
        {
            "id": 1982371,
            "body": {
                "text": "Hi",
                "type": "TEXT",
                "data": {
                    "quick_replies": []
                }
            }
        }
    ]
}
```

#### Response Parameters
- version - The version of the API.
- timestamp = The time at which the message was sent.
- agent - Information about the agent who replied to the message. In case of bot the agent is `gogo`.
-  message - This is a list containing teh responses to the query sent as input in the POST request. Each of the items is a HSL format reply.