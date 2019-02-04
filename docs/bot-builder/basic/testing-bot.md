---
title: Testing your bot
---

How to Test Your Bot
^^^^^^^^^^^^^^^^^^^^
Test your bot as you build it to ensure your end users won't experience any annoying bot breakages! You can test your bot in two ways:

The easiest way to test your bot is to test it directly in the bot building tool. You can do this by clicking on the "Test Bot" button at the bottom of the graphical interface where you're building and connecting your nodes.

The second way to test your bot is to deploy and connect the bot to any of the Client SDKs - iOS, Android, Web, Facebook.

How to Set Up Your Test Bot
^^^^^^^^^^^^^^^^^^^^^^^^^^^
However, before you'll be able to test anything at all, you need to assign your bot a _Test Business_ and a _Test Partner_. Why? Because a bot can be live within multiple businesses, and a business can be deployed across multiple partners\* - and test chat windows are designed to give users the ability to test bots as they will appear in the context of the different combinations of businesses and partners they will be deployed in. Therefore, defining a Test Business and a Test Partner for your bot is required. You can change these settings by accessing the bot homepage and clicking on the three dots on the right hand side of a bot, and clicking "Edit."

(\*Not ringing a bell? Read more about the differences between bots, businesses, and partners at http://haptik-docs.readthedocs.io/en/latest/bot-configuration/business-creation.html)

The easiest way to test your bot is directly on the bot building tool itself. To set this up, define the _Test-Business_ on the domain itself. This will be the business where messages will be sent. Make sure your domain/bot is active on this business as well.

Debugging your Bot
^^^^^^^^^^^^^^^^^^
On the Bot-Builder tool, you will see a **Log** icon near the messages you sent once the bot has processed the particular messag. Clicking on this icon will provide you details on how the bot is behaving, what nodes were detected, what entities were collected and their value etc. This information is useful to understand why a bot is behaving in a certain way and how to fix the bot to get the desired results
