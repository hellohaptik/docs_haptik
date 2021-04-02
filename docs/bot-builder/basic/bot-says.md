---
title: Bot Says
---

## What is Bot Says?

Once you've completed the User Says component of a node, you'll need to define the node's **Bot Says** section. Bot Says is where a Node stores the replies that are sent in response to the user's message.

This section is also used to configure the Entities that this node should collect from the user.

> **Tip:** If you don't know what an Entity is, it will be helpful to read this [Introduction to Entities](./entities) before you continue.

To get started with adding some Bot Says responses, navigate to a specific node and select the 2nd tab *Bot Says*.

![image](https://user-images.githubusercontent.com/75118325/113371660-8c13b500-9384-11eb-8566-7a2d63d4ef01.png)

Once you arrive at the Bot Says page, you'll see the above interface. This interface might differ slightly depending on the state of the node and the responses added to it.

## Types of Responses
Depending on how the node is built, the Bot Says section can have four types of responses:

### Initial Response

This is the first message that the bot sends out when the node is detected and it doesn't know about any entity on the node.

![image](https://user-images.githubusercontent.com/75118325/113371542-3e974800-9384-11eb-96a7-ca387f98ea5f.png)

### Entity Responses

If you have Entities present on a node, then **Entity Response** is the response that the bot will send when it doesn't know that Entity's value.

For example, if you want to collect the User's name, you could ask *"What is your name?"* in the Entity Response. Now If the User replies back with *"My name is Bruce Wayne"*, then "Bruce Wayne" will be extracted as an entity by our [NER](https://github.com/hellohaptik/chatbot_ner). These entities can then be used to create personalized and advanced flows for every user and hence, build better bots.

1. When there is only one entity present, the **Initial Response** section is disabled as it is the same as **Entity Response** of the first Entity on the node. For Example, if you want to collect the answer to a question, your Bot Says would look something like below:

![image](https://user-images.githubusercontent.com/75118325/113371946-1cea9080-9385-11eb-8b5a-5c12c4bd9bf3.png)

2. When you have multiple entities, consider the **Initial Response** to be the opening message for the node. In some cases, this can be the same as the response in **Entity Response** of the first Entity on the node.

![multiple](https://user-images.githubusercontent.com/75118325/113372764-00e7ee80-9387-11eb-9be1-13be6cd42b4a.gif)

> **Tip:** You can create your own Entities or use System Entities provided as a part of the Haptik Platform.

> If the bot knows the Entity's value, then it will skip the response and move to the next Entity Response or Final Responses.

#### Mandatory vs Non-Mandatory Entities
Depending on your flow, some entities could be required to move to the next step and some could be optional. To allow for this requirement, you can use the concept of Mandatory and Non-Mandatory entities.

For example, in a Lead Generation Bot, Phone Number may be optional but Email could be compulsory. To handle such scenario, you can mark the *phone_number* entity as Non-Mandatory by clicking on the Star Icon.

What that would mean is, if the User provided the phone number, it will be captured under the *phone_number* entity. But if it wasn't provided, the user will still be able to continue with the flow as long as the other Mandatory entities are provided.

> **Note:** You can set an Entity Response only for Mandatory Entities. To know more about the difference between Mandatory and Non-Mandatory entities, refer [this](https://docs.haptik.ai/bot-builder/basic/entities).

Since Non-Mandatory entities are not compulsory for the node, you don't need to add a specific response for this entity. And the request to collect the answer can be combined with responses for other Mandatory Entities by using [Chat Forms](https://docs.haptik.ai/bot-builder/basic/chat-elements#forms) or other [HSLs](https://docs.haptik.ai/hsl/)

![image](https://user-images.githubusercontent.com/75118325/113373357-45c05500-9388-11eb-90b9-c5b4d0303bcf.png)

### Final Response

Once all the entities have been collected, the bot finally replies with the responses from the **Final Response** section. This is usally a the closing message for that node.

In cases where the node is a Start node or an Intermediate node, the **Final Response** section is useful to send a response to continue the user to the next part of the flow.

> **Note: Final Response isn't applicable if the node doesn't have any entities as the Initial Response itself acts like the Final Response.**

![image](https://user-images.githubusercontent.com/75118325/113373482-88822d00-9388-11eb-9243-ffe4b9ac0948.png)

In case you want to skip this message and directly continue the user's journey in the flow, add **{}** as the **Final Response**. Click [**here**](https://docs.haptik.ai/bot-builder/basic/bot-says#smart-actions-for-bot-says) to know more about Smart Actions on Bot Says.

### Follow Up Message

If the user is inactive for a specific interval, then the the bot replies with the Follow Up message. The delay interval for this message can be set using the slider, and can be set between 20 seconds to 20 minutes.

> Tip: Use Follow Up messages to collect feedback or increase engagement on your bot.

![image](https://user-images.githubusercontent.com/75118325/113374728-5f16d080-938b-11eb-9cd0-b3b93cfe6552.png)

> **Note:** Follow up message will be sent only if the user has not replied back after reaching that node and the chat is in Bot state.

## Priority of Responses:
As explained above, the Response to be sent is chosen from a **Top to Down order** i.e.
1. If no entity value is known, then the response **Initial Response** is sent.
2. Depending on the order of Mandatory Entities, the response will be sent from the **Entity Response**, for the entities whose value is not known.
3. Once value of all Mandatory entities is known, the **Final Response** is sent, if applicable.

> **Tip:** You can change the Priority of Mandatory entities by reordering them.

![reorder](https://user-images.githubusercontent.com/75118325/113374923-f11ed900-938b-11eb-90e1-ac2714271e44.gif)

<hr>

## Structure of a Response
Each of the above response (Initial Response, Entity Response, Final Response, and Follow Up Response) are composed of the following:
- Variants
- Message
- Quick replies

### Variants
A bot response can consist of multiple variants where each variant is an independent message. All variants should imply the same meaning as the **bot chooses a variant randomly** to avoid being repetitive even when asked the same question.

Each variant is composed of **Messages** and **Quick Replies**.

![image](https://user-images.githubusercontent.com/75118325/113375110-612d5f00-938c-11eb-9f19-f89573d3a688.png)

When showing variants, we now also show the **platforms** enabled for that particular variant. Clicking on it opens a small tooltip which allows you to add/remove platforms or just select the platforms for your variant here. If you select the platform as **WhatsApp**, this variant will be sent to user when they are accessing the bot on **WhatsApp**.

![image](https://user-images.githubusercontent.com/75118325/113375267-aa7dae80-938c-11eb-8d8c-d011bb05f679.png)

Adding device specific variants to our chat elements helps build one flow for one or many platforms. Depending on the platform the user is using to chat, the device specific variants would be served to the end user. This would give power to the bot builder to modify existing bots and add incremental support for a platform without much effort. 

    The limitation here is that the flow must be the same across platforms. 

### Message
A variant can have multiple message bubbles. Each message is a separate _text_ from the bot. Instead of putting a long message into just one message bubble, you can split it into multiple shorter messages. However, you should avoid adding more than 3-4 messages in a single variant.

> Tip: You can use the HSL builder to simplify creation of complicated responses like Carousel, Images and Buttons.

![image](https://user-images.githubusercontent.com/75118325/113375584-5a531c00-938d-11eb-8fe8-5fad82f9b1ac.png)

### Quick Replies
In addition to providing the bot response, you might also want to include prompts for how to reply back to the bot again. These pre-defined prompts are called Quick Replies.

![image](https://user-images.githubusercontent.com/75118325/113375654-82427f80-938d-11eb-8ad8-c9221aa26ec2.png)

> **Tip:** You should use Quick Replies to help the user navigate within a flow.

## Using Entity Values inside bot says

You can use the value collected in the entity inside your bot says to personalize the messages. For example: if you collect the user's name using the person_name entity and you want to use it in the **Final Response**, you can use the name as shown below - 

![ent in bs](https://user-images.githubusercontent.com/75118325/113375887-10b70100-938e-11eb-916c-a477b36b8ac1.gif)

### Using Simple Entities in bot says
To use the entity value of simple text entities click on the `Add Entities` dropdown on the top of the bot says textbox and pick the entity value you want to add.

![bot says entity picker](assets/bot-builder-bot-says/entity_picker_bot_says.gif)

### Using Complex Entities in bot says
To use entity value of complex entities like date which can be represented in multiple formats click on the `Add Entities` dropdown on the top of the bot says textbox and pick the complex entity in the format you want it to be shown in.

![bot says complex entity picker](assets/bot-builder-bot-says/complex_entity_picker_bot_says.gif)

> Custom or locally created entities have **%entitytag** along with the entity name. 
> For example, **%entitytag_order_id**, here, order_id is a locally created entity.

## ProTips
You can create personalised responses by using specific tags in the bot response.
To view the ProTips, you can follow the steps below.

![image](https://user-images.githubusercontent.com/75118325/113376217-d26e1180-938e-11eb-9d42-7915c418b9bd.png)

There are 2 categories of ProTips available:
1. Customizing message appearance:
   - You can customize the appearance of the response by using combinations of **\***, **~**, **`** and **_** to make the text Bold, Strikethrough, Underline, and Italic respectively.
2. Customizing message content
   - You can customize the message response using keywords like %name, %timeofday, %date etc.

For ex, if you use "*Good %timeofday*", the bot will reply back Good Morning/Afternoon/Evening depending on the time of the day.

If you scroll to the bottom, you will see **%entitytag_<entity_name>**. You can use this tag to use the value of any entity collected in the Bot Flow.

So a response like "*Hey %entitytag_person_name! Nice talking to you.*" would become "Hey Bruce Wayne! Nice talking to you".

### Smart Actions for Bot Says

There are 3 smart actions available - 

1. **{}** - This can be used when you want to skip any message. This is vastly used in Final Response when you want to skip this message.
2. **{taskbox}** - When the user reaches a Node where bot says is {taskbox}, the bot opens up the Menu/Taskbox.

![taskboxsa](https://user-images.githubusercontent.com/75118325/111466240-07e8ed00-8749-11eb-82a0-6a810b32d61b.png)

3. **{feedback}** - When the user reaches a Node where bot says is {feedback}, the feedback module is sent to the user on the bot.

![feedbacksa](https://user-images.githubusercontent.com/75118325/111466256-0e776480-8749-11eb-9709-b7aac08928c4.png)

> {taskbox} and {feedback} is available only for Web SDK.
