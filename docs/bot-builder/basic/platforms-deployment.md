---
title: Platforms Deployment
---

## How to Deploy the Bot to External Platforms?

After you have created your bot and tested it locally, you can connect the bot to external platforms like Facebook Messenger, Skype, Whatsapp, Webhooks etc. 

Once you have connected the bot to an external platform like Facebook Messenger, users of your bot will be able to use that platform to chat with your bot.

**NOTE:** The businesses and bots created on staging can be transferred to production. But this transfer doesn't include platform settings. This means that platform settings have to be configured explicitly for both the environments as that is not transferred.

You can use the *Platform Deployment* sub-section of the Partner specific area in Business Manager. Here's how you can open this section

1) Go to the Business Manager section of the Conversation Studio tool from the left Navigation Bar.

![image](https://user-images.githubusercontent.com/75118325/113767890-d3ab8f80-973c-11eb-9810-8e004d6b201a.png)

2) Open the business of the bot you want to connect to external platform and navigate to **Platform Deployment** settings

![image](https://user-images.githubusercontent.com/75118325/113768030-fe95e380-973c-11eb-9ad9-b7dc5bdfcd39.png)

Using the Platform Settings you can easily connect your bot to any of the following external platforms:

* [Facebook](https://docs.haptik.ai/other/facebook)
* [WhatsApp](https://docs.haptik.ai/whatsapp/)
* [Web SDK](https://docs.haptik.ai/web-sdk/)
* [Android SDK](https://docs.haptik.ai/android-sdk/)
* [iOS SDK](https://docs.haptik.ai/ios-sdk/)
* [Bot API](https://docs.haptik.ai/webhooks/)
* Google Business Messages
* Salesforce Agent Chat
* Zendesk Live Chat
* Nice Agent Chat
* Freshchat
* Jio
* Jio Chat Connector
* Gupshup Chat Connector
* Netcore Chat Connector
* Sunshine Chat Connector
* Infobip Chat Connector
* GIP
* IVR Audio codes
* Twilio
* IVR APIs

Select the **Platform** you want to deploy the bot on. 

The fields for adding keys change according to the **Platform** selected. 

>**Deploying to Jio**
>
>To connect your bot to Jio - open the platform settings section in the business manager and navigate to Jio. Follow these steps to connect the bot:
>
>1) Callback URL is auto-generated
>2) Enter the access token provided by the Jio team
>3) Activate the connection by clicking on the switch and save the configuration
>4) Share the full callback url <domain_name>/jio/<any_identifier> using the same identifier as before with the Jio team. The domain name will be provided by Haptik team.

## Sending Notifications in a Bot with Web SDK Integration

If you integrate your bot into an Android or iOS app using Web SDK then it is not possible to send push notifications out of the box. In such cases if you want to send push notifications you can use the Web SDK settings from the platform deployments page.

### Setting up notifications

1) Go to the Platform Settings page and scroll to the Web SDK section.

2) Callback URL is auto-populated. This is as a unique identifier for your business.

3) Then enter the Secret Key which is used to authenticate your business.

4) Finally enter the Webhook URL. This is the URL the notifications will be sent as a request to.

5) Save the configuration and activate it by turning the switch on next to the partner you want to setup the bot for.
