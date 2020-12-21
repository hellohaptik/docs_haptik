---
title: Smart Assist
---

Intelligent Virtual Assistants are always trained to cater to user queries that fall within a fixed scope. However, at times, customers might ask queries that don’t fall within the scope of the IVA. This tends to prevent the IVA from answering the User’s queries.

A key component in Haptik’s conversational experience is SMART ASSIST. The objective of the component is to respond back to the user smartly when the IVA is not able to completely understand the User’s query. This should open up the pathways for the users to reformulate or redirect their queries, so that appropriate response can be given.

## How does the SMART ASSIST come into play?

The below graphic depicts the overall scheme of the SMART ASSIST - 

![SA_1](assets/SA_1.png)

Here is a sample video explaining how Smart Assist works

<iframe width="560" height="315" src="https://www.youtube.com/embed/COn_lLSwBm4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What are the components of SMART ASSIST?

There are various intelligent nudges that the IVA performs, to make an attempt to bring the user back into the conversation. They are described as below - 

1. Asking a user to choose from a list of options, if the bot is not confident on it’s understanding of the query. 

![SA_2](assets/SA_2.png)

This is similar to the “Did you mean?” feature. The difference is in the tonality of the IVA. In SMART ASSIST, it would be a bit apologetic, since the IVA was not able to understand the query of the user properly.

2. There are occasions, when users provide entity values with certain implicit assumptions, but don’t provide their complete requirement. With SMART ASSIST, the IVA will depict a list of options, which can utilise the entity provided by the user and request users to choose an option to continue the conversation.

![SA_3](assets/SA_3.png)

3. The IVA would ask the users to rephrase their query when it’s too short and the IVA has not understood the complete context from the message.

![SA_4](assets/SA_4.png)

4. The IVA will identify that the user’s query is out of scope of the IVA and ask the user to take one more attempt at sending their query, by using different words. Another attempt from the might lead the IVA to recognise the query.

![SA_5](assets/SA_5.png)

5. The IVA will ask the users to summarise their query, if it’s too long and if the IVA is not able to understand it completely.

![SA_6](assets/SA_6.png)

## Few points to Note - 

1. Users can pick an option amongst a list of options by replying with “1”, “2”, “3” after the list of options.

**Demonstration -**

![SA_7](assets/SA_7.png)

2. The IVA would Break and not send out Smart Assist for a User message, if the previous User message was responded with a Bot Break or a Smart Assist message.

3. The button texts on the SMART ASSIST messages are fetched from the “Did you mean?” text section on the respective Nodes in the Conversation Studio.

4. Text of the messages sent as SMART ASSIST responses, is currently non-customisable and controlled directly at the platform level.
