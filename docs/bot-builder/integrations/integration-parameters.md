---
title: Integration Parameters
---


### Introduction

In this section we will take a look at the request and response parameters that are passed to the integration functions.

These parameters are passed as request data to the API integrations and are passed as function parameters to the main function in custom code integration.

### Request Parameters

```json
{
  "node": "system name of the node",
  "event": "API_INTEGRATION",
  "user": {
    "user_id": "User ID",
    "user_name": "haptik username",
    "full_name": "",
    "device_platform": 5,
    "language_code": "User's current language",
    "auth_id": "Authentication ID, If AuthInfo Is present else empty string",
    "auth_code": "Authentication Code, If AuthInfo Is present else empty string"
  },
  "conversation_no": 1,
  "conversation_details": {
    "insurance_no": "CDQP12324",
    "payment_mode": "COD" 
  },
  "user_details": {
    "phone_number": 8826755986,
    "date_of_birth": "21/07/1995"
  },
  "entities": {
    "product_id": [
      {
        "detection": "message",
        "original_text": "71",
        "entity_value": "71"
      }
    ],
    "email": [
      {
        "detection": "user_profile",
        "original_text": "test@test.com",
        "entity_value": "test@test.com"
      }
    ],
    "product_name": [
      {
        "detection": "default",
        "original_text": "headphones",
        "entity_value": "headphones"
      }
    ]
  },
  "env_variables": {
    "CREATE_LEAD_API": "https://abc.com/create-lead",
    "CRM_INTEGRATION_API": "https://abc.com/crm-integration-api"
  }
}
```

**1. node** - Unique system name of the calling node

