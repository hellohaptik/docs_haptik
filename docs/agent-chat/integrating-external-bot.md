---
title: Integrating with External Bot
---

## Why?
There might be times when there is an existing bot with a flow already built on another platform or through custom code. It is possible to connect this external bot flow to the haptik tools through the bot builder tool.


## Steps to integrate

### Using Webhooks
> Note: This is the recommended way to integrate with an external bot

This is a straigthforward method where the client can integrate with haptik's tool using simple webhooks.

For the purposes of the integration, haptik will provide the client with the following data:
- client_id
- token
- webhook URL

The client can then use this data for the integration. Here's how the integration will work:

1) When the client wants to transfer the chat to an agent they perform the following actions:
 * Create a Haptik User - https://docs.haptik.ai/webhooks/create-haptik-user
 * Send a message to Haptik - https://docs.haptik.ai/webhooks/send-message-to-haptik. This creates a new message in agent chat and assigns the chat to an agent.

2) The client also needs to provide a webhook of their own where the responses from the agent will be sent. Haptik will send the agent responses to this webhook endpoint with the following paylaod - https://docs.haptik.ai/webhooks/webhook-payload. 

3) Client processes the messages received on the webhook and forwards it to the user who sent the message.