---
title: Creating Nodes
---

On this page, we'll cover the following topics:

[What is a node?](#what-is-a-node)  
[Subcomponents of Nodes](#subcomponents-of-nodes)  
[Creating a node](#creating-a-node)

### What is a Node?

**Nodes** are the interlinked building blocks of a bot. Each node acts like a gatekeeper who detects user inputs, sends out appropriate responses, and directs users to the next node. They are the points where conversation converges or diverges basis the information users input to the bot. Nodes are comprised of several important sub-components, which house important pieces of information. Read on in this section to learn more about the significance of the components **User Says, Bot Says,** and **Entities,** and **APIs**.

To jump straight to reading about any of the sub-components of nodes, click on the link below. Otherwise, keep reading below to learn about how to get started creating nodes.

### Subcomponents of Nodes

1. [User Says](user-says.md)
2. [Bot Says](bot-says.md)
3. [Connections](connections.md)
4. Integrations

### Creating a Node

You will create your nodes within a sub-story. To make a node, click the sub-story on the left-hand-side. Now, click on the 'New Node' button just below your sub-story title, as depicted here:

![img](assets/add_node_button.png)

This will open a sidebar, as shown below, on the right-hand side of the graph.

![img](assets/new_node_sidebar.png)

You'll need to add the following inputs:

- **Node Name**: The label that will appear on the node on the Mogambo graph.
- **System Name**: The system name is used to uniquely identify the node in the backend. Only underscores and capital case alphanumeric characters are allowed in this field.
- **Node Type**: Use node type to indicate if a node is a Start Node or an End Node. Start Nodes indicate that this is the node that will initiate a conversation, while an End Node is the last node in a conversation. When an end node is reached, and that node does not have further connecting nodes, we internally mark this conversation as 'complete,' which helps when tracking user activity.

      Tip: When the user is in the middle of a conversation and the system cannot find a match 
      to the connecting nodes, our system will go over all the start nodes to see if it can 
      find a match to what the user said. 

- **Status**: Indicate whether the node will be active or inactive. When you are first making a bot, we'll assume all the nodes you create are active. Instances when you will deactivate nodes will arise later on.

Click 'Save' when done.

Post creation of a node, the node will be displayed as depicted below:

![img](assets/new_node_complete.png)
