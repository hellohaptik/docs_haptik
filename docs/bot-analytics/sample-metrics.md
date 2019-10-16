---
title: Sample Metrics
---

We looked at the different types of metrics you can measure and track in the other parts of this documentation. However, all these options can make it confusing to understand what you should be focussing on and how they relate to the particular bot you are building.

In this document we will look at four common type of chatbots and what metrics should we be focussing more on for those bots.

## Lead Generation Chatbots
The first category we will look at is `Lead Generation Chatbots`. These are chatbots where you are trying to collect information from potential leads for your product or service.

Typically in such bots you will have users go through a series of conversational steps. In each of these steps you will collect some information from the user and at the end of all the steps store the information either in a database or a CRM. In some cases you might even send email reports whenever a user goes through all the steps.

In such bots the most important metric for you to look at would be the funnel completion rate. By funnel completion we mean, how many users who start giving the information go through all the steps. This also includes analyzing at what step do most users drop off from.

You can analyze these details from the `Node Traffic` section of the Analytics Tool. You can learn the specifics of this section [here](https://docs.haptik.ai/bot-analytics/node-traffic).

## Concierge Chatbots
The next category we will look at is `Concierge Chatbots`. These are chatbots where you are trying to provide specific services like flight booking, restaurant reservation etc.

In such bots the important metrics to look at are: 
1) How many tasks are getting started?
2) How many of the started tasks are getting completed?
3) What is the general user review and feedback for these tasks?

### Tasks Started
You can measure the metrics around tasks started from the `User Messages` section of the Overview page. This section gives you information about the percentage of users who started each of the tasks in your bot.

You can learn more about the `User Messages` section [here](https://docs.haptik.ai/bot-analytics/basic-analysis#user-messages).

### Tasks Completed
You can measure the metrics around how many started tasks are completed from the `Task Completion` section of the Overview page. This section gives you information about the percentage of users who completed each of the tasks in your bot.

You can learn more about the `Task Completion` section [here](https://docs.haptik.ai/bot-analytics/basic-analysis#task-completion).

### User Reviews and Feedback
The user reviews and feedback for each of the task are available in the `Task Performance` section of the `User Ratings` page.

In this section you can get information about the average user rating for your tasks. You can also see the reviews that people have given these tasks in this section.

You can learn more about the `Task Performance` section [here](https://docs.haptik.ai/bot-analytics/user-ratings#task-performance).

## Support
The third type of bots we will look at are `Support Chatbots`. In these bots you are trying to help your users with any issues they are facing with your service.

The important things to look for here are 
1) Are the users satisfied with the support provided?
2) What are the common support requests you get? (You can use this to improve your core service itself)

### User Satisfaction
You can measure user satisfaction from the `Overall Channel Rating` section of the `User Ratings` page. In this section you can see the average rating for your chatbot and also the percentage split in different rating levels. You can also see the users feedback for each rating level.

You can read more about this section [here](https://docs.haptik.ai/bot-analytics/user-ratings#overall-channel-rating).

### Common Support Requests
You can get this data from the `Message Analysis` page of the analytics tool. In this page you can see all the messages of your bot. You can use this page to see what messages are users frequently asking. You can read more about the `Message Analysis` page from [here](https://docs.haptik.ai/bot-analytics/using-message-analysis).

## Feedback
The final category of chatbots we will be looking at is `Feedback Bots`. These bots collect feedback about a service by asking a series of questions to the user.

They are similar to `Lead Generation Chatbots` because you still expect the users to go through a series of steps. So even in this case the important metric to look for is funnel completion rate.

You can get this data from the `Node Traffic` page and you can learn more about it from [here](https://docs.haptik.ai/bot-analytics/user-journey).
