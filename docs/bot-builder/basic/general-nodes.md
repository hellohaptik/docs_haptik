---
title: General Nodes
---

## What are General (FAQ) Nodes?

General nodes are like regular nodes and follow the same principle of **User Says**, **Bot Says** and **End Nodes** to detect nodes, reply back to the user and update the chat status.

However, there are certain differences between General Nodes and Regular nodes which make them ideal for certain use cases like FAQs to answer general queries that a bot is usually asked in the category of the bot. Ex: ‘Who made you’ or ‘Are you a bot or Human’ which help in giving a personality to the bot.

![General Nodes](assets/general_nodes_open.png 'Where to find General Nodes?')

## Related Terms

1. **Node Name**: This is the unique identifier for a Node. This cannot be modified after creation and is similar to the System Name for regular nodes.
2. **User Says**: This is similar to User Says in regular nodes. Enter a few phrases which should redirect a user to this node
3. **Bot Says**: Add messages which the Bot should reply back whenever this node is reached
4. **Mark as End Node**: If this is ticked, the chat will be marked complete after answering to the user’s query. If not, the bot will reply back and remain in the Bot State with the context of the previous regular node
5. **Activate/Deactivate**: This button can be used to activate/deactivate certain general nodes as needed

   ![General Nodes](assets/general_node_terms.png 'How to Create/Edit a General Node?')
   
## Regular Nodes vs General (FAQ) Nodes

In bots on `Superman V2.0`, Graph nodes and General (FAQ) nodes are at the same level. What this means is an FAQ node and a Graph node would together be considered while trying to find a match for user’s response.  

## Domain General Nodes vs Story General Nodes

   > Warning: Story general nodes is deprecated.

In the new pipeline i.e. V2.0, Domain General nodes, Bot General nodes and FAQ nodes are same. We have repurposed General nodes as a whole to `FAQ nodes`. 

## When to use General Nodes

To explain how General Nodes are useful, look at the following example of a Product Sale Bot:

![General Nodes](assets/general_nodes_example1.png 'Example Product  Sale Bot')

Now a user could ask about **Cashback/Product Offers** at any stage.
To avoid breaking the flow, we would create a General (FAQ) Node related to Cashbacks which would answer the cashback and offer related queries without breaking the chat flow

To understand another example of how General (FAQ) Nodes could be used to improve the User’s Experience, we can create multiple general nodes which answer to general questions about the Bot domain. 

## FAQ Uploader

Because General (FAQ) Nodes are very simple in terms of features (no entities/api calls etc.) and the ability to maintain the context of the bot, they are ideal for quick Question/Answer type contents i.e. FAQs

To simplify the process of creating these General (FAQ) nodes, there is an option to upload a TSV file (Tab separated file).

A General node is created for every Question/Answer pair in the file.

- The question is treated as ‘User Says’
- The corresponding answer is stored as ‘Bot Says’.
- The nodes are prefixed with the uploaded file’s name

So to quickly create a Bot which can answer all your FAQs you can create a TSV file in the following format:

| node_name            | question                                                                                                                                                                                                                                                                 | answer                                                                                                        | quick_replies | link_text | link_button | link_url |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|---------------|-----------|-------------|----------|
| About <company_name> | What is <company name> \|About  <company name> \|I want to know more about   <company name>\| Can you give me some info about  <company name>\| Require details on  <company name>\| More information on  <company name>\| Share company details\|What is <company name> | <company name> is <description>   ⭐ Quick facts —  ✔ ✔   <m>To see what we can do for you, tap a task below 👇 |               |           |             |          |

Once the file is ready you can follow the following steps:

1. Upload the CSV to our Bot Maker
2. Click on Save
3. Train the Bot

And you're done!
