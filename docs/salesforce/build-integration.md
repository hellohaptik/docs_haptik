---
title: Implement Salesforce Integration
---

## Step 1: Create a New Bot

We will start by creating a new bot on the platform. 

1. Go to [**Conversation Studio**](https://staging.hellohaptik.com/mogambo/#/bots)
2. Click on **New Bot**
3. Provide a **name**, select the **partner** from dropdown and provide some additional details (these are optional)
4. Click on **Create Bot**

![image](https://user-images.githubusercontent.com/75118325/114122315-a5c97500-990d-11eb-999f-425e88d6add9.png)

## Step 2: Create a Story and Sub Story

After creating a new bot, create a new Story within the bot. 
To know more about Story, click [**here**](https://docs.haptik.ai/bot-builder/basic/creating-story).

Within the story, create a new sub story. Every Sub Story handles one use-case. 
To know more about Sub Story, click [**here**](https://docs.haptik.ai/bot-builder/basic/creating-story).

## Step 3: Create Nodes

Nodes are the interlinked building blocks of a bot. Each node acts like a gatekeeper which **detects user inputs**, sends out appropriate **responses**, and **directs users** to the next node. 

Nodes are composed of several important sub-components, which house important pieces of information - User Says, Bot Says, Entities, and APIs.

To know more about Nodes, click [**here**](https://docs.haptik.ai/bot-builder/basic/creating-nodes).

## Step 4: Add User Says

User says are the inputs from the user that the agent needs to interpret the user’s goal. It is important to add and train the bot with a variety of different sample user says for each node, so that the bot can identify the correct intents and extract entities from the user utterance.

Whenever a user sends a message, we try to understand what the user is trying to say using various Machine Learning algorithms and find the corresponding node. One of the key modules which is used for node identification is **Intent Detection module**.

To know more about adding user says, click [**here**](https://docs.haptik.ai/bot-builder/basic/user-says-guidelines).

## Step 5: Add Bot Says

Bot Says is where a Node stores the replies that are sent in response to the user's message. 

To know more about Bot Says, click [**here**](https://docs.haptik.ai/bot-builder/basic/bot-says)

### Using Chat Elements (HSLs)

Chat Elements are used to send different types to responses to the user.

Read more about chat elements, [**here**](https://docs.haptik.ai/bot-builder/basic/chat-elements).

## Step 6: Add Entities

An entity represents values which is collected from the user in a conversation. Depending on the context of the conversation, the required response can either be a single value or group of specific values.

> You can fetch user's **name** from their Facebook account. Add **person_name** entity to fetch the user's profile name and use %entitytag_person_name@full_name to print the name on bot says. Add the entity on first node of the bot and mark them as non-mandatory. 

You can read more about entities [**here**](https://docs.haptik.ai/bot-builder/basic/entities).

## Step 7: Create Connections

Connections represent the path a conversation takes from node to node. Depending on the response a user inputs to the bot, they traverse down a different connection to the appropriate next node. Bot builders must modify every connection they create to indicate which user inputs correspond to which nodes.

## Step 8: Using Code Editor for user details

### Get User Details

On code editor, try out the example below to featch user details from your Salesforce account.

`
def get_data():
  
      url = 'https://staging-messenger.haptikapi.com/third_party_integrations/v1/salesforce/api_name'
      
      headers = {
        'username': 'test',   # the salesforce account username
        'clientid': "xxxxxx", # the consumer key
        'privatekey': " ",    # the private key uploaded while creating the app
      }
      try:
          response = requests.request("GET", url, headers=headers)
          response.raise_for_status()
          return response.json()
      except Exception as e:
          print(
              f"[salesforce] [get_data_api] [api_failure] {e} body: {headers} url: {url} response {response} ")
          return {'exception': True}
`

### Post User Details

Everytime the bot hits your Salesforce app, a new case gets generated. 
Tryout the below example to post data and generate a new case on your Salesforce account.

`
  def post_data_api(description, environment_variables):

    url = 'https://staging-messenger.haptikapi.com/third_party_integrations/v1/salesforce/create/'
      
    payload = {
    "payload": {
        "subject": "Created using Haptik IVA",
        "Description": description,
        "Type": "Ecommerce",
        "Reason": "Order details",
        "SuppliedName": "John Doe",
        "SuppliedEmail": "john@test.com",
        "SuppliedPhone": "+919123456789",
        "SuppliedCompany": "Haptik",
        "priority": "High"  # priority can be High, Medium, Low
    }
    }
    headers = {
      'username': 'test',   # the salesforce account username
      'clientid': "xxxxxx", # the consumer key
      'privatekey': " ",    # the private key uploaded while creating the app
    }
    try:
        response = requests.request("POST", url, headers=headers, json = payload)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(
            f"[salesforce] [get_data_api] [api_failure] {e} body: {headers} url: {url} response {response.text}")
        return {'exception': True}
`

## Step 9: Add Taskbox

You can add a Taskbox which provides a default option for the users select from. The process to add a taskbox is mentioned [**here**](https://docs.haptik.ai/bot-builder/basic/business#taskbox).

The tasks which are added appear as a Quick Reply to the user.

## Step 9: Quality Assessment

Follow our [**Quality Assessment**](https://docs.haptik.ai/bot-builder/basic/testing-bot) section to test the bot.
