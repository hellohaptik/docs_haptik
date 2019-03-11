---
title: Integrating Custom Code


---

Once a particular node has been detected and the mandatory entities have been collected, these entities can be given to custom code to execute your own business logic. There are 3 different ways to execute this business logic.

## 1. API Functions

_This is internal to Haptik Developers_

## 2. Webhooks

A node can be configured to call a webhook once the required entities have been collected.

To deploy a live webhook that can receive webhook events, your code must be hosted on a public HTTP server that has the following:

- A Valid SSL Certificate
- An open port that accepts `GET` and `POST` requests

#### How to add integration endpoint

1. Click on node on which you want to add integration function
2. Select Integration
3. Select API and put API endpoint like shown in image

![add integration endpoint](/assets/endpoint.png)

Specify the security challenge that will be verified

**Request Method**

POST

**Request Headers**

| Header          | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| Content-Type    | application/json                                             |
| X-Hub-Signature | sha1=signature (The HMAC hex digest of the request body. This header will be sent if the node is configured with a secret. The HMAC hex digest is generated using the sha1 hash function and the secret as the HMAC key.) |



**Request Parameters**

```json
{
  "node": "system name of the node",
  "event": "API_INTEGRATION",
  "user": {
    "user_name": "haptik username",
    "full_name": "",
    "device_platform": 5
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
  }
}
```

**1. node** - Unique system name of the calling node

> **Nodes** are the interlinked building blocks of a bot. Each node acts like a gatekeeper who detects user inputs, sends out appropriate responses, and directs users to the next node. They are the points where conversation converges or diverges basis the information users input to the bot. Nodes are comprised of several important sub-components, which house important pieces of information. [Read More](https://docs.haptik.ai/bot-builder/basic/creating-nodes#what-is-a-node)

**2. entities** - The entities dictionary will have a key for each entity that is detected e.g. movie_name, venue, phone_number, etc. The value for each entity is a list of dictionary as shown below.

> **Entities**: An entity represents the set of values from which a user’s response must come in order for that user to progress onwards in a conversation. Depending on the context of the conversation, the required response can either be a single value or limited group of specific values from the entity, or any value from within the entity. Entities are always added in connection with the bot’s query the required response is associated with, so that they may detect whether the required response was given. [Read More](https://docs.haptik.ai/bot-builder/basic/entities)

**3. event** - event type e.g. API_INTEGRATION

**4. user** - Dictionary containing user data

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

**Response Parameters**

A `200 OK` HTTP Response must be sent back to the Haptik Servers, Failing which a bot break response will be sent to the user. Webhook response must be sent in 30 seconds or less, failing which a bot break response will be sent to the user.
The following additional fields can be specified by the Webhook to control behaviour of the bot and send messages to the user.

```json
{
    "response": [
        "message1",
        "message2",
        ....
    ],
    "status": True/False,
}
```

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

   ```json
   {
       "status": true,
       "response": ["phone number seems invalid, please try again"]
   }
   ```

2. Response with multi-line

3. ```json
   {
       "status": true,
       "response": ["phone number seems invalid", "please try again"]
   }
   ```

3. Response with advanced UI elements [for more detail read here](https://haptik-docs.readthedocs.io/en/latest/bot-builder-advanced/message-elements.html)

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

As per our pipeline, if there is no response at specific stages, then it will be treated as a Botbreak scenario. So if your Bot Says section on Mogambo doesn't have any response or the integration function doesn't return any response, then a Botbreak message will be sent or the chat will be moved to Pending state depending on whether Human assistance is disabled or enabled respectively.

> So if human_assistance is OFF on business manager => Botbreak message will be sent.
>
> If human_assistance is ON on business manager => Chat will be moved to pending and assigned to an agent.





**Validate Webhook**

The HTTP request will contain an X-Hub-Signature header which contains the SHA1 signature of the request payload, using the secret_key entered for the node, and prefixed with sha1=. Your API can verify this signature to validate the integrity and origin of the payload.

**Sample python code for webhook**

```python
   # !/usr/bin/env python
   
   """
   Simple HTTP server in python for handling haptik webhooks.
   
   Usage::
   ./test_server.py [<port>]
   
   """
   import cgi
   import json
   import hmac
   import hashlib
   from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
   
   class WebhookServer(BaseHTTPRequestHandler):
       def _set_headers(self, status_code, content_type):
           self.send_response(status_code)
           self.send_header('Content-type', content_type)
           self.end_headers()
   
      def do_GET(self):
          self._set_headers(status_code=200, content_type='text/html')
          self.wfile.write("<html><body><h1>Test Server</h1></body></html>")
   
      def do_POST(self):
          content_type, pdict = cgi.parse_header(self.headers.getheader('Content-Type'))
   
          if content_type != 'application/json':
              self.send_response(400)
              self.end_headers()
              return
   
          length = int(self.headers.getheader('Content-Length'))
          if not length:
              self.send_response(400)
              self.end_headers()
              return
   
          body = self.rfile.read(length)
          data = json.loads(body)
          secret_key = 'test'
          hash_value = hmac.new(secret_key, body, hashlib.sha1).hexdigest()
          sha1_signature = 'sha1=' + str(hash_value)
          request_signature = self.headers.getheader('X-Hub-Signature')
          if sha1_signature != request_signature:
              self.send_response(401)
              self.end_headers()
              return
          entities = data['entities']
          product_name = entities['product_name'][0]['entity_value'] if entities.get('product_name') else None
          if product_name == 'speaker':
              message = 'The Wireless Radio Alarm Clock Speaker can be yours only for Rs.1599'
          elif product_name == 'powerbank':
              message = 'The Ambrane Powerbank can be yours only for Rs.1799'
          else:
              self.send_response(400)
              self.end_headers()
              return
          response = {"status": True, "response": [message]}
          self._set_headers(status_code=200, content_type='application/json')
          self.wfile.write(json.dumps(response))
   
   def run(server_class=HTTPServer, handler_class=WebhookServer, port=80):
   server_address = ('', port)
   httpd = server_class(server_address, handler_class)
   print 'Starting test server...'
   httpd.serve_forever()
   
   if __name__ == "__main__":
   from sys import argv
      if len(argv) == 2:
          run(port=int(argv[1]))
      else:
          run() 
```



## 3. Code Upload

-*Coming Soon*



## Best Practices

**1. Assign Chat to Agent** In some scenarios, where integration response fails or some unknown exception occurs then instead of sending bot break message we can also directly assign chat to an agent for better user experience.

**2.Handle textual content** - is used to configure the bot response which comes from the backend. Everytime we want to change bot's response code change is required, to avoid that pain we can use one **key value store**. Any person with zero to little tech knowledge can change bot response from key value store(with GUI) by updating the message copy corresponding to that unique message key or ID and share with the developer and dev fetches the response from that key and return the response.

**3. Advanced UI Elements**  - Haptik defines a superset of UI elements that are available across multiple platforms. These UI elements are then converted to their platform equivalent (js-sdk, android, ios, facebook-messenger, etc..) if they are not available on that specific platform. Eg. Forms are converted to quick replies on the Facebook platform and collected over free form. [for more detail read here](
