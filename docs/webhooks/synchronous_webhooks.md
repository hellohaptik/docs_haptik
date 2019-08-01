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
[
   {
       "model": "api.chatmessaged",
       "pk": 2581793992,
       "fields": {
           "coll_id": 57639927,
           "body": "Hi",
           "direction": true,
           "received": false,
           "active": true,
           "created_at": "2019-07-29T07:35:39.221Z",
           "modified_at": "2019-07-29T07:35:39.221Z",
           "id_hash": "9d165297420ff96f257aaea2797d216f",
           "emailed": false,
           "ticket_no": 0,
           "agent_name": null,
           "claim_name": "gogo",
           "app_auto_reply": 0,
           "sort_id": 12,
           "business_via_name": "haptikwebsitechannel",
           "body_processed": null,
           "ares_flag": 0,
           "clarification_flag": false,
           "message_type": 0,
           "conversation_no": 2,
           "id": 2581793992,
           "business_id": 494,
           "business_name": "haptikwebsitechannel"
       },
       "bot_messages": [
           "Hello there!"
       ]
   }
]
```

#### Response Parameters
- model - The ML model used to process the input text message.
- fields - Fields is a JSON object containing meta-data about the message sent. This includes data like:
        *  body - The text body of the input text message.
        *  created_at - The time at which the message was sent.
        *  modified_at - The time at which the message was modified.
        *  agent_name  - The name of the agent if agent was involved in chat.
        *  business_id - The unique identifier of the business to which the text query was sent to.
        *  business_name - The name of the business to which the text query was sent.
    Along with this it also includes some system metadata.
-  bot_messages - This is a list containing teh responses to the query sent as input in the POST request.