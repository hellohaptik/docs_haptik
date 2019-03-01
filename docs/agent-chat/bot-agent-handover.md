---
title: Bot agent handover
---

A user always talks to a Business. The user can use one of the many device platforms (Haptik SDKs, Messenger, Jio, etc.) to communicate with the Business.

    On the Business side, any replies could be sent automatically by a 
    1. Bot (Gogo) or 
    2. by an Expert/Agent from Athena.

To keep the transition from Bot to Agent smooth for best user experience, we allow multiple different ways a chat can be transferred from a Bot to a Human.

## Handover rules

### **1. Human Assistance flag on Business Manager:**

If the human assistance flag is on for a business, a chat will be moved to an agent whenever the bot doesn't understand the user's message. 

For a bot that already allows human assistance, set the *Handover Message Flag* field to *True* for your target business. This will send the botbreak message first before moving the chat to a pending state. And eventually this chat gets assigned to an agent.

### **2. Assigning chat through an Integration function:**

If an integration function exists, then we will transfer the chat to a team as per the function written in code. 

Points 1, 2 above are automated methods for moving a chat from Bot to Agent. 

    Tip: In these automated methods, you cannot assign directly to an agent. We send it to a team first.

### **3. Claiming a chat from Athena**

You can send a chat to any specific agent using the *Reassign* Chat button from Athena (Live agent chat tool). 

For automated transitions, Business Manager in mogambo has a `Team Manager` section where you can configure the Team that the chat should be moved to.

    Tip: API integration functions can also specify the team to which a chat is to be sent.

------
