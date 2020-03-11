---
title: External Chat Tool Integration
---


# Third-party agent chat tool (TRACT)

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


## Management APIs

### [API] Register webhooks

Haptik will call provided webhooks with events as they occur. You can register multiple webhooks, one for each type.

**Endpoint**

| **type** | POST |
| --- | --- |
| **required** | **true** |
| **provider** | TRACT |
| **caller** | ECT |
| **url** | /tract/hooks/register/ |
| **encoding** | application/json |

**Request**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| category | str | **true** | Webhook event type |
| subcategory | str | **true** | Webhook event subtype |
| url | str | **true** | Registered URL |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| error | str | **false** | Error message if applicable |


### [API] List webhooks

Get a list of all webhooks registered for the ECT.

**Endpoint**

| **type** | GET |
| --- | --- |
| **required** | **true** |
| **provider** | TRACT |
| **caller** | ECT |
| **url** | /tract/hooks/list/ |
| **encoding** | application/json |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| error | str | **false** | Error message if applicable |

Additional endpoints to be provided at a later stage upon review by the Security and Compliance team.



## User APIs

### [HOOK] Create user

If supported by the ECT, the create user API allows the creation of a new user (case, etc.) in the ECT. This is to facilitate easy mapping of user IDs etc between a third party middleware (FB, WA, etc.), the ECT, and Haptik.

**Endpoint**

| **type** | POST |
| --- | --- |
| **required** | false |
| **provider** | ECT (via register\_webhook) |
| **caller** | TRACT |
| **url** | registered\_webhooks[user\_events][create\_user] |
| **encoding** | application/json |

**Request**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| user\_id | str | **true** | User ID within Haptik |
| third\_party\_user\_id | str | false | User ID on a third party / social platform (eg: FB/WA) |
| user\_name | str | false | User&#39;s name |
| device\_platform | str | false | User&#39;s device platform |
| details\_available | List[dict] | false | List of additional details available on request.
Varies per user. |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| success | bool | **true** | Acknowledgment from ECT |
| ect\_user\_id | str | false | User ID in the ECT |


### [API] Get user

In case user messages are received before the user creation event is triggered, ECT can call this endpoint to fetch the user.

**Endpoint**

| **type** | POST |
| --- | --- |
| **required** | false |
| **provider** | TRACT |
| **caller** | ECT |
| **url** | /tract/user/ |
| **encoding** | application/json |

**Request**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| user\_id | str | **true** | User ID within Haptik
(available with the message received) |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| user\_id | str | **true** | User ID within Haptik |
| third\_party\_user\_id | str | false | User ID on a third party / social platform (eg: FB/WA) |
| user\_name | str | false | User&#39;s name |
| device\_platform | str | false | User&#39;s device platform |
| details\_available | List[str] | false | List of additional details available on request |


### [API] Get user details

Additional user details that are not provided as part of the base user information can be fetched using this endpoint.

**Endpoint**

| **type** | POST |
| --- | --- |
| **required** | false |
| **provider** | TRACT |
| **caller** | ECT |
| **url** | /tract/user/ |
| **encoding** | application/json |

**Request**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| user\_id | str | **true** | User ID within Haptik |
| details\_requested | List[str] | **true** | List of additional details requested |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| user\_id | str | **true** | User ID within Haptik |
| details | dict | **true** | Additional details in a JSON format |



## Message APIs

### [HOOK] Receive messages from TRACT

Haptik will use the endpoint provided by Sprinklr to send messages synchronously as they come.
This includes messages generated by the IVA and those sent by the CEU.

**Endpoint**

