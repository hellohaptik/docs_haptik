Nodes
-----

What is a Node?


User Says
^^^^^^^^^

@TODO: What is an intent in the context of a node

As the name suggests, it is used to detect phrases that the user might say.
To reach the user says interface for a particular node, click on the User Says option on the right hand side or alternatively right click on a node and tap on User Says.

.. image:: user_says_nodes.png

.. image:: user_says_interface.png

The User Says interface allows you to

* Add/Modify/Disable different **user says** options,
* Add/Remove Tags,
* Enable/Disable synonyms

.. image:: user_says_legend.png

**The relevant sections below detail these features and how to use them .**


1. Adding User Says Responses
""""""""""""""""""""""""""""""
To add a user says just start typing into the input box situated at the top to add a User Response (see screenshot below)
Just hit enter, and it will add it to the list. To save your changes and exit back to the graph click on the Save and Exit button on the top right corner to exit.

.. image:: user_says_adding_user_response.png

2. Modifying/Deleting User Says Responses
"""""""""""""""""""""""""""""""""""""""""
To modify an existing user response, simply click on the user response you'd like to edit and go ahead and make any changes you'd like to make. To disable a user response, simply click on the cross on the right side of the user response. This will dim the response along with strikethrough. Make sure you hit save to actually save your changes to the Back End.

.. image:: user_says_modifying_user_response.png
.. image:: user_says_deleting_user_response.png

3. The context menu
"""""""""""""""""""""""""""""""""""""""""
The context menu allows you to add/delete synonyms and tags. To open the menu, select a word from an existing user response. The moment you select it, a popup with the relevant options shows up.

.. image:: user_says_context_menu.png

4. Adding/Deleting Tags
"""""""""""""""""""""""
**What are tags ?**

Every sentence needs to have some unique keywords from within the phrase. These are used by our engine to identify the right context in which the message is to be presented. Gogo, the bot gives priority to these words
**Tags are highlighted with a yellow color.**

**To add a tag**

* Select an untagged word(s)
* The context menu opens
* Select the *add tag* option
* Hit Save to save your changes

.. image:: user_says_add_tags.png

**To remove a tag**

* Select a tagged word(s)
* The context menu opens
* Select the *remove tag* option
* Hit Save to save your changes

.. image:: user_says_remove_tags.png

4. Adding/Deleting Synonyms
"""""""""""""""""""""""""""
**What are synonyms ?**

Sometimes you might want to capture different user responses with essentially the same meaning. For example, the statements *I want to read a book* and *I want to read a textbook* are essentially the same since book and textbook are synonyms. You can select certain words and enable synonyms for that word. All the words in that synonym cluster are then enabled for the user.

Words with their synonyms enabled have a **blue** underline under them. Words that can potentially have synonyms but are not enabled are underlined **black**.

**To add a synonym**

* Select a word(s) with a black underline
* The context menu opens
* Select on *Search synonyms*

  .. image:: user_says_context_search.png

* The synonyms overlay opens

  .. image:: user_says_search_synonyms.png

* Select the meaning that best fits the context
* Synonyms are now enabled for the word
* You can edit the synonyms list at this point, not that you would be editing the global synonym dictionary. These synonyms would be added for **all** other bots that are using the same word. Please edit this list with extreme caution.

  .. image:: user_says_edit_synonyms.png

* Close the overlay & hit Save & Exit to save your changes

**To remove a synonym**

* Select a word(s) with a blue underline
* The context menu opens
* Click on *View Synonyms*

  .. image:: user_says_context_view.png

* Deselect the enabled checkbox in the left pane to disable the synonym

  .. image:: user_says_disable_synonym.png

* Hit Save to save your changes

**NOTE: When you enable/disable synonyms for a particular word in a user response, they're applied across all user responses in that section. You'll notice that when you enable synonyms for call for example, all occurences of the word call get underlined blue. (This does not apply for tags)**


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
