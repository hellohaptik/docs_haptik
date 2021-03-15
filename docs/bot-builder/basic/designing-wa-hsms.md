---
title: WhatsApp HSMs
---

WhatsApp HSMs or WhatsApp Notifications - Another powerful way to leverage the WhatsApp Business API. You can send outbound notifications to keep users updated at all times.

## Highly Structured Message (HSM) Templates

Highly Structured Message (HSM) Templates/Notifications are business initiated, templated messages that can be sent to an existing user.

1. Notifications enable you to:

  - Deliver important, timely messages during your customer’s path to purchase

  - Continue the conversation with customers who respond to your notifications

2. Businesses can only initiate chats if you are sending a transactional notification, and only via approved Message Templates. 

3. Haptik will approve these notification templates on behalf of the business. 

4. Businesses cannot send advertising, marketing or promotional messages.

An HSM is a template message with placeholders for dynamic data. All HSMs need to be approved by WhatsApp before they can be sent to the user. Read more about how to send notifications [**here**](https://docs.haptik.ai/whatsapp/sending-notifications).

## Opt-Ins

As per WhatsApp’s rules, a consumer opt-in is mandatory. A robust opt-in and good quality content is necessary to maintain the status of the registered WhatsApp phone number. Lack of attention here can result in the number getting flagged for content or warned. 

We have a repository of ways a user can Opt-In on WhatsApp, view it [**here**](https://developers.facebook.com/docs/whatsapp/guides/opt-in/).

## Types of WhatsApp Notifications

1. **Text Notifications** - You can send textual notifications to your customers in the format mentioned below. You can choose to format it using Header, body and footer or just add your message in the body section to send a simple text notification.

![hsm1](/assets/1_typesofnotifications.png)

2. **Media Notifications** - Send messages containing images or documents (pdfs) to your customers.

![hsm2](/assets/2_typesofnotifications.png)

3. **Interactive Notifications** - Message templates that can be used with customized call to action buttons and quick replies. 

![hsm3](/assets/3_typesofnotifications.png)

Read more about media HSMs [**here**](https://developers.facebook.com/docs/whatsapp/api/messages/media/).

## Best practices for getting WA notifications approved

1. Check that templates do not contain promotional messaging, which is against our Business Policy

2. Ensure content is informative and helpful for your core customers

3. Confirm you are sending notifications to customers who have explicitly opted-in to receive them

4. Use the correct format & correctly tag templates

5. Spellcheck message language

6. Evaluate the frequency at which you are contacting your customers

Read more about guidelines of HSMs [**here**](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines).

## How to design HSMs for WhatsApp?

WhatsApp comes with restrictions on how to design an HSM, the main restriction being no promotional content, so when there is a client requirement for adding bits of promotion they have to be tackled with care. 

Some examples of approved vs rejected HSMs are mentioned below - 

![hsm4](/assets/HSM.png)

## Why do notifications get rejected on WhatsApp?

1. WhatsApp allows brands to engage with consumers only if they want to engage with you, it’s a medium to connect with existing customers and not for making new ones which is why promotional content is a big no-no in WA, which is why any notifications which have promotional content in them will be rejected by WA. WhatsApp will notify you if the HSM is rejected but the whole message is marked as promotional and rejected.

2. **No spam content** - WhatsApp is only a way of communicating with a brand's existing customers whose messages can only be sent as notifications, alerts, announcements, or one-to-one conversations, and any content that WhatsApp finds spammy they will reject instantly.

3. **Invalid message format** - If you submit an HSM with dynamic values in one curly bracket they get rejected. We have to follow WhatsApp’s HSM structure for approval.

**Note:** Once rejected an HSM cannot be submitted with the same name, the name has to be modified.

### Unpermitted Notification Types

- Sales, discounts, promotions, product recommendations or offers

- Recurring content

- Customer re-engagement

- Product or marketing/brand surveys 

- Businesses asking customers to review their app

- Businesses asking a customer to share notifications with multiple customers

- Businesses that send reminders or alerts that a customer may have indicated an interest in seeing (not related to a purchase or event)

### Why Do Numbers Get Flagged on WhatsApp?

There are different statuses for phone numbers that usually refer to its connection status (e.g., Connected, Offline, etc.). Occasionally, a phone number may show one of two particular statuses that are related to quality and messaging limits: Flagged and Restricted.

Which brands can send notifications and build IVAs on WhatsApp? You can read about it [**here**](https://www.whatsapp.com/legal/commerce-policy/).

You can read about best practices for notifications given by WhatsApp [**here**](https://www.whatsapp.com/legal/business-policy/).
