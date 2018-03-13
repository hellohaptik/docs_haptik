Creating a Bot
--------------

Designing chatbot interactions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The designer can model the conversation flow based on the type of interactions between the user and a chatbot.
These are segmented into structured and unstructured interactions. As the name suggests, the structured type is more
about the logical flow of information including menus, choices and forms into account.
For instance, a customer buying a product is prompted to fill an order form. Similarly, a buyer ordering item at a
restaurant chooses the item from a list. The unstructured conversation flow includes freestyle plain text. Such as
conversations with family, colleagues, friends and other acquaintances fall into this segment.

While charting the scripting course, the designer comes across conversation of the type given below:
* User wants the best hotel matching the mentioned criteria
* User wants to make a booking
* User gives out the stay dates

Grouping conversations
^^^^^^^^^^^^^^^^^^^^^^

Before designing conversation for a chatbot, identify and understand the goals of the customer.
To be more specific, understand why the client wants to build a chatbot and what does the customer want the chatbot to do.
Finding answers to this query will guide the designer to create conversations aimed at meeting end goals. For instance,
let us take the case of a customer aspiring to build a hotel bot.

We need to understand and visualize the complete flow of the chat and define the use-cases that our chatflow should cater to.
As next steps, let’s disintegrate the whole problem into smaller chunks of solutions which will be arranged logically to form a
whole flow for the chat.

Stories: Discovery, Booking

Sub-stories: Collect criteria for hotel match, Stay dates for booking

Nodes:  Input criteria, Filter hotels based on criteria, Input stay dates, Send stay dates

1. Creating a story
"""""""""""""""""""

To add a story just click 'Add a story' button and enter the name of the story in 'Enter Story Name' and click on the 'OK' button.

.. image:: add_story_button.png

.. image:: input_story_dialog.png

Post creation of a story, the story will be displayed as depicted below.

.. image:: post_story_creation.png

2. Creating a sub-story
"""""""""""""""""""""""

Firstly go inside the story inside which the sub-story has to be added.
To add a sub-story just click 'Add Sub Story' button and enter the name of the sub story in 'Sub Story Name' and click on the 'Create' button.

.. image:: add_sub_story_button.png

.. image:: input_sub_story_dialog.png

Post creation of a sub-story, the sub-story will be displayed as depicted below.

.. image:: post_sub_story_creation.png

2. Creating a node
""""""""""""""""""

Enter the name of the node in the 'Name' field. Enter the system name in the 'System Name' field.
The system name is used by the system to uniquely identify the node. The status field can be made inactive if it needs be to disabled.
The 'Start Node' checkbox can be enabled if the node if the node starts a conversation. Similarly the 'End Node' checkbox can be enabled
if the node if the node ends a conversation. Click on the 'Save' button once done.

Firstly go inside the story inside which the sub-story has to be added.
To add a sub-story just click 'Add Sub Story' button and enter the name of the sub story in 'Sub Story Name' and click on the 'Create' button.

.. image:: add_node_button.png

.. image:: input_node_dialog.png

Post creation of a node, the node will be displayed as depicted below.

.. image:: post_node_creation.png