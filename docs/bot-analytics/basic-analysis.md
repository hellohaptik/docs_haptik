---
title: Basic Analysis
---

## Introduction
The Analytics tool built by haptik enables you to get a comprehensive idea of how your chatbot is performing.You can get deep insights into how users are using it. You can also get to know what are the failure points or featutres that can be improved. Finally you can also find out what the user thinks of the chatbot experience.

Through this document we will explore the different types of metrics available for tracking and analysing inside the analytics tool.

The Analytics tool consists of multiple sections with each section containing metrics and data about a different aspect of your chatbot. The multiple sections are:

* Overview
* Compare Clients
* Story Analysis
* Message Analysis
* Word Analysis
* Node Traffic
* User Ratings
* User Reviews

## Overview
The first section in the Analytics tool is the overview section. As the name suggests, this section helps you get a quick overview of the different aspects of your chatbot's performance. 

The Overview section provides information about:
* Conversations
* Users
* User Messages
* Task Completion
* Bot Automation
* User Rating

You can later use a different section to get more detailed information on any of these sub sections.

### Filters
On top of any page inside the Analytics tool you will find filter options. These filter options can help you filter your data by Channels or Bots from the filters on the left hand side. 

You can select `Channels` or `Bots` from the first dropdown on the left hand side and then select the particular channel or bot from the dropdown next to it.

![Filter Channels Bots](assets/basic-filter-channels-bots.png)

On the right hand side of the filter section, you will find the duration filters. Using these settings you can filter the time period of the data presented.

![Filter Duration](assets/basic-filter-duration.png)

## ***Conversation Data***
The first tab inside the Overview section is the Conversation tab. Here you can find a graph that gives you information about the user messages, conversations and automation percentage at a given time.

The data is represented in the form of a line graph with 4 different lines. The 4 different lines correspond to 
1) Number of Users
2) Number of Conversations
3) Number of User Messages
4) Bot Automation

The Bot automation metric gives you the percentage of conversations without bot breaks or human intervention (agent). 

> Knowledge Tip: A conversation is a set of messages used to accomplish a task.

In the graph the X axis is the time and the Y axis represents data about Users, Conversations, Messages and Automation. You can get data at any given time point by hovering on the graph.

![Overview Conversations](assets/basic-overview-conversation.png)

## ***User Data***
The next tab in the overview section is the Users tab. This tab shows the number of users for the filtered channel or bot in the given duration period.

The graph for this data is an upcoming feature and will be documented here once it is available.

![Overview Users](assets/basic-overview-users.png)

## ***User Messages***
The next tab in the Overview section is the User Messages tab. This tab measures what tasks were most initiated by user. It shows a list of tasks in the chatbot along with the number of users who initiated the task.

![Overview User Message](assets/basic-overview-user-messages.png)

At the top of the tab you can see the total number of task activations and this is divided on a task to task basis below it.

> Tip: This tab can help you understand what tasks are being tapped on by the user. You should experiment the title of task or the icon and see how that nudges the task activation numbers.

## ***Task Completion***
The next tab is task completion. While the previous tab shows the task activation rate, this tab shows the task completion rate. Task completion rate is the percentage of users who completed a task after activating it.

On the top you can see the total task completion rate in percentage format. Below it the data is split from a task to task basis.

![Overview Task Completion](assets/basic-overview-task-completion.png)

>Tip: You can make changes to the task flow for improving the experience. This metric can guide you to understand how those changes are performing.

## ***Bot Automation***
The next tab is Bot Automation. This tab tells you about what percentage of the conversations did not have an agent involved as well as no bot breaks. 

The graph for this tab is an upcoming feature and will be documented here once it is ready.

## ***User Rating***
The final tab is User Rating. This tab tells you how users rated the different tasks in the chatbot. The rating is optional and is given on a scale of 1-5 stars.

On the top of the tab you can see the average rating given across all tasks and below it you have the data split from a task to task basis.

![Overview User Rating](assets/basic-overview-user-rating.png)

> Tip: You can try to improve the task flow by making changes. The user rating changes for the task will help you measure the effectiveness of the changes.
