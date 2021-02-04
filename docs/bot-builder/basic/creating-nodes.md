---
title: Creating Nodes
---

On this page, we'll cover the following topics:

[What is a Node?](#what-is-a-node)  
[Different types of Nodes](#different-types-of-nodes)  
[Purpose and Subcomponents of Static Node](#subcomponents-of-static-nodes)  
[Purpose and Subcomponents of Code Node](#subcomponents-of-code-nodes)  
[Purpose and Subcomponents of Output Node](#subcomponents-of-output-nodes)    
[Creating a Node](#creating-a-node)

### What is a Node?

**Nodes** are the interlinked building blocks of a bot. Each node acts like a gatekeeper who detects user inputs, sends out appropriate responses, and directs users to the next node. They are the points where conversation converges or diverges basis the information users input to the bot. Nodes are comprised of several important sub-components, which house important pieces of information. Read on in this section to learn more about the significance of the components **User Says, Bot Says,** and **Entities,** and **APIs**.

To jump straight to reading about any of the sub-components of nodes, click on the link in the subcomponents section of any node. 

Otherwise, keep reading below to learn about the different node types and how to get started creating nodes.

### Different Types of Nodes
The Conversation Studio tool provides three types of nodes. Each node has a specific purpose and the different nodes can be used together in different combinations based on the use case.

The three types of nodes are:

* Static Node
* Code Node
* Output Node

### Purpose and Subcomponents of Static Nodes

The purpose of a static node is to present static information to the user like greeting message, menu options etc and to then collect information from the user that is required to perform business logic.

![RHS of Static Ndoe](assets/bot-builder-nodes/static-node.png)

#### Subcomponents

1. [User Says](user-says.md)
2. [Bot Says](bot-says.md)
3. [Connections](connections.md)
4. [Integrations](../integrations/introduction.md)

### Purpose and Subcomponents of Code Nodes

The purpose of a code node is to take the input collected from the static and use custom code to perfrom business logic on it. The advantage of moving this to a seperate node is that it helps you in seperating out the code and non-code features of bot building. 

The code node takes the input from the static node in a JSON format with certain [parameters](../integrations/integration-parameters.md). It processes this input JSON according to business logic and returns an output JSON.

Additionally, this gives you more power with respect to what you can do with the output from the integration code as we will in the next section and the [connections](connections.md) section.

![RHS of Code Ndoe](assets/bot-builder-nodes/code-node.png)


#### Subcomponents
1. [Integrations with Custom Code](../integrations/integrating-custom-code.md)

### Purpose and Subcomponents of Output Nodes

The purpose of output node is to take the JSON output from the code node and build dynamic bot says that use parameters from this output in the HSL.

Bot Builders can take advantage of an easy-to-use JSON picker in the bot says section to build the HSL using parameters from the output JSON.

The output node also allows you to collect non mandatory entities that might be needed to proceed in the chat flow. Because the entity is non mandatory there will be no reprompts if the user enters an incorrect value.

![RHS of Output Node](assets/bot-builder-nodes/output-node.png)

#### Subcomponents
1. [Bot Says](bot-says.md)

### Creating a Node

You will create your nodes within a sub-story. To make a node, click the sub-story on the left-hand-side. Now, click on the 'Add Nodes' button just below your sub-story title, as depicted here:

![img](assets/Nodes1.png)

This will open a sidebar, as shown below, on the left-hand side of the graph. You can drag and drop the node you want from this sidebar

![img](assets/Nodes2.png)

Once you drag and drop any of the node type from the sidebar, a new sidebar is opened with the RHS of the ndoe type you selected. You will need to fill in some information about the node before saving it.

You'll need to add the following inputs:

- **Node Name**: The label that will appear on the node on the Mogambo graph.

- **System Name**: The system name is used to uniquely identify the node in the backend. Only underscores and capital case alphanumeric characters are allowed in this field.

- **Node Type**: Use node type to indicate if a node is a **Start Node** or a **Context Clear Node**. Start Nodes indicate that this is the node that will initiate a conversation, while a Context Clear Node clears the entities, user's selection in a conversation.

      Tip: When the user is in the middle of a conversation and the system cannot find a match 
      to the connecting nodes, our system will go over all the start nodes to see if it can 
      find a match to what the user said. 

- **Status**: Indicate whether the node will be active or inactive. When you are first making a bot, we'll assume all the nodes you create are active. Instances when you will deactivate nodes will arise later on.

Click **'Save'** when done.

Post creation of a node, the node will be displayed as depicted below:

![img](assets/Nodes3.png)


#### Uploading Nodes

You can also create nodes by uploading a CSV. You can read more about it [**here**](https://docs.haptik.ai/bot-builder/basic/upload-graph-nodes)
