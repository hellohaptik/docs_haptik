Bot Says
--------
Bot Says is used to indicate what the bot can say to the user. It can be a simple bot reply or an HSL component. You can also collect entities (more on that later).

Getting Started
^^^^^^^^^^^^^^^
To get started with adding some Bot Says responses, navigate to a specific node and click on either Bot Says or Entities. (See Screenshot Below)

.. image:: bot_says_adding-bot-says.png

Once you arrive on the Bot Says page you see the following interface. This interface might slightly differ based on the state of the node and responses added to it. (More on the different scenarios below)

.. image:: bot_says_bot-says-screen.png

Key Terms
^^^^^^^^^
The bot supports the following types of responses.

* **Entity**: Entities represent a class of object or a data type that is relevant to a user's purpose. By recognizing the entities that are mentioned in the user's input, one can choose the specific actions to take to fulfill an intent. Basically some specific data which needs to be detected from a user's input (**Explained in detail below**)

  .. image:: bot_says_entity.png

* **Bot Says**: The initial bot reply. It's the first message that the bot sends out when the node is activated. Note that this is not active when there is only one entity present. For multiple entities, consider it to be the opening message

  .. image:: bot_says_bot-says-card.png
  .. image:: bot_says_bot-says-card-expanded.png

* **Final Bot Reply**: Once all the entities/data has been collected, the bot finally replies with the final bot reply. Think of it as the closing message for the node.

  .. image:: bot_says_final-reply.png

* **Delay (Message)**: If the user is inactive for a specific set time, then the the bot replies with the Delay message. The delay can be set using the slider, **it can be set between 20 seconds and 20 minutes.**

  .. image:: bot_says_delay.png

Each of the above responses are composed of **variants**, **messages**, and **quick replies**

* **Variants**: A bot response can consist of multiple variants. Each variant is an independent message. All variants should imply the same meaning. The bot rotates through them randomly with different users. This way, the bot avoids being repetitive even when asked the same question.

  .. image:: bot_says_variants.png

* **Message (Bubble)**: A Variant can consist of multiple message bubbles. This is where all the messages go. Each message is a separate *text* from the bot. Instead of putting a long message into just one message bubble. It is good practice to split it into multiple bubbles to make it feel more like a natural conversation.

  .. image:: bot_says_message-bubble.png

  **Each of theses message bubbles can contain either text or HSL.**
  There's an indicator at the corner of each bubble to indicate if the HSL (if entered) is valid or not.

  * **Green** - Valid
  * **Red** - Invalid
  * **Yellow** - Deprecated

  In addition the message can also contain certain *variables* or dynamic values. Click on the protip for an always up to date list.

  .. image:: bot_says_protip.png


* **Quick Reply**: Once the bot responds with a particular message, there are often cases when you want to suggest certain *quick replies* by the user.

  For example for a yes or no question, you can just add Yes and No as quick replies, so when the bot asks the relevant question to the user, the user is automatically
  shown yes and no quick buttons to select and reply

  .. image:: bot_says_quick-reply.png

* **Mandatory Words**: These words function as tags. These specific responses will only match if the tags match exactly. Use these tags if

  - You have multiple nodes that are similar to each other.
  - You want to trigger a node only if a specific keyword exists

  .. image:: bot_says_mandatory_open.png
  .. image:: bot_says_mandatory.png


Scenarios
^^^^^^^^^
The flow goes from top to bottom in terms of evaluation. **The order of the entities matters** First the initial bot reply, then the entities, and then finally the final bot reply. The delay message is sent only after a certain level of inactivity. The initial/final bot replies might be not needed in some scenarios.

* **No Entities** - If it's a simple node that doesn't need to collect entities or data, a simple bot says is all that's needed. You won't be able to add a final bot reply as that would be redundant as there are no middle steps.

|

* **Only 1 Entity** - If there's only one entity, then there is no initial bot reply as that entite's responses serve as the initial bot reply.

|

* **Multiple Entities** - If there are multiple entities, then all the responses are required. (Intial Bot Says, Entity Responses as well as the final bot reply).

  **Here the order of the entities matter. To change the order simply click and drag the reorder handle.**

  .. image:: bot_says_drag.png

**Once done editing, make sure to hit the save button as the changes are not saved automatically !**
