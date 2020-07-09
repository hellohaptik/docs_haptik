---
title: Chat assignment
---

# Introduction

# What does this document discuss?

## A restaurant analogy

<img src="/assets/spruce-restaurant-1009.png" alt="spruce-restaurant-1009" style="width:768px;"/>

### The setting

In our restaurant, there are only two kind of people involved in the operation:
 - Chefs who are responsible for receiving the customers and taking their order, preparing the meal, and serving it.
 - Guests who come in and sit down at the table in the restaurant and wait to be attended to.

Obviously, due to COVID-19, the guest's don't actually eat at the restaurant.
They just sit, physically distancing from each other, waiting for their food to be prepared.
Once a chef returns with their meal, they pick it up and leave the restaurant.

### The challenges

 - 

# Understanding the changes

| Use case                                               | Analogy                                         | Changed? |
| ------------------------------------------------------ | ----------------------------------------------- | -------- |
| Assigning users' chats to a team                       | N/A                                             | No       |
| Selecting which user needs to be addressed next        | Of the waiting guests, who will be served next? | No       |
| Selecting which agent will chat with the selected user | Who will serve the next guest?                  | Yes      |

## Existing subsystem

<img src="/assets/spruce-restaurant-1010.png" alt="spruce-restaurant-1010" style="width:640px;"/>

<img src="/assets/spruce-restaurant-1012.png" alt="spruce-restaurant-1012" style="width:640px"/>

<img src="/assets/spruce-restaurant-1021.png" alt="spruce-restaurant-1021" style="width:640px"/>

<img src="/assets/spruce-restaurant-1025.png" alt="spruce-restaurant-1025" style="width:640px"/>


## New subsystem

### Addressed issues

### Deciding agent priority

$$
priority ∝ number\ of\ slots\ being\ added\ at\ once
$$



# FAQs

 - What are the factors do you consider to assign chats?

   This question is too vague 

 - Would your assignment cater to high traffic scenarios?
 - Say I had 5 agents and I always see the efficiency is lost as I have seen chats going to 1 agent only, why is that?

 - How does your assignment help in reducing my SLAs (SLA could be FRT or Resolution time specific)
 - To assign the most recent chat to agents instead of the longest queued chat.
 - Chat assignment based on the User Online Status. Prioritize the chats to be assigned where the user is online on the platform.