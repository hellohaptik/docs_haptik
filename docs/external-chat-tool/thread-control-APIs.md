---
title: Thread control APIs
---


## [API] Fetch listeners

**Endpoint**

| **type** | POST |
| --- | --- |
| **required** | true |
| **provider** | TRACT |
| **caller** | ECT |
| **url** | /tract/thread\_control/listeners/ |
| **encoding** | application/json |

**Request**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| user\_id | str | true | Associated user ID |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| listeners | List[dict] | true | List of listeners on the given thread |


## [API] Thread management 

**Endpoint**

| **type** | POST |
| --- | --- |
| **required** | true |
| **provider** | TRACT |
| **caller** | ECT |
| **url** | /tract/thread\_control/request |
| **encoding** | application/json |

**Request**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| user\_id | str | true | Associated user ID |
| type | str | true | (request, pass, take) |
| requester | str | true | Requester ID |
| receiver | str | true | Receiver ID |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| success | bool | true | Acknowledgment from TRACT |
| reason | dict | false | Explanation if unsuccessful |
