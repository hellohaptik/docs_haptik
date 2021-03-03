---
title: Chat Middle
---

## Understanding UI elements

This section is a collection of general good practices to follow while designing the core utility of your bot. This includes everything from our content cheat sheet to UI elements to handling bot errors.

We recommend that you read this entire section before you start designing your user journey.

### Pick your goal

Now that you know how your bot will be initialized, it's important to take a deep breath and analyze your goal. It can be one of the two things: 

1. **Speed**: When you’re trying to provide an answer quickly and help the user reach their goal fast.
Goal to keep in mind: What’s the fastest way to answer the users’ queries on chat?

2. **Clarity**: When you're trying to explain a concept clearly or provide steps for resolution in a simple way that the user understands.
Goal to keep in mind: What’s the clearest and simplest way to answer the users’ query on chat?

Knowing the answer to this will help you when you need to decide between a clear and long journey and a terse but fast journey. 

### Content tone and voice considerations

1. **Personality**: Does the IVA resonate with the brand's voice of communication?
Example: If you’re building a bot for an old trusted banking company, does a chirpy 17-year-old girl voice really complement the brand’s tone?

2. **Emotional state**: Are you able to connect with the user at an emotional level?
Example: If your bot is an Insurance Claims Collection bot, your user is probably sad or has been grieving for a personal loss. Is your bot content addressing your user with this in mind?

3. **Engagement**: Are you able to retain the user's attention until the goal is completed?
Example: If your bot is a sales bot, will a user make a purchase after conversing with your bot? Is the bot really able to create a connection with the user?

### Pick the right terms

A conversation often has several parts that can feel repetitive like Affirmations, Conversation Propellers, Conversation Enders, and so on. 
Here’s the 🗝 [**Content Cheatsheet**](/assets/Content_Cheatsheet.pdf) — a content repository of phrases and keywords to use in various situations in any chat flow. 

### Conversation User Interfaces vs Graphical User Interfaces

Understanding the strengths and weaknesses of CUIs and GUIs will help you decide whether a project is a good use case for a bot or not.

![chatmiddle1](/assets/chatmiddle1.png)

When you’re looking at a list of flights on the screen, it’s easier to tap your preferred one than send a message with the flight number. A GUI can also pack in much more information in the same area than a CUI.

However, once you start packing for the trip, it’s easier to ask/type “baggage allowance” and get a reply with the check-in weight allowance as compared to navigating multiple screens, skimming, and searching through all the information.

![chatmiddle2](/assets/chatmiddle2.png)

### Picking conversational elements 

While text works great for certain interactions, other interactions may benefit from a GUI. The Haptik platform supports elements such as images, carousels, buttons, and Quick Replies. Use these to break the monotony of your content.

Here is a guide on each of these elements:

#### 1. Quick Replies (QRs)

Tappable buttons that can be used to reply instead of typing out a response.

![chatmiddle](/assets/chatend1.png)

Quick replies are likely to be the most commonly used interactive element in your user journey. They are extremely useful to provide suggestions to the user and take away the work of typing. Quick replies are the best element to lead the user to the next set of options. 

**Pros**: Tapping is faster and easier than typing for the average user. QRs act as suggestions and are non-persistent (i.e. they disappear after a selection is made).

> Tip: You can show up to 27 characters on a QR.

#### 2. Buttons

An element used to redirect users to a different flow or page in order to complete a task. Buttons guide users to click on a very clear, persistent Call-To-Action (CTA). You can also use these to provide links to a different page or redirect a user elsewhere. Buttons are persistent elements (i.e. they remain on the screen even after a selection is made).

![chatmiddle3](/assets/chatmiddle3.png)
  
**Tips**:

1. Use buttons when you want the option to remain on the screen (users have a habit of scrolling back up and tapping on buttons) whereas QRs are best used when there is a clear fork in the flow. 

2. Buttons occupy vertical space and are not a good element to use when you have many options. Even though Buttons get higher click-throughs than Quick Replies, it’s better to use QRs when you have more than 3 options.

3. Make sure that the button text includes a verb at the beginning and use the arrow (↗) if the button will redirect outside the bot.
Example: View Plans ↗

4. For maximum visibility, use 21 characters at the most for the button’s text.

#### 3. Carousels

A slideshow component for cycling through elements—images or slides of text—like a carousel. 

![chatmiddle4](/assets/chatmiddle4.png)
  
A carousel element is useful to showcase multiple options that have a lot of details or visual elements. In addition to this unique feature, carousels also help beautify and direct the flow. Carousels can have 3 widths - small, medium, and fat.

**Tips**:

