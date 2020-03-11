---
title: User APIs
---

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
| user\_id | str | true | User ID within Haptik |
| third\_party\_user\_id | str | false | User ID on a third party / social platform (eg: FB/WA) |
| user\_name | str | false | User&#39;s name |
| device\_platform | str | false | User&#39;s device platform |
| details\_available | List[dict] | false | List of additional details available on request.
Varies per user. |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| success | bool | true | Acknowledgment from ECT |
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
| user\_id | str | true | User ID within Haptik
(available with the message received) |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| user\_id | str | true | User ID within Haptik |
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
| user\_id | str | true | User ID within Haptik |
| details\_requested | List[str] | true | List of additional details requested |

**Response**

| **parameter** | **type** | **required** | **description** |
| --- | --- | --- | --- |
| user\_id | str | true | User ID within Haptik |
| details | dict | true | Additional details in a JSON format |




