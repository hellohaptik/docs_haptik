---
title: Dialogue Manager
---

Dialogue Manager is the decision making engine of the conversational pipeline. Since the conversational engine consists of multiple modules, the Dialogue Manager makes a choice on what’s the best module to respond to the user's query.
Some of the modules present in Haptik’s conversation pipeline are - Graph Nodes, FAQ Nodes, Small Talk, etc. 

Dialogue Manager functions on a pre-decided algorithm. Hence, for a Bot Builder Knowledge of the algorithm helps at times in Bot Building and making decisions around the bot architecture.

**Note** - It may help reading about [Disambiguation](disambiguation.md), [FAQ Nodes](general-nodes.md) and [Small Talk](smalltalk.md). Some features of Disambiguation, FAQ Nodes and Small Talk have been referred to in this section.

The algorithm used by the Dialogue Manager to respond to User Utterances differs slightly in cases where a User has sent a new message to start a conversation and when, the user has already started a conversation and has sent a new message to continue it further. SECTION 1 covers the former, while SECTION 2 covers the latter. 

## Section 1 - When a user sends a new message and starts a chat

A new Chat can begin either at the beginning of a new session, or when a user continues the chat after a previous chat has been completed i.e when an IVA reaches END NODE.

The FLOWCHART 1 below shows the order of prioritisation in responding to the User above scenario.

![DM 1](/assets/DM 1.png)

Some illustrations below depict the algorithm in action.

**Illustration 1** - Images below contain two nodes - FAQ NODE **Founders of Haptik** and START NODE **About Haptik**.

FAQ Node -

![DM 2](/assets/DM 2.png)

Start Node -

![DM 3](/assets/DM 3.png)

When a new User utterance "Information on Founders of Haptik" is received to start the conversation, all the START NODES and FAQ NODES are collectively scanned by the IVA, as shown in FLOWCHART 1. The response is sent from FAQ NODE **Founders of Haptik** since it’s the best match. 

![DM 4](/assets/DM 4.png)

**NOTE** - Even though there is some degree of intent overlap with START NODE **About Haptik**, it was not given preference over FAQ NODE **Founders of Haptik**. Since START NODES and FAQ NODES are scanned collectively, FAQ NODE will be chosen for response if it’s a better match.

**Illustration 2** - When a new User Utterance arrives, SMALL TALK Module can also be used to respond. However, Small Talk is considered for response if the IVA couldn’t find an appropriate START NODE or FAQ NODE to respond.

The two images below contain a START NODE **Tell me a joke** node and SMALL TALK intent **SHARE_JOKE**.

Start Node -

![DM 5](/assets/DM 5.png)

Small talk -

![DM 6](/assets/DM 6.png)

When the User Utterance "Tell me a joke" was received, the IVA scanned for all (START NODES + FAQ NODES). Since a START NODE **Tell me a joke** node was present, it was selected for response and not the SMALL TALK intent **SHARE_JOKE**, even though the User Utterance was closely resembling the SHARE_JOKE Intent. 

The same has been depicted in FLOWCHART 1.

![DM 7](/assets/DM 7.png)

**Note** - This illustrates that even though a User Utterance matches the SMALL TALK Module, a START NODE would be selected to respond to User Utterance if it’s an appropriate match.

**Illustration 3** - When the IVA doesn’t find any relevant START NODE or FAQ NODE to respond to the User Utterance, it scans the SMALL TALK module for relevant intent. The intent of the User’s Utterance should find a match in SMALL TALK Module for the response to go from SMALL TALK Module.

The image below contains a SMALL TALK intent **FESTIVAL_INDEPENDENCE**.

![DM 8](/assets/DM 8.png)

When the User Utterance "Happy independence day" was received, the IVA scanned all the (START NODES + FAQ NODES) for a relevant response. Since it couldn’t find the same, it subsequently looked for a match in the SMALL TALK module. An intent matched in the SMALL TALK module and was selected to respond.

![DM 9](/assets/DM 9.png)

## Section 2 - When the User has sent a message in between an existing conversation

The algorithm is illustrated in the diagram below - 

![DM 10](/assets/DM 10.png)

Through various illustrations hereafter, the above algorithm has been shown in action.

**Illustration 1** - The User had already started a conversation and asked an FAQ in the middle of a conversation.

The below images show the User Says on the FAQ NODE **Founders of Haptik**. Also shown is a DEPENDENT NODE **Haptik Location** connected to the **About Haptik** START NODE.

![DM 11](/assets/DM 11.png)

![DM 2](/assets/DM 2.png)

As shown in the image below, the conversation started with User Utterance "About Haptik" and correctly got responded by **About Haptik** START NODE, as per FLOWCHART 1.

![DM 12](/assets/DM 12.png)

* When the second User Utterance “but who are founders of Haptik?” was received, the IVA scanned for (DEPENDENT NODES + FAQ NODES) collectively to pick the right NODE to respond. The FAQ NODE **Founders of Haptik** was selected for responding to the User Utterance, as shown in FLOWCHART 2.

As a side note, the capability of FAQ Nodes can be seen here as well. When the next User Utterance “ok tell me the location of haptik” related to initial message flow was received, the IVA picked the original context and re-started conversation from the **Haptik Location** NODE.

**NOTE** - The FAQ Node should not be marked as an end node, if the IVA is expected to retain context of the conversation. If the FAQ NODE is marked as an END NODE, the IVA will mark the conversation as complete and lose context.

**Illustration 2** - Another illustration shows how the algorithm functions when the User has already started a conversation and asked an FAQ in the middle of a conversation.

The below images show the conversation flow from **Funding of Haptik** START NODE. It also shows the User Says on **Founders of Haptik** FAQ NODE.



















