---
title: Managing Bot State
---

### What is Bot State

Bot State is nothing but data or information associated with a user or contextual data for the specific conversation that the user is having. 

The Bot Builder Platform allows you to set and access data for both of these scopes with the help of `context variables` to help you manage your bot's state.

Based on the scope of the bucket your data will be available within all nodes of the bot. The two scopes that are currently supported are:

* **User Details** for user level data.
* **Conversation Details** for conversation level data.
  
![Data Scopes](assets/bot-builder-manage-state/scope.png)


### User Details

Data stored in this context variable will be saved at a user level and will be available for all the conversations that the user has with any of the businesses for a given [partner](https://docs.haptik.ai/bot-builder/basic/bot-hierarchy#partner-business-bot).

This context variable should be used for storing permanent details about the user that are not specific to a given conversation like their email, phone number or other such details.

### Conversation Details

Data stored in this context variable will be saved at a conversation level for a given user. This means that the data will only be available till the conversation is active and is not marked as complete. Once the conversation is marked as complete, any data stored in this scope for the given user will be lost.

This data is maintained on a redis server for a maximum of 3 hours after which it is permanently lost.

This scope should be used for storing contextual information related to the current conversation that the user is having with the bot. Some examples of this are policy id or policy details that the user is exploring in the current conversation.

### Using Context Variables

The Context Variables are available as part of the `Event` payload that is passed to the integration functions. The integration function can then `SET/GET` data from these variables.

Post the execution of the integration function, the data is committed to a permanent store and the permanance is based on the scope the data belongs to.


You can read more about using context variables within integrations [here](https://docs.haptik.ai/bot-builder/integrations/integration-parameters) and read more about using it with custom tools in agent chat tool [here](https://docs.haptik.ai/agent-chat/adding-custom-tools).
