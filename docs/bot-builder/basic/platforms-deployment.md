---
title: Supported Platforms
---

## How to Deploy the Bot to External Platforms?
After you have created your bot and tested it locally, you can connect the bot to external platforms like Facebook Messenger, Skype, Whatsapp, Webhooks etc. 

Once you have connected the bot to an external platform like Facebook Messenger, users of your bot will be able to use that platform to chat with your bot.

You can use the Platform Settings section of the Business Manager tool inside Bot Builder. Here's how you can open this section

1) Go to the Business Manager section of the Bot Builder tool from the left Navigation Bar.  
![Businsess Manager](assets/platform_deployments_business_manager.png)

2) Open the business of the bot you want to connect to external platform and navigate to Platform Settings from the inner left navigation menu.  
![Platform Settings](assets/platform_deployments_platform_settings.png)

Using the Platform Settings you can easily connect your bot to any of the following external platforms:

* Facebook Messenger
* Twilio Whatsapp
* Jio
* KooKoo
* Webhook

## Deploying to Facebook Messenger
Before connecting your Bot Builder bot to Facebook Messenger there are a few pre-requisites. 

### Pre-requisites
1) Create an application on the [Facebook developers portal](https://developers.facebook.com).  
![Facebook App Creation](assets/platform_deployments_facebook_app_create.png)
2) Go to the Dashboard section of your application and note down the App ID and App Secret of your application.   
![App Credentials](assets/platform_deployments_app_credentials.png)
3) Click on the Products option in the left navigation menu and setup Messenger.  
![Messenger Product Selection](assets/platform_deployments_facebook_messenger_product_setup.png)
4) Inside Messenger settings scroll down to the Token Generation section and generate token for the facebook page you want to connect your Bot Builder bot to.  
![Page Access Token](assets/platform_deployments_page_access_token.png)

Once you have completed all the pre-requisite steps, you can go ahead with connecting your newly created facebook application with Bot Builder.

### Connecting to Bot Builder

1) On the Platform Settings screen in Bot Builder go to Facebook and scroll down to the partner for which you want to make the connection.
2) Enter the callback URL as fb/<any_identifier>. You can add any unique  identifier like the business name followed by some number.  
3) Then enter the page access token and the app secret generated from the pre-requisites.
4) Finally add a unique secret challenge key of your choice.   After adding the details turn the switch on to activate the connection.  
![Bot Builder Messenger Setup](assets/platform_deployments_connection_Bot Builder.png)
5) Go back to the facebook developer application and scroll down to the webhook section.
6) Click on Setup Webhook, then enter <domain_name>/fb/<any_identifier> in the callback url. The domain name will be provided by the Haptik team. Use the same identifier that you used in Bot Builder's callback url.
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

## Deploying to Twilio Whatsapp
Bot Builder also lets you connect your bot to whatsapp using twilio. To make this setup there are a few pre-requisites.

### Pre-Requisites for Whatsapp Integration
1) Create an account on [twilio](https://twilio.com) or sign into an existing account.
2) Activate the [Twilio Sandbox](https://www.twilio.com/console/sms/whatsapp/sandbox).
3) The Sandbox provides you a shared whatsapp number for you to test the bot.
4) Then connect to your sandbox by sending a whatsapp message with the code to the number provided by twilio.  
![Twilio Whatsapp Connect](assets/platform_deployments_whatsapp_connect.png)
5) After the connection is made, go to the `Sandbox` section from the left navigation pane and enter a callback URL in the `When Message Comes In` field as https://staging-messenger.haptikai/whatsapp/<any_identifier>. You can add any unique  identifier like the business name followed by some number and save the changes.

