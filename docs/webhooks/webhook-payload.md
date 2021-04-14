---
title: Payload Information
---

The Haptik Platform sends an event to your registered webhook under the below situations:
	- Bot replies to a user message
	- An agent replies to a user message via our [agent chat tool](https://docs.haptik.ai/agent-chat/).
	- Client integrates our [api](https://docs.haptik.ai/webhooks/#log-message-to-haptik-system-via-rest-api) to send messages to a user.

Payload sent to your registered webhook will always be in json.


## Payload parameters


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
         <td>Webhook version</td>
      </tr>
      <tr>
         <td>timestamp</td>
         <td>ISO timestamp denoting when the webhook request was created in the haptik system</td>
      </tr>
      <tr>
         <td>user</td>
         <td>All user info will be available here</td>
      </tr>
      <tr>
         <td>user.auth_id</td>
         <td>This is an alphanumeric user identifier from your system.</td>
      </tr>
      <tr>
         <td>business_id</td>
         <td>Business id is a unique numeric indentifier for your business, provided by Haptik.</td>
      </tr>
      <tr>
         <td>event_name</td>
         <td>Possible Values: message, chat_pinned and chat_complete.</td>
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
         <td>Name of the agent or bot who sent the message. Gogo is an internal name for our ai engine.</td>
      </tr>
      <tr>
         <td>agent.profile_image</td>
         <td>URL for the agent profile image.</td>
      </tr>
      <tr>
         <td>agent.is_automated</td>
         <td>Whether the reply was automated or not. It will be false if agent sent the reply</td>
      </tr>
      <tr>
         <td>agent.email</td>
         <td>Email address of the agent, it will be null if event is automated.</td>
      </tr>
      <tr>
         <td>message</td>
         <td>All message info will be available here</td>
      </tr>
      <tr>
         <td>message.id</td>
         <td>Unique numeric identifier for messages</td>
      </tr>
      <tr>
         <td>message.body</td>
         <td>
         Will comprize of HSL elements. For a complete description of HSL elements refer
         <a href="https://docs.haptik.ai/hsl/">here</a>
         </td>
      </tr>
    </tbody>
</table>

## Payload types

> The events are supported by all channels such as WhatsApp, Facebook and so on.

### Message

<b>event_name = message</b>

message sent by an agent or a bot

Example:

```json
{
    "version": "1.0",
    "timestamp": "2018-10-04T12:41:27.980Z",
    "user": {
        "auth_id": "<AUTH_ID>",
        "device_platform": "<DEVICE_PLATFORM>",
        "device_platform_name": "<DEVICE_PLATFORM_NAME>",
        "user_name": "<USER_NAME>",
        "user_id": "<USER_ID>",
        "phone_model": "<PHONE_MODEL>",
        "os_version": "<OS_VERSION>",
        "package_name": "<PACKAGE_NAME>",
    },
    "business_id": 343,
    "business_name": "<BUSINESS_NAME>",
    "event_name": "message",
    "agent": {
        "id": 4415,
        "name": "gogo",
        "profile_image": "https://assets.haptikapi.com/content/42e123411bk1109823bf.jpg",
        "is_automated": true,
        "email": null
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

### Chat Pinned

<b>event_name = chat_pinned</b>

A chat has been assigned to an agent

Example:

```json
{
    "version": "1.0",
    "timestamp": "2018-10-04T12:41:27.980Z",
    "user": {
        "auth_id": "<AUTH_ID>",
        "device_platform": "<DEVICE_PLATFORM>",
        "device_platform_name": "<DEVICE_PLATFORM_NAME>",
        "user_name": "<USER_NAME>",
        "user_id": "<USER_ID>",
        "phone_model": "<PHONE_MODEL>",
        "os_version": "<OS_VERSION>",
        "package_name": "<PACKAGE_NAME>",
    },
    "business_id": 343,
    "business_name": "<BUSINESS_NAME>",
    "event_name": "chat_pinned",
    "agent": {
        "id": 235,
        "name": "Prateek",
        "profile_image": "https://assets.haptikapi.com/content/42e123411bk1109823bf.jpg",
        "is_automated": false,
        "email": "prateek@gmail.com"
    },
    "message": {
        "id": 1982314,
        "body": {
            "text": "Prateek has entered the Conversation",
            "type": "SYSTEM",
            "data": {
                "event_name": "chat_pinned",
                "payload": {
                    "profile_image": "<PROFILE_IMAGE_URL>",
                    "agent_name": "<AGENT_NAME>",
                    "team_name": "<TEAM_NAME>"
                }
            }
        }
    }
}
```

### Chat Complete

<b>event_name = chat_complete</b>

> This event is deprecated in favor of [Webhook Conversation Complete](#webhook-conversation-complete) 

A chat has been marked as complete by an agent from athena.

**Note:** When a chat is marked complete any assigned agent is cleared.

Example:

```json
{
    "version": "1.0",
    "timestamp": "2018-10-04T12:41:27.980Z",
    "user": {
        "auth_id": "<AUTH_ID>",
        "device_platform": "<DEVICE_PLATFORM>",
        "device_platform_name": "<DEVICE_PLATFORM_NAME>",
        "user_name": "<USER_NAME>",
        "user_id": "<USER_ID>",
        "phone_model": "<PHONE_MODEL>",
        "os_version": "<OS_VERSION>",
        "package_name": "<PACKAGE_NAME>",
    },
    "business_id": 343,
    "business_name": "<BUSINESS_NAME>",
    "event_name": "chat_complete",
    "agent": {
        "id": 4415,
        "name": "gogo",
        "profile_image": "https://assets.haptikapi.com/content/42e123411bk1109823bf.jpg",
        "is_automated": true,
        "email": null
    },
    "message": {
        "id": 1982471,
        "body": {
            "text": "The conversation has been completed",
            "type": "SYSTEM",
            "data": {}
        }
    }
}
```

### Webhook Conversation Complete

<b>event_name = webhook_conversation_complete</b>

A Conversation has been marked complete by an agent or a bot.

Example:

```json
{
    "version": "1.0",
    "timestamp": "2019-07-03T11:42:44.077Z",
    "business_id": 343,
    "business_name": "<BUSINESS_NAME>",
    "event_name": "webhook_conversation_complete",
    "user": {
        "auth_id": "<AUTH_ID>",
        "device_platform": "<DEVICE_PLATFORM>",
        "device_platform_name": "<DEVICE_PLATFORM_NAME>",
        "user_name": "<USER_NAME>",
        "user_id": "<USER_ID>",
        "phone_model": "<PHONE_MODEL>",
        "os_version": "<OS_VERSION>",
        "package_name": "<PACKAGE_NAME>",
    },
    "agent": {
        "id": 4415,
        "name": "gogo",
        "profile_image": "https://assets.haptikapi.com/content/42e123411bk1109823bf.jpg",
        "is_automated": true,
        "email": null
    },
    "follow_up_details": {
        // This dict will be empty when followup is not present
        "follow_up_timestamp": 1597668000,
        "send_to": 1, // 1/ 2 / 3,  (Expert / User / Both)
        "expert_name": "expert",
        "comment": "follow up comment",
        "team_id": 2
    },
    "data": {
        "conversation_no": "<CONVERSATION_NO>",
        "collection_id": "<COLLECTION_ID>",
        "conversation_identifier": "<CONVERSATION_IDENTIFIER>",
        "chat_link":"<CHAT_LINK>", // deprecated. use `complete_chat_link` instead
        "complete_chat_link": "<CHAT_LINK>",
		"completion_type": "agent", // possible values 'gogo', 'agent', 'autocomplete' depends who marked the chat complete
    	"completion_by": "<AGENT_CLAIM_NAME>", // the state of a conversation before it was marked as completed.
		                              //Possible values 'AGENT_CLAIM_NAME', 'Team Offline Flag', 'Waiting for User', 'Bot completed'
        "closing_categories": {
            "reason": "",
            "subReason": "",
            "comment": ""
        },
        "conversation_details": {
            "insurance_no": "CDQP12324",
            "payment_mode": "COD"
        },
        "user_details": {
            "phone_number": 8826755986,
            "date_of_birth": "21/07/1995"
        }
    }
}
```

Notes: 
- Please add a safety check on the keys in the above JSON, before accessing it's value to avoid exceptions
- Our JSONs will always be backward compatible for a specific `event_name`. New keys could be added. But existing keys will not be removed/changed without a version change in the `event_name`
- We could add new `event_name` as per our product requirement. The **webhook consumer** should not consider a new `event_name` as a bug. You can simply ignore it, if it is not required for your use case (return `200` as status code for them).
