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
        "is_automated": "True"
    },
    "message": {
         "id": 1982371,
         "body": "Hello World!"   
    }
}
```



- auth_id - This is a alphanumeric user identifier from a 3rd Party System. This will be present only if this information was provided when the user was first created.
- business_id - This is a the numeric identifier for channel/queue that the user sent the previous message on. 
- message -  The message body containing the message from the bot or the agent. 
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


**Validate Webhook**

The HTTP request will contain an X-Hub-Signature header which contains the SHA1 signature of the request payload, using the secret_key shared in advance, and prefixed with sha1=. Your callback endpoint can verify this signature to validate the integrity and origin of the payload.


### Webhook Performance Requirements

Your webhook should meet the following minimum performance requirements

- 
  Respond to all webhook events with a `200` OK
- Respond to all webhook events in 5 seconds or less

Please note that message delivery will be only attempted *once* for every message. There can be multiple delivery requests within a short time span and it is the responsibility of the client sdk to maintain ordering and QoS in case of failure to accept messages.

A webhook that does not respond within the specified time frame or does not respond with a `200` status code will be deactivated and will not receive notifications until it is verified once more. Visit the Haptik Dashboard to activate the webhook once more.



###  Support for Rich Messaging

The Haptik Platform is capable of supporting rich messaging elements such as Carousels, Buttons, Images and dozens more. Please get in touch with the technical support team for a complete list of rich messaging elements and details on adding support for your platform.



## Log Message to Haptik System via REST API

The Log Message API allows you to send messages via a `POST` request to the Haptik Platform. The URL for message logging is generated on the Haptik Platform Dashboard.

Example URL

`https://delivery.haptikapi.com/v1.0/log_message_from_user/`

The Authorization header of each HTTP request should be “Bearer” followed by your token which will be shared with you:

```
Authorization: Bearer <TOKEN>
```

In addition, `POST` requests to the REST API must include the following header:

```
Content-Type: application/json
```



Example Payload

```json
{
    "user":{ 
        "auth_id": "<AUTH_ID>"
    },
    "message_body": "Hello World!",
    "message_type": 0,
    "business_id": 343,
    "client_id": "<CLIENT_ID>"
}
```

- auth_id - This is a alphanumeric User identifier from a 3rd Party System
- business_id - This is a the numeric identifier for channel/queue that you wish to register the message on.
- message -  The message body containing the message to be sent to the bot or agent.
- message_type - This defines the processing pipeline for messages, standard messages are of type `0`
- client_id - The client id for your account


### User Management and User Ids

During message logging you provide Haptik with a unique id for every user(auth_id). This is usually the unique identifier for the user in your system.

For details on integrating further user details such as name, mobile number etc please refer to the documentation on integrating 3rd party authentication during signup.




### API Response

A successful request to the log message sent API will return a `200` status code with a JSON response object with a unique message id and other metadata about the messages.

```json
[{
    "message_id": 1411200492,
    "body": "Hello World!",
    "sort_id": 88,
    "created_at": "2018-10-04T12:41:27.980Z",
    "message_type": 0
}]
```





