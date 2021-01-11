---
title: FAQs
---

- **Is 8 minutes inactivity window for calculating one conversation configurable?**

No, 8 minutes inactivity window is not configurable. After 8 minutes of inactivity, the conversation is marked completed. However, the IVA remembers the context for 2 hours. So if the user comes back within 2 hours, the IVA will be able to help him with the saved context of the user's previous conversation.

- **If the conversation is assigned to an agent, do we still close the conversation if there are no interactions for 8 minutes?**

It depends on the conversation state, if the conversation is in an Agents Queue or Assigned to an agent, it will not be auto completed.
However if the chat is in "waiting for user" state, as marked by an agent, it will auto complete after 8 minutes of inactivity
