---
title: Navigation on WhatsApp
---

## Chat Initiation

But before you start building a WhatsApp IVA, it’s important to first answer the crucial question – **How do you start acquiring customers on WhatsApp?**

A key point to note is that WhatsApp requires a brand to get an opt-in from a user before it can start engaging with him/her i.e. the user needs to consent to start a conversation with your business.

Here’s a quick guide to some of the techniques you can use to begin your brand’s conversations with customers on the world’s largest messaging channel.

Read more about how you can acquire new customers using WhatsApp [**here**](https://www.haptik.ai/blog/acquire-customers-with-whatsapp-marketing).

Read more about opt-in [**here**](https://developers.facebook.com/docs/whatsapp/guides/opt-in/).

## Introduction & Authentication on WhatsApp

As per WhatsApp's business policy - either a chat is user-initiated OR the brand sends push notifications to engage with a user. After acquiring your customer base and learning who you want to target you should continue with identifying the user.

When a user initiates a chat on WhatsApp, the mobile number of the user and the WhatsApp name are shared via the WhatsApp Business API. This information can be subsequently used to personalize the user’s interaction with your brand on WhatsApp.

- **Name**: Greet the user by their name. It helps to establish trust with the end-user.
- **Number**: The user’s phone number can be leveraged in multiple ways. If the user is looking to seek any specific information related to their account, the WhatsApp number becomes the unique identifier. Using the WhatsApp phone number, we can first authenticate the user and then fetch information based on their request.

Give users a secure onboarding by authenticating their phone number and asking them if they want to move ahead with that specific phone number. If they choose to authenticate another phone number, go ahead and use OTP verification to allow them to log in safely and securely.

This not only gives the user flexibility to switch numbers and authenticate themselves to carry out a task on the IVA but also allows for re-engagement using past information.

![navigation1](/assets/intro&auth1.png)

**Help users switch numbers using OTP authentication**

![navigation2](/assets/intro&auth2.png)

![navigation2](/assets/intro&auth3.png)

## Guided Navigation on WhatsApp

At the start of the conversation, the user should be shown a concise menu. The menu should contain the top functionalities of the bot. Like any chatbot experience, this menu is no different. 

Each item listed on the menu should be clear and easy to understand.

The menu selection can happen in two ways -

- The user needs to either type the menu item. For eg. Benefits of WhatsApp. Since a user is required to type, the menu item should be concise so that it is easy for a user to type.

- The user can simply type the item number to move forward, like in an IVR system. (Users are habituated to use numbers to proceed).
The menu serves as the first message that will be seen by the user. Therefore, sharing a useful tip right at the beginning is a great opportunity to educate the user.

**An informative tip like ‘Type main menu’ to go back at any point in the conversation will come in handy for the user.**

Sample WhatsApp Menu

![navigation3](/assets/1_GuidedNavigationonWhatsApp.png)

#### Hybrid Method

A hybrid method not only allows the user to type their query in free form but also gives them an option to opt for a guided menu option. The design of the first message should be clear and precise. It should not confuse the user instead should allow them flexibility of free form and guided navigation.

![navigation4](/assets/2_GuidedNavigationonWhatsApp_hybrid.png)

## Chat Middle

A WhatsApp Bot is fairly different from most other kinds of chatbots you might be familiar with. Typically, UI elements such as buttons and quick replies are a key aspect in streamlining a chatbot experience. UI elements not only help to propel the conversation forward but also help the user to achieve their end goal in the quickest way possible.

While designing a WhatsApp IVA, one has to operate within certain UI limitations and build an experience sans quick replies, buttons, and carousels. Sharing some workaround for the platforms’ limitations here -

![navigation5](/assets/Table1.png)

![navigation6](/assets/Table2.png)

![navigation7](/assets/Table3.png)

![navigation8](/assets/Table4.png)

![navigation9](/assets/Table5.png)

## Natural language vs numeric user inputs - 

While designing a WhatsApp IVA, it is important to carefully decide when to offer the user numeric transition and when to facilitate free text inputs from the user. This acts as a starting point for the user so designing the menu keeping the user in mind becomes crucial.

### When to use numeric transition?

1. For Menu Selection

   - A user can simply type the item number to move forward, like in an IVR system. (Users are habituated to use numbers to proceed).

   ![navigation10](/assets/1_Naturallanguage.png)

2. For Selection of any complex input. (Complex for the user to type)
   
   - Eg: Policy ID, Order ID, Shipment tracking number, AWB number

   ![navigation11](/assets/2_Naturallanguage.png)

### When to use Free Text

1. **Questions**

Questions are a great way to steer the conversation in the right direction. The questions need to be relatable and intuitive. Forcing the question just to move the conversation forward might lead to a substandard conversational experience.

In fact, questions or commands are the only way to keep the conversation going on WhatsApp. 

Let’s take a look at the Types of Questions:

- **Yes/No Questions**

Questions that trigger a yes/no response are an easy way to engage the user and push the conversation forward. 

Example: Would you like to learn more about Chatbots?

The answer to this question might seem straightforward. But that is not entirely true. A user can say Yes and No in so many different ways.

Yes: Ya, yup, yeah, yah, ok, sure, alright
No: Nope, nah, not really, not interested

> The bot should be trained to understand agreement vs dissent. There are some obvious cases that might fail with this approach — for e.g.  ‘Why not’.

- **Suggestive Questions**

Suggestive Questions are a perfect replacement for buttons. It is ideal to present options and let the user define the next course of action.

Example: Are you interested in chatbots or voice bots?

A good way to emphasize the selection is by using bold. You can use **bold** text on WhatsApp.

Example: Are you interested in **chatbots** or **voice bots**?

You can easily observe the substantial improvement in readability.

2. **Tips** 💡

Providing tips throughout the conversation is a must. A seamless two-way interaction on WhatsApp is only possible if the user is aware of how to use it.

Let us now consider the Types of Tips:

- **Menu**

💡 Type ‘go back’ to see the main menu.
                              OR                    
💡 You can simply type ‘Menu’ to select any other option.

- **Question Tips**

Tip: You can also ask me questions like ‘example’

> The IVA should always be able to handle user queries in free text. It should be built keeping all the right intents in mind so that the user has the choice of typing at any given point. 

## Content Formatting Options

The messages you send on WA can be formatted in normal text formats like -  

1. Bold - Use (*) for this.

Your total is *INR1000*.

2. Italicized - Use (_) for this

_Welcome to _WhatsApp_!

## Design for in-built WhatsApp features

We often get users using the inbuilt features of WhatsApp which our IVA is not trained for. Instead of hitting a roadblock we should better this experience for the user in case this situation might arise. Here are ways of handling these various unsupported features - 

1. If the user sends an image since image recognition is underway instead of the bot breaking we educate the user that the image cannot be read.

![navigation12](/assets/1_inbuilt_WA_features.png)

In case of a hybrid bot - where we have human assistance, we let the user upload images so the agent can view the image and provide the best possible resolution for the user's query.

2. If the user clicks on the call/video call button, since this function will serve not purpose in the IVA, we can add a custom screen that looks like this - 

![navigation13](/assets/2_inbuilt_WA_features.png)

## Chat End

The end of a conversation on WhatsApp is quite different from other platforms. Unlike websites or apps where users have a ready option to go back to the main menu or click on the task button ready at their disposal, WhatsApp chats need to be well defined.

1. We need to identify points that mark the end of a task which a user can complete. On these points, it is a good idea to check with the user via question if they would like to explore other options or they would like to end the conversation.

2. If the user expresses the intent to close the conversation, we can use this opportunity to gather valuable feedback regarding the chat experience. This can be collected in the form of a CSAT question or a feedback question.

**Example** - How was your experience chatting with us on WhatsApp?

1. Easily Understandable
2. Helpful Answers
3. Quick Response
4. Interesting Answers
5. All of the above

💡Type a number from the list above to make your selection.

## WhatsApp Design Best Practices 

1. Keep it spam-free - It’s a personal and private channel. 

2. Keep it short - WhatsApp messages should be short and to the point, with limited screen space, the general consumer tendency is to glance at the message and not read it end to end, which is why all the main content should be covered in copy that’s as short as possible.

3. Keep it transactional - Since the user also has to know how to make a selection there is limited room to play around with chatty content. The content should be to the point but make the user feel comfortable in having a conversation with the brand and make an effort to respond with the limitations of UI elements.

4. Keep it relevant - Since WhatsApp is an informal medium to communicate with friends and family, brands should also approach it with a semi-formal approach to make the consumer feel comfortable chatting with them on a platform they use for personal communication. Only send messages to users who have opted-in to receive messages from your business.

5. Keep it updated - Make sure your brand information is up to date as the consumer viewing the WA profile will get to see information about your company, including your brand name, category, address, description, email, and website. This will add to the credibility and trust of the brand for the consumer conversing with the brand.

**“You should message a business just the way you should message a friend.” - Mark Zuckerberg**
