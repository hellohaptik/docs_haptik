---
title: AI Recommendations
---

## Introduction

AI recommendations is a measure to improve user interaction with the IVA by identifying user intents and ultimately help businesses to become more customer-centric. AI recommendations will help you take better decisions to build a superior user experience.

Instead of manually analyzing 1,000s of interactions every day, the AI Recommendations algorithm will provide you the key insights to understand user interactions to train your IVA and enhance its intelligence further.

- The algorithm also tells you what users are chatting about, which you’ve not accounted for in the IVA conversation design. By adding these intents, the number of IVA breaks reduces over time.

- The results help you get insights into user intents which should be used to make your IVA more intelligent.

## How to use AI recommendations?

To start using AI recommendations, download the sheet by clicking on the link shown in the below image. You will receive two CSV files.

![download_csv](assets/)

### 1. User Says Recommendations for Existing Nodes

This will help your IVA correspond to a user’s message to the right node because it will be trained with more intents of a similar type. 

The downloaded CSV contains four columns -

#### Nodes that already exist on your bot

Existing nodes are intents that are already present on the IVA ie. the nodes that are already trained with the relevant “user says” messages and correspond to a user’s intent on Conversation Studio.

#### User says Recommendations

User says recommendations for existing nodes are user messages that broke your IVA or caused smart assist to be triggered. The AI Recommendation algorithm suggests that these should be added to the ‘user says’ section of nodes that already exist on Conversation Studio.

#### Closest User Says present on the node

The closest user says present on the node are the Independent responses present on this IVAs graph node in the User Says section.

#### Confidence Score

The confidence score is the AI Recommendations algorithms confidence of matching the recommended user says to the existing nodes

Here is a snippet of the CSV - 

![existing_nodes](assets/)

### 2. User Says Recommendations to Create New Nodes

The Create New Nodes section helps you identify intents that are out-of-scope of the IVA as well as identify what are the new user utterances surfacing over the IVA.

These messages will help you identify and understand what should be the new capabilities that can be added to the IVA.

The downloaded CSV contains four columns -

#### Recommendations to create new nodes	

These are the recommended names of new nodes that can be created with the corresponding user says in the next column.

#### User Says Recommendations	

These are the user messages to which the IVA responded with Smart Assist and Bot Break Messages. These recommendations can be added as nodes to increase the intelligence and capability of your IVA to reply to users’ queries.

#### Cluster ID	

Cluster ID helps you understand the count of clusters formed. AI algorithm has identified similar intents and clustered them together to understand how we can make them into new nodes.

#### Confidence Score of the Cluster Identified	

This column will help you understand the similarity in the messages to cluster them together

## Why use AI recommendations?

AI recommendations will not only reduce the manual effort required to go through every single message to identify IVA breaks but also lead to algorithmically improvise the user based on statistically analyzed user data.

Using AI recommendations you can - 

- Identify the Out of Scope queries and find user intents that can be added to the IVA in order to improve the user experience.
Reduce the IVA maintenance by 30%

- Categorize similar user utterances that led to a bot break in order to increase the Smart funnel completion rate of in-scope intent
