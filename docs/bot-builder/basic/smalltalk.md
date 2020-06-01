---
title: Smalltalk
---

Smalltalk is used to provide responses to casual conversation. This feature can greatly improve the user experience by making the IVAs more chatty and covering common questions that may not relate to your IVA's intents. 

        This section adds ability to discover all intents added to the global copy of Smalltalk.

## What is Smalltalk?

Other than the stories you create for your particular bot flows, `Smalltalk` will be a default story on every bot. 

It is the chit-chat module present on the Haptik Platform. It has been developed by Haptik after careful curation of 99 intents, from Haptik’s deep experience in conversational design and observed trends from over 3 billion interactions. The 99 intents are partly customizable, such that every IVA can choose to send its own custom reply to the User Utterance. However, the addition of New Intents or editing the User Utterances which cause SMALL TALK Intent Detection is done under the supervision of the Haptik’s Conversation Design Team.

The below image shows a sample collection of Intents and respective utterances, along with the IVA response alongside.

![Smalltalk 1](/assets/SmallTalk 1.png)

The IVA response in terms of its Voice, Brand, and Content can be edited as per the personality of the IVA and Brand Guidelines.

## Changing Personality

For all the 99 intents mentioned above, the Haptik platform provides a default response as per multiple personality types, namely — GENERIC, FORMAL, FUNNY, CASUAL. Amongst the 4 smalltalk personas, GENERIC is a semi-formal persona that works for most enterprises. 

These personas should be selected basis your IVA audience. That is as per your target user, you'd want the smalltalk responses to be casual or formal. This means the smalltalk bot response copies we created, are as per the different personas of bots. **You choose the smalltalk persona while creating a bot.** 

The same can be configured as per the steps below. 

Step 1 — Locate the IVA amongst the list of IVAs on the Staging Environment

![Smalltalk 2](/assets/SmallTalk 2.png)

Step 2 — Click the ... icon as shown below

![Smalltalk 3](/assets/SmallTalk 3.png)

Step 3 — A Dialog box opens up. The “PERSONALITY” field present in the dialog box can be selected to change the personality of the SMALL TALK responses

![Smalltalk 4](/assets/SmallTalk 4.png)

The personality selection changes the response that IVA gives to various SMALL TALK Intents. 

**Formal Example - **

![Smalltalk 5](/assets/SmallTalk 5.png)

**Funny Example - **

![Smalltalk 6](/assets/SmallTalk 6.png)

## Customizing Brand

The SMALL TALK module provides flexibility at an IVA level to customize the Brand Name and details. The method of customization is shown in the steps below.

Step 1 — Locate the IVA amongst the list of IVAs on the Staging Environment

![Smalltalk 2](/assets/SmallTalk 2.png)

Step 2 — Click the ... icon as shown below

![Smalltalk 3](/assets/SmallTalk 3.png)

Step 3 — A dialog box opens up which has a number of fields. The values of the fields can be configured per IVA

![Smalltalk 4](/assets/SmallTalk 4.png)

![Smalltalk 7](/assets/SmallTalk 7.png)

The points mentioned below describe various fields and their usage. The SMALL TALK module picks up values of various tags from these fields to populate the content. The tags can be customized per IVA to give appropriate response to the User Utterance. 

1. Name of the Creator/Company — Populates the %company tag
2. Bot Name (in chatflow) — Populates the %botname tag
3. Where does the bot live? — Populates the %location tag
4. Gender — Populates the %botgender parameter
5. Name of the app — Populates the %appname tag
6. Company Website — Populates the %sitelink tag
7. Feedback Smart action link — Populates the %feedbacklink tag. This field can be populated with any valid URL, where an enterprise collects feedback from users. If the response to any SMALL TALK intent uses this tag, a link button would be sent to the user. The user can click the button to visit the link (shown in the image below).

![Smalltalk 8](/assets/SmallTalk 8.png)

If any of the above tags are present in the IVA response in the SMALL TALK module, the tag will be replaced by its value present in the dialog box when the response is sent to the end-user.

The images below show how above functionality works. The “Name of the creator/company” parameter has been changed to SUPERMAN.

![Smalltalk 9](/assets/SmallTalk 9.png)

For the SMALL TALK Intent CRITICISM_FAKE, the IVA response has been changed to include the  %company tag.

![Smalltalk 10](/assets/SmallTalk 10.png)

When such an Intent is detected in User Utterance, the IVA response then replaces the %company tag with the value present in the “Name of the company/creator” field.

![Smalltalk 11](/assets/SmallTalk 11.png)

Hence, we can see from the previous two sections that the SMALL TALK module is highly customizable. Further customization to the content can be done as per the steps below.

