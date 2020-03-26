---
title: Index
---


# Third-party agent chat tool (TRACT) Integration

TRACT extends our system to allow interfacing with third-party agent chat tools. This document defines the interfaces used to integrate with the third-party tools to -

1. Allow third party agent chat tools to interoperate with Haptik IVAs

2. Allow Haptik to act as a proxy and handle thread control for third party external chat tools.



# Actors

1. Chat end user [CEU]
2. Client organisation [CO]
3. Third party middleware: e.g: Facebook Messenger in case of facebook bots [TPM]
4. Haptik components:

    a. Message Delivery [MD]
    
    b. Intelligent Virtual Assistant [IVA]
    
    c. Analytics [A]
    
    d. T R A C T [TRACT]
    
5. Third party agent chat tools (external chat tool): [ECT]
6. Agent end user [AEU]



# Integration APIs

Haptik will expose the following endpoints:

The TRACT APIs can be split in these sets:
1. [Authentication APIs](https://docs.haptik.ai/external-chat-tool/security): these issue access tokens to be used with rest of the APIs
2. [Management APIs](https://docs.haptik.ai/external-chat-tool/management-APIs) : register/enlist webhooks for the rest of the API sets
3. [User APIs](https://docs.haptik.ai/external-chat-tool/user-APIs): get data pertaining to users
4. [Message APIs](https://docs.haptik.ai/external-chat-tool/message-APIs): send/receive messages
5. [Event APIs](https://docs.haptik.ai/external-chat-tool/event-APIs): send/receive events
6. [Thread control APIs](https://docs.haptik.ai/external-chat-tool/thread-control-APIs): these allow transfer of conversation control
