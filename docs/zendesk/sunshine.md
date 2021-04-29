--- 
title: Setup Zendesk and Sunshine Conversation
---

The following setup will help you configure Zendesk and Sunshine Conversation. Once the process is complete, your agents can start conversing with the users using the Zendesk Platform.

## Sunshine Conversation + Haptik Configuration

### Step 1: Create a New Bot on Haptik Platform

Firstly, you will have to create a new bot on the Haptik Platform. This bot will be connected to Zendesk + Sunshine Integration. 

To know more about how to create a new bot on Haptik Platform, click [**here**](https://docs.haptik.ai/bot-builder/basic/making-first-bot).

### Step 2: Log in to the Sunshine Account

Login to [**Sunshine account**](https://app.smooch.io/) and create a new app by clicking on **Create new app**.

![image](https://user-images.githubusercontent.com/75118325/116486451-48d93300-a8ab-11eb-9a16-9056e0af4ef2.png)

### Step 3: Complete the OAuth process

Haptik will provide you with an authentication link that will complete the process of connecting the Haptik Platform with Sunshine Conversation.

The authentication link will be in this format - 

`https://app.smooch.io/oauth/authorize?client_id=haptik&response_type=code&state=<state_code>`

Once you click on the authentication link and the OAuth process is completed, you will get the following screen - 

![image](https://user-images.githubusercontent.com/75118325/116486922-5ba03780-a8ac-11eb-99a2-18941a976659.png)

The authentication will provide some keys and these keys will be populated in the **Platform Deployment** section of the bots Business Manager on Haptik Platform.

![image](https://user-images.githubusercontent.com/75118325/116489178-efc0cd80-a8b1-11eb-9bbc-4d35f8582ac7.png)

### Step 4: Channel Integration on Sunshine Conversation

In this step, you can select the preferred channel you want to deplo the bot on.

Click on **Connect Channels** within your newly created app.

![image](https://user-images.githubusercontent.com/75118325/116487092-d0737180-a8ac-11eb-821d-4496fe107de7.png)

_You can add multiple channels within the Sunshine app._

Once the configuration between Sunshine Conversation and Haptik is completed, you can now proceed to configure Sunshine Conversation and Zendesk.

## Sunshine Conversation + Zendesk Configuration

> Currently, Haptik will have to complete the Sunshine Conversation and Zendesk Configuration.

Switchboard enables businesses to build a seamless integration between the chatbot solution and other Sunshine Conversations integrations, including the Zendesk Suite - enabling shared customers to take full advantage of the joint solution.

Switchboard delivers dedicated API endpoints to help your software pass, offer, and accept control of a given conversation and manage the flow of messages between a customer and various business systems.

![image](https://user-images.githubusercontent.com/75118325/116488694-a15eff00-a8b0-11eb-9f9e-abd7387027c2.png)

We need to call Switchboard APIs to complete this Configuration. There are 3 APIs to be called - 
1. Create Switchboard
2. Enable Switchboard
3. Add Haptik to Switchboard

### Connect to an agent

Whenever there needs to be a transfer from bot to a human agent, on the bot, add Bot Says containing the text `chat with an agent`. When the bot encounter this bot response, the chat will be handed over to a live agent on Zendesk.

![image](https://user-images.githubusercontent.com/75118325/116491235-0d446600-a8b7-11eb-9ddd-4bdf7ff0af08.png)


