---
title: Zendesk Messaging
---

This guide will help you to connect Haptik bot Zenchat Web SDK to handle live agent integration in Zenchat.

### Step 1: Creating API and SDKs in Zenchat dashboard

On the Zenchat Dashboard, click on the **Apps** option in the top right corner and select **Chat**.

![image](https://user-images.githubusercontent.com/75118325/116492749-af198200-a8ba-11eb-8ae4-bb36c16ab51e.png)

Navigate to **Settings -> Accounts -> API & SDKs** section

![image](https://user-images.githubusercontent.com/75118325/116492907-19322700-a8bb-11eb-9ef5-399abb27a9fc.png)

Click on **Add API client**. Here, provide the following details - 

* **Client Name**
* **Company Name**
* **Redirect URLs**
  * Here, provide the following link -
  
   `https://staging-messenger.haptikapi.com/third_party_integrations/v1/zendesk_live_chat/generate_token/<BUSINESS_ID>`
    * Replace the <BUSINESS_ID> with the bots business id. To know how to get the business id for your bot, click [**here**](https://docs.haptik.ai/bot-builder/basic/sharebot#what-does-the-share-option-do).
    * The URL would resemble this format - 
    
    `https://staging-messenger.haptikapi.com/third_party_integrations/v1/zendesk_live_chat/generate_authorize_url/xxxx`

Once the API Client is added, a pop-up will appear. Copy these keys.

![image](https://user-images.githubusercontent.com/75118325/116493400-4c28ea80-a8bc-11eb-841a-2bcef3215ef8.png)

### Step 2: Provide the keys on Haptik Platform

In the **Business Manager** section of the bot, you can now provide the keys acquired in Step 1.

Navigate to **Platform Deployment** on the Business Manager, under **Channels** section and select the Platform as **Zendesk Live Chat**.

Here, provide the following keys - 
* **ZD Client ID**: This is the **Client ID** from the Zendesk API Client, created in step 1.
* **Client Name**: This is the Client name provided in step 1
* **Subdomain**: This will the Zendesk subdomain
  * For example, if this value is `haptik`, the URL will be `https://haptik.zendesk.com/`
* **Client Secret**: This is the **Client Secret** from the Zendesk API Client, created in step 1.
* **Authorization URL**: Open the redirect URL from Step 1 in your browser. You will get a JSON response 

![image](https://user-images.githubusercontent.com/75118325/116494271-1a188800-a8be-11eb-9db8-63bd8bce47e0.png)

  * Provide the URL from **authorize_url** in the **Authorization URL** field.
  * Copy this **authorize_url** and open it in your browser, it will redirect to the zendesk page where zendesk asks to allow permissions to the client. Click Allow here.

![image](https://user-images.githubusercontent.com/75118325/116494457-7c718880-a8be-11eb-8f74-57b8fdf6d55c.png)

After clicking on **Allow** it will be redirected to an empty screen. Now the OAuth flow is completed successfully.

### Step 3: Starting websocket connection

**This will be completed by Haptik.**

Once the steps are executed, you can now test the connection.
