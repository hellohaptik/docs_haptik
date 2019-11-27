---
title: Intent
---

## **What is an intent?**

An intent constitutes a task or action the user wants to perform. It is a goal or purpose that is expressed in a user utterance. Expressions that mean the same thing but constructed in different ways are added to the same intent.  

For example:

<table>
  <tr>
    <td>Intents</td>
    <td>Example user utterances</td>
  </tr>
  <tr>
    <td>Book_flight</td>
    <td>"I want to book a flight to Delhi next week"
"I would like to purchase a plane ticket to Singapore for Friday"
"Book a flight to Srilanka on Nov 24"</td>
  </tr>
  <tr>
    <td>Reschedule_flight</td>
    <td>"I need to reschedule my flight to Mumbai from Nov 28 to Dec 1"
“Reschedule flight to Delhi to next week” 
“I have to change travel date from 30 Nov to 5 Dec”</td>
  </tr>
  <tr>
    <td>Play_content</td>
    <td>“Play harry potter on Netflix”
“I want to watch Mission Impossible”
“On Hotstar play Avengers”</td>
  </tr>
</table>


### **When should one combine multiple intents into single intent and use entities?**

Intents should be varied so that we can capture the main goal that the user intended to perform. Intents that are too similar, have similar sentence structure and vocabulary can make it more difficult for our algorithms to distinguish. 

For example, **_TransferMoney_** and **_GetTransactionDetails_** are separate intents in a banking app, but **_TransferMoneyFromSavings_** and **_TransferMoneyFromCurrent_** are too similar. It is recommended to use entities rather than intents.

