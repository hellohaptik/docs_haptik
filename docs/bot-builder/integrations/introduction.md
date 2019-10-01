---
title: Introduction
---

## What are Integrations

Integrations allow you to connect your bot to external services to perform dynamic operations like fetching data, posting data or performing some business logic over the collected entities from the bot.

## Types of Integrations

Haptik's bot builder tool supports two types of integrations. They are 

1) Integrations via Custom Code
2) Integrations via Webhooks

### Integrations via Custom Code

In this mode of integration, you can write custom python code to communicate with the external service and execute the business logic.

You can read more about the Custom Code Integration [here](https://docs.haptik.ai/bot-builder/integrations/integrating-custom-code)

### Integrations via API

In this mode of integration, you provide an API URL to which the entity data will be passed as a POST request with a JSON payload.

The API URL is then expected to return the bot response in a JSON format.

You can read more about the API Integrations [here](https://docs.haptik.ai/bot-builder/integrations/integrating-apis)

## Choosing the type of Integration

It is important to choose the right type of integration for your use case as this will increase the speed of shipping the bot and also help in long term maintainability.

### When to use Custom Code Executor

In most of the cases you should be using Custom Code Executor. Here are some sample scenarios where you should be using the code executor:

* Integrating with APIs from external providers where they have their own request and response formats.
  
* Performing business logic validations or calculations on the collected entities.
  
* Posting or fetching data from external data stores or services.


### When to use API integrations

This should only be used in very complex cases where a middleware service needs to be built or the code is too complicated. Some scenarios where you should be using the API integrations are:

* OTP verification

* Having Custom authentication and data storage requirements

