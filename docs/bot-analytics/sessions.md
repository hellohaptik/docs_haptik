---
title: Sessions
---

‘Conversations’ are currently measured from a technical perspective rather than from a user session perspective. We need a standard way to track and measure a user session. This will allow us to track the stickiness of the user. What is the repeat rate of the user. etc

## What should it be called?
We now have a clear definition of what we are measuring and we should give it a different nomenclature. By defining it as a session it creates a clear demarcation. It also provides a paradigm of comparison. Sessions in chat can be compared to browsing sessions on other apps and tools.

## How to define a session?
We can now borrow the definition of a session from other apps. “A session is a period of time within which a user interacts with an app. Usually triggered by the opening of an app, a session records the length and frequency of use in an app to show developers, marketers and product managers how much time users spend within an app.”

## Impact Area
1. Move away from conversations to sessions on our analytics tool. We will remove conversations. 
2. Measure session length and change in length to measure impact of bot changes

## What is a session for every chat regardless of the SDK/Client?
A session is considered closed when 8 minutes passes from the last message. This would mean that we calculate sessions purely on the basis of inactivity in the chat i.e. we close a session after 8 minutes of inactivity from the last user, bot or agent message. Hence measuring sessions should be a job of the analytics tool as well as the frontend.
