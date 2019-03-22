---
title: Payload information
---

The Haptik Platform sends an event to your registered webhook under the below situations
	- bot replies to a user message
	- an agent replies to a user message via our [agent chat tool](https://docs.haptik.ai/agent-chat/).
	- client integrates our [api](https://docs.haptik.ai/webhooks/#log-message-to-haptik-system-via-rest-api) to send messages to a user.

Payload sent to your registered webhook will always be in json.


## Payload parameters


<table border="1" class="docutils">
   <thead>
      <tr>
         <th>Property Name</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>version</td>
         <td>Webhook version</td>
      </tr>
      <tr>
         <td>timestamp</td>
         <td>ISO timestamp denoting when the webhook request was created in the haptik system</td>
      </tr>
      <tr>
         <td>user</td>
         <td>All user info will be available here</td>
      </tr>
      <tr>
         <td>user.auth_id</td>
         <td>This is an alphanumeric user identifier from your system.</td>
      </tr>
      <tr>
         <td>business_id</td>
         <td>Business id is a unique numeric indentifier for your business, provided by Haptik.</td>
      </tr>
      <tr>
         <td>event_name</td>
         <td>Possible Values: message, chat_pinned and chat_complete.</td>
      </tr>
      <tr>
         <td>agent</td>
         <td>All agent info will be available here</td>
      </tr>
      <tr>
         <td>agent.id</td>
         <td>Unique indentifier for the agent.</td>
      </tr>
      <tr>
         <td>agent.name</td>
         <td>Name of the agent or bot who sent the message. Gogo is an internal name for our ai engine.</td>
      </tr>
      <tr>
         <td>agent.profile_image</td>
         <td>URL for the agent profile image.</td>
      </tr>
      <tr>
         <td>agent.is_automated</td>
         <td>Whether the reply was automated or not. It will be false if agent sent the reply</td>
      </tr>
      <tr>
         <td>message</td>
         <td>All message info will be available here</td>
      </tr>
      <tr>
         <td>message.id</td>
         <td>Unique numeric identifier for messages</td>
      </tr>
      <tr>
         <td>message.body</td>
         <td>
         Will comprize of HSL elements. For a complete description of HSL elements refer 
         <a href="https://docs.haptik.ai/hsl/">here</a>
         </td>
      </tr>
    </tbody>
</table>

## Payload types


### Message

<b>event_name = message</b>

message sent by an agent or a bot

Example:

```json
{
 "version": "1.0",
 "timestamp": "2018-10-04T12:41:27.980Z",
 "user": {
   "auth_id": "<AUTH_ID>"
 },
 "business_id": 343,
 "event_name": "message",
 "agent": {
   "id": 4415,
   "name": "gogo",
   "profile_image": "https://assets.haptikapi.com/content/42e123411bk1109823bf.jpg",
   "is_automated": true
 },
 "message": {
   "id": 1982371,
   "body": {
     "text": "Hi",
     "type": "TEXT",
     "data": {
       "quick_replies": []
     }
   }
 }
}
```

### Chat Pinned

<b>event_name = chat_pinned</b>

A chat has been assigned to an agent

Example:

```json
{
 "version": "1.0",
 "timestamp": "2018-10-04T12:41:27.980Z",
 "user": {
   "auth_id": "<AUTH_ID>"
 },
 "business_id": 343,
 "event_name": "chat_pinned",
 "agent": {
   "id": 235,
   "name": "Prateek",
   "profile_image": "https://assets.haptikapi.com/content/42e123411bk1109823bf.jpg",
   "is_automated": false
 },
 "message": {
   "id": 1982314,
   "body": {
     "text": "Prateek has entered the Conversation",
     "type": "SYSTEM",
     "data": {}
   }
 }
}
```

### Chat Complete

<b>event_name = chat_complete</b>

A chat has been marked as complete either by a bot or by an agent.
**Note:** When a chat is marked complete any assigned agent is cleared.

Example:

```json
{
 "version": "1.0",
 "timestamp": "2018-10-04T12:41:27.980Z",
 "user": {
   "auth_id": "<AUTH_ID>"
 },
 "business_id": 343,
 "event_name": "chat_complete",
 "agent": {
   "id": 4415,
   "name": "gogo",
   "profile_image": "https://assets.haptikapi.com/content/42e123411bk1109823bf.jpg",
   "is_automated": true
 },
 "message": {
   "id": 1982471,
   "body": {
     "text": "The conversation has been completed",
     "type": "SYSTEM",
     "data": {}
   }
 }
}
   ```