---
title: Dialogue Manager
---

Dialogue Manager is the decision making engine of the conversational pipeline. Since the conversational engine consists of multiple modules, the Dialogue Manager makes a choice on what’s the best module to respond to the user's query.
Some of the modules present in Haptik’s conversation pipeline are - Graph Nodes, FAQ Nodes, Small Talk, etc. 

Dialogue Manager functions on a pre-decided algorithm. Hence, for a bot builder, Knowledge of the algorithm helps at times in Bot Building and making decisions around the bot architecture.

**Note** - It may help reading about [Disambiguation](disambiguation.md), [FAQ Nodes](general-nodes.md) and [Small Talk](smalltalk.md). Some features of Disambiguation, FAQ Nodes and Small Talk have been referred to in this section.

The algorithm used by the Dialogue Manager to respond to User Utterances differs slightly in cases where a User has sent a new message to start a conversation and when, the user has already started a conversation and has sent a new message to continue it further. SECTION 1 covers the former, while SECTION 2 covers the latter. 

## Section 1 - When a user sends a new message and starts a chat

A new Chat can begin either at the beginning of a new session, or when a user continues the chat after a previous chat has been completed i.e when an IVA reaches END NODE.

The FLOWCHART 1 below shows the order of prioritisation in responding to the User above scenario.

![DM 1](/assets/DM1.png)

Some illustrations below depict the algorithm in action.

**Illustration 1** - Images below contain two nodes - FAQ NODE **Founders of Haptik** and START NODE **About Haptik**.

FAQ Node -

