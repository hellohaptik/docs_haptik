---
title: Platforms Deployment
---

## How to Deploy the Bot to External Platforms?

After you have created your bot and tested it locally, you can connect the bot to external platforms like Facebook Messenger, Skype, Whatsapp, Webhooks etc. 

Once you have connected the bot to an external platform like Facebook Messenger, users of your bot will be able to use that platform to chat with your bot.

**NOTE:** The businesses and bots created on staging can be transferred to production. But this transfer doesn't include platform settings. This means that platform settings have to be configured explicitly for both the environments as that is not transferred.

You can use the *Platform Deployment* sub-section of the Partner specific area in Business Manager. Here's how you can open this section

1) Go to the Business Manager section of the Conversation Studio tool from the left Navigation Bar.

![Businsess Manager](assets/platform_deployments_business_manager.png)

2) Open the business of the bot you want to connect to external platform and navigate to **Platform Deployment** settings

![Platform Settings](assets/PD.png)

Using the Platform Settings you can easily connect your bot to any of the following external platforms:

* Facebook Messenger
* Jio
* Bot API
* WhatsApp
* Web SDK
* Android SDK
* iOS SDK

## Deploying to Facebook Messenger

Before connecting your Conversation Studio bot to Facebook Messenger there are a few pre-requisites. 

### Pre-requisites

1) Create an application on the [Facebook developers portal](https://developers.facebook.com).

![Facebook App Creation](assets/platform_deployments_facebook_app_create.png)

2) Go to the Dashboard section of your application and note down the App ID and App Secret of your application. 

![App Credentials](assets/platform_deployments_app_credentials.png)

3) Click on the Products option in the left navigation menu and setup Messenger.  

![Messenger Product Selection](assets/platform_deployments_facebook_messenger_product_setup.png)

4) Inside Messenger settings scroll down to the Token Generation section and generate token for the facebook page you want to connect your bot to.  

![Page Access Token](assets/platform_deployments_page_access_token.png)

Once you have completed all the pre-requisite steps, you can go ahead with connecting your newly created facebook application with Bot Builder.

You can read about it in detail [here](https://docs.haptik.ai/other/facebook).

### Connecting to Conversation Studio

1) On the Platform Settings screen in Conversation Studio, go to Facebook.

2) Callback URL will be auto-generated.  

3) Enter the **access token** and the **app secret key** generated from the pre-requisites steps.

4) Finally add a unique secret challenge key of your choice.   After adding the details turn the switch on to activate the connection.

5) Go back to the facebook developer application and scroll down to the webhook section.

6) Click on Setup Webhook, then enter <domain_name>/fb/<any_identifier> in the callback url. The domain name will be provided by the Haptik team. Use the same identifier that you used in bot's callback url.

7) Enter the secret_challenge_key previously setup in the verify token field.

8) Choose the messages and message_postbacks checkboxes in Subscription Fields and click on `Verify and Save`.

![Webhook Setup](assets/platform_deployments_webhook_setup.png)

9) After saving your webhook, subscribe it to the page you want to connect your bot to.  

![Webhook Subscribe](assets/platform_deployments_webhook_subscription.png)

The connection should be now setup and we can go ahead and test the bot.

### Testing the Bot on Messenger

1) Open Messenger and search for the page you connected the bot to.

2) Start chatting with the page and test out your bot.  
![Bot Testing](assets/platform_deployments_bot_testing.png)

## Deploying to Jio

To connect your bot to Jio open the platform settings section in the business manager and navigate to Jio. Follow these steps to connect the bot:

1) Callback URL is auto-generated

2) Enter the access token provided by the Jio team.

3) Activate the connection by clicking on the switch and save the configuration.

4) Share the full callback url <domain_name>/jio/<any_identifier> using the same identifier as before with the Jio team. The domain name will be provided by Haptik team.

## Deploying using BotAPI

If you want to use a custom platform or want to connect to a platform not currently supported you can use the BotAPI (Webhook) Integration. Briefly this is how the webhook integration works:

1) Your application receives the message from the user.

2) It then sends a POST request with that message to the callback URL of the bot.

3) Haptik processes the message and sends a response to the webhook URL of your application. 

4) Your application listens to the webhook and responds to the user.

![Webhook UML](assets/platform_deployments_webhook_uml.png)

You can get more detailed information about the request/response parameters and schema [here](https://docs.haptik.ai/webhooks/).

### Setting up the connection

1) Go to the Platform Settings page and scroll to the BotAPI section.

2) Callback URL and Token are already populated. Enter the Webhook URL and Secret Key. The Secret Key and Access Token help with authenticating your server with Haptik.

3) Enable the Webhook endpoint.

4) If needed enable email alerts and enter the list of emails you want the alerts sent to.

5) Save the configuration and activate it by turning the switch on next to the partner you want to setup the bot for.

### Testing the connection

You can test the connection by making a POST request to the callback URL. After making the request you should get a reply sent as a request on the webhook URL setup by you.

## Deploying to Whatsapp

Conversation Studio also lets you connect your bot to whatsapp. To make this setup there are a few pre-requisites.

### Pre-Requisites for Whatsapp Integration

You can read about it in detail [here](https://docs.haptik.ai/whatsapp/).

### Complete the Connection on Conversation Studio

On the Platform Settings screen go to Whatsapp, callback url will be auto-populated. Haptik team will help you set up this page. Contact your Haptik SPOC for the rest of the fields.

### Test the bot on whatsapp

You can test the bot by sending whatsapp messages to the number. 

### Using your number

To use your own brand name, phone number, and custom message templates, your account must first be approved by WhatsApp.

## Sending Notifications in a Bot with Web SDK Integration

If you integrate your bot into an Android or iOS app using Web SDK then it is not possible to send push notifications out of the box. In such cases if you want to send push notifications you can use the Web SDK settings from the platform deployments page.

### Setting up notifications

1) Go to the Platform Settings page and scroll to the Web SDK section.

2) Callback URL is auto-populated. This is as a unique identifier for your business.

3) Then enter the Secret Key which is used to authenticate your business.

4) Finally enter the Webhook URL. This is the URL the notifications will be sent as a request to.

5) Save the configuration and activate it by turning the switch on next to the partner you want to setup the bot for.

![Web SDK settings](assets/PD1.png)

## SDK Integrations

You can read more about Web SDK integrations [here](https://docs.haptik.ai/web-sdk/).

You can read more about Android SDK integrations [here](https://docs.haptik.ai/android-sdk/) and iOS SDK integrations [here](https://docs.haptik.ai/ios-sdk/).


