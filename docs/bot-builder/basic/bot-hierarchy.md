---
title: Bot Hierarchy
---


## 1. Outside a Bot 

##### Partner -> Business -> Bot

The Haptik bot builder platform has a three-tiered organizational system to help organize bots. This three-tier hierarchy allows bot developers to easily deploy bots across multiple channels. The three tiers of this system are called **bots**, **businesses**, and **partners**:

- The smallest unit of organization is the actual **bot**. Bots are clusters of chatflows that accomplish limited goals. You can think of a bot like a single tangent of a conversation (i.e. if the conversation is about technology, a bot would be the conversational tangent about blockchain). 
- Several bots can be grouped together into one **business**. Continuing the analogy from before, a business would therefore be the *topic* of a conversation (i.e. the business called "technology" would be comprised of several bots focused on various sub-topics related to technology, such as blockchain, servers, and so forth). While most businesses are comprised of multiple bots, it is also possible for a business to consist of only a single bot. 
- The largest unit of organization is a **partner**. A partner is a unit made up of several businesses. You can think of a partner like an assistant who is able to engage in several topics of conversation, such as technology, entertainment, and sports. Partners (along with their associated businesses and bots) can be deployed across various devices (mobile, web, Facebook chat, etc). Regardless of the place of deployment, however, a partner is always comprised of the same set of businesses (and their associated bots). 

The following image might help you envision this organizational system: 

![bot_org_structure](/assets/partner_business_bot.png)

Below are two examples of Haptik's two main partners that serve two different functions:

> The first partner is the Haptik Personal Assistant app, which anyone can download onto their phones and use to engage in conversations covering several topics (a.k.a. businesses), such as Finances, Reminders, and Daily Fun. Within each business, users can discuss various subtopics, which would be the bots. For example, the Finances business in the Haptik Personal Assistant app is comprised of bots that can engage in coversations about credit cards, financial scores, etc.

> The second partner is the Haptik company website, which is there to provide the general public with information about the company. This chatbot is comprised of businesses such as About Chatbots, Haptik Products, Case Studies, etc. Within the business called Haptik Products, users can interact with bots covering solutions for advertisers, solutions for enterprises, and so forth. 

## 2. Inside a Bot 

##### Bot -> Story -> Sub-story -> Node

    A Story is like a folder on your computer. 

How you use a folder to arrange a category of files, we use a story to arrange a category of sub-stories. 

Now, in a **sub-story**, you can add multiple **nodes**. In subsequent chapters, you can further read in detail about stories and nodes.

    Each node is created to answer specific user intent(s). 

There's no one right way of deciding on the hierarchy for Story and Sub-Story. 

    Each node within a one sub-story can be connected to a node from another sub-story provided they lie 
    within the same Story.

1. Story -> Sub-story Example

       Travel -> Cabs, Trains, Flights

2. Sub-story -> Nodes Example

       Flights -> Flight Booking, Flight Cancellation, Flight Status, Flight Web Check-in

In the above case, the sub-story is a group of nodes which constitute a respective flow i.e. 1. Flight Booking, 2. Flight Cancellation etc.

Now, post the Flight Booking flow a user can trigger a Flights Web Check-in flow which makes sense as it is considered to be a part of Flight's User Journey but it would not make sense if the flows for Trains are triggered within the Flight's User Journey. Thus, one cannot connect to the nodes from two different stories.

To conclude, It is just a matter deciding on most divisible use-case for your bot's hierarchy and there are 'n' number of ways to configure a good and contextually adaptive bots.
