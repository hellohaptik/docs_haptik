---
title: Bot Agent Handover
---

A user always talks to a Business. The user can use one of the many device platforms (Haptik SDKs, Messenger, Jio, etc.) to communicate with the Business.

    On the Business side, any replies could be sent automatically by a 
    1. Bot (Gogo) or 
    2. by an Expert/Agent from Athena.

To keep the transition from Bot to Agent smooth for best user experience, we allow multiple different ways a chat can be transferred from a Bot to a Human.

## Handover rules

### Human Assistance flag on Business Manager:

If the human assistance flag is on for a business, a chat will be moved to an agent whenever the bot doesn't understand the user's message. 

For a bot that already allows human assistance, set the *Handover Message Flag* field to *True* for your target business. This will send the botbreak message first before moving the chat to a pending state. And eventually this chat gets assigned to an agent.

### Assigning chat through an Integration function:

If an integration function exists, then we will transfer the chat to a team as per the integration function. 

Points 1, 2 above are automated methods for moving a chat from Bot to Agent. 

    Tip: In these automated methods, you cannot assign directly to an agent. We send it to a team first.

### Claiming a chat from Athena:

You can send a chat to any specific agent using the *Reassign* Chat button from Athena (Live agent chat tool). 

For automated transitions, Business Manager in mogambo has a `Team Manager` section where you can configure the Team that the chat should be moved to.

    Tip: API integration functions can also specify the team to which a chat is to be sent.
 
 ## Queue Time Indicator
 
This helps us to set correct expectation and smoothen the transition from bot to agent for end users. We engage the end users in queue by sending a message with estimated queue time. We need to inform end users on Whatsapp, Facebook, Web or any other platform about when an agent would get assigned to them. So they can decide if they want to abandon chat or stay on chat. 

We send the below messages before an agent could respond back when users are waiting in the queue. Message 1 comes when estimated First Response Time is within 60 seconds. In message 2 below, we replace the 10 minutes with the value calculated for the last 1 week for the said Team. This value updates every 24 hours. And for First Response Time above or equal to an hour, we send the 3rd message copy to the user. 

1. We will be reviewing your query in a minute.
2. We will be reviewing your query in 10 minutes.
3. We will be reviewing your query soon. The current traffic indicates that it'll take about an hour.

------
