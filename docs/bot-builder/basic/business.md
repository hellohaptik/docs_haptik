---
title: Business
---

## Use case

    Everytime you create a bot, you have to create a new Business or assign an existing Business to it.

A Business is like a contact in your Whatsapp application. An user clicks on the particular contact (Business) and starts the conversation. Businesses are the broad buckets which connect with user’s specific category of intents. Say, an user chooses to interact with the Movies Business. And it has multiple bots from movie ticket booking bot to an offers bot and refunds/cancellations bot.

    User always talks to a Business.

A bot always has a Business tagged to it. Several bots can be grouped together into one Business. While most Businesses are comprised of multiple bots, it is also possible for a Business to consist of only a single bot.

![Business and bots](assets/1_business_bot_mapping.png)

## Business creation

There are two ways to create a Business.

- The first way is to create a Business at the same time as you create a bot from the bot builder homepage
- The second way to create a Business is through the Business manager page. To get started creating Businesses from the Business manager, navigate to the Business Manager tab from the Mogambo homepage and click the + New Business button on the page’s top left-hand corner.

![Business and bots](assets/2_business.png)

Now, you’ll be taken to a page, where you now need to fill information in four main sections:

- General Settings
- Task(s)
- Partner Specific
- Bot Prompt Triggers

![General Settings](assets/3_general_settings.png)

### Section 1: General settings

In this section, fill out information that will help you deploy this Business in the future.
Business Name: This refers to the overarching topic of its conversational capabilities. For example, a Business Name called Flights would have a Flight booking, Flight cancellation and Flight Offers bots covering broad user intents.

    You can change the Business name once you’ve saved it.

- Business Via Name: This is auto-populated. You cannot change the Business Via Name

- Preview Text: The text that will be shown to users before they’ve started chatting with the bot. This field is applicable for Android/iOS SDKs only

- Order: The order your Business will appear in the partner in which it’s deployed. This field is applicable for Android/iOS SDKs only. In the image below, Reminders is the first Business for Partner Haptik

![Channels List](assets/4_channel_list_view.jpg)

- Active Cities: Businesses can be activated or deactivated for various cities, in case you’d like to create geographically targeted clusters of bots. This field is applicable for Android/iOS SDKs only

- Enable OTP Verification: Clicking on this box means users must be OTP verified to enter the channel. This field is applicable for Android/iOS SDKs only

      Business | Channel | Via Name are all same.

- Enable Human Assistance: Will make it possible for human chat assistants to intervene when bots in your Business break. This is helpful if you have a bot + human solution or a human-only solution

- Enable Small Talk: Allows certain common phrases to be understood and replied to by the bot. Say, the user types “Hi” or “Good morning”, when Small Talk is enabled, the bot will greet the user and respond back with an apt greeting (ex: “Good afternoon” detecting time of the day). Know that the Small Talk module cannot be customized or changed

- Active Bots: When an user sends message while conversing with this Business, Active Bots will be the bots whose User Says (combinations of predicted user inputs we add in bot builder) will be searched for a relevant match to the user’s input

- Default Bots: When a user adds an input, this is the first bot whose User Says will be searched for a relevant match to the user’s input. Set the default bot to the conversation most relevant to the Business

- Fallback Bots: When user input doesn’t match the User Says of any of the active bots, the Bot Says response will be automatically sent from the fallback bot

- User Feedback: Tick the checkbox here to setup collection of user feedback within this business. You can choose to ask feedback once or multiple times (configurable) and also set a delay message (waiting period) after which the bot pushes the feedback message to the user here. You can access this feedback data from our analytics tool (Teja)

### Section 2: Task(s)

Bot builders can define Tasks for each Business. Providing this taskbox helps guide users to initiate conversations that the chatbot can handle most effectively.

As you can see below, there are 5 Tasks that users can initiate - Play Cricket Quiz, Check Live Score and others below them. Tasks are the activities that the chatbot can assist users with. The tasks associated with each Business can be viewed by the user while they are chatting in that particular Business (ex: refer the above image for Cricket Business). Providing this taskbox helps guide users to initiate conversations that the chatbot can handle most effectively.

    You can edit Business tasks from “Tasks(s)” tab. Click "Task(s)" section after selecting a relevant Business.

