---
title: Getting Started
---

## Overview
WhatsApp helps more than 1 billion people connect and share with the people they care about. WhatsApp is a simple, secure, and reliable way for businesses to reach their customers all over the world. 

# Features
The WhatsApp Business API Client supports a subset of the features provided by the WhatsApp applications you already know from Android, iOS, Web and other platforms including end-to-end encryption. The difference is that this application can be deployed on a server, providing a local API that allows you to programmatically send and receive messages and integrate this workflow with your own systems (CRMs, customer care, etc.).

Please note that if you use anything other than the official WhatsApp Business API or other official WhatsApp tools, Whatsapp reserves the right to limit or remove your access to WhatsApp as this violates their policies.

WhatsApp Business API provides the following features:

* **Industry Information** - People can now easily identify your business by its category or industry and find out more information (i.e., hours of operation, website, location, description).
* **Send and Receive** - Enable two-way high value conversations with customers.
* **Message Templates** - Create message formats that are needed for sending notifications to users.

      Bot builders can use %full_name in a Bot says response for WhatsApp bots.
    
* **Username** - Collect WhatsApp username to add authenticity, and improved Click through rate. Bot builders will have access to the WhatsApp username as they can use the username in a `Bot Says` response using name or fullname entities. Support agents will also have access to the WhatsApp username on our `Live Chat agent` to personalize communication while interacting with end users. 

> Note: We only get the username, when the user sends a message. Username is a part of the payload with user's message. The username for all existing users in the system will not change and remain as is. And when we are sending HSMs to the end user for the first time, we would not get the username since we get this username value with the user's message only. 
      
* **Location** - Accepting user's location on WhatsApp would now be possible. WhatsApp has an option for users to share their location. And, Haptik can process the location input. This means we can now easily build use cases where a user has to send their location on Whatsapp. We will capture this location in origin_lng and origin_lat entities. 

> Note for Bot Builder: Please do not use the Location Picker from HSL Builder to get location from WhatsApp. Send it as a text message to the user asking for location from the user.
