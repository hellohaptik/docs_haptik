---
title: Integrating with External Bot
---

## Why?
There might be times when there is an existing bot with a flow already built on another platform or through custom code. It is possible to connect this external bot flow to the haptik tools through the bot builder tool.


## Steps to integrate
### Use a single node bot
> Note: This method is not recommended as it can make the bot responses slow.

#### Create a bot on bot builder
The first step is to create a new bot on the bot builder tool. This bot will act as a gateway between haptik platform and the external bot.

#### Create a node to transfer data
The second step is to create a node in the bot. The job of this node is to take any user input that comes in and pass it along to the external bot. The node is also responsible to accept the input that comes in from the external bot and send it back to the user.

![Create Node](assets/integrating_external_bot_node.gif)

##### Accepting all inputs
We get the node to capture all the input messages by using a catchall entity. You can do this by adding an entity called "feedback_regex". This entity uses regex to capture the complete user message in the entity called "feedback_regex". 

You can add entity by going to `bot_says` section of the node. In the `bot says` section click on the `+ Add an Entity` and then search for `feedback_regex`. Finally click on `Add to Bot Says` to add it to the node.

![Add Entity](assets/integrating_external_bot_regex.gif)

##### Communicating with the external bot
Once the user message is captured it can be sent to the external bot using the `integrations` section of the node. The first step is to set the base url of the external bot in the bot settings section. If the external bot has different test and production endpoints you can set them accordingly. Or you can set it to be the same URL in both the cases.

![Base Url Setup](assets/integrating_external_bot_base_url.gif)

Once that is done, we can add the specific path where we need to send the message to. It should be noted that the endpoint will recieve the message in a parameter called `feedback_regex` because that is what the entity is called. The external bot can then use this message and return a bot response in a `HSL` format. This `HSL` will then be sent back to the user who sent the message.

![Integrations](assets/integrating_external_bot_integration.gif)


##### Completing the setup
Finally, we want the above steps to be repeated for all user messages. To do this we make the node self connecting. This means that all incoming messages and responses will loop through this node which is what we want.

![Self Connecting Node](assets/integrating_external_bot_self_connection.gif)