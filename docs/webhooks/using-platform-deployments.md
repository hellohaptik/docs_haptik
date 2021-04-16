---
title: Using Platform Deployments
---

## Integrating using Platform Deployments
You can easily set up webhooks for your bot by using the platform deployments page inside Business Manager of the Conversation Studio tool.

The platform deployments page provides a graphical interface to configure these settings.

You need to follow the below steps
1. Go to the **Platform Deployments** section of **Channels** page and select Bot API as **Platform**.
2. **Callback URL** and **Token** are already populated. 
3. Enter the **Webhook URL** and **Secret Key**. The Secret Key and Access Token help with authenticating your server with Conversation Studio. 

   **Webhook URL** is the URL where you want to receive the request. 

   You can use any online key generatory to create the **Secret Key**.

4. Enable the Webhook endpoint.
5. If needed enable email alerts and enter the list of emails you want the alerts sent to.
6. Save the configuration and activate it by turning the switch on next to the partner you want to setup the bot for.

![image](https://user-images.githubusercontent.com/75118325/114320822-6ed5a800-9b35-11eb-9047-7c4422d0006c.png)

**Testing the connection**

You can test the connection by making a POST request to the Callback URL. After making the request you should get a reply sent as a request on the webhook URL setup by you.
