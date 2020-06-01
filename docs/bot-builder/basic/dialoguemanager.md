---
title: Dialogue Manager
---

Dialogue Manager is the decision making engine of the conversational pipeline. Since the conversational engine consists of multiple modules, the Dialogue Manager makes a choice on what’s the best module to respond to the user's query.
Some of the modules present in Haptik’s conversation pipeline are - Graph Nodes, FAQ Nodes, Small Talk, etc. 

Dialogue Manager functions on a pre-decided algorithm. Hence, for a Bot Builder Knowledge of the algorithm helps at times in Bot Building and making decisions around the bot architecture.

**Note** - It may help reading about [Disambiguation](disambiguation.md), [FAQ Nodes](general-nodes.md) and [Small Talk](smalltalk.md). Some features of Disambiguation, FAQ Nodes and Small Talk have been referred to in this section.

The algorithm used by the Dialogue Manager to respond to User Utterances differs slightly in cases where a User has sent a new message to start a conversation and when, the user has already started a conversation and has sent a new message to continue it further. SECTION 1 covers the former, while SECTION 2 covers the latter. 

## SECTION 1 - When a user sends a new message and starts a chat

A new Chat can begin either at the beginning of a new session, or when a user continues the chat after a previous chat has been completed i.e when an IVA reaches END NODE.

The FLOWCHART 1 below shows the order of prioritisation in responding to the User above scenario.

