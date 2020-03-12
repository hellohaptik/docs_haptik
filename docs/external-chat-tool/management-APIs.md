---
title: Management APIs
---

## [API] Register webhooks

Haptik will call provided webhooks with events as they occur. You can register multiple webhooks, one for each type.

**Endpoint**

| --- | --- | --- | --- |
| **type** | POST |
| **required** | true |
| **provider** | TRACT |
| **caller** | ECT |
| **url** | /tract/hooks/register/ |
| **encoding** | application/json |

**Request**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| category | str | true | Webhook event type |
| subcategory | str | true | Webhook event subtype |
| url | str | true | Registered URL |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| error | str | false | Error message if applicable |


## [API] List webhooks

Get a list of all webhooks registered for the ECT.

**Endpoint**

| **type** | GET |
| --- | --- |
| **required** | true |
| **provider** | TRACT |
| **caller** | ECT |
| **url** | /tract/hooks/list/ |
| **encoding** | application/json |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| error | str | false | Error message if applicable |

Additional endpoints to be provided at a later stage upon review by the Security and Compliance team.


