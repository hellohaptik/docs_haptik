---
title: Core Concepts
---

## Introduction
As we learnt recently, the analytics tool provides you with different metrics to measure your bot's performance. But before going into these metrics, it is important to understand a few core concepts.

## Messages
Messages are basically what the user and the bot use to communicate with each other. The user tells the bot what they want through a message and the bot responds to the user through a message again.

## Conversations
In one conversation, a user might try to achieve multiple goals. A conversation is defined by 3 conditions -
1. End nodes
2. Agent marking it complete
3. Integration function clears context
4. Conversation is also marked auto-complete after 8 minutes of user inactivity.  

End nodes are marked as per how a task is defined in the bot flow. For example an user might first try to find available flights, then book one of those flights and finally do a web checkin for the booked flight. To achieve each of these goals the user completes a chat. The collection of these tasks together is called a Conversation.

## Session
A session is defined as a series of interactions between the IVA and the end-user and is calculated after 8 minutes of inactivity (No interaction between IVA and user). You can read more about Sessions in the next section. 

> Note: One Session will have multiple conversations. 

## Tasks
Tasks are high level goals that the bot builder has configured as flows in the chatbot. These tasks are generally available in the taskbox of a chatbot. These can be thought of as high level menu items of a chatbot.

![Taskbox](assets/core-concepts-taskbox.png)

## Bot Breaks
There will be times when the bot will not be able to understand the message sent by the user. Such messages are called Bot Break Messages.

In such cases we might either send the user a pre-confgured bot break message or hand the chat to an agent.
