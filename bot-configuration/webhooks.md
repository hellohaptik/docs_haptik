## Send Message to User via Registered Webhook

The Haptik Platform  sends an event to your registered webhook whenever a bot or an agent has a message for the user. Your webhook must be a single `HTTPS` endpoint exposed by you that accepts  `POST` requests. All messages sent from the Haptik Platform will be in `JSON` format.

1. Messages

```json
{
    "version": "1.0",
    "user":{ 
        "user_id": "<HAPTIK_USER_ID>",
	    "auth_id": "<AUTH_ID>"
	    },
    "business_id": 343,
    "message": {
     "id": 1982371,
     "body": "Hello World!"   
    }
}
```



- user_id -  This is an alphanumeric user Id generated in the Haptik System
- auth_id - This is a alphanumeric user identifier from a 3rd Party System. This will be present only if this information was provided when the user was first created.
- business_id - This is a the numeric identifier for channel/queue that the user sent the previous message on. 
- message -  The message body containing the message from the bot or the agent. 



2. Typing Indicators

  A change in the typing indicator state, that indicates if an agent or a bot is typing. A typing indicator is good UX pattern to keep users engaged while they interact with your chat platform.

Sample Message:
```json
{
	"user":{ 
        "user_id": "<HAPTIK_USER_ID>",
	    "auth_id": "<AUTH_ID>"
	    },
    "typing indicator": "start"
}
```

Typing indicator value can either be `start` or `stop` to indicate the change in state of the typing indicator



### Webhook Performance Requirements

Your webhook should meet the following minimum performance requirements

- 
  Respond to all webhook events with a `200` OK
- Respond to all webhook events in 10 seconds or less

Please note that message delivery will be only attempted *once* for every message. There can be multiple delivery requests within a short time span and it is the responsibility of the client sdk to maintain ordering and 

###  Support for Rich Messaging

The Haptik Platform is capable of supporting rich messaging elements such as Carousels, Buttons, Images and dozens more. Please get in touch with the technical support team for a complete list of rich messaging elements and details on adding support for your platform.



## Log Message to Haptik System via REST API

The Log Message API allows you to send messages via a `POST` request to the Haptik Platform. The URL for message logging is generated on the Haptik Platform Dashboard.

Example URL

`https://delivery.haptikapi.com/v1.0/log_message_from_user/<CLIENT_NAME>/`

Example Payload

```json
{
	"user":{ 
        "user_id": "<HAPTIK_USER_ID>",
	    "auth_id": "<AUTH_ID>"
	    },
    "message_body": "Hello World!",
    "message_type": 0,
    "business_id": 343,
}
```

- user_id -  This is an alphanumeric User Id generated in the Haptik System

  OR

- auth_id - This is a alphanumeric User identifier from a 3rd Party System

- business_id - This is a the numeric identifier for channel/queue that you wish to register the message on.

- message -  The message body containing the message to be sent to the bot or agent.

- message-type - This defines the processing pipeline for messages, standard messages are of type `0`




### API Response

A successful request to the log message sent API will return a `200` status code with a JSON response object with a unique message id and other metadata about the messages.

```json
[{
    "id": 1411200492,
    "agent_name": "Ronak",
    "body": "Hello World!",
    "sort_id": 88,
    "created_at": "2018-10-04T12:41:27.980Z",
    "message_type": 0
}]
```





