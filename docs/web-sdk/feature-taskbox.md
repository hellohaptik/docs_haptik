---
title: "Taskbox"
id: feature-taskbox
---

## How does this work?

A Taskbox is a menu of main tasks a particular bot can help the user with. Bot builders can design their bot to always give users access to the Taskbox, which will appear as an icon in the bottom left-hand corner of the composer on chat interface. The Taskbox generally opens up at the start of any conversation for a user. 

![](assets/taskbox.png)

Bot analysts review the tasks and their order on a regular basis. And as per the incoming intents and each task performance (Task tap, completion values), bot analysts would add new task(s), reorder the task(s) on Taskbox. Some bots depending on their end goals would skip the Taskbox for a new user and send a launch message instead of the default open taskbox view. 

## How to implement this on your bot

As long as the business has tasks, they show up automatically on the XDK.
