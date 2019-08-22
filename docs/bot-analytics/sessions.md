---
title: Sessions
---

We need a standard way to track and measure a user session. This will allow us to track the stickiness of the user. What is the repeat rate of the user. etc

## How to define a session?
We can borrow the definition of a session from other applications. “A session is a period of time within which a user interacts with an application. Usually triggered by the opening of an application, a session records the length and frequency of use in an application to show developers, marketers and product managers how much time users spend within an application.”

## Impact Area
1. Move away from conversations to sessions on our analytics tool. We will remove conversations. 
2. Measure session length and change in length to measure impact of bot changes

## What is a session for every chat regardless of the SDK/Client?
A session is considered closed when 8 minutes passes from the last message. This would mean that we calculate sessions purely on the basis of inactivity i.e. we close a session after 8 minutes of inactivity from the last user, bot or agent message. Hence measuring sessions should be a job of the analytics tool as well as the frontend.
