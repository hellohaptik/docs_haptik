---
title: FAQ Nodes
---

## What are FAQ (General) Nodes?

FAQ (General) nodes are like graph nodes and follow the same principle of **User Says**, **Bot Says**, and **Context Clear Nodes** to detect nodes, reply back to the user and update the chat status.

However, there are certain differences between FAQ Nodes and graph nodes which make them ideal for certain use cases like FAQs to answer general queries that a bot is usually asked in the category of the bot. Ex: ‘Who made you’ or ‘Are you a bot or Human’ which help in giving a personality to the bot.

![General Nodes](assets/general_nodes_open.png 'Where to find General Nodes?')

## Related Terms

1. **Node Name**: This is the unique identifier for a Node. This cannot be modified after creation and is similar to the System Name for graph nodes.
2. **User Says**: This is similar to User Says in graph nodes. Enter a few phrases which should redirect a user to this node.
3. **Bot Says**: Add messages which the Bot should reply back with, whenever this node is reached.
4. **Mark as Context Clear Node**: If this is ticked, the context will be cleared and the chat will be marked complete after answering the user’s query. If not, the bot will reply back and remain in the Bot State with the context of the previous graph node.
5. **Activate/Deactivate**: This button can be used to activate/deactivate certain FAQ nodes as needed.

   ![General Nodes](assets/general_node_terms.png 'How to Create/Edit a General Node?')
   
## Graph Nodes vs FAQ (General) Nodes

In bots on `Superman V2.0`, Graph nodes and FAQ (General) nodes are at the same level. What this means is an FAQ node and a Graph node would together be considered while trying to find a match for user’s response.  

## Why FAQ Nodes?

To explain how FAQ (General) Nodes are useful, look at the following example of a Product Sale Bot:

![General Nodes](assets/general_nodes_example1.png 'Example Product  Sale Bot')

Now a user could ask about **Cashback/Product Offers** at any stage. To avoid breaking the flow, we would create a FAQ (General) Node related to Cashbacks which would answer the cashback and offer related queries without breaking the chat flow.

To understand another example of how General (FAQ) Nodes could be used to improve the User’s Experience, we can create multiple general nodes that answer general questions about the Bot domain. 

## How to use FAQ Uploader?

Because FAQ (General) Nodes are very simple in terms of features (no entities/API calls etc.) and the ability to maintain the context of the bot, they are ideal for quick Question/Answer type contents.

To simplify the process of creating these FAQ (General) nodes, there is an option to upload a TSV file (Tab-separated file).

A FAQ (General) node is created for every Question/Answer pair in the file.

- The question is treated as ‘User Says’
- The corresponding answer is stored as ‘Bot Says’.
- The nodes are prefixed with the uploaded file’s name

So to quickly create a Bot that can answer all your FAQs:

1. Create a TSV file
2. Upload it to our Bot Maker
3. Click on Save
4. Train the Bot

And you're done!
