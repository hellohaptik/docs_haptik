---
title: Introduction
id: index
---

## Getting started with **Google Business Messages**

The way we communicate has changed: 75% of consumers now prefer to engage with a brand over private messaging channels versus traditional channels. **Google Business Messages** can help route calls to chat, increase sales, and improve customer satisfaction with CSAT data and feedback.

**Google Business Messages** is a mobile conversational channel that combines entry points on Google Maps, Search, and brand websites to create rich, asynchronous messaging experiences that delight customers and drive business results. It also facilitates the connection between user and a brand. When user searches for your business name or tries to search for your business' contact information, they will be able to see a chat option as **MESSAGE** as shown below - 

![gbm1](https://user-images.githubusercontent.com/75118325/111470175-919ab980-874d-11eb-9771-251a48bdaf58.png)

The **MESSAGE** option is available on all iOS and Android Devices. 

Once the user clicks on the **MESSAGE** option, a conversational screen opens up and the user can start sending their messages.

> Add image here

To know more about Google Business Messages, click [**here**](https://businessmessages.google/).

> **Haptik is a registered `Partner` with Google Platform.**

## Setting up Google Business Messages 

### 1. Create Brand

Brand is the business name. For example, if Jio wants to set up a Google Business Messaging system, we will create a brand named Jio. Brand represents the business. A brand can be created using the [**Business Communications Developer Console**](https://business-communications.sandbox.google.com/?utm_source=/business-communications/business-messages/guides/quickstarts/echo-agent&utm_medium=devsite&utm_campaign=business-messages). 

> As a registered partner, Haptik will be creating the brand for your business.

### 2. Create an Agent

An agent is a Haptik's Intelligent Virtual Assistant (IVA). The agent represents the brand i.e. the business, which users will be having a conversation with. Agents are managed by Haptik (partner).

> To know more about creating brand and agents click [**here**](https://developers.google.com/business-communications/business-messages/guides/set-up/agent).

### 3. Manage Location

If your business is active in various locations, they can be associated with the agent (IVA). This enables users to have a conversation with your brand specific to the location. Google Business Messages identifies locations by Place ID.

There are a few prerequisites to manage location - 

- The brand should have a **Google my business** account.
- The physical **location** should be present in the brands **Google my Business** page and should be verified.
- If there are **multiple locations** for your business, they need to be added in the same Location Group. This location group is present in the **Google my Business Console**. To read more about managing multiple locations, click [**here**](https://developers.google.com/business-communications/business-messages/guides/set-up/locations?method=console#managing_multiple_locations).
- Locations are identified by **Place ID**. Place ID is a unique identifier for a particular location on Google Maps.
For multiple locations, we can use a single place ID from one of the locations in the location group.
To know more about finding out Place ID, click [**here**](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder).

### 4. Verify agents and location

Before we go live with the **Google Business Messages** integration we need to verify the agent with Google and the brand.

The brand SPOC receives an email with the subject: _Please approve `brand name` use for Business Messages_.

Once the brand SPOC replies to this email, Google does a **manual verification** where they check if the agent is associated with the brand or not. In case the agent logo or name is different from the brand name or logo, the verification might be rejected. In such a case, SPOC will have to follow up with Google to get the verification completed.

To know more about the verification process, click [**here**](https://developers.google.com/business-communications/business-messages/guides/deploy/verify?method=console).

### 5. Launch locations and agents

Once the agent is verified for a brand, you can start the development of the IVA using Haptik's Conversation Studio. When the agent is launched, **Google Business Messages** does a quick round of check for all required approvals. After the requirements are met, the agent becomes available for the users within a few hours.

To know more about launching the agent, click [**here**](https://developers.google.com/business-communications/business-messages/guides/deploy/launch?method=console#launch-agent).

> To know in detail about setting up the Google Business Messages, click [**here**](https://developers.google.com/business-communications/business-messages/guides).

Once the Google Business Messages is set up, we will now see the implementation of IVA on Haptik's Conversation Studio.
