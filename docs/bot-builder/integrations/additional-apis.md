---
title: Additional APIs
---

## Move a chat to pending

This API allows you to move chats for a Bot to an Agent via a `POST` request to the Haptik Platform.

Example URL: `https://<base-url>/integration/external/v1.0/send_chat_to_agent/`

> Note: The `base-url` will be provided by Haptik at the time of integration.


#### Headers

```
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
Content-Type: application/json
```

- Authorization - The Authorization header of each HTTP request should be “Bearer” followed by your token which will be provided by Haptik
- client-id - The client id for your account which will be provided by Haptik
- Content-Type - application/json

#### Request

```json
{
    "team_name": "<Name of the team>",
    "user_name": "<haptik user name>",
    "business_id": <business_id>,
}
```

- user_name (string): Identifier for the User provided by Haptik when invoking the Integration API
- business_id (number): This is a numeric identifier for the channel where the User is messaging
- team_name (string): Name of the team to which the chat is to be assigned. Can be fetched from the Teams page of Agent Chat Tool.

#### Response

A successful request to the API will return a `200` status code with a JSON response object.

```json
{
    "success": true
}
```
- success: Indicates if the API was a success or failure

#### Error Response

If there is any error in the Headers or the Request body, then the Error message will be returned in a JSON as shown below:

```json
{
  "error_message": "user is not registered"
}
```

Here is a list of some possible error messages
|Error Message|Details|
--------------|-------|
|client_id missing in headers|client-id is not passed in the Headers of the request|
|invalid client_id in headers|Incorrect client-id is passed in the headers
|invalid authorization in headers|The Authorization header is not correct
|token missing in headers|The Authorization token is not provided
|invalid token provided|The Authorization token provided is incorrect
|user_name missing in the request|The user_name is not provided in the request body
|business_id missing in the request|The business_id is not provided in the request body
|team_name missing in the request|The team_name is not provided in the request body
|invalid user_name|The user_name provided is not valid for the Partner
|invalid business_id provided|The business_id provided is not valid for the Partner
|business "<business_id>" is inactive|The business is inactive for the Partner
|invalid team_name provided|The team_name is not valid for the Partner
|team "<team_name>" is inactive|The associated Team is inactive
|user has not sent a message|The user has not had any chat on that Business

#### Sample CURL command

```
curl -X POST \
    https://<base-url>/integration/external/v1.0/send_chat_to_agent/ \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'client-id: <CLIENT_ID>' \
  -H 'Content-Type: application/json' \
  -d '{
    "team_name": "<Name of the team>",
    "user_name": "<haptik user name>",
    "business_id": <business_id>
}
```

## Get Chat Transcripts

This API allows you to get the chat history of the user for a conversation via a `GET` request to the Haptik Platform.

Example URL: `https://<base-url>/integration/external/v1.0/get_chat_history/`

> Note: The `base-url` will be provided by Haptik at the time of integration.


#### Headers

```
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
Content-Type: application/json
```

- Authorization - The Authorization header of each HTTP request should be “Bearer” followed by your token which will be provided by Haptik
- client-id - The client id for your account which will be provided by Haptik
- Content-Type - application/json

#### Request Params

```
"conversation_no": "<Conversation no of the chat for the user>",
"user_name": "<haptik user name>",
"business_id": <business_id>,
"limit": "<number of messages>"(optional)
"respose_type": "<response_type>"(optional)
```
Note: Supported response types are `json` and `text`. The default response type is `json`.

#### Response

A successful request to the API will return a `200` status code with a default JSON response object containing chat data.

```json
{  
  "chat_json": [
        {
            "text": "Search places to visit{task}",
            "sender": "user",
            "message_id": 1742
        },
        {
            "text": "TEXT",
            "sender": "bot",
            "message_id": 1743
        }
    ]
}
```

Text type response 
```
{  
  "chat_text": "user: Search places to visit{task}\nbot: TEXT\n"
}

```

- success: Indicates if the API was a success or failure
- sender values: 
    `bot`: message is sent by the bot
    `user`: message is sent by the user
    `agent(<AGENT_NAME>)`: message is sent by the agent <AGENT_NAME> : name of the agent who sent the message

#### Error Response

If there is any error in the Headers or the Request body, then the Error message will be returned in a JSON as shown below:

```json
{
  "error_message": "user has not sent a message"
}
```

Here is a list of some possible error messages
|Error Message|Details|
--------------|-------|
|invalid client_id|Incorrect client-id is passed in the headers
|invalid token|The Authorization token provided is incorrect
|user_name missing|The user_name is not provided in the request params
|business_id missing|The business_id is not provided in the request params
|conversation_no missing|The conversation_no is not provided in the request params
|invalid user_name|The user_name provided is not valid for the Partner
|user has not sent a message|The user has not had any chat on that Business


#### Sample CURL command

