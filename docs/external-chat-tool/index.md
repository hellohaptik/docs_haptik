---
title: Index
---


# Third-party agent chat tool (TRACT) Integration

TRACT extends our system to allow interfacing with third-party agent chat tools. This document defines the interfaces used to integrate with the third-party tools to -

a. Allow third party agent chat tools to interoperate with Haptik IVAs

b. Allow Haptik to act as a proxy and handle thread control for third party external chat tools.



# Actors

1. Chat end user [CEU]
2. Client organisation [CO]
3. Third party middleware: e.g: Facebook Messenger in case of facebook bots [TPM]
4. Haptik components:

    a. Message Delivery [MD]
    
    b. IVA [IVA]
    
    c. Analytics [A]
    
    d. T R A C T [TRACT]
    
5. Third party agent chat tools (external chat tool): [ECT]
6. Agent end user [AEU]



# Integration APIs

Haptik will expose the following endpoints:

The TRACT APIs can be split in these sets:
1. Authentication APIs: these issue access tokens to be used with rest of the APIs
2. Management APIs: register/enlist webhooks for the rest of the API sets
3. User APIs: get data pertaining to users
4. Message APIs: send/receive messages
5. Event APIs: send/receive events
6. Thread control APIs: these allow transfer of conversation control



# Appendix

Device platforms

| **ID** | **Name** |
| --- | --- |
| 2 | &quot;Android&quot; |
| 3 | &quot;Facebook&quot; |
| 5 | &quot;WebSDK&quot; |
| 6 | &quot;iOS&quot; |
| 13 | &quot;Webhook&quot; |
| 14 | &quot;WhatsApp&quot; |

## Event types

| **Event** | **Use case specification** |
| --- | --- |
| conversation\_state | incomplete |
|   | complete |
|   | waiting |
|   | pinned |
|   | bot |
| aeu\_events | received |
|   | allocated |
|   | user\_timeout |
|   |   |
|   | transition(aeu, aeu) |
|   | transition(team, team) |
|   | Entity update |
| user\_events | create\_user |

## Message types

| **ID** | **Type** | **Description** |
| --- | --- | --- |
| 0 | regular | Unstructured text messages typed by users and assistant(not bot) |
| 1 | image | Images uploaded by users or assistants |

Additional endpoints to be provided at a later stage upon review by the Security and Compliance team.

## Message content

HSL - [https://docs.haptik.ai/hsl/index#hsl-elements](https://docs.haptik.ai/hsl/index#hsl-elements)

## Senders

| **Name** | **Description** |
| --- | --- |
| ceu | Chat End User |
| iva | Intelligent Virtual Assistant |
| haptik | Haptik System |
| ect | External Chat Tool |
| aeu | Agent End User |



