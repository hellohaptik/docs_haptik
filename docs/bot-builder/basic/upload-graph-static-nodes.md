---
title: Upload Graph Static Nodes
---

Graph static nodes are nothing but the basic static nodes that we use in the graph of the bot builder tool and it follows the same principle of User Says,Bot Says and End Nodes to detect nodes, reply back to the user, update the chat status and also support the API Integrations.

#### Why do we need graph node uploader tool
To handle the scenarios where we need to create large number of nodes in one go we can use graph node uploader tool.

#### How to Access Graph Node Uploader Tool

1. Open any bot.
2. Select sub-story under which you want to upload static nodes.
3. Click on More(top right corner) -> uploads nodes from file 
![](assets/access-graph-node-uploader-tool.gif)


#### CSV Format
![CSV Format](assets/faq_node_csv_format.png)

```
1. node_name: Name of the node, node name should be unique

2. Question(User Says): Independent Responses under User Says to detect this FAQ nov

3. answer(bot says): A node can have single or multiple bot says, to pass multiple bot says use `<m>` tag as delimiter

4. api_integration_url(optional): API Integration URL for the bot. It can be of two types.

    4.1 Absoulte URL: Absolute URLs contain more information than relative urls, as they also include the protocol (e.g http://xyz.com/get-products/ or https://xyz.com/get-products/) and the domain name.

    4.2. Relative URL: Relative URLs are generally easier to work with as they are shorter and more portable, but can only link to pages on the same domain. For eg: /get-products/

5. api_key(optional): If API Integration url requires secret/token key.
```

>Note: If you pass relative url under api_integration_url column then base url must be present at Bot level.


#### How to set base url at Bot Level
![](assets/set_base_url_at_bot_level.gif)


#### Error Messages

1. `Invalid Integration Url Provided` error msg will occur If we pass:

    a. Base URL without `http/https`.  
    b. Relative URL when no base url is set at domain level.  
    c. Relative URL and it doesn't start with `/`

2. `Node name is already used for a different node.` if duplicate node name provided in the sheet.

>Note: This node once get created through sheet can only be updated from bot-builder.
