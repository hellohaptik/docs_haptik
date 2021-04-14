---
title: Word Analysis
---

This section will show which words caused the IVA to break the maximum, top IVA break topics, thereby enabling businesses to optimize chat flows for better user experience.

**Word Analysis** helps you know the keywords/phrases which the bot was not able to understand in the user's messages, resulting in a bot break. 

![wa1](https://user-images.githubusercontent.com/75118325/111724721-c2810880-888b-11eb-9717-c6d41aa0ba99.png)

## Bot Break Topics

![wa2](https://user-images.githubusercontent.com/75118325/111725087-6cf92b80-888c-11eb-978b-542922b0f7ec.png)

Bot Break Topics section helps us understand the common keywords/phrases that are causing the bot breaks. It also gives us visibility of **Messages**, **Users count** and **Confidence level** of the model for each filter so that we can take an informed decision.

There are **two** filter options to view Bot Break Topics - 
* Clustered Bot Break Topics
* Unclustered Bot Break Topics

### Clustered Bot Break Topics

![image](https://user-images.githubusercontent.com/75118325/114655662-481c9a80-9d0a-11eb-9094-48ef2e6f999f.png)

Our ML model goes through all users messages, which received a bot break message, and picks up common words/phrases to create a topic. These are called Clustered Bot Break Topics. Essentially, words/phrases coming in multiple messages are clubbed together to create a topic. Under **Messages** of this topic, it will contain all user messages having the same word/phrase. You can also view these individual chats by clicking on **View Chat**.

### Unclustered Bot Break Topics

![image](https://user-images.githubusercontent.com/75118325/114660250-9afa5000-9d12-11eb-8b66-7d883f5a98c1.png)

User messages where there are no common words/phrases fall under this category. Under Unclustered Bot Break Topic, there are 2 types of topics which get created - 

1. Others

![image](https://user-images.githubusercontent.com/75118325/114660294-af3e4d00-9d12-11eb-8a19-e6222fbabe5e.png)

In **others**, we see all messages which caused a bot break and appeared a single time on the bot. They were not repeated and thus not observed more than once on the bot.

2. Rest all topics

![image](https://user-images.githubusercontent.com/75118325/114660360-d09f3900-9d12-11eb-9886-e3625e9eb019.png)

Messages which received bot break messages and were repeated on the bot fall under this category.

> Topics in Clustered and Unclustered sections are different. Under Clustered, only messages which have common words/phrases being repeated are created as a topic. But under Unclustered, entire message should be repeated to create a topic.

## Word Cloud

This section also helps to **identify and train** the IVA on words and queries which are coming in high in volume, but which the IVA is not able to understand currently.

The larger the volume, bigger is the word shown on the dashboard. You can click on the words and you will be redirected to the **Message Analysis** page wherein you can read the messages exchanged between the IVA and the user.

![image](https://user-images.githubusercontent.com/75118325/111904161-61b02680-8a6b-11eb-8a0c-d0f22a6cd811.png)