When the editing fields open, you’ll need to fill out the following information:

![Taskbox Header](assets/6_taskbox_header_message.jpg)

**Taskbox Header Message**: This header will be shown to users to explain how to use the taskbox. In the sample taskbox above, the header is the text above the tasks that says, “Hi! Tap below to get started.” Refer the image to view this header message

**Create New Task**: When you click this box, a new popup will appear to fill out the following details:

- Task Title: Give the task a label. This is what will show up on the actual task button
  User Says: When the user taps on a task, a user says message is generated and sent in tandem. Enter what the user says associated with this task will be in this field

- Live Cities: Indicate if this task should be live globally or only in certain geographies. This is applicable for Android/iOS SDKs only

- Shorthand: This field is to be deprecated. This is applicable for Android/iOS SDKs only

- Visible on Fab Button: The fab button is a shortcut visible at a partner level (i.e. where several Businesses are clustered together) that lists key tasks from each Business. Check off this box if the task you’re creating should be added to the fab button. This is applicable for Android/iOS SDKs only

- Visible on Task Box: Check this box to make this task active on the taskbox associated with this channel. If you want to deactivate a task at any point, uncheck this box, and it will be removed from the taskbox

- Location Required: Enabling this box will require users to input their location to move ahead with the task. This is applicable for Android/iOS SDKs only

Click Save. You’ve created a task!

### Section 3: Partner specific

This section is where you can deploy Businesses across a single or multiple Partners, and customize several chat settings for each partner. The section is located third from the top left-hand corner.

To make this Business live on a new partner, click on Add New Partner. A modal with the full list of partners you have permissions to access will appear. To make this Business live on a Partner, check off the box next to the partner name and exit the modal.

![Partners](assets/8_partner_selection.png)

To customize the settings for each partner the Business is live on, click the dropdown field Select Partner on the top left hand side of this section. Once you’ve selected a partner from this dropdown, the rest of the settings in this section will only be applied to how this Business appears in that particular partner. You can apply the following customized settings:

![Partner Settings](assets/9_partner_specific_settings.png)

- Upload Business Icon: When there are multiple Businesses clustered together in a partner in a homescreen, you can assign each Business an icon. Upload that icon here

- Make this Business Active/Archived: To make this Business live on a Partner, check off Make this Business Active. If you want to temporarily make the Business inactive on the partner, select Make this Business Archived

- Make this Business Sponsored: This is an app specific feature, wherein we show a sponsored text below the business icon on the native app screen. It’s how an user will be able to differentiate between sponsored (adverts) and non-sponsored businesses

- Hide Haptik branding on the SDK: Tick this off to hide the _powered by Haptik_ branding across this business

- Taskbox: The taskbox that will appear for each Business can be customized to the Business’s various partners. Select Add Tasks to start adding tasks to the Business’s taskbox on a particular partner. A modal with a list of all the tasks associated with the Business will appear; select the tasks you want to make live on a particular partner. Exit the modal

- Bot Break Messages: This is the message that will be sent to users when the bot breaks.

      Bot break means a bot isn’t able to come up with an appropriate response to the  user’s message.

### Section 4: Bot Prompt Triggers

Bot prompts are pop-ups with content and a click action. It’s used to grab an user’s attention in a non-intrusive way. Please refer the image below where on the Haptik’s website, we try to connect with the user.

![Bot Prompt](assets/10_bot_prompt.png)

Check out the pop-up message on the bottom-right corner in the above image. It’s a type of bot prompt. In this section, we give you the power to configure these bot prompts. And its trigger is when you decide to push a bot prompt to the user.

Now, let’s go through the steps to set bot prompt messages and their trigger rules.

![Bot Prompt Trigger](assets/11_bot_prompt_trigger.png)

For adding a trigger, you click on Create a New Trigger button on the top right-hand corner of this section

And then you type in the trigger message that is the text you’d want your user to read with the bot chat icon. This is for the user to get context on what can to expect on interacting with the bot prompt. Since, this is the first step (initiation), testing bot prompts is crucial

    You can also configure rules to your trigger, by adding URL-specific bot prompt messages or adding
    on page time delay to open the particular bot prompt trigger.
