---
title: Introduction
id: index
---

## Getting started with **Google Business Messages**

The way we communicate has changed: 75% of consumers now prefer to engage with a brand over private messaging channels versus traditional channels. **Google Business Messages** can help route calls to chat, increase sales, and improve customer satisfaction with CSAT data and feedback.

**Google Business Messages** is a mobile conversational channel that combines entry points on Google Maps, Search, and brand websites to create rich, asynchronous messaging experiences that delight customers and drive business results. It also facilitates the connection between user and a brand. When user searches for your business name or tries to search for your business' contact information, they will be able to see a chat option as **MESSAGE** as shown below - 

![gbm1](https://user-images.githubusercontent.com/75118325/111470175-919ab980-874d-11eb-9771-251a48bdaf58.png)

All GBM entry points (non-local and location based) are available on android. Only location based entry points are available on iOS.

Once the user clicks on the **MESSAGE** option, a conversational screen opens up and the user can start sending their messages.

![Screenshot_20210317-221659_Maps](https://user-images.githubusercontent.com/75118325/111506508-b2740680-876f-11eb-83b1-aecc749ddf50.jpg)

To know more about Google Business Messages, click [**here**](https://developers.google.com/business-communications/business-messages/guides/features).

> **Haptik is a registered `Partner` with Google Platform.**

## Setting up Google Business Messages 

### 1. Create Brand

Brand is the business name. For example, if Jio wants to set up a Google Business Messaging system, we will create a brand named Jio. Brand represents the business. A brand can be created using the [**Business Communications Developer Console**](https://business-communications.sandbox.google.com/?utm_source=/business-communications/business-messages/guides/quickstarts/echo-agent&utm_medium=devsite&utm_campaign=business-messages). 

> As a registered partner, Haptik will be creating the brand for your business.

### 2. Create an Agent

An agent means Haptik's Intelligent Virtual Assistant (IVA). The agent represents the brand i.e. the business, which users will be having a conversation with. Agents are managed by Haptik (partner).

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


### 6. Entry Point

**Google Business Messages** has entry points from organic Google search results on **mobile browsers** and from the **Google Maps** app (for location-based brands).
Entry points are surfaces where users can start conversations with Business Messages agents. Each entry point has a unique appearance and appears in a different place.

> You need to configure all entry points you want to launch your agent on before you verify your agent.

There are two types of entry points:
1. NON_LOCAL Entry Point
2. Location Based Entry Point

### 1. NON_LOCAL Entry Point

This entry point does not rely on location. 

To enable non-local entry points - 

- Update your agent with the NON_LOCAL entry point group, and specify values for fields in the NonLocalConfig object.
- Verify your agent.

Business Messages approves your agent for various entry points based on the information you specify in **NonLocalConfig**.

> Note: You need to configure all entry points you want to launch your agent on before you verify your agent.

- Launch your agent.

There are 4 different types NON_LOCAL Entry Point.

**1. Featured snippets**

This entry point enables conversations with your agent when a user finds contact details through Search.

![image](https://user-images.githubusercontent.com/75118325/114896619-1ef52a80-9e2e-11eb-831c-8f6bec13d07b.png)

**2. Sitelinks**

This entry point enables conversations with your agent when sitelinks appear in Search.

![image](https://user-images.githubusercontent.com/75118325/114896648-2583a200-9e2e-11eb-8671-f3b4fb5450ca.png)

**3. URL**

This entry point enables conversations from URLs in messages, links, or websites.

> URL is supported on Android.

**4. Widget**

This entry point enables conversations from widgets you integrate with a website.

![image](https://user-images.githubusercontent.com/75118325/114896715-303e3700-9e2e-11eb-9cbb-ede1bcaadfc2.png)

### 2. Location Based Entry Point

The LOCATION entry point group encompasses entry points that rely on locations.
- Update the agent with the LOCATION entry point group.
- Verify the agent.

> Note: You need to add all entry points you want to launch your agent on before you verify your agent.

- Launch your agent.
- Create a location, associate it with your agent, and add the MAPS and PLACESHEET entry points.
 
> Note: You need to add all entry points you want to launch your location on before you verify your location.

- Verify your location.
- Wait for Business Messages to automatically import, associate, and verify other locations from the verified location's Location group in Google My Business.
- Launch your locations.

There are 3 major ways you can set Location Based Entry Point - 

**1. Maps**

This entry point enables conversations with locations associated with your agent from the Maps app (Android and iOS).

![image](https://user-images.githubusercontent.com/75118325/114896776-3df3bc80-9e2e-11eb-935c-c0359da3c186.png)


**2. Placesheet**

This entry point enables conversations with locations associated with your agent when a user finds the location in Search.

![image](https://user-images.githubusercontent.com/75118325/114896818-477d2480-9e2e-11eb-9cfc-16f1d5d068e0.png)


**3. Local Pack**

When a user's search results include multiple nearby locations, the LOCAL_PACK entry point displays a messaging button below the list of locations. Additionally, LOCAL_PACK enables messaging for a location when the location is closed and can't answer calls.

![image](https://user-images.githubusercontent.com/75118325/114896853-4f3cc900-9e2e-11eb-99b9-a14a8457303e.png)

> **To know more about Entry Point, click [here](https://developers.google.com/business-communications/business-messages/guides/learn/entry-points#location).**

### 7. Live Agent Requirements

It is mandatory to have a live agent solution at all entry points except website and url entry points 

1. Open the **Business Communications Developer Console** and sign in with your Business Messages Google account.
2. Choose the agent.
3. In the left navigation, click **Agent information.**
4. Under **Primary and secondary interactions**, set bot and human messaging availability.

- For Primary interaction, set Interaction type to Bot.
- If bot messaging isn't always available, uncheck Always available and specify the available days, times, and timezone.
To add more availability times, click Add availability.
- Click Add secondary interaction, and set Interaction type to Human.
- If human messaging isn't always available, uncheck Always available and specify the available days, times, and timezone.
To add more availability times, click Add availability.
- If you have a live agent only solution on, then you should also configure an offline message that gets auto-triggered during their offline hours. This message can be configured from the Business Communications Developer console

To know more about updating message availability, click [**here**](https://developers.google.com/business-communications/business-messages/guides/configure/availability).

Once the Google Business Messages is set up, we will now see the implementation of IVA on Haptik's Conversation Studio.