### Complete the Connection on Bot Builder
1) On the Platform Settings screen go to Twilio Whatsapp, enter the callback url as whatsapp/<any_identifier>. Use the same identifier you used in Twilio sandbox configuration.
2) Enter your twilio credentials which you can find on the [console page](https://www.twilio.com/console) and save the configuration.

### Test the bot on whatsapp
You can test the bot by sending whatsapp messages to the sandbox number provided by Twilio. 

![Whatsapp Test](assets/platform_deployments_whatsapp_test.jpg)

### Using your number instead of Sandbox
To use your own brand name, phone number, and custom message templates, your account must first be approved by WhatsApp. Once you are approved by Whatsapp you can connect it from the [Senders section](https://www.twilio.com/console/sms/whatsapp/senders) in Twilio.

## Deploying to Jio
To connect your Bot Builder bot to Jio open the platform settings section in the business manager and navigate to Jio. Follow these steps to connect the bot:

1) Enter Callback URL as jio/<any_identifier>. You can add any unique  identifier like the business name followed by some number for the partner you want to connect.
2) Enter the access token provided by the Jio team.
3) Activate the connection by clicking on the switch and save the configuration.
4) Share the full callback url <domain_name>/jio/<any_identifier> using the same identifier as before with the Jio team. The domain name will be provided by Haptik team.

## Deploying to KooKoo
KooKoo is a platform that lets you connect your Bot Builder bot to an IVR channel.   
The way it works is:
1) User calls the KooKoo Number assigned to your bot
2) KooKoo then records the message and sends it to a backend server.
3) The backend server then sends specific commands telling KooKoo what to do. (Say out text, Play an audio etc)
4) KooKoo uses these commands to respond to the user.

![Kookoo Explanation](assets/platform_deployments_kookoo_explain.png)

### Setting up connection on Bot Builder
To connect your bot to KooKoo, head to the Platform Settings screen in Bot Builder and select KooKoo and follow these steps:

1) Set the callback url as kookoo/<any_identifier>. You can add any unique  identifier like the business name followed by some number for the partner you want to connect.
2) Set the break message of your choice. This is the message that will be used by KooKoo in case of any failure.
3) Set the Welcome message of your choice. This is the message that will be used by KooKoo when a new user interacts for the first time.
4) Set `silence_period` of your choice. Silence period is a time in seconds which KooKoo should consider as a break with messages. For example, if `silence_period` is set to 3 seconds, then when a user speaks and gives a pause of 3 seconds the message is assumed to be complete and sent to the backend server. It is recommended to keep `silence_period` as 2-3 seconds.
5) Set `max_record_time` of your choice. Max Record Time is the max time in seconds for which KooKoo should keep recording a message before sending to the backend. For example, if you set `max_record_time` to 10 seconds, KooKoo will truncate any message the user says to only 10 seconds before sending to the backend irrespective of the `silence_period` elasping. It is recommended to keep `max_record_time` to 10 seconds.
6) Turn the switch on to activate the connection.

![KooKoo Bot Builder Settings](assets/platform_deployments_kookoo_Bot Builder_settings.png)

### Setup KooKoo Application
To continue setting up our KooKoo connection we need to create a new KooKoo account with the following steps:

1) Open the KooKoo [website](https://www.kookoo.in) and click on Sign Up.
2) Signup by entering your details. In the application URL field enter the callback url as <domain_name>/fb/<any_identifier>. Make sure to use the same identifier as before. The domain name will be provided by Haptik team.

### Testing the Bot on KooKoo
On your KooKoo dashboard you should find Sandbox Phone numbers. You can call any of them to test your bot.

![KooKoo Bot Testing](assets/platform_deployments_kookoo_testing.png)

## Deploying to Webhook
If you want to use a custom platform or want to connect to a platform not currently supported you can use the Webhook Integration. Briefly this is how the webhook integration works:

1) Your application receives the message from the user.
2) It then sends a POST request with that message to the callback URL of Bot Builder.
3) Bot Builder process the message and sends a response to the webhook URL of your application. 
4) Your application listens to the webhook and responds to the user.

![Webhook UML](assets/platform_deployments_webhook_uml.png)

Here's a detailed explanation of how different parts of this process work.

