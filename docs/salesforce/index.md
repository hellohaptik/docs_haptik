---
title: Introduction
id: index
---

Salesforce is a prime choice for most businesses to handle their CRM, manage data and many more activities.
Customers who use Salesforce Service Cloud for providing support can leverage Haptik IVA’s integration with Salesforce products to provide a unified automated support experience in one interface.

Also, Haptik IVA users can remain on familiar interfaces. Salesforce live agents can remain on their familiar interface. No re-learning of new interfaces needed for either of them. 

### Features of Haptik and Salesforce integration

There are 3 key features of this integration - 

#### 1. Live Agent Automation

- Haptik IVA will provide the first line of support for end-users across multiple channels supported by Haptik - Web, Android, iOS, Whatsapp, Facebook etc. 
- Haptik IVA can be configured to integrate with **Salesforce Live Agent** for escalation. 
- Once configured, users chatting on any of the channels supported by Haptik IVA can have their conversations handed over to a Salesforce Live agent based on predefined actions or events during the IVA conversation.
- Once Haptik IVA transfers the conversation to Salesforce live chat dashboard, Salesforce agents can continue the conversation with the user on the same Haptik IVA interface that the user was chatting on.
- The handover is performed using **Salesforce APIs** and details gathered from the user during the chat are made visible in the **Agent service console** in a structured way so that the Agent can easily get context and pick up where the bot left off. 
- Salesforce Live Agents will be able to use their familiar agent dashboard to engage with the user.
- In case agents are busy, Haptik IVA can notify users of their queue position and the estimated wait time for the live agents to become available.
- In case all agents are offline and not available, Haptik IVA can display a standard offline message (easily configurable on Haptik platform) and complete the conversation.

Additionally, once the live agent completes the conversation, the entire chatbot+live agent chat transcript is automatically created at Salesforce's end and can be viewed in the chat transcript section

To read more about how to configure Live Agent Automation, read [**here**](https://docs.haptik.ai/salesforce/setup-laa).

#### 2. Ticketing Integration

- In addition to **Live Agent Integration**, Haptik IVAs will also be able to create **Cases** in **Salesforce Service Cloud** based on predefined actions or events in the IVA. 
- User actions like **leads**, **enquiries**, **service requests** can all be configured to create **Cases** into **Salesforce Service Cloud** account of **Customers**. 

#### 3. Customer Data Integration

- Haptik IVA can also be configured to **fetch user information** stored in **Salesforce CRM** to personalize the conversation. 
- Haptik IVA identifies users based on the **identifier shared with the IVA** at the time of initiation of the conversation. The same can be used to query **Salesforce CRM** in an attempt to fetch more information about the user. 
- **Personalization** can be as simple as addressing users by name or making the IVA flows smarter by avoiding asking details already present in Salesforce CRM.

To read more about how to configure Ticketing Integration and Customer Data Integration, read [**here**](https://docs.haptik.ai/salesforce/setup-ti).

### Pre-requisites for Haptik and Salesforce integration

- Enabling the **Haptik and Salesforce Service Cloud** is a matter of simple configuration within Haptik’s Platform. 
- You will need to have an **active Salesforce Service Cloud license** and a **Live Agent add-on license** to leverage all 3 integrations. 
- You will have to do a one time linking of the **Service Cloud account** with Haptik and all of the integrations will automatically get enabled for further use. 

