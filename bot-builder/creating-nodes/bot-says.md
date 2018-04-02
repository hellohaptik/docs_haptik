#### Bot Says

Once you've completed the User Says component of a node, you'll need to define the node's **Bot Says** component. Bot Says is where nodes store the replies that are deployed in response to what the user has input, as detected by User Says. Bot Says also houses **variants**, **entities**, and **APIs**.

To get started with adding some Bot Says responses, navigate navigate to a specific node and click on either Bot Says or Entities. (See Screenshot Below)

[insert image from https://haptik-docs.readthedocs.io/en/latest/bot-builder/nodes.html]

Once you arrive at the Bot Says page, you'll see the following interface. This interface might differ slightly depending on the state of the node and the responses added to it. 

[insert image from http://haptik-docs.readthedocs.io/en/latest/bot-builder/nodes.html]

Bot Says supports the following types of responses: 

- **Entities**: If you want to gather any sort of user input that isn't confined to a very limited set of possible responses, you'll need to create an entity. An entity represents the set of values from which a user’s response must come in order for that user to progress onwards in a conversation. Depending on the context of the conversation, the required response can either be a single value or limited group of specific values from the entity, or any value from within the entity. Entities are always added in connection with the bot’s query the required response is associated with, so that they may detect whether the required response was given. Entities look like:

  [insert image from http://haptik-docs.readthedocs.io/en/latest/bot-builder/nodes.html]

  - **To add an entity to a node**: 

    - Select the node on which the entity is to be added and click on Entities.

    - Click on Add Entities. 

    - Bot builders can search by the name of the entity they want to add, or by the particular word that needs to be detected. If they choose the latter method of search, all existing entities that are capable of detecting that word/variant will appear as the search result.

    - Click on one of the existing entities to add it to your node.

      [insert image from http://haptik-docs.readthedocs.io/en/latest/bot-builder/nodes.html]

    - If you'd like to learn how to create a new entity from scratch, click HERE. 



- **Initial Bot Says**: The first message the bot sends out when the node is activated. The Initial Bot Says is located at: 

  [insert image from http://haptik-docs.readthedocs.io/en/latest/bot-builder/nodes.html]

- **Final Bot Reply**: Once all the entities/data has been collected, the bot finally replies with the final bot reply. Think of it as the closing message for the node. The Final Bot Reply looks like: 

  [insert image from http://haptik-docs.readthedocs.io/en/latest/bot-builder/nodes.html]





Depending on the complexity of the Bot Says component of the node, which of the preceding components a bot builder will have to add varies. 

> *If there are no entities in the Bot Says*, this will be where a bot builder will input the replies that will come from the bot. 
>
> *If there is only one entity in Bot Says*, there is no Initial Bot Says, as the entity response will serve as the bot reply. 
>
> *If there are multiple entities in Bot Says*, there will be an Initial Bot Says, as well as entity responses between each entity that prompt users to input the answers required to move ahead.

As you're filling in the content in the above categories of bot responses, you'll also need to input Bot Says **variants**. 

- A bot response can consist of multiple **variants**. Each variant is an independent message. All variants should imply the same meaning. The bot rotates through them randomly with different users. This way, the bot avoids being repetitive even when asked the same question.

  [insert image from http://haptik-docs.readthedocs.io/en/latest/bot-builder/nodes.html]

- A variant can consist of multiple message bubbles. This is where all the messages go. Each message is a separate *text* from the bot. Instead of putting a long message into just one message bubble. It is good practice to split it into multiple bubbles to make it feel more like a natural conversation.

  [insert image from http://haptik-docs.readthedocs.io/en/latest/bot-builder/nodes.html]

  **Each of theses message bubbles can contain either text or HSL.**There’s an indicator at the corner of each bubble to indicate if the HSL (if entered) is valid or not.

  - **Green** - Valid
  - **Red** - Invalid
  - **Yellow** - Deprecated

  In addition the message can also contain certain *variables* or dynamic values. Click on the protip for an always up to date list.

  [insert image from http://haptik-docs.readthedocs.io/en/latest/bot-builder/nodes.html]