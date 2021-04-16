---
title: Configure Facebook Credentials
---

After an Admin has been added in the app, they will have to continue with certain configurations.

## Step 1: Create a Page

If a Facebook page has not been created yet, Admin can create the page where the bot will be live.

On the left sidebar, under **Products**, there will be **Messenger** option. Go to the **Settings** page and when you scroll down, you will be able to see the following screen - 

![image](https://user-images.githubusercontent.com/75118325/113734840-50c50d80-9719-11eb-8f4e-3502243d9a7f.png)

Click on **Add or Remove Pages** button.

## Step 2: Generate Access Token

The access token from Facebook will be required on the Haptik Platform for the setup of bot.

You will be able to generate an access token for a Page if:
1. You are one of the Page admins, and
2. The app has been granted the Page's permission to manage and access Page conversations in Messenger.

![image](https://user-images.githubusercontent.com/75118325/113735731-2758b180-971a-11eb-8bb5-38f3629c597b.png)

Click on the **Generate Token** button. Facebook will ask to accept the terms. Once you click on **I Understand** checkbox, the Access Token will be available for use. 

> Copy this Access Token and save in a secure place. We will be using this Access Token on the Haptik Platform.
> **Do not re-generate the Access Token** as generating new tokens every time will depreciate the previously generated Access Token and the Access Token will have to changed on the Haptik Platform as well.

![image](https://user-images.githubusercontent.com/75118325/113736042-6850c600-971a-11eb-9a11-fc2405204103.png)

## Step 3: Setting up credentials on Haptik Platform

Setting up the credentials will connect the Haptik bot on the required Facebook page. These credentials will need to be set up in the **Business Manager** section of the Haptik Platform. 

On the **Production Environment**, navigate to [**Business Manager**](https://api.haptikapi.com/mogambo/#/businesses). Search for your business name and click on it.

Under **Channels** section, there is a **Platform Deployment** tab. Select the **Platform** as **Facebook** to set up the following credentials.

The credentails required are - 

### 1. Access Token from Facebook

This is the Access Token generated in Step 2.

Paste the **Access Token** in the **Access Token** field, as shown below - 

![image](https://user-images.githubusercontent.com/75118325/113742963-c385b700-9720-11eb-9292-a50385e07689.png)

### 2. App secret key from Facebook

The is an already generated key for the Facebook app. You can find the **App Secret** key from the **Settings** page of the app, as shown below - 

![image](https://user-images.githubusercontent.com/75118325/113741575-69d0bd00-971f-11eb-839e-4074571af180.png)

Paste the **App Secret Key** in the **App Secret Key** field, as shown below - 

![image](https://user-images.githubusercontent.com/75118325/113742818-9f29da80-9720-11eb-94f2-f5708cb838ba.png)

### 3. Callback URL

The Callback URL is present on the haptik Platform. 

In the **Platform Deplyment** tab, find the **Callback URL** as shown below - 

![image](https://user-images.githubusercontent.com/75118325/113741929-bae0b100-971f-11eb-90d3-877325289754.png)

Copy this Callback URL. This Callback URL will be used in the Facebook App.

### 4. Secret Challenge Key

You can generate the **Secret Challenge Key** by yourself (just like any Strong Password) or use this link to generate a random key [**https://randomkeygen.com/**](https://randomkeygen.com/).

Paste this key in the **Secret Key** field, as shown below - 

![image](https://user-images.githubusercontent.com/75118325/113742620-6853c480-9720-11eb-8f24-607569281df7.png)

## Step 4: Connect the Facebook App to Haptik Platform

You will have to connect the Facebook App to Haptik Platform  to receive messages and other events sent by the Messenger users.

To create the connection, go to **Settings** page of **Messenger** and scroll down a bit to find the **Webhooks** section, as shown below - 

![image](https://user-images.githubusercontent.com/75118325/113744304-3cd1d980-9722-11eb-90c2-ed94da317076.png)

Click on **Add Callback URL** button. Paste the **Callback URL** which you copied from **Business Manager** section of Haptik Platform [(refer point 3 of Step 2)](https://docs.haptik.ai/facebook/admin-deploy#2-app-secret-key-from-facebook) and paste the **Secret Challenge Key** in the **Verify Token** field [(refer point 4 in Step 2)](https://docs.haptik.ai/facebook/admin-deploy#4-secret-challenge-key).

Click on **Verify and Save** button.

> Copy the **Callback URL** from Production Environment.

## Step 5: Subscribe to events

After adding the **Callback URL** you will need to **Subscribe** for the various events to get logs.

In the same **Webhooks** section, once the **Callback URL** is added, a **Add Subscription** button will appear.

![image](https://user-images.githubusercontent.com/75118325/113746708-3cd2d900-9724-11eb-8f37-a440a330f2ec.png)

Select the required events that you want to subscribe to and click on **Save**.

![image](https://user-images.githubusercontent.com/75118325/113746803-58d67a80-9724-11eb-819c-df7e33f9756c.png)

> The above selected events are mandatory events to be checked for the setup process.

## Step 6: Setup a Primary Receiver

You need to enable the App as the **Primary Receiver** for the Page.

Go the **Page Settings**. This is the Page (not the App) where the bot will be live.

![image](https://user-images.githubusercontent.com/75118325/113747554-20836c00-9725-11eb-8dad-5615cb439f67.png)

Click on the **Configure** button.

> **Primary Receiver** would be a bot that can respond to most incoming messages automatically (bot).
> 
> **Secondary Receiver** would route to chat with a live agent or be a specialized app for handling certain request types.

Select the App name from the dropdown besides **Primary Receiver**.

![image](https://user-images.githubusercontent.com/75118325/114992484-6e803880-9eb8-11eb-8385-3c01b7a2ce3d.png)

## Step 7: Confirm green ticks

On the left sidebar, check for green ticks besides **Webhooks and Messenger**. If it is green, you can start testing the bot on the Page.

![image](https://user-images.githubusercontent.com/75118325/113748454-275eae80-9726-11eb-89b3-20f2f024126e.png)

## Step 8: Business Verification

If you are a developer for a business, you'll need to complete **Business Verification** in addition to **App Review** before you can access live data.

Navigate to App **Settings** and look for **Verfication** section.  

![image](https://user-images.githubusercontent.com/75118325/113748774-86bcbe80-9726-11eb-9a67-4718e32d88d9.png)

Click on **Start Verification** button and select the type as **Business Verification**. Create a **Facebook Business Manager** account (if you don't have already) by providing you Business name, your name and email address.

Provide the Business details and complete the verification process.

> To know more about the Business verification process, click [**here**](https://developers.facebook.com/docs/messenger-platform/app-review/).

## Step 9: App Review

To have various permission to access the data related to the Page and App, you can request for **Advanced Access**.

![image](https://user-images.githubusercontent.com/75118325/113751508-a3a6c100-9729-11eb-90da-bbede1f60e6f.png)

The change request depends on the type of permission you want to change. 

For example, the process to change `pages_read_engagement` permission will differ from the process to change `pages_manage_post` because their nature of access is different.

Once these steps are completed, the bot will be able to send responses to the user's messages.

## How to setup the persistent menu? (optional)

The persistent menu allows user to have an always-on user interface element inside Messenger conversations. This is an easy way to help people discover and access the core functionality of your Messenger bot at any point in the conversation.

`URL:` `https://graph.facebook.com/v10.0/me/messenger_profile?access_token=<ACCESS TOKEN>`

> **Copy this access token from Haptik Platform Deployment settings**.

The request body to setup a persistent menu (in JSON) - 

Here,

  **title**: is the text which appears on the Messenger screen.
  
  **payload**: is the text which will be sent once the user clicks on the menu item.

``` JSON
{
    "persistent_menu": [
        {
            "locale": "default",
            "composer_input_disabled": false,
            "call_to_actions": [
                {
                    "type": "postback",
                    "title": "Menu 1",
                    "payload": "Menu 1{task}"
                },
                {
                    "type": "postback",
                    "title": "Menu 2",
                    "payload": "Menu 2{task}"
                },
                {
                    "type": "postback",
                    "title": "Menu 3",
                    "payload": "Menu 3{task}"
                }
            ]
        }
    ]
}
```

## How to setup the Get Started button? (optional)

For a better user experience, Facebook allows us to add a Get Started button which enables the user to start a conversation with the bot.

![image](https://user-images.githubusercontent.com/75118325/114985951-0712ba80-9eb1-11eb-84d5-f2a54332ee32.png)

To enable the **Get Started** button, you will need to send a POST request as demonstrated below - 

`URL:` `https://graph.facebook.com/v10.0/me/messenger_profile?access_token=<ACCESS TOKEN>`

> **Copy this access token from Haptik Platform Deployment settings**.

The request body to send to the above URL (in JSON) - 

Here,

**payload**: is the text which will be sent to the bot when user clicks on the **Get Started** button.

```JSON
{ 
  "get_started":{
    "payload":"Get started"
  }
}
```

Voila! You have now successfully set up you Facebook Page and the bot to reach to you consumers.
