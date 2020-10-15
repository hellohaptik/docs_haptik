---
title: Business
---

## Use case

    Everytime you create a bot, you have to create a new Business or assign an 
    existing Business to it.

A Business is like a contact in your Whatsapp application. A user clicks on the particular contact (Business) and starts the conversation. Businesses are the broad buckets which connect with user’s specific category of intents. Say, an user chooses to interact with the Movies Business. And it has multiple bots from movie ticket booking bot to an offers bot and refunds/cancellations bot.

    User always talks to a Business.

A bot always has a Business tagged to it. Several bots can be grouped together into one Business. While most Businesses are comprised of multiple bots, it is also possible for a Business to consist of only a single bot.

![Business and bots](assets/1_business_bot_mapping.png)

## Business creation

There are two ways to create a Business.

- The first way is to create a Business at the same time as you create a bot from the Conversation Studio homepage
- The second way to create a Business is through the Business manager page. To get started creating Businesses from the Business manager, navigate to the Business Manager tab from the Mogambo homepage and click the + New Business button on the page’s top left-hand corner.

![Business and bots](assets/2_business.png)

Now, you’ll be taken to a page, where you now need to fill information in three main sections:

- General Settings
- Partner Specific
- Bot Prompt Triggers

![General Settings](assets/3_general_settings.png)

### Section 1: General settings

In this section, fill out information that will help you deploy this Business in the future.
Business Name: This refers to the overarching topic of its conversational capabilities. For example, a Business Name called Flights would have a Flight booking, Flight cancellation and Flight Offers bots covering broad user intents.

    You can change the Business name once you’ve saved it.

- Business Via Name: You need to add a Business Via Name as it's an editable field. `Businesss_via_name` should be changed to `fixed-prefix_<language-code>` for multilingual bots. For more details, read [Building multilingual bots](https://docs.haptik.ai/bot-builder/basic/multiple-languages).
    
- Preview Text: The text that will be shown to users before they’ve started chatting with the bot. This field is applicable for Android/iOS SDKs only

- Order: The order your Business will appear in the partner in which it’s deployed. This field is applicable for Android/iOS SDKs only. In the image below, Reminders is the first Business for Partner Haptik

![Channels List](assets/4_channel_list_view.jpg)

- Partners: Businesses can be activated or deactivated for various partner(s), as per what you select here