> **Nodes** are the interlinked building blocks of a bot. Each node acts like a gatekeeper who detects user inputs, sends out appropriate responses, and directs users to the next node. They are the points where conversation converges or diverges basis the information users input to the bot. Nodes are comprised of several important sub-components, which house important pieces of information. [Read More](https://docs.haptik.ai/bot-builder/basic/creating-nodes#what-is-a-node)

**2. entities** - The entities dictionary will have a key for each entity that is detected e.g. movie_name, venue, phone_number, etc. The value for each entity is a list of dictionary as shown below.

> **Entities**: An entity represents the set of values from which a user’s response must come in order for that user to progress onwards in a conversation. Depending on the context of the conversation, the required response can either be a single value or limited group of specific values from the entity, or any value from within the entity. Entities are always added in connection with the bot’s query the required response is associated with, so that they may detect whether the required response was given. [Read More](https://docs.haptik.ai/bot-builder/basic/entities)

**3. event** - event type e.g. API_INTEGRATION

**4. user** - Dictionary containing user data

**5. conversation_no** - Identifier for the current conversation of the user with this Business

**6. conversation_details** - Conversation details stores the current context of the conversation.Things like insurance number or product id which are the current scope of the conversation will go under conversation details. 

This data will be stored in redis with expiry time of 3 hours.


**7. user_details** -  user_details stores user's data like address, PAN number, Aadhar number which are independent of the current context of the bot conversation.

Data inside user_details will be available across bots and businesses as long as the underlying user is the same in the database. 

> conversation_details and user_details can be set from the backend as well.

**8. env_variables** - env_variables key returns environment variable values of current environment. ENV variables can be added/edited by developer from code executor UI.

**entity output format**

```json
[
    {
        "entity_value": entity_value,
        "detection": detection_method,
        "original_text": original_text
    }
]
```

Consider the following example for detailed explanation:

"I want to order from mcd"

- entity_value: This will store the value of entity (i.e entity value) that is detected. For example, Mc’Donalds.
- detection: This will store how the entity is detected i.e. whether from message, structured value or fallback value.
- original_text: This will store the actual value that is detected. For example, mcd.

### Response Parameters

A `200 OK` HTTP Response must be sent back to the Haptik Servers, Failing which a bot break response will be sent to the user. API response must be sent in 30 seconds or less, failing which a bot break response will be sent to the user.
The following additional fields can be specified by the API to control behaviour of the bot and send messages to the user.

```json
{
    "response": [
        "message1",
        "message2",
        ....
    ],
    "status": True/False,
    "conversation_details": {}, // Optional
    "user_details": {} // Optional
}
```

> conversation_details and user_details keys are only required if you want to update the conversation and user details from the backend

| Name     | Type    | Description                                                  |
| -------- | ------- | ------------------------------------------------------------ |
| response | array   | List of messages to be sent to the user                      |
| status   | boolean | If status is True, then the decorator will assign the response to success_response. If status is False, then the decorator will assign the response to failure_response |

**status** - Depending on whether the node is an end node or not, the True/False flag can affect the status of the chat.

> If the node is an **end node** and if the integration response returns **status True**, then the chat will be **moved to complete state.**
>
> If the node is an **end node** and if the integration response returns **status False**, then the chat will remain in **Bot state**.
>
> If the node is **not an end node**, then the chat **remains in Bot state** after sending the response irrespective of the status.

**response** -Response will be array of string(s) or hsl(haptik specific language).

for example:

1. Response with single line

   ```python
   {
       "status": True,
       "response": ["phone number seems invalid, please try again"]
   }
   ```

2. Response with multi-line
    ```python
    {
        "status": True,
        "response": ["phone number seems invalid", "please try again"]
    }
    ```

3. Response for Multi-Lingual Bot
    ```python
    language_code = request_body['user']['language_code'] #assuming request_body contains post-data
    if  language_code == 'en':
      message = ["phone number seems invalid, please try again"]
    elif language_code == 'hi':
      message = ["फ़ोन नंबर अमान्य लगता है, कृपया पुनः प्रयास करें"]
    else:
      message = <Any Message as per use case>

   {
      "status": True,
      "response": message # One we created above from conditional logic^^
   }
    ```

4. Response with advanced UI elements [for more detail read here](https://haptik-docs.readthedocs.io/en/latest/bot-builder-advanced/message-elements.html)

![Bot response with advanced UI elements](/assets/advanced-ui-element.png)


 ```json
   {
     "status": true,
     "response": [
       '{
         "text": "COMPLETE BLOOD COUNT; CBC",
         "type": "BUTTON",
         "data": {
           "items": [
             {
               "actionable_text": "View Price",
               "location_required": false,
               "is_default": 0,
               "uri": "LAUNCH_CHANNEL",
               "type": "TEXT_ONLY",
               "payload": {
                 "gogo_message": "",
                 "message": "I want to check the price of this test"
               }
             },
             {
               "actionable_text": "View Details",
               "location_required": false,
               "is_default": 0,
               "uri": "LINK",
               "type": "APP_ACTION",
               "payload": {
                 "url": "XYZ.COM",
                 "gogo_message": ""
               }
             }
           ]
         },
         "isNew": false
       }'
     ]
   }
   ```


5. Response When conversation and User details needs to be updated
    ```python
    {
        "status": True,
        "response": ["phone number seems invalid", "please try again"],
        "conversation_details": {
          "insurance_no": "CDQP12324",
          "payment_mode": "COD" 
        },
        "user_details": {
          "phone_number": 8826755986,
          "date_of_birth": "21/07/1995"
        },
    }
    ```

>The total size of conversation_details and user_details cannot be more than 500 characters

As per our pipeline, if there is no response at specific stages, then it will be treated as a Botbreak scenario. So if your Bot Says section on Mogambo doesn't have any response or the integration function doesn't return any response, then a Botbreak message will be sent or the chat will be moved to Pending state depending on whether Human assistance is disabled or enabled respectively.

> So if human_assistance is OFF on business manager => Botbreak message will be sent.
>
> If human_assistance is ON on business manager => Chat will be moved to pending and assigned to an agent.
