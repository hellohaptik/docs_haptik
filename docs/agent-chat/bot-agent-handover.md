---
title: Bot agent handover
---

A user always talks to a Business. The user can use one of the many device platforms (Haptik SDKs, Messenger, Jio, etc.) to communicate with the Business.

On the Business side, any replies could be sent automatically by a Bot (Gogo) or by an Expert/Agent from Athena.

To keep the transition from Bot to Agent smooth for best user experience, we allow multiple different ways a chat can be transferred from a Bot to a Human.

## Handover rules

###**1. Human Assistance flag on Business Manager:**

If the human assistance flag is on for a business, a chat will be moved to an agent whenever the bot doesn't understand the user's message. In this case, a bot-break message will not be sent to the user.

###**2. Assigning chat through API Integration:**

There are a lot of things which are possible using API integrations and code. In such use cases, we need the bot to move the chat to an agent explicitly for those conditions.

###**3. Claiming a chat from Athena**

Points 1, 2 above are automated solutions for moving a chat from Bot to Agent. Some users on Athena have the permission to claim/reassign a chat. In this case, the chat is manually transferred from a Bot to the Agent.


    Tip: You cannot send a chat to a specific Agent on Athena.

A chat has to be sent to a Team only. And any agent who is a part of the team can receive or claim the chat. 

For automated transitions, Business Manager in mogambo has a `Team Manager` section where you can configure the Team that the chat should be moved to.

    Tip: API integration functions can also specify the team 
    to which a chat is to be sent.

------
