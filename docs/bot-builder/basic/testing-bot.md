---
title: Testing your bot
---

## How to Test Your Bot
========================
Test your bot as you build it to ensure your end users won't experience any annoying bot breakages! You can test your bot in three ways:

![image](assets/test-bot.png)

- The easiest way to test your bot is to test it directly in the bot builder tool. You can do this by clicking on the "Test Bot" button at the bottom of the left-side menu where you add sub-stories and nodes.

![image](assets/test-bot-view-credentials.png)

- Another way to test your bot is click the *More* menu on the top bar, within the bot builder and then select *View Credentials*. Now, you get a pop-up with the *Demo Link* to test the bot.

![image](assets/test-bot-view-demo-link.png)

- The third way to test your bot is to deploy and connect the bot to any of the Client SDKs - iOS, Android, Web, Facebook.

## How to Set Up Your Test Bot
===============================

However, before you'll be able to test anything at all, you need to assign your bot a _Test Business_ and a _Test Partner_.

Why? Because a bot can be live within multiple businesses, and a business can be deployed across multiple partners\* - and test chat windows are designed to give users the ability to test bots as they will appear in the context of the different combinations of businesses and partners they will be deployed in. Therefore, defining a Test Business and a Test Partner for your bot is required. You can change these settings by accessing the bot homepage and clicking on the three dots on the right hand side of a bot, and clicking "*Edit*"

(\*Not ringing a bell? Read more about the differences between bots, businesses, and partners [here](bot-builder/basic/business.md)

The easiest way to test your bot is directly on the bot building tool itself. To set this up, define the _Test-Business_ on the domain itself. This will be the business where messages will be sent. Make sure your domain/bot is active on this business as well.

## Debugging your Bot
======================

On the Bot-Builder tool, you will see a **Log** icon near the messages you sent once the bot has processed the particular message. Clicking on this icon will provide you details on how the bot is behaving, what nodes were detected, what entities were collected and their value etc.

This information is useful to understand why a bot is behaving in a certain way and how to fix the bot to get the desired results.

## Searching your Bot
======================

To find something on the bot, you can click the **Search** click on the top bar within your bot view. For reference, check the image below.

![image](assets/search-bot.png)

Now, the bot builder can search for

1. User Says
2. Bot Says
3. Nodes
4. Stories
5. Substories

And the following filters should work while searching - 

1. Active/Inactive 

       Ex: So you can search from active stories or inactive nodes independently. 
       
2. Case-sensitive 
       
This search functionality is really useful in complex bots with multiple nods and 50+ user says. Especially, while debugging and when you want to go back and change/modify something on the bot. 
