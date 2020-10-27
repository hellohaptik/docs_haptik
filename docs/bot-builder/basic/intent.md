---
title: Intent & Entity
---

## What is an intent?

An intent constitutes a task or action the user wants to perform. It is a goal or purpose that is expressed in a user utterance. Expressions that mean the same thing but constructed in different ways are added to the same intent.  

For example:

<table>
  <tr>
    <td><b>Intents</b></td>
    <td><b>Example user says</b></td>
  </tr>
  <tr>
    <td>Book_flight</td>
    <td>"I want to book a flight to Delhi next week"<br />
"I would like to purchase a plane ticket to Singapore for Friday"<br />
"Book a flight to Srilanka on Nov 24"</td>
  </tr>
  <tr>
    <td>Reschedule_flight</td>
    <td>"I need to reschedule my flight to Mumbai from Nov 28 to Dec 1"<br />
“Reschedule flight to Delhi to next week”<br />
“I have to change travel date from 30 Nov to 5 Dec”</td>
  </tr>
  <tr>
    <td>Play_content</td>
    <td>“Play harry potter on Netflix”<br /> 
“I want to watch Mission Impossible”<br /> 
“On Hotstar play Avengers”</td>
  </tr>
</table>

## What is an entity?

**Entities**: An entity represents the set of values from which a user’s response must come in order for that user to progress onwards in a conversation. Depending on the context of the conversation, the required response can either be a single value or limited group of specific values from the entity, or any value from within the entity. Entities are always added in connection with the bot’s query the required response is associated with, so that they may detect whether the required response was given.

Entities are auto-tagged in the user utterance as long as the entity dictionary is pre-populated. You can find more details about Entity tagging here.

## Intent vs Entity

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

## When is the appropriate time to use an entity?

Some examples of when you would use an entity in Bot Says:

- When you need a user's email ID and need to verify that inputs are valid IDs or not. The ‘email’ entity allows the detection of an email id.
- When you need a user's phone number and need to verify that inputs are valid phone numbers. The ‘phone_number_without_validation’ entity detects a 10 digit number.
- When you need to gather the city a user wants to fly into and need to verify that the user has indicated a city with an airport in it.

## When should one combine multiple intents into single intent and use entities?

Intents should be varied so that we can capture the main goal that the user intended to perform. Intents that are too similar, have similar sentence structure and vocabulary can make it more difficult for our algorithms to distinguish. 

For example, **_TransferMoney_** and **_GetTransactionDetails_** are separate intents in a banking app, but **_TransferMoneyFromSavings_** and **_TransferMoneyFromCurrent_** are too similar. It is recommended to use entities rather than intents.

