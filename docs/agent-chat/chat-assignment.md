---
title: Chat assignment
---

## Introduction


## A restaurant analogy

<img src="/assets/spruce-restaurant-1009.png" alt="spruce-restaurant-1009" style="width:768px;"/>

### The setting

In our restaurant, there are only two kind of people involved in the operation:
 - Chefs who are responsible for receiving the customers and taking their order, preparing the meal, and serving it.
 - Guests who come in and sit down at the table in the restaurant and wait to be attended to.

Obviously, due to COVID-19, the guest's don't actually eat at the restaurant.
They just sit, physically distancing from each other, waiting for their food to be prepared.
Once a chef returns with their meal, they pick it up and leave the restaurant.

## What does this document discuss?

Now let's look at typical use cases of the chat assignment system:


| Use case                                               | Analogy                                                      | Changed? | Discussed here? |
| ------------------------------------------------------ | ------------------------------------------------------------ | -------- | --------------- |
| Assigning users' chats to a team                       | Which brigade is going to attend the service?                | No       | No              |
| Selecting which user needs to be addressed next        | Of the waiting guests, who will be served next?              | No       | No              |
| Selecting which agent will chat with the selected user | Who will serve the next guest?                               | Yes      | Yes             |
| User's assigned to an expert's queue                   | Guests who have a favourite chef and would like to be served only by her. | No       | No              |
| A chat is manually reassigned to another expert        | A chef's not comfortable preparing this dish, they'd like a colleague to help them out. | No       | No              |

## Understanding the changes

## Existing subsystem

<img src="/assets/spruce-restaurant-1010.png" alt="spruce-restaurant-1010" style="width:640px;"/>

<img src="/assets/spruce-restaurant-1011.png" alt="spruce-restaurant-1011" style="width:640px"/>

<img src="/assets/spruce-restaurant-1012.png" alt="spruce-restaurant-1012" style="width:640px"/>

<img src="/assets/spruce-restaurant-1020.png" alt="spruce-restaurant-1020" style="width:640px"/>

<img src="/assets/spruce-restaurant-1021.png" alt="spruce-restaurant-1021" style="width:640px"/>

<img src="/assets/spruce-restaurant-1025.png" alt="spruce-restaurant-1025" style="width:640px"/>


### Addressed issues in the new subsystem

Now, at the end of the above service, we have the following issues arising:

| Issue | Analogy | Imapct | Addressed? |
| ----- | ------- | ------ | ---------- |
|       |         |        |            |
|       |         |        |            |
|       |         |        |            |
|       |         |        |            |




### Deciding agent priority

Given the complexity of the assignment algorithms,
we're unable to share a deterministic answer to how exactly chats are assigned 

However, at a high level of understanding
 1. Agent priority is calculated per available slot of the agent.
    
    For example, if _Diana_ has a concurrency of 3,
    it's possible that her slot 1 and 2 get allocated first amongst the entire team.
    
    While her slot 3 is allocated after all other slots of her colleagues have been exhausted. 
 2. **Agent priority is directly proportional to:**
    - **number of free slots of the agent**
    - **amount of time the agent has been waiting for a chat to be assigned to them**

  > NOTE: Agent priority is not calculated at the time a chat arrives in the system,
    rather we try to pre-determine who is most likely to be free in the near future. 
    Hence, it is possible to have multiple chats assigned in succession to an agent at an instance,
    if they had not taken chats in a long time.
    This is done to avoid delaying chat assignment in real-time due to time spent in computing the current priority.


#### An example

Let's assume a typical day, where the agents came online in an alphabetical order of their names.


| Time | Agent | Concurrency |
| ---- | ----- | ----------- |
| 0900 | Alice | 2           |

| Slot priorities |
| --------------- |
| Alice's Slot 1  |
| Alice's Slot 2  |

------



| Time | Agent  | Concurrency |
| ---- | ------ | ----------- |
| 0905 | Brinda | 3           |

| Slot priorities |
| --------------- |
| Alice's Slot 1  |
| Brinda's Slot 1 |
| Alice's Slot 2  |
| Brinda's Slot 2 |
| Brinda's Slot 3 |

------



| Time | Agent | Concurrency |
| ---- | ----- | ----------- |
| 0910 | Carly | 2           |

| Slot priorities |
| --------------- |
| Alice's Slot 1  |
| Brinda's Slot 1 |
| Carly's Slot 1  |
| Alice's Slot 2  |
| Brinda's Slot 2 |
| Carly's Slot 2  |
| Brinda's Slot 3 |

## FAQs

 - What are the factors do you consider to assign chats?

   This question is too vague 

 - Would your assignment cater to high traffic scenarios?
 - Say I had 5 agents and I always see the efficiency is lost as I have seen chats going to 1 agent only, why is that?

 - How does your assignment help in reducing my SLAs (SLA could be FRT or Resolution time specific)
 - To assign the most recent chat to agents instead of the longest queued chat.
 - Chat assignment based on the User Online Status. Prioritize the chats to be assigned where the user is online on the platform.