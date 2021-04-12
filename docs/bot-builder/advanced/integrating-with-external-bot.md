---
title: Integrating with External Bot
---

## Why?
There might be times when there is an existing bot with a flow already built on another platform or through custom code. It is possible to connect this external bot flow to the Haptik tools through the Conversation Studio tool.

## Steps to integrate

### 1. Create a bot on Conversation Studio
The first step is to create a new bot on the Conversation Studio tool. This bot will act as a gateway between Haptik Platform and the external bot.

### 2. Create a node to transfer data
The second step is to create a node in the bot. The job of this node is to take any user input that comes in and pass it along to the external bot. The node is also responsible to accept the input that comes in from the external bot and send it back to the user.

![addnode](https://user-images.githubusercontent.com/75118325/114334211-b8d78180-9b67-11eb-966f-cb61cf5f1244.gif)

### 3. Accepting all inputs
We get the node to capture all the input messages by using a catchall entity. You can do this by adding an entity called "feedback_regex". This entity uses regex to capture the complete user message in the entity called "feedback_regex". 

You can add entity by going to `bot_says` section of the node. In the `bot says` section click on the `+ Add an Entity` and then search for `feedback_regex`. Finally click on `Add to Bot Says` to add it to the node.

![add feedback](https://user-images.githubusercontent.com/75118325/114334420-27b4da80-9b68-11eb-9ad6-232f1d1d0dc8.gif)

### 4. Communicating with the external bot
Once the user message is captured it can be sent to the external bot using the `integrations` section of the node. The first step is to set the base url of the external bot in the bot settings section. If the external bot has different test and production endpoints you can set them accordingly. Or you can set it to be the same URL in both the cases.

![image](https://user-images.githubusercontent.com/75118325/114334677-b45f9880-9b68-11eb-8a4e-647fc6efee57.png)

Once that is done, we can add the specific path where we need to send the message to. It should be noted that the endpoint will recieve the message in a parameter called `feedback_regex` because that is what the entity is called. The external bot can then use this message and return a bot response in a `HSL` format. This `HSL` will then be sent back to the user who sent the message.

![image](https://user-images.githubusercontent.com/75118325/114334937-3fd92980-9b69-11eb-9ad1-b02be32f0922.png)

> To read more about how the data is sent to the endpoint, click [**here**](https://docs.haptik.ai/bot-builder/integrations/integration-parameters#request-parameters).

### 5. Completing the setup
Finally, we want the above steps to be repeated for all user messages. To do this we make the node self connecting. This means that all incoming messages and responses will loop through this node which is what we want.

![self connect](https://user-images.githubusercontent.com/75118325/114334770-ecff7200-9b68-11eb-80b0-0fddbf4cca94.gif)

