---
title: Bot Prompt Trigger
---


Bot Prompts provide a way to allow the bot to initiate a conversation with the user. Well designed and well written bot prompts can drastically improve your message sending rate from users and help drive key objectives for customers.

Bot Prompts are currently available on the JS SDK only.

The Bot Prompt visual consists of the following components:

- Bot Name and Image -  These are set across all triggers from the initial bot configuration

- Prompt Title - A configurable text directed at the user eg. Need some help picking a bot? I can guide you!

- Button Text (CTA).- A configurable text for the user to click on and take action eg. Hello Haptik

- User Message - A different text that is sent to the bot once he clicks on the button eg. Hi Haptik

There can be multiple variations of the Prompt Title, Button Text and User Message for a single bot trigger. A random variation will be picked to be used. It is advisable to set at least 3 to 5 variations to keep the content from being repetitve.

![sample_bot_prompt](/assets/bot-prompt-sample.png)

## Bot Prompt Trigger Rules

Bot Prompts are triggered based on a set of defined rules evaluated either on a `AND` clause or a `OR` clause. A combination of the clauses cannot be used.

Rules are set on the following parameters

- Page URL 
- No. of Visits
- Query Params
- Time on Page (seconds)
- Form Field (id of the element)

Different types of comparisons can be done based on the type of Parameter and by using a key value pair. Here are some examples.

If `Page Url is equal to https://www.haptik.ai/technology` we can prompt the user to talk to the bot about our technology stack.

if `Query Param (utm_campaign) is equal to facebook` we can welcome the user as he has navigated from facebook.

if `Time on Page is greater than 100` we can ask the user if he is stuck on anything

If `No. of Visits is greater than 1` we can use the greeting *Welcome Back* instead of *Welcome*.

    Remember these parameters can be combined as well using the `AND` and `OR` clause to create a whole 
    host of creative options to engage the user in an intelligent manner! 

If `Form Field (PAN No) is empty AND Time on Page is greater than 30 seconds` we can ask the user if he needs help finding his PAN No.

Make sure to understand the needs of users and customer before creating your bot prompts. When multiple bot prompts are present they are evaluated in the order of their priority. The prompt with the highest priority is evaluated first, and if the trigger conditions are met only then the prompt will be shown.
