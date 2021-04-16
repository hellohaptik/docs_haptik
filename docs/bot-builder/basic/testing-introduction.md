---
title: Introduction
---

Testing is a method to check whether the actual product matches the expected requirement. Testing also ensures if the product is error free. It is the most important step in the process of development as testing helps to identify errors or defects early in the development lifecycle.

In IVA lingo, testing helps businesses ensure the flows are fully functional and ensures if the user's queries are being resolved buy the bot.

At Haptik, testing is done in **three** different phases - 
* Training data testing
* Functional testing
* Regression testing

<hr>

## Training data testing

In this phase, you can use the following approaches to test the training data -

Before you start testing different components of the bot, let's look at the essentials of testing. We start by preparing a test set for testing.

**Prepare a Test Set**

Create a comprehensive test set of sentences which you expect your users to say, containing sentences of following types:
* the sentence should be handled by the bot
* the sentence is `out of scope sentence` for the bot

*Don’t add these sentences to any of the user says*

This is in principle with doing Test-driven development (TDD), which is a development technique where you must first write a test that fails before doing any new development.

**Execute the Test Set**

It's important to remember that the quality of your bot will only be **as good** as your Test Set. Following notes will ensure the quality of your test
cases and hence the quality of your bot.

* Let’s say you’ve added following sentences in your User Says:
    * What is SIP
    * Tell me about SIP
    * How can I know about SIP
    
    Then please note that because SIP is occurring in all sentences, then there’s a possibility that model will end up firing this node even if user enters:
    * SIP
    * SIP + gibberish Eg. SIP bjhfv vbf
    
    Therefore, you should make sure **your bot is learning the right things by testing it on phrases / words occuring repeatedly in your user says**
     
Example: If sentence is "Benefits of SIP", then test your bot on:
* Benefits of bvdfbv fjdb (Phrase + Gibberish/noise)
* cricket benefits (Gibberish/noise + Phrase)
* benefits (Phrase)
 
### **How to examine the Test Set? **

#### 1. Using Test and Debug

Test your bot as you build it to ensure your end users won't experience any annoying bot breakages! You can test your bot in the following ways ways:

The easiest way to test your bot is to test it directly in the Conversation Studio tool. You can do this by clicking on the "**Test Bot**" button at the bottom of the left-side menu where you add sub-stories and nodes.

![image](https://user-images.githubusercontent.com/75118325/115042118-ce92d100-9ef0-11eb-97f8-8de2c009de6a.png)

Another way to test your bot is within the Conversation Studio tool, select the **Share** button, you will get a pop-up with the **Demo Link** to test the bot.

![image](https://user-images.githubusercontent.com/75118325/115046496-26333b80-9ef5-11eb-9c47-15183533cadc.png)

The third way to test your bot is to deploy and connect the bot to any of the Client SDKs - iOS, Android, Web, Facebook.

> You can execute the Test Set on the Test Bot.

##### Debug the bot

On the Conversation Studio tool, you will see a **Log** icon near the messages you sent to the bot. The bot processes the particular message. Clicking on this icon will provide you details on how the bot is behaving, what nodes were detected, what entities were collected and their value etc.

This information is useful to understand why a bot is behaving in a certain way and how to fix the bot to get the desired results. You can read more about it [**here**](https://docs.haptik.ai/bot-builder/advanced/debugging-guidelines).

> Training data is tested during the development phase of the lifecycle. This ensures whether the bot is able to understand user's query and if the bot is taking the user through the right conversation flow.

#### 2. ORACLE Feedback Module

ORACLE feedback module aids is providing quality training data to the bot. The User Says section for every Start node is crucial for the bot to understand user's query. ORACLE feedback module runs through all the User Says and provides feedback to the bot builder to improve the quality of provided training data.

To know more about ORACLE feedback modle, click [**here**](https://docs.haptik.ai/bot-builder/basic/oracle-feedback).

<hr>

## Functional testing

All the conversational flows should go through testing phase to ensure their proper functioning. If the APIs start to fail on production, the bot gives bot break responses. 

We have prepared a quick guide containing all the checkpoints that needs to be assessed before taking the bot to production. To read the guide, click [**here**](https://docs.haptik.ai/bot-builder/basic/qa-best-practices).

<hr>

## Regression testing

Haptik's Bot QA Tool makes regression testing of a bot scaleable and thus saves time. The tool runs through the entire journey of the bot. 

To read more about using the Bot QA tool, read [**here**](https://docs.haptik.ai/bot-builder/basic/bot-qa-tool).
