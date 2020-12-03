---
title: Bot QA Tool
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

To overcome these day to day challenges and deploy a high-quality bot in the shortest possible time,  we have come up with an automatic way of testing - Bot QA tool.

> **The beauty of this tool is that it is independent of the copy of the messages.**

### How to use Haptik's BOT QA Tool

Haptik's Bot QA Tool makes regression testing of a bot scaleable and thus saves time. It mainly depends on the nodes traversal and not copy of messages. 

It is accessible through APIs. There are two main APIs under this tool -

#### **GENERATE API**

GENERATE API helps us to create a CSV of test cases. We need to send the collection id, conversation id, email id, businessvianame, name of the file in the request and the API will return the **Bot QA Tool Testcases CSV** over email with all test cases.

**API URL** - https://staging.hellohaptik.com/bot_qa/<business via name>/generate

**Headers** -

- Authorization: Bearer <TOKEN>
- client-id: <CLIENT_ID>
- Content-Type: application/json

**Body for GENERATE API**

{ "collection_id ": 629,convesation_id": 1,"email_id":”user@email.com” , "filename":”<filename>” }

Before triggering the GENERATE API, you should do the following -

1. Create test cases by chatting with the bot in a single conversation.
2. Using the chat link, fetch the collection id.

![collection_id](/assets/collection_id.png)

> You can find the chat link from Intelligent Analytics's Message Analysis page.

#### **RUN API**

RUN API helps us to execute test cases under **Bot QA Tool Testcases CSV** and provides a result CSV. For running this API, we would send the file, businessvianame, email-id and the API will return the **Bot QA Tool Result CSV** with the success/failure for all test cases over email.

**API URL** - https://staging.hellohaptik.com/bot_qa/<business via name>/run

**Headers** -

- Authorization: Bearer <TOKEN>
- client-id: <CLIENT_ID>

**Body for RUN API**

{"email": "<EMAIL_ID>","file": "<FILE>"}

If the API gets executed successfully, you get the below email -

![successmail](/assets/successmail.png)

If the API does not execute successfully, you get the below email -

![failuremail](/assets/failuremail.png)

Using both these APIs, we will be able to run our regression test suites and get the desired results everytime we make a bot live. We can keep making modifications in the bot to remove the failure cases.
