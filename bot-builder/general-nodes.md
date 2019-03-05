# General Nodes
----

> You're viewing an older version of the documentation. Please visit the [new documentation](https://docs.haptik.ai/) for updated, comprehensive guides & resources on the topic

This page will cover the following topics: 
[What are General Nodes?](#what-are-general-nodes)
[Related Terms](#related-terms)
[General Responses vs. General Nodes](#general-responses-vs-general-nodes)
[Regular Nodes vs. General Nodes](#regular-nodes-vs-general-nodes)
[Domain General Nodes vs. Story General Nodes](#domain-general-nodes-vs-story-general-nodes)
[When to use General Nodes](#when-to-use-general-nodes)
[FAQ Uploader](#faq-uploader)


## What are General Nodes?

General nodes are like regular nodes and follow the same principle of **User Says**, **Bot Says** and **End Nodes** to detect nodes, reply back to the user and update the chat status.

However, there are certain differences between General Nodes and Regular nodes which make them ideal for certain use cases like FAQ Bots or to answer general queries that a bot is usually asked like ‘Who are you’ or ‘Who made you’ or ‘Are you a bot or Human’ which help in giving a personality to the bot.

![General Nodes](general_nodes_open.png "Where to find General Nodes?")

There are 2 types of General Nodes:

1. Story General Nodes
2. Domain General Nodes

They function in exactly the same way but there is a difference in their priorities which is explained in more detail below.


## Related Terms
1. **Node Name**: This is the unique identifier for a Node. This cannot be modified after creation and is similar to the System Name for regular nodes.
2. **User Says**: This is similar to User Says in regular nodes. Enter a few phrases which should redirect a user to this node
3. **Bot Says**: Add messages which the Bot should reply back whenever this node is reached
4. **Mark as End Node**: If this is ticked, the chat will be marked complete after answering to the user’s query. If not, the bot will reply back and remain in the Bot State with the context of the previous regular node
5. **Activate/Deactivate**: This button can be used to activate/deactivate certain general nodes as needed
![General Nodes](general_node_terms.png "How to Create/Edit a General Node?")


## General Responses vs General Nodes
The Bot Maker tool gives options to add General Responses which are usually used to train the bot for simple queries like ‘Good Morning’ or ‘Hi!’.

However, in some cases, the general queries could be more complicated: For example, ‘Who made you?’, ‘Who is your creator’, ‘Where do you live’, ‘Where are you from’.

These messages are simple queries but have scope for a lot of variations and spelling mistakes. As general responses use basic string comparison to reply back, they are not good enough to handle queries which are simple to answer but can have many variations

General Nodes are the perfect use case for these questions as they use our ML tools which easily account for these variations, just like the normal nodes.


## Regular Nodes vs General Nodes
Whenever a User sends a message to the Bot, the bot maintains a context of the node that it replied from.

However, general nodes do not update this context and hence allows the bot to remain on the original node and answer the user’s query without breaking the chat flow.

Regular nodes are complicated and have many more features as they can collect entities, transition from 1 node to another and call external Integration functions. General Nodes are relatively simpler as they are not responsible for collecting any entities or call integration functions.


## Domain General Nodes vs Story General Nodes
As mentioned above, there are 2 types of General Nodes which have the same behaviour except the order in which they are used.

Story General Nodes are detected only when the user is in the middle of a flow and only the General Nodes from the Current Story based on the Bot’s context are checked.

However, Domain General nodes are checked irrespective of the Bot’s context as long as the Bot knows which Domain to look for.

Whenever a User sends a message, the following pipeline is followed to decide which node would reply back to the User’s message.

1. Regular Nodes
2. Story General Nodes
3. Domain General Nodes
4. General Responses
5. Small Talk
6. Bot-Break Message

As soon as a matching node is detected, the Bot sends the response from that node. As you can see, the bot refers to the Story General Nodes before checking Domain General Nodes


## When to use General Nodes
To explain how General Nodes are useful, look at the following example of a Product Sale Bot:

![General Nodes](general_nodes_example1.png "Example Product  Sale Bot")


Now a user could ask about **Cashback/Product Offers** at any stage.
To avoid breaking the flow, we would create a Story or Domain General Node related to Cashbacks which would answer the cashback and offer related queries without breaking the chat flow

To understand another example of how General Nodes could be used to improve the User’s Experience, we can create multiple general nodes which answer to general questions about the Bot which helps to give the Bot a personality.

As a lot of user’s ask random questions like ‘Are you a boy or a girl’ or ‘How old are you’ or ‘Are you a bot or a human’ or ‘You are stupid’. To answer these correctly and engage with the users, we could create Domain General Nodes for such responses and reply back with serious/funny/poetic responses to improve the Bot’s personality.

## FAQ Uploader
Because General Nodes are very simple in terms of features (no entities/api calls etc.) and the ability to maintain the context of the bot, they are ideal for quick Question/Answer type contents i.e. FAQs

To simplify the process of creating these FAQ General nodes, there is an option to upload a TSV file (Tab separated file).

Here is a [sample TSV file](https://haptik-stagingcf.haptikapi.com/docs_haptik/general_nodes_faq.tsv) which can be used to create FAQ based general nodes.

A General node is created for every Question/Answer pair in the file.

* The question is treated as ‘User Says’
* The corresponding answer is stored as ‘Bot Says’.
* The nodes are prefixed with the uploaded file’s name

So to quickly create a Bot which can answer all your FAQs:

1. Create a TSV file
2. Upload it to our Bot Maker
3. Click on Save
4. Train the Bot

And you're done!

