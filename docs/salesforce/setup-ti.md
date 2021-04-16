---
title: Configuring Ticketing Integration
---

Salesforce allows business to store user information such as their name, email, phone number and so on. It then helps businesses to track their users interaction and activity with the business.

## Create a Connected App

Firstly, from the Salesforce **Setup**, you will have to create a new **Connected App**. This App will help Haptik Platform to fetch users data from your setup on Saleforce.

**Step 1:** In your **Setup**, search for **App Manager** and then click on **New Connected App**.

![image](https://user-images.githubusercontent.com/75118325/114718464-a1f58280-9d53-11eb-803b-7c536679e589.png)

**Step 2:** Provide the basic information and API details.

Enable the **Use digital signatures checkbox** and update the certificate file.

If you have generated the private key and crt file, then upload the crt file and share the private key with Haptik.

If you have not generated the crt file, then Haptik will generate private key and crt file and will share the crt file with you to upload it on the connected app.

![image](https://user-images.githubusercontent.com/75118325/114718899-15978f80-9d54-11eb-827b-df76673cee99.png)

![image](https://user-images.githubusercontent.com/75118325/114760201-b39f5000-9d7c-11eb-977c-7ed7a86778f3.png)

> Clients should add this https://login.salesforce.com/services/oauth2/success callback url while creating the app.
> 
> OAuth scopes which needs to be added for app are - 
> * Allow access to your unique identifier.	
> * Perform requests on your behalf at any time.
> * Provide access to your data via the Web.
> * Access and manage your data.
> * Full Access (To access features like create lead).
> 

* **Step 3:** Navigate to the below URL, to authorize the app.

`URL:` `https://<salesforce_domain>/services/oauth2/authorize?response_type=token&client_id=<client_id>&redirect_uri=https://login.salesforce.com/services/oauth2/success
`
> Replace the **<salesforce_domain>** with your domain name and **<client_id>** with the **Consumer Key**
> 

* **Step 4:** Share the **clientId**(consumer key) and **username** used for creating the connected application with Haptik.

> To know how to fetch and post user data, read [**here**](https://docs.haptik.ai/salesforce/build-integration).
