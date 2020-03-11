---
title: Event APIs
---


### [HOOK] Receive event from TRACT

**Endpoint**

| **type** | POST |
| --- | --- |
| **required** | true |
| **provider** | ECT (via register webhook) |
| **caller** | TRACT |
| **url** | registered\_webhooks[&#39;event\_type&#39;][&#39;event\_subtype&#39;] |
| **encoding** | application/json |

**Request**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| conversation\_number | str | true | Current conversation number |
| user\_id | str | true | Associated user ID |
| third\_party\_user\_id | str | false | User ID on a third party / social platform (eg: FB/WA) |
| ect\_user\_id | str | false | ECT user ID (if provided in create user) |
| type | str | true | Event type |
| subtype | str | true | Event subtype |
| metadata | str | false | Event metadata |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| error | str | false | Error message if applicable |


### [API] Send event from ECT to TRACT

**Endpoint**

| **type** | POST |
| --- | --- |
| **required** | true |
| **provider** | TRACT |
| **caller** | ECT |
| **url** | /tract/event/send |
| **encoding** | application/json |

**Request**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| user\_id | str | true | Associated user ID |
| third\_party\_user\_id | str | false | User ID on a third party / social platform (eg: FB/WA) |
| ect\_user\_id | str | false | ECT user ID (if provided in create user) |
| type | str | true | Event type |
| subtype | str | true | Event subtype |
| metadata | str | false | Event metadata |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| success | bool | true | Acknowledgment from TRACT |
