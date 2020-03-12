---
title: Event APIs
---


## [HOOK] Receive event from TRACT

**Endpoint**

| **type** | POST |
| --- | --- |
| **required** | true |
| **provider** | ECT (via register webhook) |
| **caller** | TRACT |
| **url** | registered\_webhooks[&#39;category&#39;][&#39;subcategory&#39;] |
| **encoding** | application/json |

**Request**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| conversation\_number | str | true | Current conversation number |
| user\_id | str | true | Associated user ID |
| category | str | true | Event category |
| subcategory | str | true | Event subcategory |
| metadata | str | false | Event metadata |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| error | str | false | Error message if applicable |


## [API] Send event from ECT to TRACT

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
| category | str | true | Event category |
| subcategory | str | true | Event subcategory |
| metadata | str | false | Event metadata |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| error |str | false | Error message if applicable |
