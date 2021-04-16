---
title: Setting up WhatsApp Account
---

Before we start WhatsApp integration we need to get the **business** and **phone number** approved. The steps involved are:

- **Step 1: Apply for access:** Whatsapp Business APIs are only available to approved businesses. Businesses can apply for approval by filling a questionnaire and submit to us and we will get the business approval as a WhatsApp partner.

- **Step 2: Procure a number:** After getting approval, the next step is to connect a number. The number should be a fresh number with no prior WhatsApp account associated with it. The number can be a mobile number, landline number, or even an IVR number. The only restriction is that it should also be capable of either receiving an **SMS** or a **Call** for OTP verification.

Because of end-to-end encryption requirements, WhatsApp requires that business API of any enterprise business to be hosted as a separate service. Whatsapp provides a set of Docker images with the business API setup which will be setup end to end by Haptik. Production level setup with HA, alerting, etc. will be done.

Post setup of the WhatsApp system, the number will be verified using a certificate from **Facebook Business manager** & **Two Factor Authentication Pin**. The number will be registered on the WhatsApp system by Haptik. (Number needs to be online to receive OTP)

There are rate limits on a WhatsApp standalone setup. It is around 20 messages/sec. So if you have a high volume you might have to setup a multi-connect cluster to handle the load.

> **Why do we need a setup?**
> 
> A WhatsApp business account lets your business use the WhatsApp Business API to communicate directly with your customers.

### Step 1: Create a Facebook Business Manager

In order to create a WhatsApp Account, the brand must already have a **Facebook Business Manager** set-up. 

**Facebook Business Manager** is free to use. To start, first make sure that you have a personal (to the organization) Facebook account to confirm your identity.

Next, sign up for Business Manager:

1. Go to [**business.facebook.com**](business.facebook.com)
2. Click **Create Account**
3. Enter a **name** for your business, select the **primary page** and enter **your name** and **work email address**

> If you don't yet have a Page for your business, click [**here**](https://docs.haptik.ai/facebook/admin-deploy) to know how to create a new page.
> 
Move through the rest of the onboarding flow by entering the rest of the required fields.

### Step 2: Verify Facebook Business Manager

You need to complete business verification to send a message from the **WhatsApp Business Account**

To start the verification process: 

1. Go to **Security Center**, and click **Start Verification** in the **Business Verification** section
2. Enter your business details and click **Next**
3. Verify the **Legal Business Name** and upload official documents that may be required
4. Verify the **Business Address** or **Phone Number** by uploading a document that shows both the legal name of your business and the mailing address or phone number shown on the screen

> Upload an official document that matches the business’s legal name you entered. Any discrepancy in the document name will lead to rejection
The verification button may be greyed out prior to starting the onboarding process. Share the BM Id with team Haptik and we will enable the option.
> Read [**here**](https://www.facebook.com/business/help/2058515294227817?id=180505742745347) to know more about the verification process.

![image](https://user-images.githubusercontent.com/75118325/114120622-79602980-990a-11eb-8a78-48dc25f6e673.png)

### Step 3: Share Verified Facebook Business Manager ID with Haptik

Haptik will require the **15 or 16 digit numeric Facebook Business Manager ID** in order to create a WhatsApp Account.

To find your Facebook Business Manager ID - 

1. Go to **Business Settings**
2. Click Business Info
3. Below **Business Manager Info**, you'll see your ID number

![image](https://user-images.githubusercontent.com/75118325/114119542-7bc18400-9908-11eb-8ad3-301b5b090274.png)

### Step 4: Haptik will create the WhatsApp Business Account

Haptik can now create your WhatsApp Business Account using your **Legal Business Name** and **Facebook Business Manager ID**.

### Step 5: Business needs to approve request for Haptik

Once the WhatsApp account is created, you will have to accept the **Invitation from Jio Haptik** to send messages on your behalf on the business. 
Please follow the steps to approve the request:

1. Go to [**business.facebook.com**](business.facebook.com)
2. Click on **Business Settings**
3. Now select **Requests**
4. You will see a **pending request**
5. Click on **Approve**

Note: Once you approve the request, your WhatsApp account is set-up.
The account will not be approved if your Business Manager is not verified.

![image](https://user-images.githubusercontent.com/75118325/114120866-fb505280-990a-11eb-8f60-2c86641df10c.png)

Once the setup is complete, we will now see how to deploy the using Haptik Platform.