## Changing Content

Step 1 — Locate the IVA amongst the list of IVAs on the Staging Environment

![Smalltalk 2](/assets/SmallTalk 2.png)

Step 2 — Click on the respective IVA. On the next screen, click the “SMALLTALK” section

![Smalltalk 12](/assets/SmallTalk 12.png)

Step 3 — The below page opens up and allows the IVA Response to be edited. The platform also allows multiple variations for IVA response to be added to each Intent. When such an Intent is detected in User Utterance, the IVA randomly picks one Bot response to respond to the User.

![Smalltalk 13](/assets/SmallTalk 13.png)

## Deactivating Smalltalk Intents

Step 1 — Locate the IVA amongst the list of IVAs on the Staging Environment

![Smalltalk 2](/assets/SmallTalk 2.png)

Step 2 — Click on the respective IVA. On the next screen, click the “SMALLTALK” section

![Smalltalk 12](/assets/SmallTalk 12.png)

Step 3 — The below page opens up and shows the list of intents. If you do not want a particular intent to function, then we can deactivate it as shown below.

![Smalltalk 22](/assets/SmallTalk 22.png)

## How does Smalltalk function?

The Dialogue Manager Algorithm can be read here. It explains how the SMALL TALK module is prioritized along with other modules to respond to the User Utterances.

Some features of SMALL TALK module are illustrated below — 

**CASE 1** — START NODES, DEPENDENT NODES, and FAQ NODES always get a higher priority in responding to User Utterance than the SMALL TALK module. If the IVA doesn’t find anything relevant in aforesaid NODES, it searches the SMALL TALK module for a relevant response.

Illustration 1 — In the below image, a START NODE “Tell me a joke node” has been made.

![Smalltalk 14](/assets/SmallTalk 14.png)

The Intent of the node **Tell me a joke** is similar to a SMALL TALK Intent **SHARE_JOKE**, as seen in the image below.

![Smalltalk 15](/assets/SmallTalk 15.png)

When a user sends an utterance “Tell me a joke real quick”, the START NODE was chosen to reply, rather than SMALL TALK intent **SHARE_JOKE**. 

The below conversation illustrates START NODE getting priority over SMALL TALK in responding to the User Utterance.

![Smalltalk 16](/assets/SmallTalk 16.png)

**CASE 2** — The IVA doesn’t lose context of the conversation when it responds from the SMALL TALK Module. If a User Utterance in the middle of the conversation has been responded through SMALL TALK, the original conversation can be re-triggered if suitable User Utterance is received again, as illustrated below.

Illustration 2 — A 2 node-deep flow with **ABOUT_HAPTIK** being a START NODE and **HAPTIK LOCATION** being a DEPENDENT NODE.

![Smalltalk 17](/assets/SmallTalk 17.png)

The image below shows the conversation. The User Utterance "About Haptik" is responded to from the **ABOUT_HAPTIK** START NODE.

![Smalltalk 18](/assets/SmallTalk 18.png)

Subsequently, when the user sent an utterance "Boring Jokes", it was responded to by Small Talk intent **CRITICISM_JOKES**. However, when the user sent the next User Utterance “Location of Haptik”, related to the original flow, the IVA re-continued the original flow by retaining and relating the context.

![Smalltalk 19](/assets/SmallTalk 19.png)

**CASE 3** - IVA not losing context when SMALL TALK triggers in the middle of Entity Collection — During a flow where an entity is being collected, the IVA doesn’t lose context of the original conversation if a SMALL TALK related intent is triggered by a User Utterance. The feature is being shown below.

Illustration 3 — Illustrated below is a 2 node-deep flow with **CAREERS_AT_HAPTIK** being a START NODE and **CITY_JOBS** being a DEPENDENT NODE.

![Smalltalk 20](/assets/SmallTalk 20.png)

As shown below, The User Utterance “Jobs at Haptik” starts the conversation and the IVA responds from the **Careers at Haptik** START NODE. However, if a user sends a SMALL TALK related utterance — “No Thanks”, the IVA didn’t respond with SMALL TALK, but instead with an entity re-prompt to make one more attempt at nudging the user to provide the entity value.

* If the user persists with a SMALL TALK intent again through “ok bye”, SMALL TALK will be used to respond. (More around the module prioritisation algorithm can be read in the DIALOGUE MANAGER section)

* However, since the IVA retains the context of the conversation, if the User sends back the entity value after getting SMALL TALK response, the IVA would link it to the original conversation and proceed ahead in the conversation.

![Smalltalk 21](/assets/SmallTalk 21.png)
