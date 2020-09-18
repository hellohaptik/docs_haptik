---
title: Chat End
---

While designing a bot, it is extremely important to design the **end of your conversation**. After all, how you end a conversation dictates whether a person would be interested in talking to you again. A good end to a first date is more likely to lead to a second one. 

In the same vein, your bot must **never end a conversation abruptly**. Use the end of any conversation, successful or otherwise, to re-engage the user in some way.

**Techniques** to end a conversation gracefully and usefully —

1. **Encourage users to continue using the bot.** To do this, we recommend showcasing the other capabilities of the bot —

- Give the user a custom set of options based on their previous selection

![chatend1](/assets/chatend1.png)

- Teach users about where to find the Taskbox or Menu. 

Here’s how you can do this for Web SDK bots:

![chatend2](/assets/chatend2.png)

Here’s how you can do it for WhatsApp bots: 

**Type 0 to go to the main menu or enter your query below!**

- Ask users whether they need more help. Here’s a sample flow. 

Is there anything else I can help you with? The possible answers could be Yes and No. 

If Yes, show the taskbox. 

![chatend3](/assets/chatend3.png)

If No, end your conversation gracefully.

![chatend4](/assets/chatend4.png)

2. **Say bye gracefully**

- Remind them and encourage them to visit

**😊 Happy to help! I will be around whenever you need me.**

- Tell them how to start chatting the next time

**😊 Thank you for contacting us. I will be around whenever you need me. Say “Hi” to start chatting!**

3. **Collect feedback**

Using your IVA as a source of feedback is crucial to make it a long-term success. Keep listening to what your end users want from your bot and analyze the results frequently.

Here are three simple ways you can incorporate feedback collection into your user journey:

a. For the bot
  
- Ask **Did that resolve your query?** and consider shifting the conversation to a human agent if the user is unhappy. 
  
- Use Haptik’s built-in feedback mechanism to trigger feedback at the end of a conversation. You can use the **{feedback}** command to embed this in your message and can customize the message copy!
  
b. For individual bot replies

Use Haptik’s per-user message feedback mechanism. You can read more about it [here](https://docs.haptik.ai/web-sdk/configuration-customisation#enable-user-feedback).

c. For the brand

It is important to note that brand feedback, i.e. feedback for your product and company’s offerings is different from feedback for your bot. As long as this distinction is made clear to your end-user, you may collect brand-level feedback on your bot using a link. Whatever you do, strike a balance. 

> There needs to be an optimum balance between the time after a chat ends and feedback collection starts. It should not be too long that you lose the user nor should it be too short that the bot seems intrusive to the user.