1. Limit the number of carousel cards to 4-5 at the most. The first few cards tend to be the most viewed.

2. Neatly format the text within the card into lists or paragraphs.

3. Use the header for the most important information like product names or order IDs. Use dividers like | or — while showing multiple pieces of information.

4. You may use formatting tags like bold, italics to make the text more eye-catching.

#### 4. Chat Forms

An element used to collect data in a structured format. There are some situations when you want an exact response from your user, or want to make sure that you receive certain information before the user can proceed in the flow. Other times, you may already know potential responses of a user and it may be faster for her/him to simply tap. This is where forms come in handy. 

![chatmiddle5](/assets/chatmiddle5.png)
  
Example: Collect 3-5 pieces of very structured information. E.g. Personal details for an Insurance plan

**Tips**:

1. Forms with more than 4 fields are likely to see a lower completion rate. 

2. Whenever the input is expected from a user in a structured format, it's best taken in a form. 

3. QRs vs Forms: Use Quick Replies when there are only a few ways a user can respond. Use Forms when there’s a larger number of responses potential. Resort to free form when there’s a gigantic number of potential responses. 

#### 5. Videos

A video element allows you to share a video right within the chat window Almost all platforms like Web SDK, WhatsApp and Facebook allow this feature. You can even use videos to replace an FAQ/concept that's too long to show using text!

![chatmiddle6](/assets/chatmiddle6.png)

#### 6. Images

The image element is a great way to showcase content that is best represented graphically. 

![chatmiddle7](/assets/chatmiddle7.png)

**Pros**:

1. To increase readability 

2. To break the monotony of text

3. To condense a lot of text into a chart or easy-to-consume visual 

**Some ways to use images**:

1. Explaining how to complete a process. Eg. Logging in to an application

2. Showcasing a long list or table of contents

3. Showcasing a product

#### 7. Location Picker

The location picker element for the Web SDK allows users to share their location. For the Web SDK, users first need to tap on a button which then opens up a web view with a map. For WhatsApp, the **share current location** option can be used. 

![chatmiddle8](/assets/chatmiddle8.png)

A new window opens up on click of the Location Picker

![chatmiddle9](/assets/chatmiddle9.png)

**Considerations**:

1. Always allow an alternative if the user does not wish to share their location

2. Ensure that you provide enough guidance to the user to use the location picker since the UX can be confusing. 

#### 8. Web-View

Web views let you create a custom UI to accept user input for the bot. This means that any type of UI that you need to build a great bot flow is now available. In other words, the IVA is your canvas!
    
![chatmiddle10](/assets/chatmiddle10.png)

A new window opens up on click of the button

![chatmiddle11](/assets/chatmiddle11.png)

**Considerations**:

1. These windows are completely flexible in terms of the GUI. Design the UX and copy just as you would for any other GUI.

2. A user can invoke a webview by clicking on a button. Design your conversational UX accordingly.

3. These webviews can be configured to open at different heights as well. 

