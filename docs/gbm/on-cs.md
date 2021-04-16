---
title: Creating the IVA
---

To start building your first bot, log in to the Haptik platform using credentials that were shared with you via email. Once you've successfully logged in, navigate to the Conversation Studio Tool.

### Step 1: Create a New Bot

On Conversation Studio, create a new bot by following the process mentioned [**here**](https://docs.haptik.ai/bot-builder/basic/making-first-bot).

### Step 2: Create a Story and Sub Story

After creating a new bot, create a new Story. 
To know more about Story, click [**here**](https://docs.haptik.ai/bot-builder/basic/creating-story).

Within the story, create a new sub story. Every Sub Story handles one use-case. 
To know more about Sub Story, click [**here**](https://docs.haptik.ai/bot-builder/basic/creating-story).

### Step 3: Create Nodes

Nodes are the interlinked building blocks of a bot. Each node acts like a gatekeeper which detects user inputs, sends out appropriate responses, and directs users to the next node. 

Nodes are composed of several important sub-components, which house important pieces of information - User Says, Bot Says, Entities, and APIs.

To know more about Nodes, click [**here**](https://docs.haptik.ai/bot-builder/basic/creating-nodes).

### Step 4: Add User Says

User says are the inputs from the user that the agent needs to interpret the user’s goal. It is important to add and train the bot with a variety of different sample user says for each node, so that the bot can identify the correct intents and extract entities from the user utterance.

Whenever a user sends a message, we try to understand what the user is trying to say using various Machine Learning algorithms and find the corresponding node. One of the key modules which is used for node identification is **Intent Detection module**.

To know more about adding user says, click [**here**](https://docs.haptik.ai/bot-builder/basic/user-says-guidelines).

### Step 5: Add Bot Says
Bot Says is where a Node stores the replies that are sent in response to the user's message. 

To know more about Bot Says, click [**here**](https://docs.haptik.ai/bot-builder/basic/bot-says)

### Using Chat Elements (HSLs) for Google Business Messages

#### 1. Buttons

- Maximum of **4** buttons can be added on the IVA.
- There is a character limitation of **25 characters** (including spaces) for each button.
- The buttons only support **Text**.
- The Buttons HSL gets rendered as Quick Replies on the Google Business Message screen.

Adding button on Conversation Studio - 

![gbm2](https://user-images.githubusercontent.com/75118325/111475170-d412c500-8752-11eb-94b2-e033c1f4c1e5.png)

How button appears on Google Business Message screen - 

![buttton](https://user-images.githubusercontent.com/75118325/111476861-8dbe6580-8754-11eb-9f74-6bfdbf897451.png)

#### 2. Carousel

To add carousels please follow the process mentioned [**here**](https://docs.haptik.ai/bot-builder/basic/chat-elements#carousel).

- The image added on the carousel cannot be zoomed on the **Google Business Messages** screen.
- Carousels support buttons with link i.e. the user can be redirected to some external link.

#### 3. Image/Video

- Image HSL can be used to share images with the users.
- Video are not supported on **Google Business Message** screen, but link to the videos can be shared in text format.

#### Adding Taskbox (Menu)

- Maximum of 5 taskbox items can be added.
- These tasks are configured from the Business Communications Developer Console.
- On Google Business Messages, taskbox is known as **Conversation Starters**.

> Taskbox is configured from the **Google Business Communications Developer Console**.

To know more about Conversations Starters, click [**here**](https://developers.google.com/business-communications/business-messages/guides/configure/begin-conversation?method=console).

#### Feedback

Haptik's feedback module doesn’t work for **Google Business Messages**. Google has it's own feedback collection mechanism. To know more about Google's feedback module, click [**here**](https://developers.google.com/business-communications/business-messages/guides/build/surveys).
