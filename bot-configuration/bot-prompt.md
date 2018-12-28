#Bot Prompt Trigger

Bot Prompts provide a way to allow the bot to initiate a conversation with the user. Well designed and well written bot prompts can drastically improve your message sending rate from users and help drive key objectives for customers.

Bot Prompts are currently available on the JS SDK only.

The Bot Prompt visual consists of the following components:

- Bot Name and Image -  These are set across all triggers from the initial bot configuration

- Prompt Title - A configurable text directed at the user Eg. Need some help picking a bot? I can guide you!

- Button Text (CTA).- A configurable text for the user to click on and take action eg. Hello Haptik

- User Message - A different text that is sent to the bot once he clicks on the button eg. Hi Haptik

There can be multiple variations of the Prompt Title, Button Text and User Message for a single bot trigger. A random variation will be picked to be used. It is advisable to set at least 3 to 5 variations to keep the content from being repetitve.

![image-20181228140148327](/Users/prateekgupte/Work/docs_haptik/bot-configuration/bot-prompt-sample.png)

##Bot Prompt Trigger Rules

Bot Prompt are triggered based on set of defined rules evaluated under either an `AND` clause or `OR` clause. A combination of the clauses cannot be used.

Rules are set on the following parameters

- Page URL 
- No. of Visits
- Query Params
- Time on Page (seconds)
- Form Field (id of the element)

Different types of comparisons can be done based on the type of the Parameter and by using a key value pair. Here are some examples.

If `Page Url is equal to https://www.haptik.ai/technology` we can prompt the user to talk to the bot about our technology stack.

if `Query Param (utm_campaign) is equal to facebook` we can welcome the user as he has navigated from facebook.

if `Time on Page is greater than 100` we can ask the user if he is stuck on anything

If `No. of Visits is greater than 1` we can use the greeting Welcome Back instead of welcome.

Remember these parameters can be combined as well using the `AND` and `OR` clause to create a whole host of creative options to engage the user in an intelligent manner! 

If `Form Field (PAN No) is empty AND Time on Page is greater than 30 seconds` we can ask the user if he needs help finding his PAN No.

Make sure to understand the needs of your user and customer before creating your bot prompts. When multiple bot prompts are present they are evaluated in the order of their priority. The prompt with the highest priority is evaluated first, if the trigger conditions are met only that prompt will be shown.

##Measure and Improve

Each Bot Prompt is provided a unique id. Using this unique id you can measure the performance of your trigger with these 3 events on Google Analytics.

| Event Action         | Event Category | Event Label |
| -------------------- | -------------- | ----------- |
| BOT_PROMPT_SHOWED    | Business-id    | Trigger-id  |
| BOT_PROMPT_CLICKED   | Business-id    | Trigger-id  |
| BOT_PROMPT_DISMISSED | Business-id    | Trigger-id  |

Use these 3 metrics to evaluate the effectiveness of your prompt trigger and keep an eye on the click rate, dismiss rate and show rate. It might take you some experimentation to understand what works best for that specific customer and bot.