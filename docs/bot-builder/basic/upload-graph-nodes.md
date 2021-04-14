---
title: Upload Graph Nodes
---

> Note: This only works for Static nodes.

Graph nodes are basic static nodes that we use in the graph of the Conversation Studio tool and it follows the same principle of **User Says**, **Bot Says** and **Start Nodes** to detect nodes, reply back to the user, update the chat status and also support the API Integrations.

#### Why do we need Graph Node uploader tool
To handle the scenarios where we need to create large number of nodes in one go, we can use graph node uploader tool.

#### How to Access Graph Node Uploader Tool

1. Open any bot.
2. Select the **Sub Story** under which you want to upload these nodes.
3. Click on **More**(top right corner) -> Uploads Nodes from File 

![upload faqs](https://user-images.githubusercontent.com/75118325/113534351-1dd22b00-95ee-11eb-8724-32caa979bc7d.gif)

#### CSV Format

![image](https://user-images.githubusercontent.com/75118325/113534344-16128680-95ee-11eb-9634-11cbb5148f17.png)

```
1. node_name: Name of the node, node name should be unique

2. question(User Says): Independent Responses under User Says to detect this FAQ nov

3. answer(bot says): A node can have single or multiple bot says, to pass multiple bot says use `<m>` tag as delimiter

4. quick_replies: Add Quick replies to continue the conversation flow

5. link_text: This is the text that appears with the Button HSL

6. link_button: This text appears on the button

7. link_url: This is the URL for redirection on the click of the button
```

> `quick_replies`, `link_text`, `link_button`, `link_url` are optional columns.

#### Sample FAQ Uploader

You can download a sample CSV file from [here](assets/FAQ_Uploader.csv).
