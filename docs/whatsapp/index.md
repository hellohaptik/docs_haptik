---
title: Getting Started
---

WhatsApp helps more than 1.5 billion people connect and share with the people they care about. WhatsApp is a simple, secure, and reliable way for businesses to reach their customers all over the world.

The WhatsApp Business API Client supports a subset of the features provided by the WhatsApp applications you already know from Android, iOS, Web and other platforms including end-to-end encryption. The difference is that this application can be deployed on a server, providing a local API that allows you to programmatically send and receive messages and integrate this workflow with your own systems (CRMs, customer care, etc.).

If you would like us to consider your business for inclusion in the limited public preview of the WhatsApp Business API, please visit [**here**](https://www.facebook.com/business/m/whatsapp/business-api).

> If you use anything other than the official WhatsApp Business API or other official WhatsApp tools, Whatsapp reserves the right to limit or remove your access from WhatsApp as this violates their policies.

## Prerequisites for WhatsApp Integration  

- A **Facebook Business Manager** account
- A **verified** business
- A **WhatsApp Business Account**
- A **Line of Credit** for your WhatsApp Business Account — You can refer to [**About WhatsApp Business API Billing**](https://www.facebook.com/business/help/2225184664363779?id=2129163877102343) for more information about the billing process as well.
- A **command line tool** such as **terminal** or an app like **Postman** that can perform **cURL requests**.

> After verifying your business, your business will be reviewed for compliance with the WhatsApp Terms of Service and WhatsApp Commerce Policy. This step is initiated automatically. You can check the status of business verification and business review in the Settings tab of your WhatsApp business account in Business Manager. Business verification will show as Verified and Account Status will show as **Approved** upon approvals.

<hr>

## Types of WhatsApp Conversations

There are **two** types of conversations that are possible on WhatsApp. 

1. A regular user initiated conversation where the user sends a message to the WhatsApp bot and the bot replies back to the user. The bot is allowed to reply back to the user within a **24 hour window** from the last message sent by the user.
2. A conversational flow is bot initiated conversations. In this type whenever a transactional event occurs for eg: user bought a movie ticket, an ebill has been generated etc. **a pre approved template** message can be sent out.

### WhatsApp Bot Conversations

On WhatsApp, users can get their queries resolved with the help of AI powered conversational journeys. The conversational journeys are present for users 24 * 7 and helps user resolve their queries within minutes.

To build the conversational flows, read [**here**](https://docs.haptik.ai/whatsapp/cs-wa).

### Highly Structured Message (HSM)

WhatsApp [**message templates**](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates) and [**media message templates**](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates/media-message-templates) are specific message formats that businesses use to send out notifications or customer care messages to people that have opted into notifications. 

Messages can include appointment reminders, shipping information, issue resolution, and payment updates. These are the preferred methods of reaching customers.

Other types of messages such as [**text**](https://developers.facebook.com/docs/whatsapp/api/messages/text) and [**media**](https://developers.facebook.com/docs/whatsapp/api/messages/media), must be sent within a 24-hour window of a message received from a customer.

WhatsApp Business API provides the following features:

* **Industry Information** - People can now easily identify your business by its category or industry and find out more information (i.e., hours of operation, website, location, description).
* **Send and Receive** - Enable two-way high value conversations with customers.
* **Message Templates** - Create message formats that are needed for sending notifications to users.

Templates are also known as **HSMs**. HSM stands for **Highly Structured Message**. A HSM template will have placeholders in it which can be filled with dynamic user specific values. Here’s a sample **HSM**:

`Hi {{1}}! Thanks for starting your personal training plan. We’ll send you a {{2}} update with your new schedule. You can log-in online using your training ID {{3}}. Stay fit!`

After filling in user specific data the HSM will be sent out as:

`Hi Joey! Thanks for starting your personal training plan. We’ll send you a weekly update with your new schedule. You can log-in online using your training ID 123456. Stay fit!`

To know more about HSMs, read [**here**](https://docs.haptik.ai/whatsapp/sending-notifications).

<hr>

## Setup WhatsApp Business Account

Once you decide which type of conversation is well suited for your business need, you can now proceed to setup the **WhatsApp Business Account** which is the first step for businesses to communicate with customers on WhatsApp. 

Create the [**WhatsApp Business Account**](https://www.facebook.com/business/help/2087193751603668) and set up a [**line of credit**](https://www.facebook.com/business/help/1684730811624773?id=2129163877102343). 

This business account will allow people to easily identify your business and find out more information such as your **address**, **hours of operation**, **website**, and **description**. 

Through your account, in the **Facebook Business Manager**, you will have the ability to **create message templates** for sending **notifications** to customers at scale.

We have covered the detailed setting up process, [**here**](https://docs.haptik.ai/whatsapp/setup-wa).

## Share your WhatsApp Bot

If you want to share the WhatsApp bot link on website (or marketing content) wherein the user clicks on it, and it directly opens the WhatsApp conversation with the bot on their device - 
On the website, you can add a link with your WhatsApp number (e.g. 1XXXXXXXXXX) and the default text as query parameter (e.g. I'm intereseted in your car sale) as follows:

`https://wa.me/1XXXXXXXXXX?text=I'm%20interested%20in%20your%20car%20for%20sale`

Clicking on it will redirect the user to the WhatsApp chat window for your number.

> Add the entire number i.e. including the country code.
> For example, in case of Indian number the link will be similar to `https://wa.me/918899xxxxxx?text=Hi`

You can read more about sharing WhatsApp link, [**here**](https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat/).