### Logging user message to Haptik
You will first need to get token and secret key from the Haptik team. You will need these credentials to authenticate your webhook requests.

Once you have the credentials you can log a message to Haptik in the following format.

#### Headers
```json
{
    "Authorization": "Bearer <token>",
    "client-id":"<CLIENT_ID>",
    "Content-Type": "application/json"
}
```

* Authorization - The Authorization header of each HTTP request should be “Bearer” followed by your token which will be provided by Haptik
* client-id - The client id for your account which will be provided by Haptik
* Content-Type - application/json

#### Request
```json
{
    "user": {
                "auth_id": "<AUTH_ID>"
            },
    "message_body": "<MESSAGE_BODY>",
    "message_type": 0,
    "business_id": 343
}
```

* auth_id - This is an alphanumeric User identifier from your system
* message_body - The message body containing the message to be sent to the                    bot or agent.
* message_type - This defines the processing pipeline for messages, standard                  messages are of type 0
* business_id - This is a numeric identifier for channel/queue that you wish                 to register the message on.

#### Response
A successful request to the log message sent API will return a 200 status code with a JSON response object. It will contain a unique message id and other metadata about the message.
```json
{
  "message_id": 1411200492,
  "message_body": "<MESSAGE_BODY>",
  "created_at": "2018-10-04T12:41:27.980Z",
  "message_type": 0
}
```
* message_id - message id generated by haptik system
* message_body - message body that was logged in the haptik system
* created_at - ISO timestamp denoting when the message was created in the      haptik system
* message_type - This defines the processing pipeline for messages, standard   messages are of type 0

#### Error Response
If the user with auth_id is not registered, then the API will return a 403 status code.
```json
{
  "error_message": "user is not registered"
}
```
If the Authorization header is missing or invalid, then the API will return a 401 status code.
```json
{
  "error_message": "invalid authorization details"
}
```
#### Sample CURL command
```bash
curl -X POST \
    https://staging-messenger.haptikapi.com/v1.0/log_message_from_user/ \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'client-id: <CLIENT_ID>' \
  -H 'Content-Type: application/json' \
  -d '{
    "message_body": "<MESSAGE_BODY>",
    "business_id": 343,
    "message_type": 0,
    "user": {"auth_id": "<AUTH_ID>"}
}'
```

### Using the request sent to the webhook URL
The Haptik Platform sends an event to your registered webhook whenever a bot or an agent has a message for the user.

**Note:** Your webhook must be a single `HTTPS` endpoint exposed by you that accepts `POST` requests.

All messages sent from Haptik Platform to your registered webhook will always be in `JSON` format.

#### Standard Message Format

A standard message event to emit a message from either an agent or a bot is as follows.
```json
{
  "version": "1.0",
  "timestamp": "2018-10-04T12:41:27.980Z",
  "user": {
    "auth_id": "<AUTH_ID>"
  },
  "business_id": 343,
  "event_name": "message",
  "agent": {
    "id": 4415,
    "name": "gogo",
    "profile_image": "https://assets.haptikapi.com/content/42e123411bk1109823bf.jpg",
    "is_automated": true
  },
  "message": {
    "id": 1982371,
    "body": {
      "text": "Hi",
      "type": "TEXT",
      "data": {
        "quick_replies": []
      }
    }
  }
}
```

You can get more detailed information about the request/response parameters and schema [here](https://docs.haptik.ai/webhooks/).

### Setting up the connection
1) Go to the Platform Settings page and scroll to the Webhook section.
2) Enter the Callback URL, Webhook URL, Secret Key and Access Token. The Secret Key and Access Token help with authenticating your server with Bot Builder.
3) Enable the Webhook endpoint.
4) If needed enable email alerts and enter the list of emails you want the alerts sent to.
5) Save the configuration and activate it by turning the switch on next to the partner you want to setup the bot for.

### Testing the connection
You can test the connection by making a POST request to the callback URL. After making the request you should get a reply sent as a request on the webhook URL setup by you.