👉 Take a look [here](https://haptik.ai/blog/dissecting-conversational-ui-infographic/) for a quick cheat sheet of available elements and their usage.

💡 Don’t neglect your Element headers while designing your virtual assistant! These are the copies you see within CUI elements. Like the content on your in-chat forms and carousels.

![chatmiddle12](/assets/chatmiddle12.png)

Another example

![chatmiddle13](/assets/chatmiddle13.png)

**Considerations**:

1. Put thought into this. Understand how the UI for your product will work and write down all the bits of copy that affect this. 

2. Keep it short and engaging. You want users to clearly understand what needs to be entered but do it quickly.

3. Take care of capitalization and make sure all the words follow the Title case. Example - Recommend a Product.

## Content formatting

### Text formatting: Bold, Italic, Underline

Your user should be able to skim through your answer and understand the response. 

**Considerations**:

1. For long FAQs, always make sure that the most important aspect of the answer is bold. 

2. Always make sure that any direct questions to the user are made bold. 
Example: Thank you for providing your details. Would you like to receive a call from our agents?

### Emoji

Emojis are one of the easiest ways to ensure that your bot is engaging but you should definitely use them carefully.

**Considerations**:

1. Always have emoji at the beginning or end of a message. Avoid showing them in the middle.

2. Emoji ≠ Punctuation. Leave a space before or after emoji.

![chatmiddle14](/assets/chatmiddle14.png)

### Line breaks and lists

Conversational content should be easy to read. Messages are usually short. The same rule is applicable to bots. Break options into lists and bullet points where possible.

![chatmiddle15](/assets/chatmiddle15.png)

### Messages and information sent at once

In the same vein, limit the number of messages sent at the same time. You hate it when your friend spams you with too much information in separate message bubbles. The KISS (Keep it short & simple) rule works here too!

### Length

Every platform has different character limits for bot replies (for example, Facebook supports 500 characters in each answer.) 

However, we recommend that your answers range between 200-300 characters for optimal readability. More than this will overwhelm the user and consume too much space in the chat window. Ensure that your answer will succinctly and clearly provide a response to the user. Use short, chat-friendly words. Nobody likes it when a bot is too verbose! 

### Proofreading

While not all of us are writers, there's one way to make sure that your copies don't suffer from terrible grammar, bad sentence structure, and incorrect spelling.

💡 Use [Grammarly](https://www.grammarly.com/), a free grammar checking software to help you eliminate grammar errors and easily improve any text (even within the Conversation Studio Tool!)

### Call the grammar 'COPS'

Basics to take care of:

1. **Capitalization** - Ensuring that you follow a standard set of rules for capitalization throughout your bot. It is a reflection of the quality of the brand and the personality of the IVA too!

Here are some places where a capital letter is mandatory:

- The first letter of the first word that starts a sentence
- The letter 'I'
- Proper nouns 

CTAs should be capitalized uniformly:

- Option 1: Use Sentence Case throughout the bot for both messages and CTAs.
- Option 2: Use Sentence Case for all messages and use Title Case for CTAs, titles, and header text.
  
💡 https://capitalizemytitle.com/ is a great tool for this.

2. **Organization** - Does the message content make sense? Check if it follows the structure mentioned below.

Affirmation
{Message}
Question/Conclusion

**Example**: 
Sure! I can help you with your e-ticket. Please type your 6-character confirmation code below 👇

3. **Punctuation** - 

- Check all periods, exclamation marks, question marks, commas. 
- Standardize Bullet Points a.k.a list items. 
- Use a period (full stop) after every bullet point that is a sentence. 
- Don’t use any punctuation after bullet points that are not sentences.

4. **Spelling** — Make sure that you’ve spelled all your words correctly! You may use either British or American spellings and words depending on the geography of the audience. Read the sentence backward to easily spot a spelling mistake!

## Handling bot breaks

Things don’t always go as planned...especially while chatting. That’s why you need to write copy and design flows for when things go wrong in a conversation between a bot and a user. 

**Definition**: A bot break a.k.a bot error is sent to the user when the bot is not trained or cannot find a close match to the user input.

### Types of errors

- No input: The user did not respond to a message, hesitated, was distracted, had a connection error or none of the choices matched their need.

- No match: The bot is not able to understand the user as they say something out of the bot's vocabulary. This is most commonly called a bot break. 

- Disambiguation: The bot is confused between 2 nodes/intents and needs better input from the user. 

- Misrecognition or False Positive: The bot wrongly identifies what the user says.

- Task failure: The user’s request cannot be fulfilled due to a failing on the bot’s end.

### Measures to avoid bot breaks

#### **1. Train your IVA well and design for error cases**

Make sure that your bot thoroughly covers the entire domain it is meant to serve in. Take a look at the [User Says Guidelines section](https://docs.haptik.ai/bot-builder/basic/user-says-guidelines) for more information. Talk to a QA during solutioning to identify the main edge cases and error states. Design message copies for these.

![chatmiddle16](/assets/chatmiddle16.png)

#### **2. Follow up messages** 

These are also known as **Delay Messages**. These are used to remind users to provide inputs or re-engaging users. Example:

![chatmiddle17](/assets/chatmiddle17.png)

**Considerations**: 

a. Use contextual follow up messages to make your message more relatable and appropriate for every user. 
Example: After providing a payment status update, set your delay message to Were we able to resolve your payment issue? 

b. Don’t completely rely on follow up messages to move a conversation forward. Your user may not wait around long enough to see the follow-up message. 

c. Don’t use follow up messages on WhatsApp. They are intrusive and will lead to your number being flagged.

#### **3. Use the entity retry-message feature**

Entity Retry messages are used to give users a second chance to provide the correct input. Users might make mistakes while sharing information and when the bot vets the user input and finds an incorrect input, the entity retry message is sent. Example:

![chatmiddle18](/assets/chatmiddle18.png)

**Considerations**: 

a. Ensure that you clearly explain what is the right format you’re expecting input in.
Example: The entered phone number seems incorrect. Please enter a valid 10-digit phone number. For Example — 9812345656

b. Test and see that the UX is good even after multiple tries.

#### **4. Disambiguation messages**

This powerful feature is a brilliant way to avoid a bot break by asking the user to clarify their input. It’s also known as the ‘Did You Mean’ feature since it asks the user to pick from a list of the questions they may have meant to ask. Example:

![chatmiddle19](/assets/chatmiddle19.png)

**Considerations**: 

a. For every node, ensure that you mark a short variation as the text for the Disambiguation message.

b. For every node, rename the node appropriately below 20 characters depending on the platform.

c. Ensure that you use Sentence case

#### **5. Autocomplete feature (a.k.a Auto-Suggest)**

As the user starts typing in free form, we match the user's typed letters with the User Says sentences on the bot. [Here’s](https://docs.haptik.ai/bot-builder/basic/user-says#autocomplete-suggestions) the documentation to help you enable it.

As described before, this feature will:

1. Help users discover the scope of our bot while a user starts typing.

2. Avoid bot breaks as the user selects our suggestion, rather than typing a random freeform message.

3. Autocomplete suggestions while user types to improve the message event count. 

![autocomplete1](/assets/autocomplete1.png)

#### **6. Dynamic API responses**

These are any messages that are responses returned from an API. Haptik’s platform allows you to customize API responses and add your own conversational flair to them. Instead of showing API responses and API errors just as they have been programmed, you should create conversational copy for API responses to ensure that your IVA functions well even when there are technical issues.

**Basic types of API errors to consider**:

1. System error: When your API fails. I’m really sorry, I can’t pull your customer records right now. Please try again shortly once we’ve resolved this glitch.

2. User does not qualify:  Unfortunately, your plan does not include a free paid vacation. Would you like to upgrade?

3. Beyond scope: Don’t apologize. Just provide a redirect. Tap below to make the bill payment on our website.

**Considerations**:

a. Always design copies for every single API error case. It is crucial to tell the user what went wrong and give them follow up options to get back on track.

❌ Bad: System error. Try again.

✅ Good: Sorry, I couldn't validate your OTP due to a system error. What would you like to do next — try again or talk to an advisor?

b. Account for cases where the API returns too much data to fit into a single window. Ensure that the user has the option to navigate between these options with or break the content down into small chunks. Show only what is necessary.

c. Wherever possible, address your user personally using their name or by providing some pre-saved data to make your conversation seem more personal.

### Drafting the Bot Break message

The bot break message should be carefully worded. It should first acknowledge that the bot cannot help with the query. It should then focus on redirecting the user back into the conversation. Either redirect the user to the main menu or into another conversational flow.

Here are some ways to design bot break messages:

- Re-showcasing Bot’s Capabilities: The bot can set a capability expectation and present only those options that the bot can fulfill.

![chatmiddle20](/assets/chatmiddle20.png)

- CRM Ticket: The bot can take inputs from the user and pass along the unanswered query to a CRM.

- CSV: The bot can also record the query and share a collated list of the bot breaks aka unanswered user inputs to a customer support email id.

- Live Agent Support:  If the bot fails to understand a query, the bot can transfer the chat to a human agent. The agent will be trained to handle queries in the domain. This can either be done for all bot breaks or for breaks in specific task flows.

![chatmiddle21](/assets/chatmiddle21.png)

**Considerations**:

a. Apologize but gracefully. This message will even be shown if a user is purposely messing with your bot.

b. Be clear and always give options for the user to restart the conversation.

c. Having multiple variations in your bot makes your bot seem empathetic and intelligent

## Agent Transfer

**Definition**: If the bot fails to understand a query, the bot can transfer the chat to a human agent. This form of escalation is what we call an **Agent Transfer**.

### Why?

- Complex queries and frustrated customers are better handled by humans. 

- Bots cannot be expected to know everything about the domain and having agents on hand is a good way to handle out of scope requests.

### Parts of the Agent Transfer experience

Admit that a human agent may be better equipped to handle the query and give the user the option of talking to one. 

**Considerations**:

- This should be voluntary. Don’t directly transfer the chat to the agent without checking whether the user wishes to talk to a person immediately. They may prefer coming back later or may want to try resolving the issue on their own.

💡 The goal of most virtual assistants is to reduce customer support costs so provide this option carefully!

Example: Sorry, you've entered the wrong OTP. Tap on an option below to either resend the OTP or chat with an agent 👇 

- Be transparent. If agents are only available between a certain time period, this is a good place to let the customer know, as opposed to expecting an agent and then being disappointed. You can use custom APIs if needed. 

Example: 

1. If you wish to provide different messages based on the time of day because your agents are only available between 10 am to 7 pm, you can use a code block to do so. 

2. Agent not available (Formal) — Noted! An expert will be able to answer this better. Tap below to get more help 👇 CTA: Continue

3. Agent not available (Casual) — My teammates will be back at their desks at 7 am in the morning. Check back then or send us an email at example@test.co right away. 

### Transfer

Let the end-user know that the bot has asked an agent to step in. 

**Considerations**:

- Be clear about agent availability. Typical bot platforms will check whether agents are available at this stage. Inform the customer that this step is taking place to avoid confusion.

- Before you’re sure that agents are available, don’t say — Hold on while I ask an agent to step in. Instead, be clear that you’re checking agent availability and say — Stay online while I check whether an agent is online and ask them to step in.

- Tell users what’s going to happen next. If the customer has been added to a queue, it’s important to give them clear instructions so that they don't get frustrated while waiting for an agent to step in. 

Based on the waiting time, one of the following messages will be sent after 6 seconds (the average amount of time a user tends to hold on):

a. For no waiting time, the following message will be sent — We will be reviewing your query in a minute
b. For wait times below an hour — We will be reviewing your query in 10 minutes.
c. For high traffic situations where the wait time is longer than an hour, this message will be sent — We will be reviewing your query as soon as possible. The current traffic indicates that it'll take about an hour. I'll send you a message about it. Just don't close this window!

 - Use this time wisely. Tell the customer to maybe elaborate on their query or tell them to leave the window open while an agent steps in. 

Example 1 —
Let me check and get back to you!
This could take a few minutes so feel free to share any other details I should know.

Example 2 —
While I ask an agent to step in, feel free to type in any more details you'd like to share!

- Agent introduction. If agents are available, make sure that your agent clearly introduces themselves. The Web SDK indicates when an agent joins the conversation like this —   

![chatmiddle22](/assets/chatmiddle22.png)

WhatsApp and Facebook do not have this indicator so make sure that the agents are trained to introduce themselves accordingly!

### Agent Chat Tool settings

Agent Handovers are not always successful especially when you’re dealing with operational difficulties, lack of staff, and other issues. These are two pieces of copy that you can set on the Agent Chat Tool right now —

1. Agents temporarily not available aka Team delay message: Use this message to set expectations with the user.
Example: 🙏 Sorry, all our agents are busy at the moment. Go ahead and enter your problem in detail below and our agents will reply in a few minutes 👇

2. Agents unavailable: Use this message to tell users what to do when agents are not available. This could be something like creating a ticket or sending an email. Whatever the case, do provide a way for users to get in touch.
Example: Unfortunately, none of our agents are available at the moment. Tap below to submit a callback request and we'll get in touch with you soon 👇

### Do’s and Don'ts

- Don’t make agent transfers mandatory for bot breaks. They lead to high operational costs unnecessarily and defeat the purpose of automating customer support. 

- Do provide agent transfer as an option for sensitive usecases that are better handled by an agent. You may choose to partially complete a process using the virtual assistant and then transfer it to an agent after a certain point.

## Unstructured FAQ IVA guideline

**Definition**: FAQs stand for frequently asked questions. Adding general FAQs to your bot is a great way to ensure that users receive answers to most of their basic questions alongside the more detailed user journeys that you have built. 

Examples:

![chatmiddle23](/assets/chatmiddle23.png)

**Considerations**: 

- Download the FAQ guideline linked [**here**](/assets/Haptik_FAQ_Format.xlsx) to add and structure all your FAQs.

- Always have follow-up QR options. Your user should have a way to move forward in the conversation.

- Ensure that the content is adapted for chat. If required convert lengthy text into lists, interactive carousels, images, or even link a video if needed.

- Ensure that all your nodes have been sufficiently trained so that your bot can answer correctly. You can go through the user says guidelines [here](https://docs.haptik.ai/bot-builder/basic/user-says-guidelines).

- To upload a large number of FAQs at once, you may use the [**bulk upload feature**](https://docs.haptik.ai/bot-builder/basic/general-nodes). However, make sure that all good conversation designer practices like follow-ups are implemented within your content.

- Ensure that follow-up feedback doesn’t jump in too early and obscure your follow up QRs. Remember: QRs aren’t persistent.

- Sanitise all data - Create separate intents out of user queries

- Make sure that your answer is generic. Don’t have any ultra-specific introductions like “Yes that’s a lovely question” before your answer begins.

## Other important considerations

1. **Reuse**

Example 1: If your bot is a bot for logged in users - Can you reuse information from the signed-in profile to avoid repetition?
Example 2: If your user has previously mentioned their name, can you reuse it elsewhere? 

2. **Give directional cues to the user**

Does your user always have a backup option to come back to the menu if they get lost during the journey?

3. **Handle free form queries**

Has your bot been trained to handle free form questions related to the main usecases?

Example: For an Insurance Product recommendation bot, do you provide basic information about the product in freeform like “Will I get free training”
