---
title: Introduction
---

Testing is a method to check whether the actual product matches the expected requirement. Testing also ensures if the product is error free. It is the most important step in the process of development as testing helps to identify errors or defects early in the development lifecycle.


In IVA lingo, testing helps businesses ensure the flows are fully functional and ensures if the user's queries are being resolved buy the bot.

At Haptik, testing is done in **three** different phases - 
* Test the training data 
* Test the API and content of bot
* Run through Bot QA tool

<hr>

## Testing training data

Training data is tested during the development phase of the lifecycle. This ensures whether the bot is able to understant user's query and if the bot is taking the user through the right conversation flow.

### Using Test and Debug

On Conversation Studio, there is a **Test Bot** present which helps to test the bot and debug it simultaneously as you build it.

To know more about how to use the test bot, read [**here**](https://docs.haptik.ai/bot-builder/advanced/debugging-guidelines).

### ORACLE Feedback Module

ORACLE feedback module aids is providing quality training data to the bot. The User Says section for every Start node is crucial for the bot to understand user's query. ORACLE feedback module runs through all the User Says and provides the feedback to how the bot builder can improve the provided training data.

To know more about ORACLE feedback modle, click [**here**](https://docs.haptik.ai/bot-builder/basic/oracle-feedback).

<hr>

## Testing APIs and bot content

All the integrated APIs should go through testing phase to ensure their proper fucntioning. If the APIs start to fail on production, the bot gives bot break responses. 

We have prepared a quick guide containing all the content that needs to the assessed before taking the bot to production. To read the guide, click [**here**](https://docs.haptik.ai/bot-builder/basic/qa-best-practices).

<hr>

## Run the Bot QA Tool

Haptik's Bot QA Tool makes regression testing of a bot scaleable and thus saves time. It mainly depends on the nodes traversal and not copy of messages. 

To read more about using the Bot QA tool, read [**here**](https://docs.haptik.ai/bot-builder/basic/bot-qa-tool).
