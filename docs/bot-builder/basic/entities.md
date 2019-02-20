---
title: Entities
---

In this section, we'll cover the following topics:  
[What is an Entity?](#what-is-an-entity-again)  
[When to Use Entities](#when-is-the-appropriate-time-to-use-an-entity)  
[How Adding Entities Affects Bot Says](#how-does-using-an-entity-affect-the-other-bot-says-responses?)  
[How to Add an Entity](#adding-an-entity)  
[Creating a New Entity](#making-a-new-entity)

#### What is an entity again?

**Entities**: An entity represents the set of values from which a user’s response must come in order for that user to progress onwards in a conversation. Depending on the context of the conversation, the required response can either be a single value or limited group of specific values from the entity, or any value from within the entity. Entities are always added in connection with the bot’s query the required response is associated with, so that they may detect whether the required response was given.

#### When is the appropriate time to use an entity?

Some examples of when you would use an entity in Bot Says:

- When you need a user's email ID and need to verify that inputs are valid IDs or not. The ‘email’ entity allows the detection of an email id.
- When you need a user's phone number and need to verify that inputs are valid phone numbers. The ‘phone_number_without_validation’ entity detects a 10 digit number.
- When you need to gather the city a user wants to fly into and need to verify that the user has indicated a city with an airport in it.

#### How does using an entity affect the other Bot Says responses?

The flow of Bot Says responses goes from top to bottom in terms of evaluation. **The order of the entities, and their order relative to Bot Says inputs, matters**. First the initial bot reply comes, then the entities, and then finally the final bot reply. The delay message is sent only after a certain level of inactivity. The initial/final bot replies might be not needed in some scenarios. **Note** that to change the order of the Bot Says inputs, simply click and drag the reorder handle.

![bot says drag](bot_says_drag.png)

> **Entity Scenarios**
>
> - _If there are no entities_: If it’s a simple node that doesn’t need to collect entities or data, a simple bot says is all that’s needed. You won’t be able to add a final bot reply as that would be redundant as there are no middle steps.
> - _If there is one entity_: If there’s only one entity, then there is no initial bot reply as that entite’s responses serve as the initial bot reply.
> - _If there are multiple entities_: If there are multiple entities, then all the responses are required. (Intial Bot Says, Entity Responses as well as the final bot reply).

#### Adding an entity:

After selecting the node on which the entity is to be added, click on bot says or entities:

![entities open node](/docs/bot-builder/assets/entities_open_node.png)

Click on Add Entities. One can search for a particular word that needs to be detected, all existing entities that are capable of detecting that word/variant will appear as the search result

![entities add](/docs/bot-builder/assets/entities_add.png)

Simply click select on one of the existing entities to add it to your node.

#### Making a new entity:

To create a new entity

- Click on Create Entity if an appropriate entity doesn't exist.

  ![entities create click](/docs/bot-builder/assets/entities_create_click.png)

- Enter the name (must be a lower case, underscrore separated text) and description of an Entity. Try to make the description as relevant as possible, as it will help you better search for your entity in the future.

  ![entities create new](/docs/bot-builder/assets/entities_create_new_step1.png)

- Enter the details of the data dictionary. You can use ‘tab’ to quicky add words and variants. Once variants for a particular word are entered, press enter to store and to add new words and variants.

  ![entities create new 2](/docs/bot-builder/assets/entities_create_new_step2.png)

  **A few technical details**:

  > The ‘Backup’ button will download the current data set for a dictionary.
  >
  > The ‘Upload New Dictionary’ button will upload data from a csv into the dictionary.
  >
  > Format for upload and backup: word1|variant1,variant2,variant3 word2|variant4,variant5,variant.
  >
  > Any other format will be rejected.

- Click 'Next Step' once you're satisfied with your dictionary

- In the final step you can add a default message that the node should respond when the entity is detected

- On clicking 'Save', the entity will be created

- You can add the newly created entity to the existing node, or you can edit the newly created entity
