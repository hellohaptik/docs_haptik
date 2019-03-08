---
title: Integrating Custom Code
---

Once a particular node has been detected and the mandatory entities have been collected, these entities can be given to custom code to execute your own business logic. 

There are 3 different ways to execute this business logic.

## API Functions
_This is internal to Haptik Developers_

## Webhooks
A node can be configured to call a webhook once the required entities have been collected.

To deploy a live webhook that can receive webhook events, your code must be hosted on a public HTTP server that has the following:

* A Valid SSL Certificate

* An open port that accepts `GET` and `POST` requests

Select the API Functions section
Select the type as WebHook
Add the endpoint of the webhook

Specify the security challenge that will be verified

**Request Method**

POST

**Request Headers**

.. list-table::
:widths: 15 30
:header-rows: 1

- - Header
  - Description
- - Content-Type
  - application/json
- - X-Hub-Signature
  - sha1=signature (The HMAC hex digest of the request body. This header will be sent if the node is configured with a secret. The HMAC hex digest is generated using the sha1 hash function and the secret as the HMAC key.)


|    Header      | Description  |
| -------------  | -------------|
| Content-Type   | application/json |
| X-Hub-Signature| sha1=signature (The HMAC hex digest of the request body. This header will be sent if the node is configured with a secret. The HMAC hex digest is generated using the sha1 hash function and the secret as the HMAC key.)|

**Request Parameters**

```json
{
    "node":"system name of the node",
    "event":"API_INTEGRATION",
    "user":{
                "user_name":"haptik username",
                "full_name":"",
                "device_platform": 5
            },
    "entities":{
                    "product_id":[
                        {
                        "detection":"message",
                        "original_text":"71",
                        "entity_value":"71"
                        }
                    ],
                    "email":[
                        {
                        "detection":"user_profile",
                        "original_text":"test@test.com",
                        "entity_value":"test@test.com"
                        }
                    ],
                    "product_name":[
                        {
                        "detection":"default",
                        "original_text":"headphones",
                        "entity_value":"headphones"
                        }
                    ]
                }
}
```
|Name|Type|Description|
|----|----|-----------|
|node|String|Unique system name of calling node|
|event|String|event type e.g. API_INTEGRATION|
|user|Dictionary|Dictionary containing user data|
|entities|Dictionary|The entities dictionary will have a key for each entity that is detected e.g. movie_name, venue, phone_number, etc. The value for each entity is a list of dictionary as shown below.|

**entity output format**

```json
[
    {
        "entity_value": "entity_value",
        "detection": "detection_method",
        "original_text": "original_text"
    }
]
```

Consider the following example for detailed explanation:  
**"I want to order from mcd"**

* entity_value: This will store the value of entity (i.e entity value) that is detected. For example, Mc’Donalds.
* detection: This will store how the entity is detected i.e. whether from message, structured value or fallback value.
* original_text: This will store the actual value that is detected. For example, mcd.

**Response Parameters**

A `200 OK` HTTP Response must be sent back to the Haptik Servers, Failing which a bot break response will be sent to the user. Webhook response must be sent in 30 seconds or less, failing which a bot break response will be sent to the user.
The following additional fields can be specified by the Webhook to control behaviour of the bot and send messages to the user.

```json
{
"response": [
            "message1",
            "message2",
            "...."
            ],
"response_message_type": 16,
"status": "True/False",
}
```

|Name|Type|Description|
|----|----|-----------|
|response|Array|List of messages to be sent to the user|
|response_message_type|Integer|Message Type of the Message. Please refer the Message Type Documentation|
|status|Boolean|If status is True, then the decorator will assign the response to success_response. If status is False, then the decorator will assign the response to failure_response.|

**Validate Webhook**

The HTTP request will contain an X-Hub-Signature header which contains the SHA1 signature of the request payload, using the secret_key entered for the node, and prefixed with sha1=. Your API can verify this signature to validate the integrity and origin of the payload.

**Sample python code for webhook**

```python

#!/usr/bin/env python
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
def \_set_headers(self, status_code, content_type):
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

if **name** == "**main**":
from sys import argv

       if len(argv) == 2:
           run(port=int(argv[1]))
       else:
           run()
```

## Code Upload
_Coming Soon_
