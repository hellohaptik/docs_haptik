---
title: User Journey
---

This section in Teja (our analytics tool) helps you analyze how users move in the chat flow. How you'd want to see funnel performance in a website, you'd want to see the *User Journey* in chatbot conversations. 

Assuming you've selected a particular business/channel and custom date range, you'd see a table view, listing nodes. 

### Nodes list

This section lists nodes in a table. And for each node, you get 3 metrics:
1. Incoming users
2. Outgoing users
3. Dropping users

       Outgoing users on a node go through to another node 
       from the selected node. And Dropping Users are the ones 
       who dropped out of the conversation from the selected node. 

![Nodes table](/docs/bot-analytics/assets/user-journey-node-list.png)

    Tip: You can also key in the node name on search bar to find a node.

### Node Traversal graph

Every node has a user journey. To access, click ‘*View Journey*’ on *Nodes list* to view a node's traversal graph. This clicked node becomes your *Selected node*.

    Tip: Please note that there can be multiple ways for an user to reach any node.  

On the graph, your *selected node* is placed at the top. And there will be diverging line(s) i.e. routes from this node to other nodes in the bot. 

![User Journey](/docs/bot-analytics/assets/user-journey-node-traversal-graph.png)

1. You can zoom in/out to check the flow from your node

       Tip: Thicker the line from one node to another, higher the users traversing on this route.

2. Now, you could hover on any node to get more data:
   - Incoming Count (number of users entering a node)
   - Incoming % (percentage of users entering a node from your *selected node*)
   - Break count (instances when the bot wasn't able to respond to the user)
   - Automation (percentage of instances from total, when bot was able to handle user queries)

3. Click on any node shape possibly to expand them. This will help you access nodes and node paths in this graph view
 
       Ex: Node A -> Node  B -> Node C 
       Incoming users on Node A: 100
       Incoming users on Node B: 56
       Dropping users on Node C: 34
        
Above example helps you understand that the path from node A to node C isn't optimised as only 34 users ended on node C 
(out of 100 incoming users on node A). 
        
4. You can click on the *Legend* button at the bottom to understand the different color codes and node shapes.

       Tip: All start nodes are oval in shape. Other nodes are rectangular shaped and 
       drop-off endpoints are denoted with a dot. 

