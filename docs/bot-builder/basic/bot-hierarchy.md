---
title: Bot Hierarchy
---

## 1. Outside a Bot 

#### Partner -> Business -> Bot

The Haptik Conversation Studio platform has a three-tiered organizational system to help organize bots. This three-tier hierarchy allows bot developers to easily deploy bots across multiple channels. The three tiers of this system are called **Bots**, **Businesses**, and **Partners**.

- Smallest unit is **bot**. Bots are clusters of chatflows that accomplish limited goals.

- Second unit is **business** which takes care of all configurations of the bot ranging from color, chat icon, language, channel, etc.

- Largest unit is **partner**. Usually, its your organisation's name or project's name.

## 2. Inside a Bot 

Once you have successfully created a bot, you would be able to see the skeleton structure of the bot, as described below -

![bot_skeleton](/assets/BH1.png)

As you can see, there are three major sections -

1. Stories

2. FAQ Nodes

3. Small Talk

### Stories

This section is the place where we design user journeys and flows with interconnected Nodes. It follows the below hierarchy.

#### Bot -> Story -> Sub-story -> Node

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

To conclude, it's just a matter of deciding on most divisible use-case for your bot's hierarchy and there are 'n' number of ways to configure a good and contextually adaptive bots.

> All Nodes in **Stories** section are called **Graph Nodes**.

### FAQ Nodes

FAQ or General Nodes are ideal for use cases like FAQs to answer general queries that a bot is usually asked in the category of the bot. Ex: ‘What are the return policies’ or ‘Tell me more about the company’ which help in giving static replies on the bot.

Because General (FAQ) Nodes are very simple in terms of features (no entities/api calls etc.) and the ability to maintain the context of the bot, they are ideal for quick Question/Answer type contents i.e. FAQs.

You can read more about it [here](https://docs.haptik.ai/bot-builder/basic/general-nodes).

### Small Talk

It is the chit-chat module present on the Haptik Platform. It has been developed by Haptik after careful curation of 99 intents, from Haptik’s deep experience in conversational design and observed trends from over 3 billion interactions. The 99 intents are partly customizable, such that every IVA can choose to send its own custom reply to the User Utterance.

You can read more about it [here](https://docs.haptik.ai/bot-builder/basic/smalltalk).

Now that we know all components of the bot to get started, let us start our [**bot development life cycle**](https://docs.haptik.ai/bot-builder/advanced/development-guidelines).
