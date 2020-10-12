---
title: How to send feedback to Haptik
---

## Log Feedback to Haptik via REST API

The Log Feedback API allows you to send feedback via a `POST` request to the Haptik Platform. The URL for logging feedback is generated on the Haptik Platform Dashboard.

### URL

`https://<BASE_URL>/v1.0/log_feedback_from_user/`

### Headers

```json
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
Content-Type: application/json
```

- Authorization - The Authorization header of each HTTP request should be “Bearer” followed by your token which will be provided by Haptik
- client-id - The client id for your account which will be provided by Haptik
- Content-Type - application/json

### Post

```json
{
  "auth_id": "<AUTH_ID>",
  "business_id": <BUSINESS_ID>,
  "query_resolved": true,
  "query_rating": 5,
  "feedback": "The conversation was very human like"
}
```

- auth_id (required) - This is an alphanumeric User identifier from your system
- business_id (required) - This is a numeric identifier for channel/queue that you wish to register the feedback on.
- query_resolved (required) - This is a boolean indicator of whether the user's query was resolved or not. This helps us bucket conversations into positive or negative categories.
- query_rating (required) - This is a numeric indicator on the scale of 1 - 5, to tell how satisfied the user was with the conversation.
- feedback (optional) - This is a string field, allowing user to provide written feedback pointing to specifics of their experience. 

### Response

A successful request to the log feedback API will return a `201` status code with a JSON response object. It will contains a boolean indicating successful submission of feedback.

```json
{
  "success": true
}
```

### Error Response

To have a fair judgement of a conversation or an agent, a user is allowed to submit feedback only once in 1 hour. If the user tries to submit the feedback again within 1 hour, an error will be raised

```json
{
  "error_message": "duplicate feedback"
}
```

If user tries to send a feedback without initiating a conversation, then the API will return a `404`

```json
{
  "error_message": "Failed to submit feedback, please make sure there is an active conversation with the agent"
}
```


If the user with auth_id is not registered, then the API will return a `403` status code.

```json
{
  "error_message": "user is not registered"
}
```

If the Authorization header is missing or invalid, then the API will return a `401` status code.

```json
{
  "error_message": "invalid authorization details"
}
```

## Sample CURL command

```
curl -X POST 'https://<BASE_URL>/v1.0/log_feedback_from_user/' \
-H 'Authorization: Bearer <TOKEN>' \
-H 'client-id: <CLIENT_ID>' \
-H 'Content-Type: application/json' \
-H '{
  "auth_id": "<AUTH_ID>",
  "business_id": <BUSINESS_ID>,
  "query_resolved": true,
  "query_rating": 5,
  "feedback": "My query was resolved pertty smoothly"
}'
```
