---
title: Regression Testing
---

### Introduction

At Haptik we design, develop and test bots every day. These bots are spread over multiple domains like e-commerce, insurance, gaming, etc. Some of these bots are text-based, some voice-based and some support a mix of both.

Our objective is not just to make bots live in production, but also to make them robust and fail-proof, i.e. to deliver bots with minimal, or zero, errors in production. It is a huge responsibility to ship these bots with minimal errors and maintain quality.

The users can come and say anything they feel like on the bot. While testing you need to figure out if the bot should have been able to reply to the users’ query and if yes, then was it the right reply. 

A few things that go into this are:

- Testing of end-end user flows for the user queries without failing
- Validating the business logic the bot executed
- General Responses (Greeting, positive feedbacks, negative feedbacks etc.)
- Testing functionality of individual Tasks
- Checking of UI of chat elements, images, grammar, personality, etc.

### Challenges while testing a bot

There are multiple challenges we face while testing a bot

1. Wide Scope of testing
 
  - Unlike other types of testing, bot testing depends on multiple factors - domain for which the chatbot is built, target users, target age group, type of conversation that a chatbot is supposed to have with the user (casual or professional). Keeping all these factors in mind, there is a large number of permutations and combinations to think off. Running test cases for each of these scenarios is again a tricky and tedious task.
 
  - While testing the bots you should also focus on replies given by the bot for free form queries.
 
  - The response that was given by the bot when it does not understand the user queries. 
 
2. Time consuming and requirement of increased manpower

Everytime you change existing intents in the bot or add new intents in the bot, you would need to test the entire bot again as new or updated intents might affect the existing intents.

To overcome these day to day challenges and deploy a high-quality bot in the shortest possible time,  we have come up with an automatic way of testing - Bot QA Tool.

> **The beauty of this tool is that it is independent of the copy of the messages.**

### How to use Haptik's Bot QA Tool

Haptik's Bot QA Tool makes regression testing of a bot scaleable and thus saves time. It mainly depends on the nodes traversal and not copy of messages. 

It is accessible through APIs. There are two main APIs under this tool -

1. Generate API
2. Run API

For triggering these APIs, you need the following values -

1. Mock conversation on the bot with all testing scenarios. You can read more about conversations [**here**](https://docs.haptik.ai/bot-analytics/overview#conversations).

2. Collection ID - You can get the Collection ID from the chat link as shown in the image below. Chat links are available on Intelligent Analytics's Message Analysis page.

![collection_id](/assets/collection_id.png)

3. Client ID - You can get the Client ID from the bot credentials pop. You can open the bot credentials pop using the share icon on the bot screen as shown below.

![botcredentials](/assets/botcredentials.png)

Once the popup opens, you can find the Client ID here as shown below.

![clientid](/assets/clientid.png)

4. Business_via_name - You can get the business_via_name from the Business Manager page of your bot as shown below.

![businessvianame](/assets/businessvianame.png)

#### **GENERATE API**

GENERATE API helps us to create a CSV of test cases. We need to send the collection id, conversation ids, email id, business-via-name in the request and the API will return the **Bot QA Testcases CSV** over email with all test cases.

**API URL** - https://staging.hellohaptik.com/bot_qa/business-via-name/generate

**Headers** -

- Authorization: Bearer <TOKEN>
- client-id: <CLIENT_ID>
- Content-Type: application/json

**Body for GENERATE API**

{"collection_id": , "conversation_id": [1], "email_id": "<email-id>"}
 
For multiple conversations

{"collection_id": , "conversation_id": [1,2], "email_id": "<email-id>"}
 
The email-id is of the person who would receive the CSV over email. The CSV would be named in the format of **business-via-name_collid_timestamp.csv**.

#### **RUN API**

RUN API helps us to execute test cases under **Bot QA Testcases CSV** and provides a result CSV. For running this API, we would send the file, businessvianame, email-id and the API will return the **Bot QA Result CSV** with the success/failure for all test cases over email.

**API URL** - https://staging.hellohaptik.com/bot_qa/business-via-name/run

**Headers** -

- Authorization: Bearer <TOKEN>
- client-id: <CLIENT_ID>

**Body for RUN API**

{"email": "<email-id>", "file": "<filename>"}
 
The email-id is of the person who would receive the Bot QA Result CSV over email. Filename is the name of the Bot QA Testcases CSV file.

If the API gets executed successfully, you get the below email -

![successmail](/assets/successmail.png)

If the API does not execute successfully, you get the below email -

![failuremail](/assets/failuremail.png)

Using both these APIs, we will be able to run our regression test suites and get the desired results everytime we make a bot live. We can keep making modifications in the bot to remove the failure cases.