| **type** | POST |
| --- | --- |
| **required** | **true** |
| **provider** | ECT (via register\_webhook) |
| **caller** | TRACT |
| **url** | registered\_webhooks[&#39;message&#39;][&#39;receive&#39;] |
| **encoding** | application/json |

**Request**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| user\_id | str | **true** | Associated user ID |
| conversation\_number | str | **true** | Current conversation number |
| message\_body | dict | **true** | [Message content](https://docs.haptik.ai/hsl/) |
| sender | str | **true** | One of senders |
| metadata | dict | false | Additional structured metadata |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| success | bool | **true** | Acknowledgment from ECT |


### [API] Send message to TRACT

**Endpoint**

| **type** | POST |
| --- | --- |
| **required** | **true** |
| **provider** | TRACT |
| **caller** | ECT |
| **url** | /tract/message/send/ |
| **encoding** | application/json |

**Request**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| user\_id | str | **true** | Associated user ID |
| third\_party\_user\_id | str | false | User ID on a third party / social platform (eg: FB/WA) |
| ect\_user\_id | str | false | ECT user ID (if provided in create user) |
| message\_body | str | **true** | [Message content](https://docs.haptik.ai/hsl/) |
| sender | str | **true** | One of senders |
| metadata | dict | false | Additional structured metadata |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| error | str | false | Error message if applicable |



## Event APIs

### [HOOK] Receive event from TRACT

**Endpoint**

| **type** | POST |
| --- | --- |
| **required** | **true** |
| **provider** | ECT (via register webhook) |
| **caller** | TRACT |
| **url** | registered\_webhooks[&#39;event\_type&#39;][&#39;event\_subtype&#39;] |
| **encoding** | application/json |

**Request**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| conversation\_number | str | **true** | Current conversation number |
| user\_id | str | **true** | Associated user ID |
| third\_party\_user\_id | str | false | User ID on a third party / social platform (eg: FB/WA) |
| ect\_user\_id | str | false | ECT user ID (if provided in create user) |
| type | str | **true** | Event type |
| subtype | str | **true** | Event subtype |
| metadata | str | false | Event metadata |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| error | str | false | Error message if applicable |


### [API] Send event from ECT to TRACT

**Endpoint**

| **type** | POST |
| --- | --- |
| **required** | **true** |
| **provider** | TRACT |
| **caller** | ECT |
| **url** | /tract/event/send |
| **encoding** | application/json |

**Request**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| user\_id | str | **true** | Associated user ID |
| third\_party\_user\_id | str | false | User ID on a third party / social platform (eg: FB/WA) |
| ect\_user\_id | str | false | ECT user ID (if provided in create user) |
| type | str | **true** | Event type |
| subtype | str | **true** | Event subtype |
| metadata | str | false | Event metadata |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| success | bool | **true** | Acknowledgment from TRACT |



## Thread control APIs

### [API] Fetch listeners

**Endpoint**

| **type** | POST |
| --- | --- |
| **required** | **true** |
| **provider** | TRACT |
| **caller** | ECT |
| **url** | /tract/thread\_control/listeners/ |
| **encoding** | application/json |

**Request**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| user\_id | str | **true** | Associated user ID |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| listeners | List[dict] | **true** | List of listeners on the given thread |


### [API] Thread management 

**Endpoint**

| **type** | POST |
| --- | --- |
| **required** | **true** |
| **provider** | TRACT |
| **caller** | ECT |
| **url** | /tract/thread\_control/request |
| **encoding** | application/json |

**Request**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| user\_id | str | **true** | Associated user ID |
| type | str | **true** | (request, pass, take) |
| requester | str | **true** | Requester ID |
| receiver | str | **true** | Receiver ID |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| success | bool | **true** | Acknowledgment from TRACT |
| reason | dict | false | Explanation if unsuccessful |



# APPENDIX

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

HSL[https://docs.haptik.ai/hsl/index#hsl-elements](https://docs.haptik.ai/hsl/index#hsl-elements)

## Senders

| **Name** | **Description** |
| --- | --- |
| ceu | Chat End User |
| iva | Intelligent Virtual Assistant |
| haptik | Haptik System |
| ect | External Chat Tool |
| aeu | Agent End User |