![image](https://user-images.githubusercontent.com/75118325/113774603-1f623700-9745-11eb-97d5-d609cd85e543.png)

Start Node -

![DM 3](/assets/DM3.png)

When a new User utterance "Information on Founders of Haptik" is received to start the conversation, all the START NODES and FAQ NODES are collectively scanned by the IVA, as shown in FLOWCHART 1. The response is sent from FAQ NODE **Founders of Haptik** since it’s the best match. 

![DM 4](/assets/DM4.png)

**NOTE** - Even though there is some degree of intent overlap with START NODE **About Haptik**, it was not given preference over FAQ NODE **Founders of Haptik**. Since START NODES and FAQ NODES are scanned collectively, FAQ NODE will be chosen for response if it’s a better match.

**Illustration 2** - When a new User Utterance arrives, SMALL TALK Module can also be used to respond. However, Small Talk is considered for response if the IVA couldn’t find an appropriate START NODE or FAQ NODE to respond.

The two images below contain a START NODE **Tell me a joke** node and SMALL TALK intent **SHARE_JOKE**.

Start Node -

![DM 5](/assets/DM5.png)

Small talk -

![DM 6](/assets/DM6.png)

When the User Utterance "Tell me a joke" was received, the IVA scanned for all (START NODES + FAQ NODES). Since a START NODE **Tell me a joke** node was present, it was selected for response and not the SMALL TALK intent **SHARE_JOKE**, even though the User Utterance was closely resembling the SHARE_JOKE Intent. 

The same has been depicted in FLOWCHART 1.

![DM 7](/assets/DM7.png)

**Note** - This illustrates that even though a User Utterance matches the SMALL TALK Module, a START NODE would be selected to respond to User Utterance if it’s an appropriate match.

**Illustration 3** - When the IVA doesn’t find any relevant START NODE or FAQ NODE to respond to the User Utterance, it scans the SMALL TALK module for relevant intent. The intent of the User’s Utterance should find a match in SMALL TALK Module for the response to go from SMALL TALK Module.

The image below contains a SMALL TALK intent **FESTIVAL_INDEPENDENCE**.

![DM 8](/assets/DM8.png)

When the User Utterance "Happy independence day" was received, the IVA scanned all the (START NODES + FAQ NODES) for a relevant response. Since it couldn’t find the same, it subsequently looked for a match in the SMALL TALK module. An intent matched in the SMALL TALK module and was selected to respond.

![DM 9](/assets/DM9.png)

## Section 2 - When the User has sent a message in between an existing conversation

The algorithm is illustrated in the diagram below - 

![DM 10](/assets/DM10.png)

Through various illustrations hereafter, the above algorithm has been shown in action.

**Illustration 1** - The User had already started a conversation and asked an FAQ in the middle of a conversation.

The below images show the User Says on the FAQ NODE **Founders of Haptik**. Also shown is a DEPENDENT NODE **Haptik Location** connected to the **About Haptik** START NODE.

![DM 11](/assets/DM11.png)

![image](https://user-images.githubusercontent.com/75118325/113774663-3012ad00-9745-11eb-8b01-e89416633cf5.png)


As shown in the image below, the conversation started with User Utterance "About Haptik" and correctly got responded by **About Haptik** START NODE, as per FLOWCHART 1.

![DM 12](/assets/DM12.png)

* When the second User Utterance “but who are founders of Haptik?” was received, the IVA scanned for (DEPENDENT NODES + FAQ NODES) collectively to pick the right NODE to respond. The FAQ NODE **Founders of Haptik** was selected for responding to the User Utterance, as shown in FLOWCHART 2.

As a side note, the capability of FAQ Nodes can be seen here as well. When the next User Utterance “ok tell me the location of haptik” related to initial message flow was received, the IVA picked the original context and re-started conversation from the **Haptik Location** NODE.

**NOTE** - The FAQ Node should not be marked as an end node, if the IVA is expected to retain context of the conversation. If the FAQ NODE is marked as an END NODE, the IVA will mark the conversation as complete and lose context.

**Illustration 2** - Another illustration shows how the algorithm functions when the User has already started a conversation and asked an FAQ in the middle of a conversation.

The below images show the conversation flow from **Funding of Haptik** START NODE. It also shows the User Says on **Founders of Haptik** FAQ NODE.

![DM 13](/assets/DM13.png)

![image](https://user-images.githubusercontent.com/75118325/113775151-ea0a1900-9745-11eb-8e6c-d57b4c69a5d2.png)

The conversation started with a User Utterance "Funding of Haptik". It was responded from **Funding of Haptik** START NODE.

The next user utterance “I want to know more about it” was responded to by **Tell me about funding** DEPENDENT NODE. 

The IVA scanned all (DEPENDENT NODES + FAQ NODES) as shown in FLOWCHART 2 and found **Tell me about funding** NODE the best DEPENDENT NODE to reply.

![DM 14](/assets/DM14.png)

The next User Utterance asked about an FAQ "but who are the founders of Haptik?". The response was given from the FAQ NODE **Founders of Haptik**.

Here, the IVA again scanned all (DEPENDENT NODES + FAQ NODES) and found **Founders of Haptik** as the best FAQ NODE to respond.

As a side note, the capability of FAQ Nodes can be seen here as well. When the next User Utterance “ok investors?” was received, it was responded from the DEPENDENT NODE **Investors of Haptik** which was the last node in the original flow.

**Illustration 3** - IVA scans for START NODES again if a relevant DEPENDENT NODE or FAQ NODE is not found.

Below is the GRAPH NODE structure and the User Says present on both **Careers at Haptik** START NODE and **Funding of Haptik** START NODE.

![DM 15](/assets/DM15.png)

Funding of Haptik Node -

![DM 16](/assets/DM16.png)

Careers at Haptik -

![DM 17](/assets/DM17.png)

The User utterance "funding of haptik" was responded from the **Funding of Haptik** START NODE. 

![DM 18](/assets/DM18.png)

The User Utterance "Yes, I want to know about it" was responded to by "Tell me about funding" DEPENDENT NODE.

![DM 19](/assets/DM19.png)

Next, when the User Utterance "are there any jobs available at haptik" was received, the IVA tried scanning all the (DEPENDENT NODES + FAQ NODES). When it didn’t find a relevant NODE to respond from, it scanned all START NODES again, as shown in FLOWCHART 2. Hence, **Careers at Haptik** START NODE was selected to respond.

**Illustration 4** - In the middle of a conversation, IVA would prefer to search START NODES again, over SMALL TALK.

Below images show the NODE structure and **Tell me a joke** START NODE.

![DM 13](/assets/DM13.png)

![DM 5](/assets/DM5.png)

The User Utterance "funding of Haptik" was responded from the START NODE **Funding of Haptik**. Next, the User Utterance "Yes, I want to know about it" was responded to by **Tell me about funding** DEPENDENT NODE. 

![DM 23](/assets/DM23.png)

However, when the User Utterance “tell me a joke” was received, the IVA couldn’t find suitable (DEPENDENT + FAQ) nodes for responding. Hence, it scanned all START NODES again and found **Tell me a joke** START NODE. 

Even though the user Utterance “tell me a joke” had a suitable match in **SHARE_JOKE** SMALL TALK intent, a START NODE was given preference in responding.

However, in the User Utterance "ok bye", the IVA couldn’t find any (DEPENDENT + FAQ) NODE or START NODES to reply from. Hence, SMALL TALK Intent **END_CHAT** was selected to respond.

**Illustration 5** - FAQs DURING ENTITY COLLECTION - The User can ask FAQs in the process of collection of entities as well. Once the IVA asks for the entity value, the user may choose to ask an FAQ instead of giving entity value. The IVA while answering the FAQ, will retain the context of the conversation. If the User then provides entity value after getting response from the FAQ NODE, the IVA will contextually relate the entity to the original response and complete the flow.

The below images show an entity being collected on the **Careers at Haptik** START NODE.

![DM 20](/assets/DM20.png)

Below image shows a FAQ NODE **Founders of Haptik** and it’s User Says.

![image](https://user-images.githubusercontent.com/75118325/113776482-9b5d7e80-9747-11eb-921e-07990dc50f6f.png)

As shown in the image below, when the User Utterance “Is haptik hiring for any jobs?” is received, the **Careers at Haptik** START NODE is selected to respond to the query.

When the next User Utterance “But tell me who are the founders of Haptik” was received, IVA collectively scanned for all the (DEPENDENT NODES + FAQ NODES) and the FAQ NODE **Founders of Haptik** was selected to respond.

![DM 24](/assets/DM24.png)

Next, the User Utterance provided the entity value **Bangalore**, which the IVA had asked in the previous response. The IVA detected the entity value, contextually linked the response to the original **Careers at Haptik** journey and responded to the user.

As a corollary, one more conclusion can be drawn here w.r.t the behaviour of the entity re-prompt. 

> Tip: Entity re-prompt is a feature which nudges the user to enter the entity value, if it has not been given by the User when the IVA asked. 

Coming back to the illustration, in the User Utterance “But tell me who are the founders of Haptik”, the entity value was not present. However, Entity re-prompt was not sent out and the scanning of (DEPENDENT NODES + FAQ NODE) was given priority over the entity re-prompt, as shown in the FLOWCHART 2.

**NOTE** - The FAQ NODE should not be marked as an END NODE, if the IVA is expected to retain the context of the current conversation. If it’s marked as such, the IVA will close the conversation and drop context.

## How are CODE NODES treated in the Dialogue Manager?

Directly, CODE NODES are not used to respond to the User Utterance. Hence, they are not under the purview of Dialogue Manager. Dialogue Manager only ensures that the entities required by the START NODE connected to the CODE NODE are collected efficiently. 

Once entities are collected, the CODE NODE is triggered. At this juncture, the Dialogue Manager comes out of the picture, and only comes into the picture when the next User Utterance arrives.

## How are OUTPUT NODES treated in the Dialogue Manager?

From the Dialogue Manager perspective, the illustrations mentioned in the above two sections cover the functionality of the OUTPUT NODE as well. 

If an OUTPUT NODE has been marked as an END NODE, the next User Utterance will fall under SECTION 1 mentioned earlier. If the OUTPUT NODE has not been marked as an END NODE, the User Utterance will fall under SECTION 2.
