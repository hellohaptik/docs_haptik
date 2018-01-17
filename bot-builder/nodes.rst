Nodes
-----

What is a Node?


User Says
^^^^^^^^^


Bot Says
^^^^^^^^


Entities
^^^^^^^^


Integrating Custom Code
^^^^^^^^^^^^^^^^^^^^^^^
Once a particular node has been detected and the mandatory entities have been collected, these entities can be given to custom code to execute your own business logic. There are 3 different ways to execute this business logic.

1. API Functions
""""""""""""""""

*This is internal to Haptik Developers*
 
2. Webhooks
"""""""""""

A node can be configured to call a webhook once the required entities have been collected.

To deploy a live webhook that can receive webhook events, your code must be hosted on a public HTTP server that has the following:
- A Valid SSL Certificate 
- An open port that accepts ``GET`` and ``POST`` requests

Select the API Functions section
Select the type as WebHook
Add the endpoint of the webhook

Specify the security challenge that will be verified

TODO: Insert Images for the above
TODO: Think through security

**Request Parameters**

.. code:: json

   {
   	 "node": "system name of the node",
   	 "event": "API_INTEGRATION",
   	 "user":{
   	 	"user_name": "",
   	 	"full_name": "",
   	 	"device_platform": "",
   	 },
     "entities":[
	     {
	     	"detection": "",
	     	"original_text": "",
	     	"entity_value": ""
	     },
	     ....
      ]
   }


.. list-table::
   :widths: 15 10 30
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - node
     - String
     - Unique system name of the calling node
   * - entities
     - Array
     - Entities containting ..



**Response Parameters**

A ``200 OK`` HTTP Response must be sent back to the Haptik Servers, Failing which a bot break response will be sent to the user. Webhook response must be sent in 30 seconds or less, failing which a bot break response will be sent to the user.
The following additional fields can be specified by the Webhook to control behaviour of the bot and send messages to the user. 



.. code:: json

   {
   	 "response": [
	   	 "message1",
	   	 "message2",
	   	 ....
	   	 ],
	 "response_message_type": 16,
   	 "status": True/False,
   }	


.. list-table::
   :widths: 15 10 30
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - response
     - Array
     - List of messages to be sent to the user
   * - response_message_type
     - Integer
     - Message Type of the Message. Please refer the Message Type Documentation
   * - status
     - Boolean
     - If status is True, then the decorator will assign the response to success_response. If status is False, then the decorator will assign the response to failure_response.


3. Code Upload
""""""""""""""

*Coming Soon*