```
curl -X GET \
  https://<base-url>/integration/external/v1.0/get_chat_history/?user_name=<user_name>
  &conversation_no=<conversation_no>&business_id=<business_id>&limit=<limit> \
  -H 'Authorization: Bearer <TOKEN>' \
  -H 'client-id: <CLIENT_ID>' \
  -H 'Content-Type: application/json' \
}
```

## FAQ Node Creation APIs for KMS
We have many clients who uses FAQ bots, So, everytime when we want to change QAs, a new csv containing question and answer in certain format(given below) needs to be uploaded.

Since, frequency of this activity varies from business to business but to smoothen this tedious process we've developed an API which can be integrated with client KMS(knowledge Management Systems) via some intermediate layer and everytime the data gets changed in KMS this API should get called and keep data in sync with the haptik systems.

This API allows you to create/update/delete faq nodes via a `POST` request to Haptik Platform. 

> Note: The `base-url` will be provided by Haptik at the time of integration.

FAQ Node creation process consists of two parts:
1. **Submit the CSV**: To handle the large csv files, this API takes the request data and after validation submit it to celery worker, returns the `task id`, which execute the job asynchronously.

2. **Polling API** to fetch the status of submitted `task id`

Example URL: `https://<base-url>/mogambo_api/nodes/faq/create/`

![CSV Format](assets/faq_node_csv_format.png)

```
List of columns

1. node_name: Node Name

2. question(user says): user says to detect this faq node, to put multiple user says on single node pass questions as pipe(|)  separated values(ref the sample row in image above)

3. answer(bot says): A node can have single or multiple bot says, to pass multiple bot says use `<m>` tag as delimiter
```

#### Headers

```
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
Content-Type: multipart/form-data
```

- Authorization - The Authorization header of each HTTP request should be “Bearer” followed by your token which will be provided by Haptik
- client-id - The client id for your account which will be provided by Haptik
- Content-Type - multipart/form-data

#### Request Body

```form-data
"domain_name": "<Name of the Domain>",
"csv_file": "csv file",
```

#### Response

A successful request to the API will return a `200` status code with a JSON response object.

```json
{
    "success": true,
    "body": {
        "task_id": "fe139ce5-f4c3-4383-bacb-64a546cb0b6c"
    },
    "error": "",
    "meta": {}
}
```

- success flag Indicates if the API was a success or failure
- task_id: Job id for the submitted task

#### Error Response

If there is any error in the Headers or the Request body, then the Error message will be returned in a JSON as shown below:

```json
{
  "error_message": "invalid doman"
}
```

| Error Code | Error Message|
|----------|:-------------:|
| 401 | Unauthorized Access or invalid token|
| 400 | Invalid or bad request body   |
| 403 | Access Forbidden |

#### Sample Curl Command to submit csv file and get job id
```
curl -X POST \
  https://<base-url>/mogambo_api/nodes/faq/create/ \
  -H 'authorization: Bearer <token>' \
  -H 'client-id: <client-id>' \
  -H 'content-type: multipart/form-data; 
  -F 'domain_name=<domain_name>' \
  -F csv_file=@csv_file.csv
```

> Note: This API follows the upsert behavior viz everytime when new csv gets uploaded it make the existing faq nodes for that domain inactive and create new nodes for the rows mentioned in the CSV

## Polling API to fetch submitted task Status

This API allows you to see the status of submitted task id
via a `GET` request to Haptik Platform. 

Example URL: `https://<base-url>/mogambo_api/nodes/faq/create/status<task_id>/`

> task_id: Id of task which gets created when we submit csv to node creation api

#### Headers
```
Authorization: Bearer <TOKEN>
client-id: <CLIENT_ID>
```

#### Response
A successful request to the API will return a `200` status code with a JSON response object.

```json
{
    "success": true,
    "body": {
        "status": "all nodes has been created successfully"
    },
    "error": "",
    "meta": {}
}
```
- success flag Indicates if the API was a success or failure

#### Possible Statuses:

**Error/Exception**: shows the exception/error occured for the last node and stops the execution

**In Progress**: Node Creation is in progress

**Success**: Nodes has been created successfully

## Best Practices

**1. Assign Chat to Agent** In some scenarios, where integration response fails or some unknown exception occurs then instead of sending bot break message we can also directly assign chat to an agent for better user experience. <Coming Soon>

**2.Handle textual content** - Everytime we want to change bot's response, a code change is required. To avoid that pain, we can use **key value stores**. Any person with zero to little tech knowledge can change bot response from key value store (with GUI) by updating the message copy corresponding to that unique message key or ID. This message key can be shared with the developer and fetch the response using that key.

**3. HSLs**  - Haptik defines a superset of UI elements that are available across multiple platforms. These UI elements are then converted to their platform equivalent (js-sdk, android, ios, facebook-messenger, etc..) if they are not available on that specific platform. Eg. Forms are converted to quick replies on the Facebook platform and collected over free form. [for more detail read here](https://docs.haptik.ai/hsl/)
