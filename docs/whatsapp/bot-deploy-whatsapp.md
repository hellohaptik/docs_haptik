---
title: Deploy Bot to WhatsApp
---

You can use the `Platform Settings` section of the bot builder tool to deploy your bot on Whatsapp. You can read more about the section [here](https://docs.haptik.ai/bot-builder/basic/platforms-deployment).

The first step is to build the bot using the bot builder tool. This is similar to buildind any other bot. The only difference is that there is a limited set of supported message types in case of a WhatsApp bot.

#### Supported Message Types
Because of the platform limitations many HSL elements from the bot builder tool will not work on WhatsApp.

Here's the list of HSLs that are currently supported:
  
* Text Message
* Image HSL 

#### Connecting through Platform Deployments
After the bot is built you can connect it to the Whatsapp number through the platform deployments section of the bot builder tool.

Once the technical setup mentioned in the previous section is completed, the DevOps/Platform team will provide the following details:

* Callback URL
* Webhook
* Whatsapp Username
* Whatsapp Password
* Token

After you receive these values you just have to enter them in the relevant fields in the Whatsapp section of the Platform Settings as shown below.

![Platform Settings](assets/platform_settings.png)

After adding the values save the settings and your bot should now work on the connected WhatsApp number.