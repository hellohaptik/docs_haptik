---
title: Bot Says
---

## What is Bot Says?

Once you've completed the User Says component of a node, you'll need to define the node's **Bot Says** component. Bot Says is where a Node stores the replies that are sent in response to the user's message.

To get started with adding some Bot Says responses, navigate to a specific node and select the 2nd tab *Bot Says*. (See Screenshot Below)

![image](assets/bot-says/initial_response.gif)

Once you arrive at the Bot Says page, you'll see the above interface. This interface might differ slightly depending on the state of the node and the responses added to it.

Bot Says supports four types of responses:

## Initial Bot Says

The initial bot reply is the first message that the bot sends out when the node is detected.

Note that this is not active when there is only one entity present. When you have multiple entities, consider the Initial Bot Reply to be the opening message for the node.


## Entity Responses
You can extract specific details from a user's message using an Entity.
An Entity Response is the response that the bot will send when it doesn't know the Entity's value.

For example, if you want to collect the User's name, you could ask *"What is your name?"* in the Entity Response. Now If the User replies back with *"My name is Bruce Wayne"*, then "Bruce Wayne" will be extracted as an entity by our NER. These entities can then be used to create personalized and advanced flows for every user and hence, build better bots.

If you don't know what Entities are, but want to know how to use them, you should start from here.

> Tip: You can create your own Entities or use System Entities provided as a part of the Haptik Platform.

In the below example, the Bot will start with the response from "Initial Bot Reply".
Then, it will start looking for the Entities in the Entity Response. If the bot knows the Entity's value, then it will skip the response and move to the next Entity Response or Final Responses.

![image](assets/bot-says/entity_response.gif)

> Note: You can set an Entity Response only for Mandatory Entities. To know more about the difference between Mandatory and Non-Mandatory entities, refer [this](../entities).


## Final Bot Reply

Once all the entities have been collected, the bot finally replies with the responses from this section. This is usally a the closing message for that node.

In cases where the node is a Start node or an Intermediate node,the Final Bot Reply section is useful to send a response to direct the user to the remaining flow.

![image](assets/bot-says/final_bot_reply.gif)


## Follow Up Message

If the user is inactive for a specific set time, then the the bot replies with the Follow Up message. The delay interval for this message can be set using the slider, and can be set between 20 seconds to 20 minutes.

> Tip: Use Follow Up messages to collect feedback or increase engagement on your bot.

![bot says delay](assets/bot-says/follow_up.gif)

<hr>

Each of the above four types of response (Initial Bot Reply, Entities, Final Bot Reply, and Delay Message) are composed of **Variants**, **Message** and **Quick replies**.

### Variants
A bot response can consist of multiple variants. Each variant is an independent message. All variants should imply the same meaning. The bot chooses a variant randomly and avoids being repetitive even when asked the same question.

![image](assets/bot-says/variants.gif)


### Message:
A variant can consist of multiple message bubbles. This is where all the HSL messages go. Each message is a separate _text_ from the bot. Instead of putting a long message into just one message bubble. It is good practice to split it into multiple You can use the HSL builder to simplify creation of complicated responses like Carousel, Images and Buttons.

### Quick Replies
In addition to providing the bot response, a bot builder will also want to include prompts for how to reply back to the bot again. We call these pre-defined prompts Quick Replies. For example, for a yes or no question, you can add "yes" and "no" as quick replies so that when the bot addresses the question to the user, the user is automatically buttons saying "yes" and "no," which they can select from quickly.
![image](assets/bot-says/message_qrs.gif)

## ProTips
You can create personalised responses by using specific tags in the bot response.
To view the ProTips, you can follow the steps below.

![image](assets/bot-says/protip.gif)

There are 2 categories of ProTips available:
1. Customizing message appearance:
   - You can customize the appearance of the response by using combinations of **\***, **~**, **`** and **_** to make the text Bold, Strikethrough, Underline, and Italic respectively.
2. Customizing message content
   - You can customize the message response using keywords like %name, %timeofday, %date etc.

For ex, if you use "*Good %timeofday*", the bot will reply back Good Morning/Afternoon/Evening depending on the time of the day.

If you scroll to the bottom, you will see **%entitytag_<entity_name>**. You can use this tag to use the value of any entity collected in the Bot Flow.

For example: If you collect the user's name using the Person Name entity and you want to use it in a follow up message, you can use the above feature.

So a response like "*Hey %entitytag_person_name! Nice talking to you.*" would become "Hey Bruce Wayne! Nice talking to you".
