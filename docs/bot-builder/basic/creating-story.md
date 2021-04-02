---
title: Creating a Story
---

#### Components of a Story Flow

Once you've configured your bot, you'll need to set up the stories and sub-stories that make up your chat flow. We've given a description of these units in Bot Hierarchy, but you can also see the Designing Bots section for more details about the role of stories and sub-stories in the creation of chatflows.

- **Stories** are chatflows that usually align with the overall goals of the chatbot. For example, a trip aggregator website wants to build a chatbot with the goal of helping users:

  - Book flights
  - Find and book hotels
  - Make restaurant reservations

  Each of these major tasks would be classified as a story.

- **Sub-stories** are the smaller tasks that help accomplish the broader story goals. Continuing our trip aggregator example from above, the sub-stories within the "Find and book hotels" story could include:

  - Collect user preferences (location, amenities, dates, etc.) for hotel match
  - Hotel booking
  - Booking payment
  - Information about hotel aggregator's other services

You can use the framework of stories and sub-stories as a skeleton for building out the chat flows for your entire bot. One important thing to remember is that while sub-stories may be linked, stories may not.

#### Creating a Story

To add a story, click on `Create Story` button and provide a name for the Story. Post creation of a story, it will appear as shown below - 

![new story](https://user-images.githubusercontent.com/75118325/113377165-27ab2280-9391-11eb-83a1-7dbe1e814bdd.gif)

#### Creating a Sub-story

To start adding **Sub Story**, click on the **Story** in which you want to build the conversational flows. This will take you to the Conversation Studio graph.

![create ss](https://user-images.githubusercontent.com/75118325/113377354-b455e080-9391-11eb-923c-537884f13125.gif)

When you are done creating all the sub-stories your conversation requires, click **Add Node** under the substory you want to start building in.