- Default Team: You can configure the default team for this bot here. Team is a group of agents who get assigned chats from this bot. You can read about Teams on our [Live agent tool documentation link](https://docs.haptik.ai/agent-chat/)

      Business | Channel | Via Name are all same.

- Enable Human Assistance: Will make it possible for human chat assistants to intervene when bots in your Business break. This is helpful if you have a bot + human solution or a human-only solution. How we enable Human assistance on our Business manager, similarly, you'd be able to choose the Live agent chat tool for setup. `Haptik Agent Chat tool` and `Sprinklr` is supported as of now. 

![ECT Flag](assets/Enable_ECT.png)

> Note: If any value other than Haptik Agent Chat is selected, one must request the ECT to register the required webhooks for the functionality to work. For reference check this [link](https://docs.haptik.ai/external-chat-tool/management-APIs).

- Enable Small Talk: Allows certain common phrases to be understood and replied to by the bot. Say, the user types “Hi” or “Good morning”, when Small Talk is enabled, the bot will greet the user and respond back with an apt greeting (ex: “Good afternoon” detecting time of the day). Know that the Small Talk module cannot be customized or changed

- Enable user file deletion: When enabled for a business, all the files uploaded by the user for that business will be deleted from Haptik's Storage after 72 hrs, from the time of upload for the file.

- Active Bots: When an user sends message while conversing with this Business, Active Bots will be the bots whose User Says (combinations of predicted user inputs we add in bot builder) will be searched for a relevant match to the user’s input

- Default Bots: When a user adds an input, this is the first bot whose User Says will be searched for a relevant match to the user’s input. Set the default bot to the conversation most relevant to the Business

- Fallback Bots: When user input doesn’t match the User Says of any of the active bots, the Bot Says response will be automatically sent from the fallback bot

- User Feedback: Feedback module is the smart action where the users can provide their feedback in text & ratings as shown below

![Star Rating](assets/FD1.png)

Tick the checkbox on General Settings Screen of Business Manager to setup collection of user feedback within a business. You can choose to ask feedback once or multiple times (configurable) and also set a delay period (waiting period) after which the bot sends the feedback message to the user. You can access this feedback data from our analytics tool.

You can also trigger a feedback module for a particular node on the bot by using {feedback} in the bot says as shown below

On Bot Says -

![Feedback on Bot Says](assets/FD2.png)

On Bot -

![Feedback on Bot](assets/FD3.png)

> You can collect feedback multiple times but with some restrictions. If the user submits multiple feedbacks within a span of 60 minutes, only the first feedback is registered. The subsequent feedback messages do not override the first one. If the user submits a feedback after 60 minutes, it will be recorded as a new feedback, and not override the previous feedback.

### Section 2: Partner specific

This is where you make changes across a single or multiple Partners, and customize several settings for each partner. The section is located second on the top left-hand corner.

To customize the settings for each partner the Business is live on, click the dropdown field *Select Partner*. Once you’ve selected a partner from this dropdown, the rest of the settings in this section will only be applied to how this Business appears in that particular partner. You can apply customized settings across following 5 sub-sections here -

1. SDK Configurations
2. Taskbox
3. Bot Break Messages
4. Platform Deployments

![Partner Settings](assets/9_partner_specific_settings.png)

Check the list of customizable settings below. 

- Upload Business Icon: When there are multiple Businesses clustered together in a partner in a homescreen, you can assign each Business an icon. Upload that icon here

- Hide Haptik branding on the SDK: Tick this off to hide the _powered by Haptik_ branding across this business

- Taskbox: Taskbox is nothing but the main menu item which can be accessed anytime on the bot using the menu button present in the bottom of the bot. The taskbox will appear for each Business. Select Add Tasks to start adding tasks to the Business’s taskbox on a particular partner. A modal with a list of all the tasks associated with the Business will appear; select the tasks you want to make live. Exit the modal.

> Bot builders can define Tasks for each Business which helps to guide the users to initiate conversations that the chatbot can handle most effectively.

As you can see in the image below, there are 3 Tasks that users can initiate - **What’s new?**, **Choose a plan**, **FAQ**.

![Taskbox1](assets/TB1.png)

**How to add the task?**

1. Click on the second options **Partner Specific** under Business Manager, under that click on **Taskbox**. This is the task box settings section for that particular business.

2. Add the Taskbox Header Message. This header will be shown to users to explain how to use the taskbox. In the sample taskbox above, the header is the text above the tasks that can say, “Hi there! How can I help you?” or “Hi! Tap below to get started.” Refer the above image to view this header message.

3. Create a New Task. 

![TaskBox2](assets/TB2.png)

4. When you click this box, a new popup will appear to fill out the following details:

![TaskBox3](assets/TB3.png)

- Task Title: This will be the task what you want to add on the bot and display on the main menu. Example - **Choose a plan** as shown in the Netflix menu above.

- User Says: This will be the content which you want as a user text to be sent on the bot once user clicks on Task title. Example - If **User Says** is given as **I want to choose a plan** for the above Task title **Choose a plan**, the text will go as **I want to choose a plan** once the user clicks on **Choose a plan** task.

- Upload the icon: You can set the icon for each task by clicking the icon image present beside the “New Task” text. You can always change the image for the existing task by clicking the same image.

![TaskBox4](assets/TB4.png)

- Visible on Task Box: Check this box to make this task active on the taskbox associated with this channel. If you want to deactivate a task at any point, uncheck this box, and it will be removed from the taskbox.

- Location Required: Do not select this option.

Click Save. You’ve created a task! If you make any changes in Taskboxes, it will take 30-60 mins to reflect.

![TaskBox5](assets/TB5.png)

> After creating your Taskboxes you can always rearrange them using the Hamburger option available on the right hand side of each task.

- Bot Break Messages: This is the message that will be sent to users when the bot breaks.

      Bot break means a bot isn’t able to come up with an appropriate response 
      to the  user’s message.

![Bot Break](assets/TB6.png)

- Platform Deployments: You can read about it in detail [here](https://docs.haptik.ai/bot-builder/basic/platforms-deployment).

### Section 3: Bot Prompt Triggers

Bot prompts are pop-ups with content and a click action. It’s used to grab an user’s attention in a non-intrusive way. Please refer the image below where on the Haptik’s website, we try to connect with the user.

![Bot Prompt](assets/10_bot_prompt.png)

Check out the pop-up message on the bottom-right corner in the above image. It’s a type of bot prompt. In this section, we give you the power to configure these bot prompts. And its trigger is when you decide to push a bot prompt to the user.

Now, let’s go through the steps to set bot prompt messages and their trigger rules.

![Bot Prompt Trigger](assets/11_bot_prompt_trigger.png)

For adding a trigger, you click on Create a New Trigger button on the top right-hand corner of this section

And then you type in the trigger message that is the text you’d want your user to read with the bot chat icon. This is for the user to get context on what can to expect on interacting with the bot prompt. Since, this is the first step (initiation), testing bot prompts is crucial

    You can also configure rules to your trigger, by adding URL-specific bot 
    prompt messages or adding on page time delay to open the particular bot prompt trigger.
