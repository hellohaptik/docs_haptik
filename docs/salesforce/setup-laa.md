---
title: Configuring Live Agent Integration
---

Start by navigating to **Service Setup Home** page on your Salesforce account, click on **View All** option. A pop up opens up. Select the **Chat with Customers** option.

![image](https://user-images.githubusercontent.com/75118325/114341439-6bfba700-9b77-11eb-92c3-f28a3425b2dc.png)

A widget will open to begin the team setup.

The steps to setup the team are as follows - 

1. Provide the **Queue name** and **Team name**.
2. Select the **members** you want to add to the team.
3. Provide a **Priority**. If you have multiple queues, priority will help the routing configuration to prioritize a queue.
4. Adjust the chat workload by providing the Work Item Size and Agent Capacity -

   For example, 1 chat can be considered as 1 work item and agent capacity is set at 10 i.e. 1 agent can handle 10 chats at a time.

5. Provide the secured (https) webpage where you will be deploying the IVA.

> Note: This link won't be used in our integration anywhere since Haptik SDK will be directly integrated with your platform.

6. Select the type as **Service**.
7. Keep the offline support toggle **off** here. You will need to configure the offline message  from Haptik platform as mentioned in the documentation later.
8. You will get a code snippet for integration on your platform - skip this step since Haptik's integration on your platform will handle live agent integration automatically.

## Connect the Haptik Platform to Salesforce using credentials

On Haptik Platform, navigate to **Business Manager** and open the **Platform Deployment** settings, as shown below - 

Select **Salesforce Agent Chat** from the **Platform** drop down list

![image](https://user-images.githubusercontent.com/75118325/114354148-76c03700-9b8b-11eb-837c-ac41d255521c.png)

You will need to copy the following keys from your **Salesforce Setup** to **Haptik's Platform Deployment** - 

* **API Endpoint**: To get this value, from Setup, search for Chat Settings and copy the hostname from the API Endpoint.

![image](https://user-images.githubusercontent.com/75118325/114354962-89873b80-9b8c-11eb-9a90-faa42118f652.png)

Provide the API Endpoint as the URL on Haptik Platform, as shown below - 

![image](https://user-images.githubusercontent.com/75118325/114355372-03b7c000-9b8d-11eb-93b0-34f15afa0e8b.png)

* **Salesforce Organization ID**: To get this value, from Setup, search for Company Information and copy the Salesforce Organization ID.

![image](https://user-images.githubusercontent.com/75118325/114359476-a5411080-9b91-11eb-96f4-64ac71090907.png)

Provide the Salesforce Organization ID as the URL on Haptik Platform, as shown below - 

![image](https://user-images.githubusercontent.com/75118325/114359631-cdc90a80-9b91-11eb-8f5f-2250bb49a0d7.png)

* **Deployment ID**:  To get this value, from Setup, select Chat | Deployments. The script at the bottom of the page contains a call to the liveagent.init function with the pod, the deploymentId, and orgId as arguments. Copy the **deploymentId** value.

![image](https://user-images.githubusercontent.com/75118325/114519873-7a70be00-9c5e-11eb-9297-c2ed36dd7a98.png)

Provide the Deployment ID as the URL on Haptik Platform, as shown below - 

![image](https://user-images.githubusercontent.com/75118325/114520119-ba37a580-9c5e-11eb-93af-e9c944803cc7.png)

* **Button ID**: The agent queue created earlier is identified by a button ID. To get this value, from Setup, search for Chat Buttons and select Chat Buttons & Invitations. Copy the id for the button from the JavaScript snippet 

Provide the Button ID as the URL on Haptik Platform, as shown below - 

![image](https://user-images.githubusercontent.com/75118325/114524061-852d5200-9c62-11eb-86dc-323dc8d4a4a0.png)

* **Provide Automated Messages**:
  * **Chat Request Fail** message is sent to the user when the request to connect with an agent fails.
  * **Chat Request Pending** message is sent when all agents are busy and cannot take new chat at the moment.
  * **Chat Ended** message is sent to the user when the agent closes the chat from his/her end.

![image](https://user-images.githubusercontent.com/75118325/114524898-3e8c2780-9c63-11eb-90dd-c7b73a099b88.png)

> To know how to transfer the user to an agent on Salesforce, read [**here**](https://docs.haptik.ai/salesforce/build-laa).
