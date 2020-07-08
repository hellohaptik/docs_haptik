---
title: "Typing Suggestions"
id: feature-typing-suggestions
---

## How does this work?

As users start typing, Taskbox will show autocomplete suggestions (refer to the image below).

![](assets/typing-suggestions.png)

We match the user's message with keywords present in sentences which the bot has been trained to understand. This feature will help in the following ways:
- Help users discover the scope of the bot while a user starts typing
- Avoid bot breaks as user selects our suggestion v/s type a random free-form message.

> **Please note that this feature works only at the start of conversation. **

## How to implement this on your bot?

It just needs to be enabled by adding the `enable-user-suggestions` flag. Check the customization section to see how to enable this.

> Do note that, user suggestions need to be marked for start nodes on the bot builder
