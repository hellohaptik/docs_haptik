---
title: "Bot Prompts"
id: feature-bot-prompts
---

Bot Prompts are Custom Prompts triggered to increase user engagement and help users with actions on the website. 

## Types of triggers

These prompts can be triggered in 2 ways:

- **Dynamic Trigger:** *These are triggered based on dynamic conditions dependant on user actions. (Ex. Number of visits, time on page, url etc.)
See below on how to configure dynamic triggers.*
- **Programmatic Trigger:** *Prompts can also be triggered manually on a code level using the SDK functions in case the client wants to implement custom trigger logic on their end.
See [**Configuration → SDK Methods**](https://docs.haptik.ai/web-sdk/configuration-sdk-methods#prompttitle-message) on how to trigger this.*

Bot Prompts don't show up regardless of triggers if the user already has the chat window open

## Configuring dynamic triggers

Dynamic triggers can be configured through the Bot Builder. You can set rules according to which the prompt will be triggered for users.

![image](https://user-images.githubusercontent.com/75118325/111913033-473d7380-8a92-11eb-8adc-c05cb16a2525.png)

Navgiate to **Business Manager** on **Conversation Studio**. Go to **Bot Prompt Triggers**, to create new triggers - 

![image](https://user-images.githubusercontent.com/75118325/111913133-c337bb80-8a92-11eb-8645-c17d13efe055.png)

Tap on **Create a New Trigger** to create a trigger.

![image](https://user-images.githubusercontent.com/75118325/111913167-ea8e8880-8a92-11eb-8a04-851ef0de1a96.png)

**Field Definitions:**

### `Trigger Title (For Internal Use)`

The name of the trigger, used internally.

### `Active`

Whether the trigger is active or not.

### `Prompt Variations`

Different bot prompt variations for the trigger. One of the variations is selected at random and shown to the user. Each variant has the following properties:

- `Prompt Title (String)` : The message to be shown to the user.
- `Button Text (String)` : The text to be shown on the button of prompt.
- `User Message (String)` : The Message which should be sent as a User Message if the user clicks on the button.

You can add Quick Replies in the Prompt Variations. This can help the users to choose a conversation starter.

![image](https://user-images.githubusercontent.com/75118325/111913291-80c2ae80-8a93-11eb-9d94-6952a248d7af.png)

### `Prompt Rules`

These are the conditions that the XDK checks to determine whether to trigger the prompt or not. You can have multiple rules defined. Different Rule Types:

- `Trigger Based On`
The basis on which to test the rule. 
Possible values:
    - `Page URL`: *Sets a Rule which checks the page URL for the condition specified.*
    - `No. of Visits`: *Checks for the number of visits on the page by the user.*
    - `Query Params`: *Checks the Query Parameters for the specified Value.*
    - `Time on Page` : *Checks for the time on the page by the user.*
    - `Form Field`: *Checks the Form Fields for the specified Value.*
- `Condition`
The operator to apply when checking the trigger (For example: `Greater than`, `Contains` etc.)
- `Value`
The value to compare the value the trigger is based on with. This is value that is compared along with the condition.

### `Prompt Rule Type (AND/OR)`

Whether all the rules for trigger should match (`AND`) or any one of the rules should match (`OR`)

## Bot Prompt UI Types

The XDK supports 2 different types of bot prompt interfaces.

*See [**Configuration → SDK Methods**](https://docs.haptik.ai/web-sdk/configuration-sdk-methods#prompttitle-message) on how to trigger this.*

- **Full Bot Prompt**
Contains the prompt **Trigger Title** and messages added under **Prompt Variations**.

![image](https://user-images.githubusercontent.com/75118325/111913406-faf33300-8a93-11eb-9103-660b9c87bcf2.png)
    

- **Minimal Bot Prompt**
Contains just the message inside a minimal chat bubble above the chat with us button of the XDK. The entire bubble is clickable and acts as the call to action.

![image](https://user-images.githubusercontent.com/75118325/111913537-9ab0c100-8a94-11eb-8284-01891697ad93.png)   
