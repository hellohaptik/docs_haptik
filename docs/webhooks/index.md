---
title: What is a Webhook
---

Webhooks provide functionality where a provider application can notify a client-side application when a new event has occurred on the provider's server.

Webhooks are "user-defined HTTP/S callbacks", that allows two applications to communicate automatically.

A key difference between an API endpoint and a webhook:

In APIs, the client-side application calls the server-side application to retrieve some sort of information. Whereas, in the case of webhooks it is the server-side that calls the client-side application when a particular server-side event occurs.

## How does it work?

If you want to use a custom platform or want to connect to a platform not currently supported, you can use the BotAPI (Webhook) Integration. Briefly, this is how the webhook integration works:

1. Your application receives the message from the user.
2. It then sends a **POST** request with that message to the callback URL of Conversation Studio on the Haptik Platform.
3. Haptik Platform processes the message and sends a response to the webhook URL of your application.
4. Your application listens to the webhook and responds to the user.

![image](https://user-images.githubusercontent.com/75118325/114320600-3b464e00-9b34-11eb-91cb-847b2048378d.png)


