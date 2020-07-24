---
title: Entities
---
In this section, we'll cover the following topics:  
[What is an Entity?](#what-is-an-entity)  
[Intent vs Entity](#intent-vs-entity)  
[When to Use Entities](#when-is-the-appropriate-time-to-use-an-entity)  
[How Entity Addition Affects Bot Says?](#how-does-using-an-entity-affect-the-other-bot-says-responses)
[How to Add an Entity](#adding-an-entity)  
[Creating a New Entity](#making-a-new-entity)  
[Mandatory and Optional Entities](#mandatory-and-optional-entities)  
[Entity Types](#entity-types)<br>
[Entity Patterns](#entity-patterns)<br>
[Node Entity Filter](#node-entity-filter)<br>
[Language Support for Different Entities](#language-support-for-different-entities)

### What is an entity?

**Entities**: An entity represents the set of values from which a user’s response must come in order for that user to progress onwards in a conversation. Depending on the context of the conversation, the required response can either be a single value or limited group of specific values from the entity, or any value from within the entity. Entities are always added in connection with the bot’s query the required response is associated with, so that they may detect whether the required response was given.

Entities are auto-tagged in the user utterance as long as the entity dictionary is pre-populated. You can find more details about Entity tagging here.

### Intent vs Entity

It is important to understand the difference between intent and an entity. 

Intent represents an action that the user wants to perform and the entity represents a keyword that you want to be extracted from the user utterance. 

<table>
  <tr>
    <td><b>Intent</b></td>
    <td><b>User utterance</b></td>
    <td><b>Entity extracted</b></td>
    <td><b>Explanation</b></td>
  </tr>
  <tr>
    <td>Book_flight</td>
    <td>Book a flight from Mumbai to Delhi</td>
    <td>From: Mumbai,
To: Delhi</td>
    <td>Departure and arrival locations are important information for Book_flight intent</td>
  </tr>
  <tr>
    <td>Play_content</td>
    <td>Play Avengers on Hotstar </td>
    <td>Content_name: Avengers,
App_name: Hotstar</td>
    <td>Content name and App name information are extracted from the user utterance</td>
  </tr>
  <tr>
    <td>Need_support</td>
    <td>Customer care number</td>
    <td>-</td>
    <td>No entity to be extracted from the utterance</td>
  </tr>
  <tr>
    <td>Apply_loan</td>
    <td>I would like to apply for a home loan</td>
    <td>Loan_type: home loan</td>
    <td>Loan type entity is extracted from the user utterance. Entity value transition can be used here to traverse to the next node </td>
  </tr>
  <tr>
    <td>Cylinder_price</td>
    <td>What is the price of 12 kg cylinder</td>
    <td>Cylinder_size: 12kg</td>
    <td>Cylinder size entity is extracted from the user utterance to fetch the price</td>
  </tr>
  <tr>
    <td>Login_issues</td>
    <td>I am unable to login</td>
    <td>-</td>
    <td>No entity to be extracted from the utterance. </td>
  </tr>
</table>

### When is the appropriate time to use an entity?

Some examples of when you would use an entity in Bot Says:

- When you need a user's email ID and need to verify that inputs are valid IDs or not. The ‘email’ entity allows the detection of an email id.
- When you need a user's phone number and need to verify that inputs are valid phone numbers. The ‘phone_number_without_validation’ entity detects a 10 digit number.
- When you need to gather the city a user wants to fly into and need to verify that the user has indicated a city with an airport in it.

### How does using an entity affect the other Bot Says responses?

The flow of Bot Says responses goes from top to bottom in terms of evaluation. **The order of the entities, and their order relative to Bot Says inputs, matters**. First the initial bot reply comes, then the entities, and then finally the final bot reply. The delay message is sent only after a certain level of inactivity. The initial/final bot replies might be not needed in some scenarios. **Note** that to change the order of the Bot Says inputs, simply click and drag the reorder handle.

> **Entity Scenarios**
>
> - _**If there are no entities**_: If it’s a simple node that doesn’t need to collect entities or data, a simple bot says is all that’s needed. You won’t be able to add a final bot reply as that would be redundant as there are no middle steps.
> - _**If there is one entity**_: If there’s only one entity, then there is no initial bot reply as that entity’s responses serve as the initial bot reply.
> - _**If there are multiple entities**_: If there are multiple entities, then all the responses are required. (Intial Bot Says, Entity Responses as well as the final bot reply).

#### Adding an entity:

After selecting the node on which the entity is to be added, click on "*Add an Entity*":

![entities open node](assets/entities_open_node.png)

On the popup below, one can search for an entity, from the already existing list of entities.

![entities add](assets/entities_add.png)

Simply click select on one of the existing entities to add it to your node.

#### Making a new entity:

To create a new entity

- Click on Create Entity if an appropriate entity doesn't exist.

- Enter the name (must be a lower case, underscore separated text) and description of an Entity. Try to make the description as relevant as possible, as it will help you better search for your entity in the future.

- Choose the privacy of the entity based on whether the entity collects any personal information like name, phone number, insurance number. Any information that can be used to identify the user is considered personal.

    > This feature is currently a work-in-progress. Currently this is treated just as a flag but in the future all personal entities will be encrypted.

  ![entities create new](assets/entities_create_new_step1.png)

- Enter the details of the data dictionary. You can use ‘tab’ to quicky add words and variants. Once variants for a particular word are entered, press enter to store and to add new words and variants.

  ![entities create new 2](assets/entities_create_new_step2.png)

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

- You can add the newly created entity to the existing node, or you can edit the newly created entity.


#### Listing all entities of the bot:
You can also view all the entities used in the bot in a single place along with their privacy information. This is useful if you want to quickly review all entities and their privacy settings.

You can view this by clickin on `More` in the top navigation bar and selecting `List of Entities`. You should then be able to view all entities used in the bot.

![list of entities in bot](assets/list_of_entities_in_bot.png)


### **Mandatory and Optional Entities**

An intent is the desired outcome of the whole user utterance, while entities are data extracted from the user utterance.

Intents are mandatory as they are important pieces of the puzzle to identify the user action or goal.  

Entities are optional. You do not need to create entities for every node in your bot, but only for those where it required for the bot to perform an action.

> *IMPORTANT: If there is transition based on entity value or entity presence, it is recommended to make the entity non-mandatory. Use Default or Final Response to respond to the user message*

For example, your reminder bot could consist of three entities -

![Mandatory Entity](assets/bot-builder-user-says/mandatory_entity.png)


<table>
  <tr>
    <td><b>Entity</b></td>
    <td><b>Type</b></td>
    <td><b>Description</b></td>
  </tr>
  <tr>
    <td>date</td>
    <td>mandatory</td>
    <td>‘date’ entity is mandatory to set up meeting reminder</td>
  </tr>
  <tr>
    <td>time</td>
    <td>mandatory</td>
    <td>‘time’ entity is mandatory to set up meeting reminder</td>
  </tr>
  <tr>
    <td>phone_number</td>
    <td>optional</td>
    <td>‘Phone_number’ entity is an optional entity. This is only needed if the user wants a message notification before the meeting</td>
  </tr>
</table>


#### **How does this work?**

Add user utterance to the ‘**Meeting reminder node**’.

![Meeting Reminder Node](assets/bot-builder-user-says/entity_node_usersays.png)

When user wants to setup a reminder, the conversation would go as follows -

1. User utterance consists of all the information needed to schedule a meeting.

![User freeform](assets/bot-builder-user-says/entity_user_utterance1.png)

2. User utterance only consists of the action information and the entities are missing. In such cases, bot will prompt the user to enter details for mandatory entities.

![User chatform](assets/bot-builder-user-says/entity_user_utterance2.png)

> **_Myth_**: Don't add entity values in user says
> 
> **_Reality_**: Add entity values in user says. If the values are added to the entity dictionary, entities get auto-tagged in the user says. 


For example:

<table>
  <tr>
    <td><b>User says</b></td>
    <td><b>Entity captured</b></td>
  </tr>
  <tr>
    <td>What is the weather like tomorrow in San Francisco</td>
    <td>$location - ‘San Francisco’
$time - ‘tomorrow’</td>
  </tr>
</table>


### Entity Types

There are multiple types of entities supported on the Platform. Below image showcases those various types -

![Entity Types](assets/EntityType.png)

#### **Numbers Entity**

**Numbers** entity is meant for collecting numbers within a defined number of digits. You can have a minimum and maximum range of digits.

![Number Entity](assets/NumberEntity.png)

In the above image, you can see a number type entity. Following image shows the range of digits it can accept. If a user inputs anything more or less than the range, it is treated as an invalid value.

![Number Range](assets/NumberRange.png)

#### **Regex Entity**

**Regex** entity is meant for detecting patterns like email ID, phone number etc. and collect relevent information from user says.

![Regex Entity](assets/RegexEntity.png)

For the above example, if the user is not giving a valid PANCARD number matching the regular expression pattern then the entity reprompt message would be asking the user to valid input. 

You can refer https://regex101.com/ to learn more about regular expression.

#### **Currency Entity**

**Currency** entity is meant for matching amounts of money with an indication of a currency type like, "50 rupees",  "three hundred and fifty dollars". It returns an object type value consisting of two attribute-value pairs: 

<table>
  <tr>
    <td><b>User says</b></td>
    <td><b>Entity captured</b></td>
  </tr>
  <tr>
    <td>I want to pay 50 rupees for the form</td>
    <td>{"unit": "rupees","value":"50.00"}</td>
  </tr>
    <tr>
    <td>I want to transfer three hunders and fifty dollars to Jane</td>
    <td>{"unit": "dollars","value":"350.00"}</td>
  </tr>
</table>

#### **Attachment Entity**

**Attachment** entity is meant for collecting attachments from the user message.

![Attachment Entity](assets/AttachmentEntity.png)

You would need to create a Button HSL for letting the user upload the attachment.

![Attachment Example on Bot](assets/AttachmentHSL.png)

For the above example, if the user is not giving a valid PANCARD image then the entity reprompt message would be asking the user for a valid image.

#### **Words & Phrases Entity**

**Words & Phrases** entity is meant to extract words/phrases from user utterances.

There are two ways in which this entity can be used.
1. Dictionary
2. Entity Patterns

##### Dictionary

`Dictionary` allows bot builders to do a full-text search on user queries to extract matching strings and phrases.
`Dictionary` has two concepts - 

1. values - value of an entity.
2. variants - For a given value, different variations of those words or phrases.

Example -  For **city** entity.
![Entity-Dictionary](assets/bot-builder-user-says/entity-dictionary.png)

### **Entity Patterns**

Entity Patterns allow the entities to be defined in such a manner that they can be detected on the basis of the context under which the utterance has been made by the User.

> **Entity patterns can be added only in English for now.**

**When should you use ENTITY PATTERNS?**

It can be used in following cases - 

1. When an entity can take an infinite set of values and using a pre-defined and limited list of values (read - Dictionary) isn't sustainable or possible.
    - Examples of such entities could be:
          a. person_name (Bob Marley, Nick Jonas, etc)
          b. movie_name (Harry Potter, Matrix Reloaded); or
2. When names of things i.e nouns (proper or common) from a user utterance are to be extracted, 

3. *When not to use* - Phrase extraction tasks involving action oriented statements like extracting set up a reminder from I want to set up a reminder should not be done through Entity Patterns. It is prone to unpredictable behaviour.

**HOW TO USE?**

**1.** Go to the Entity Patterns section of an entity. This section is meant to train the bot on the context in which the entity will be detected. 

- The context is provided to the bot through sample user utterances or patterns. In this section, those sentences are to be added which contain the entity and the user is expected to utter them. 

- It is shown in the image below where the names of courses are detected as an entity.

![EP_1](assets/EP_1.png)

**2.** Once sample utterances have been added, the entity value in the utterance needs to be tagged. The tags are used to explain the IVA about the presence of an entity in that mentioned pattern. 

- The tags of the entity can be added by selecting the phrases and clicking “Add Tag" as shown below.

![EP_2](assets/EP_2.png)
 
**3.** Provide some sample utterances which contain the entity value but not the context in which they are to be detected. They are called Negative examples. These utterances should be added but the entity value should not be tagged.

- The below image can be checked where pattern number 7, 9, 10 in the image are negative examples. A side image showing a working example where negative intents have been added - 

![EP_3](assets/EP_3.png)
             
One more illustration below where row number 67 is an example where the pattern is with an appropriate intent, but a different object has been entered to create a negative example.

![EP_4](assets/EP_4.png)

**4.** After you are done adding or updating variations, please Train the bot. The entities that are tagged in the ‘Entity Patterns’, get auto-tagged in the User Says section of the node as well.

- As illustrated in the images below, the phrases with a green underline are entity values of the entity added on the node. You can select the phrase and see which entity was detected for the phrase.

![EP_5](assets/EP_5.png)
   
**5.** To ensure that the IVA learns the context accurately, it’s recommended to Add a minimum of 10 sentences for every intent which the user might utter while providing the entity value. User’s Intents form a crucial part of the context in which the entity will be detected.

- If the IVA is to be trained on detecting a new intent from a user utterance, then 10 more variations should be provided to improve detection of the entity.

The emphasis on adding more variants in entity patterns is for ensuring that there is a **reduced probability of false detections.**

E.g - for the entity courses -  The intent is to search a course.

- *I want to search a course on Machine Learning*

- *I need to find a course on Marketing and so on till 10 variants have to be added.*

- But if intent in the context expands to a new "Buy" intent and entity value has to be detected in that context as well, then 10 more variations need to be provided.

E.g - for the entity courses -  The intent is to buy a course.

*I want to buy a course on Machine Learning*

*Can you help me buy  a course in Marketing and so on till 10 variations.*

**6.** Population of **DICTIONARY** for Entity Patterns - Dictionary in the context of entity patterns serves a different purpose, compared to normal text based entities. It can be explained through an illustration - 

- Let’s assume 10 patterns have been added to the Entity Patterns  section. If no dictionary values are present, the IVA will be trained with training data of 10 variations. 

- However, if 10 dictionary values are entered in the Dictionary section, the IVA will be trained on 10 patterns X 10 dictionary values i.e 100 variations.  

- This helps in making the model **more robust to the variations** in contexts and values.

- It also helps the IVA understand the variation in the nature of entity values, as illustrated better in the example below.

**Example** - Here is the list of entity patterns - 

![EP_6](assets/EP_6.png)

Below is the dictionary for the same. Please check that there are variations in the character and word length of entity values as well. This will make the IVA understand variations better.

![EP_7](assets/EP_7.png)

The below image shows the detection due to presence of character and word count variation in the entity values.

![EP_8](assets/EP_8.png)

Some guidelines to make Entity Patterns more robust -  

1. Vary the position of the entity in sentences in training data

2. Avoid spelling errors

3. Ensure variety in usage of verbs. E.g if the intent is to find a course, it can be shown with verbs like look, search, find, show, etc. 

4. Use complete sentences whenever possible. This enables the IVA to perform better on paraphrases

Aforesaid guidelines are illustrated in the image of Entity Patterns below - 

![EP_9](assets/EP_9.png)

**How do ENTITY PATTERNS work?**

When the entity patterns are defined, the IVA is trained on both the tagged term and the context in which the term is used. This enables the IVA to calculate a confidence score on every User Utterance, on how likely a word or phrase is going to be a value of an entity. 

- When a User Utterance is received, the IVA looks for the context of the sentence in which the entity is mentioned to detect.

![EP_10](assets/EP_10.png)

#### **Troubleshooting** ####

**Entity Detection Failure - Case 1**

The IVA should have detected an entity in a particular User Utterance,  but it didn't detect the same. Following steps can be taken to fix the same - 

Add that User Utterance to the Entity Patterns, ensuring that for a particular intent, 10 entity patterns are provided.

**Example** - Let's say the following User Utterance failed to get detected - 

![EP_11](assets/EP_11.png)

Add variations to the Entity Patterns as shown below. They are variations of the Buy intent in 10 different forms - 

![EP_12](assets/EP_12.png)

The IVA has been trained again after adding 10 variations and Entity Pattern has been detected.

![EP_13](assets/EP_13.png)

**Case 2 - False Detection**

This is a case where the IVA is detecting wrong phrases as an entity value. Illustration in the image below - 

![EP_14](assets/EP_14.png)

To fix the same, some Negative Variations without tagging the entity value have to be added to the Entity Patterns section, as shown in the image below. They communicate those cases to the IVA where detection need not occur.

![EP_15](assets/EP_15.png)

Below is the case where the detection stopped once the Negative Variations were added to the Entity Patterns. Once the IVA is trained after adding Negative Variations, the detection doesn’t occur.

![EP_16](assets/EP_16.png)

### **Node Entity Filter**

**What is the feature?**

The *Node-Entity Filter is the property of the Node-Entity combination*. The filter **MAY** come into picture **after** the ML Intent Detection algorithms have shortlisted NODES as per the User Utterance **and** a decision is being made on which is the perfect NODE to respond to the User Utterance.

The Node-Entity Filter MAY cause a NODE to be removed from the above shortlist of NODES. But it can’t get a particular NODE added to the shortlisted NODES, if Intent Detection algorithms haven’t found such a NODE suitable. It is shown in subsequent sections below.

**When to Use?**

1. When a Bot Builder wants a NODE to be shortlisted for response only when a specific entity value is present in a particular User Utterance.

2. When a Bot Builder wants to set a particular entity value as default when a User arrives at a particular node.

**How to Use?** - Below is a snapshot from the dictionary of the sample entity demo_city_entity_filter which has been used to illustrate this feature.

![NEF_1](assets/NEF_1.png)

The **Node-Entity Filter** can be added by clicking the “**filter**” icon shown in the black circle in the  below image.

![NEF_2](assets/NEF_2.png)

Once the icon is clicked, a dialog box appears where the values can be set. The entity value has to be entered in the **“Add a new word”** section. Press Enter to save the filter after entering the value.

![NEF_3](assets/NEF_3.png)

Please note that **“ENTITY VALUES” have to be added and not variants** as shown in the images below for the same. Here, “HYD” is added as a filter value. **HYD in this case is an entity value and not an entity variant**.

![NEF_4](assets/NEF_4.png)

Once a filter has been added, the “**filter**” icon appears blue as shown in the image below.

![NEF_5](assets/NEF_5.png)

Let’s take a few illustrations as shown in images below - An **Entity Filter Demo Node** has been created with User Says as shown below. The **demo_city_filter_node** entity has been added with **filter HYD** to the same node.

![NEF_6](assets/NEF_6.png)

**Illustration 1** - As shown in the image below, When an **entity variant (Mumbai)** was present in the User Utterance, but was not present in the Node-Entity Filter, the **Entity Filter Demo Node was not shortlisted** and hence the Bot Broke. 

As per Intent Detection ML Algorithm, Entity Filter Demo Node was shortlisted for responding, but since Node-Entity Filter was set to HYD, the NODE was rejected as a candidate while responding.

![NEF_7](assets/NEF_7.png)

**Illustration 2** - As shown in the image below, when the **entity variant (Hyderabad)** corresponding to entity value **HYD** was present in the User Utterance and in the Node-Entity Filter as well, the Entity Filter Demo Node was shortlisted. Hence, the Bot responded from that node. 

This is how normal Intent Detection works, with no impact of Node-Entity filter coming into play.

![NEF_8](assets/NEF_8.png)

Illustration 1 and 2 can be compared to get a complete understanding of the Node-Entity Filter feature.

**Illustration 3** - Here’s another illustration on what Node-Entity Filter **doesn’t do**. 

- When the entity variant corresponding to entity value HYD was present in the User Utterance but the NODE Entity Filter Demo Node was not an appropriate node for response as per the ML Intent Detection Algorithms, that particular node was not shortlisted for responding.

Another more appropriate node was chosen to respond as shown below.

![NEF_9](assets/NEF_9.png)

But when **ENTITY FILTER DEMO NODE** was the correct candidate as per the Intent Detection ML Algorithm, then that NODE was shortlisted and a response was sent from that Node.

![NEF_10](assets/NEF_10.png)

**Illustration 4** - Below image shows a case when User Utterance had no mention of any entity value. User Utterance matched the **Entity Filter Demo Node** through ML Intent Detection Algorithms. However, when the User reached that NODE, the **Node-Entity Filter** was set as default value for the **demo_city_filter_node entity**. Please notice that no filtering is applied in such a scenario.

![NEF_11](assets/NEF_11.png)

**Illustration 5** - If there are multiple values present in the filter list as shown in the image below, the **most recently added value** would be set as default for that entity, which is BOM in the below illustrated case.

![NEF_12](assets/NEF_12.png)

**How does it work?**

For understanding, Let’s take the above entity **demo_city_entity_filter**. It’s values are DEL, HYD, MAD, BOM and **HYD** has been set as a Node-Entity Filter.

If an entity value HYD is set as a Node-Entity Filter, then that NODE will be eligible to be shortlisted only if 2 cases mentioned below occur -  

**1.** When **variants of HYD** from the entity dictionary are present in the User Utterance.

**As a corollary**, it can be said that if entity demo_city_entity_filter is added to a NODE with HYD Node-Entity Filter, and any other entity variant of demo_city_entity_filter is present in User Utterance like BOM, then that particular NODE will not be shortlisted to respond. It’s shown in **Illustration 1** above.

**2.** When **no entity value** corresponding to the entity **demo_city_entity_filter** is present in the User Utterance.

- There is an additional impact in this use-case. When a User Utterance contains no entity value for **demo_city_entity_filter** entity and the User Utterance selects a NODE to respond where a Node-Entity filter is set, the Bot will make the value of entity **demo_city_entity_filter** default to that value for which filter has been set. It’s shown in **Illustration 4 and 5 above**.

**Note -** 

1. There is no deterministic rule or an assurance that whenever a User Utterance contains a particular entity variant which is a Node-Entity Filter at a NODE, then that NODE will be automatically chosen to respond irrespective of the Utterance. It’s shown in Illustration 3 above.

The response to the User will still be from a Node which has Highest Confidence score as per the Intent detection Algorithm. The Node-Entity Filter only removes a particular NODE from the shortlist of candidate nodes.

2. **LIMITATION** - The Node-Entity Filter works only in cases where the Entity is either a **“Words or Phrases”** or a **Regex Type** and the entity should not return a dictionary, but only a specific value. For “Words or Phrases” entities, the value entered in Node-Entity Filter is **case sensitive** as well.

3. Say, there are 2 entities having Node-entity Filter on a particular NODE, then the NODE will become eligible for being shortlisted only if 
        a. The User Utterance has no entity values, or
        b. The User Utterance has both the entity values on which filter has been applied.


### **Language Support for Different Entities**

<table>
  <tr>
    <td><b>Entity type</b></td>
    <td><b>Description</b></td>
    <td><b>Example</b></td>
    <td><b>Supported languages - ISO 639-1code</b></td>
  </tr>
  <tr>
    <td>Time</td>
    <td>Detect time from given text.</td>
    <td>tomorrow morning at 5, कल सुबह ५ बजे, kal subah 5 baje</td>
    <td>'en', 'hi', 'gu', 'bn', 'mr', 'ta'</td>
  </tr>
  <tr>
    <td>Date</td>
    <td>Detect date from given text</td>
    <td>next monday, agle somvar, अगले सोमवार</td>
    <td>'en', 'hi', 'gu', 'bn', 'mr', 'ta'</td>
  </tr>
  <tr>
    <td>Number</td>
    <td>Detect number and respective units in given text</td>
    <td>50 rs per person, ५ किलो चावल, मुझे एक लीटर ऑइल चाहिए</td>
    <td>'en', 'hi', 'gu', 'bn', 'mr', 'ta'</td>
  </tr>
  <tr>
    <td>Phone number</td>
    <td>Detect phone number in given text</td>
    <td>9833530536, +91 9833530536, ९८३३४३०५३५</td>
    <td>'en', 'hi', 'gu', 'bn', 'mr', 'ta'</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>Detect email in text</td>
    <td>hello@haptik.co</td>
    <td>'en'</td>
  </tr>
  <tr>
    <td>Text</td>
    <td>Detect custom entities in text string using full text search in Datastore or based on contextual model</td>
    <td>Order me a pizza,मुंबईमें मौसम कैसा है</td>
    <td>Search supported for 'en', 'hi', 'gu', 'bn', 'mr', 'ta', Entity Patterns supported for 'en' only</td>
  </tr>
  <tr>
    <td>PNR</td>
    <td>Detect PNR (serial) codes in given text.</td>
    <td>My flight PNR is 4SGX3E</td>
    <td>'en'</td>
  </tr>
  <tr>
    <td>Regex</td>
    <td>Detect entities using custom regex patterns</td>
    <td>My flight PNR is 4SGX3E</td>
    <td>NA</td>
  </tr>
  <tr>
    <td>City</td>
    <td>CityDetector detects cities from the text</td>
    <td>From Mumbai, To Mumbai, via Mumbai, atms in Mumbai</td>
    <td>'en'</td>
  </tr>
  <tr>
    <td>Budget</td>
    <td>Detects the budget from the text. This detector captures additional attributes like max_budget, min_budget whether the budget is normal_budget</td>
    <td>shirts between 2000 to 3000</td>
    <td>'en'</td>
  </tr>
  <tr>
    <td>Shopping size</td>
    <td>Detects size which are used for shopping from the text</td>
    <td>Suggest me shirt of size X-Large</td>
    <td>'en'</td>
  </tr>
  <tr>
    <td>Currency</td>
    <td>Detects currency and the value from the given text</td>
    <td>My Salary is $100000</td>
    <td>'en'</td>
  </tr>
  <tr>
    <td>Number Range</td>
    <td>Detects number range from the given text</td>
    <td>Suggest a phone in the price range of 10000 to 15000</td>
    <td>'en', 'hi', 'gu', 'bn', 'mr', 'ta'</td>
  </tr>
</table>

