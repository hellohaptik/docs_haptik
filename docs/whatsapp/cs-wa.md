---
title: Using Conversation Studio
---

In this section we will see how to begin the designing of a WhatsApp bot, how to build the bot on the Conversation Studio tool of Haptik Platform and how to deploy the bot so users can start sending messages to your business.

## Design the bot

Well, when it comes to creating a WhatsApp IVA, the first and foremost consideration is design. There are a lot of UX considerations to keep in mind while designing an automated experience for WhatsApp.

Some tips to start with -

- WhatsApp is a user-focused platform, users have the power to block or report a business number.

- Start small: Start with the burning customer issues which can be resolved in a transactional manner with a quick resolution on WhatsApp. These use cases will help maintain a high-quality rating from the users.

- Design a conversational experience for the user. It’s WhatsApp, after all.

- Enrich the customer experience by using media messages (photos, videos, etc.) to drive higher engagement

- Ensure valid human escalation paths - Businesses without a valid human escalation path may become red in terms of quality rating and will see the phone number Status is Flagged. Valid escalation paths include human agent handoff in a thread, phone number, email, web support form or prompting the user for an in-store visit.

> **To start the Conversation Design process for WhatsApp bot, please read** [**here**](https://docs.haptik.ai/bot-builder/basic/navigation-on-whatsapp).

## Build the bot on Haptik Platform

### Step 1: Create a New Bot

We will start by creating a new bot on the platform. 

1. Go to [**Conversation Studio**](https://staging.hellohaptik.com/mogambo/#/bots)
2. Click on **New Bot**
3. Provide a **name**, select the **partner** from dropdown and provide some additional details (these are optional)
4. Click on **Create Bot**

![image](https://user-images.githubusercontent.com/75118325/114122315-a5c97500-990d-11eb-999f-425e88d6add9.png)

### Step 2: Create a Story and Sub Story

After creating a new bot, create a new Story within the bot. 
To know more about Story, click [**here**](https://docs.haptik.ai/bot-builder/basic/creating-story).

Within the story, create a new sub story. Every Sub Story handles one use-case. 
To know more about Sub Story, click [**here**](https://docs.haptik.ai/bot-builder/basic/creating-story).

### Step 3: Create Nodes

Nodes are the interlinked building blocks of a bot. Each node acts like a gatekeeper which **detects user inputs**, sends out appropriate **responses**, and **directs users** to the next node. 

Nodes are composed of several important sub-components, which house important pieces of information - User Says, Bot Says, Entities, and APIs.

To know more about Nodes, click [**here**](https://docs.haptik.ai/bot-builder/basic/creating-nodes).

### Step 4: Add User Says

User says are the inputs from the user that the agent needs to interpret the user’s goal. It is important to add and train the bot with a variety of different sample user says for each node, so that the bot can identify the correct intents and extract entities from the user utterance.

Whenever a user sends a message, we try to understand what the user is trying to say using various Machine Learning algorithms and find the corresponding node. One of the key modules which is used for node identification is **Intent Detection module**.

To know more about adding user says, click [**here**](https://docs.haptik.ai/bot-builder/basic/user-says-guidelines).

### Step 5: Add Bot Says
Bot Says is where a Node stores the replies that are sent in response to the user's message. 

To know more about Bot Says, click [**here**](https://docs.haptik.ai/bot-builder/basic/bot-says)

#### Using Chat Elements (HSLs) for WhatsApp

Because of the platform limitations, many HSL elements from the bot builder tool will not work on WhatsApp.

Here's the list of HSLs that are currently supported:
- Raw Text/JSON
- Image HSL

### Step 6: Add Entities

An entity represents values which is collected from the user in a conversation. Depending on the context of the conversation, the required response can either be a single value or group of specific values.

> On WhatsApp bot, majority flows are menu driven.
>
> For example:
> 
> ![image](https://user-images.githubusercontent.com/75118325/114123566-3012d880-9910-11eb-87cc-963f41cc5f0f.png)
> 
> Therfore, on WhatsApp we make use of _Words & Phrases_ entity. _Words & Phrases_ is a dictionary entity, which is configured as follows -
> 
> ![image](https://user-images.githubusercontent.com/75118325/114123921-eecef880-9910-11eb-8434-758033b8db25.png)
> 
> As we want the user to select an option from the menu, we have created a dictionary entity, where the Words column represent the actual word which will get detected and in the Variants column we can add the different variations which users can type. If the user types **1**, the bot capture the value as word, **work**, in this case.

`
You can fetch user's **name** and **phone number** from WhatsApp.
There are system entity that can fetch these values from the user's profile.
Use **_completion_phone_number_** to fetch user's phone number and **_username_** to fetch the user's profile name.`

Add the entities on first node of the bot and mark them as non-mandatory. Read [**here**](https://docs.haptik.ai/bot-builder/basic/entities) to know more about entities.

### Step 7: Create Connections

Connections represent the path a conversation takes from node to node. Depending on the response a user inputs to the bot, they traverse down a different connection to the appropriate next node. Bot builders must modify every connection they create to indicate which user inputs correspond to which nodes.

> On WhatsApp we majorly use **2** types of connections -
> 
> 1. **Connection using entity**
> 
> We will use the entity detected from Step 6, to create further connections. To know more about using entity values on connection, click [**here**](https://docs.haptik.ai/bot-builder/basic/connections#static-node-to-static-node-connection-transition).
> 
> 2. **Self Connecting Nodes**
> 
> When the bot breaks or if you are sending notifications to the user and want the user to start the conversation by clicking on the buttons present in the HSM, we make use of Self Connecting nodes.
> 
> ![image](https://user-images.githubusercontent.com/75118325/114124738-b6301e80-9912-11eb-8b4f-76cd0f27df82.png)
>
> When the suer taps on the HSM button, they will always be directed to the start of the flow. 
> 
> Self connecting nodes also are helpful to restart the flow in case the bot breaks. 
> You can ask the use to start the flow by typing **Main Menu** and it will again restart the flow from the start node.
> 
> **How to create a self connecting node?**
> 
> Create a _Words & Phrases_ entity and add dictionary as shown below - 
> 
> ![image](https://user-images.githubusercontent.com/75118325/114125969-2344b380-9915-11eb-903e-9dd87883b0c7.png)
> 
> On the start node, go to the Connections tab and create a self connection as shown below - 
> 
> ![image](https://user-images.githubusercontent.com/75118325/114126605-62bfcf80-9916-11eb-92d2-e07a512304ed.png)
> 
> Click on the new arrow, and create the connection on the basis of Entity.

**Feedback** module does not work on WhatsApp bot due to UI limitation.

Follow our [**Quality Assessment**](https://docs.haptik.ai/bot-builder/basic/testing-bot) section to test the bot.

Once the bot is tested, we will deploy the bot on WhatsApp using **Platform Deployment** under **Business Manager** of **Conversation Studio**.
