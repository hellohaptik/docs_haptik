---
title: Using Conversation Studio
---

To start building your first bot, log in to the Haptik platform using credentials that were shared with you via email. Once you've successfully logged in, navigate to the Conversation Studio Tool.

### Create a New Bot

On Conversation Studio, create a new bot by following the process mentioned [**here**](https://docs.haptik.ai/bot-builder/basic/making-first-bot).

### Create a Story and Sub Story

After creating a new bot, create a new Story. 
To know more about Story, click [**here**](https://docs.haptik.ai/bot-builder/basic/creating-story).

Within the story, create a new sub story. Every Sub Story handles one use-case. 
To know more about Sub Story, click [**here**](https://docs.haptik.ai/bot-builder/basic/creating-story).

### Create Nodes

Nodes are the interlinked building blocks of a bot. Each node acts like a gatekeeper who detects user inputs, sends out appropriate responses, and directs users to the next node. They are the points where conversation converges or diverges basis the information users input to the bot. Nodes are composed of several important sub-components, which house important pieces of information. Read on in this section to learn more about the significance of the components User Says, Bot Says, and Entities, and APIs. 
To know more about nodes, click [**here**](https://docs.haptik.ai/bot-builder/basic/creating-nodes).

### Add User Says

User says are the inputs from the user that the assistant needs to interpret the user’s goal. it is important to add and train the bot with a variety of different sample user says for each node, so that the bot can identify the correct intents and extract entities from the user utterance.
Whenever a user sends a message, we try to understand what the User is trying to say using various Machine Learning algorithms and find the corresponding node. One of the key modules which is used for node identification is intent detection module, which is a suit of many Machine Learning algorithms that help in finding the right node.
To know more about adding user says, click [**here**](https://docs.haptik.ai/bot-builder/basic/user-says-guidelines)

### Add Bot Says
Bot Says is where a Node stores the replies that are sent in response to the user's message. To know more about Bot Says, click [**here**](https://docs.haptik.ai/bot-builder/basic/bot-says)

#### Using Chat Elements (HSLs) for Google Business Messages

##### 1. Buttons

- Maximum of **4** buttons can be added on the IVA.
- There is a character limitation of **25 characters** for each button.
- The buttons only support **Text**.
- The Text + Buttons HSL gets rendered as Quick Replies on the Google Business Message screen.

Adding button on Conversation Studio - 

![buttonhsl_gbm](/assets/gbm2.png)

How button appears on Google Business Message screen - 

![buttonqr_gbm](/assets/gbm3.png)

##### 2. Carousel

To make use of carousels, please follow the process mentioned [**here**](https://docs.haptik.ai/bot-builder/basic/chat-elements#carousel).

- The image added on the carousel cannot be zoomed on the GBM screen.
- Carousels support buttons with link i.e. the user can be redirected to some external link.

##### 3. Image/Video

- Image HSL can be used to share images with the users.
- Video are not support on Google Business Message screen, but link to the videos can be shared in text format.

#### Adding Taskbox

- Maximum of 5 taskbox items can be added.
- These task are configured from the Business Communications Developer Console.
- On Google Business Manager taskbox is known as Conversation Starters.
To know more about Conversations Starters, click [**here**](https://developers.google.com/business-communications/business-messages/guides/configure/begin-conversation?method=console) 

#### Feedback

Haptik's feedback module doesn’t work for GBM. Google has it's own feedback collecting mechanism. To know more about Google's feedback module, click [**here**](https://developers.google.com/business-communications/business-messages/guides/build/surveys).
