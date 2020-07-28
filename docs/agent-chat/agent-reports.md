---
title: Agent Reports
---

The Agent Chat report gives you a list of all the agent conversations in a selected time period. You can now analyse your agents based on various metrics like response times and more on a granular level. Please go through each of the metrics mentioned below. We have described each column metric added in the report so that you could find out the best performing agents and monitor agent performance on a more granular level.

1. **Business Name**

    Business Name is the business via name value which was set in [business manager section](https://docs.haptik.ai/bot-builder/basic/business#section-1-general-settings).
    
    Example: `lalpathlabchannel`, `lalpathlabchannel_hi`
    
2. **Conversation Identifier**

    It is the unique conversation identifier of the user

    Example : `28331000_14`
    
3. **Agent Name**

    It is an expert's unique name who has claimed this chat conversation.

    Examples: `gogo`, `saurabhsingh`

    ```
    Note: `gogo` is an internal name for our system (bot)
    ```
4. **User Id**

    System generated client specific user identifier

    Example: `58145996`
    
5. **Auth Id**

    A unique identifier used for authenticating the user, this is an alphanumeric user identifier from our client's system. And this is unique to an end user as passed by the client in integration

    Example: `92609cd2758448ae4fbb93b0ed22d40ef3b57e1b`

6. **Device Platform**

    Device platform of the user - `Android App, IOS App, Android SDK, Facebook, Jio, Web SD, IOS SDK , Skype, Alexa, Voic, Twilio, Kookoo, Phonecom, Webhook, Whatsapp, Jio Chat Connector, Haptik IVR, ISO, JIO IVR `
    
7. **Order**

    This is the value indicating the engagement order for this user's engagement. Say, an end user spoke to gogo (Haptik bot) and then agent A. The order for the former and later engagements would be `0` and `1` respectively
    
8. **Chat Reassigned**

    The values is `Yes` if the conversation was reassigned otherwise value will be `No`
    
9. **Team Name**

    Team Name is the team's system identifier which the conversation was assigned to.
    
    Example: `App Support Team`

    ```
    Note: For Agent Name = `gogo`, Team name is the business's default team which was set in business manager section. Here, the Team name always may or may not be the business's default team. It depends on which team the conversation goes to, for an Agent.
    ```

10. **Chat Initiation Timestamp**

    This is the first message timestamp for the given conversation. Note that this can be same for 3 rows if the conversation had 3 engagements from gogo to multiple agents. As this is on a conversation level. 
    
    Example: `2020-06-25 07:01:05+05:30`
    
11. **First User Message**

    It is the message sent by the user that is the first message from the end user.

12. **First Response time**

    It is the time taken in `hh:mm:ss` format by this specific agent for it's first response to the end user including the pending time

13. **Average response time**

    It is average calculated using the all response times by this specific agent. Time here is in `hh:mm:ss` format

    Example: `30.5` (seconds)
    
14. **Resolution time**

    Total time taken (in `hh:mm:ss` format) to resolve the user's query (Inclusive of time from first user message timestamp to the time duration this conversation was pinned)

15. **Agent First Response Time (without queue time)**

    It is the time taken in `hh:mm:ss` format by this specific agent for it's first response to the end user excluding the pending time 

16. **Avg Agent Response Time (without queue time)**

    It is average time in `hh:mm:ss` format calculated using the all response times by this specific agent excluding the pending time

17. **Agent Resolution Time (without queue and wait time)**

    Total time conversation was pinned to this specific agent in `hh:mm:ss` format. This excludes the time in pending and waiting state for this user engagement

18. **Queue Time**

    Total time a conversation was in queued state before getting assigned to a specific agent in `hh:mm:ss` format. This is the sum of all Queue Times this conversation engagement was in before it got closed

19. **Wait Time**

    Total time conversation was in waiting state before getting assigned to a specific agent in `hh:mm:ss` format. It is the sum of all waiting times the chat was in before it got closed

20. **Closing Category** or [Chat Disposition Reason](https://docs.haptik.ai/agent-chat/claiming-and-closing#chat-disposition)

    Disposition reason selected by the agent while closing the conversation

  
21. **Closing Sub-category** or [Chat Disposition Sub-Reason](https://docs.haptik.ai/agent-chat/claiming-and-closing#chat-disposition)

    Disposition sub-reason under selected reason selected by the agent while closing the chat
    
22. **Closing Category comment** or [Chat Disposition Comment](https://docs.haptik.ai/agent-chat/claiming-and-closing#chat-disposition)

    Any closing comment add by the agent while closing the conversation
 
 >    Note: Disposition data will be blank on various cases like conversation was closed by gogo, or reassigned to another agent/team or when conversation autocompleted because of inactivity
 
23. **Completion Type**

    This metric indicates how this conversation was closed

    - `Agent`: If this conversation was closed by an agent
    - `Bot`:  If this conversation was closed, when user reached end node of the bot
    - `Autocomplete`: When conversation got autocompleted because of bot state inactivity, waiting for user inactivity, or no agents online and complete on offline was set for the given team
    - `API`: When a conversation was completed via an external API
    - `Reassigned` : If the conversation as reassigned to another agent
    
24. **Completed By**

    - if `agent` then values would be the `agent_name` who completed the conversation
    - if `gogo` then values would be the last `node_name` which got identified.
    - if `autocomplete` then one of the following case
        - Bot completed - If completed because of waiting for bot state inactivity
        - Team Offline Flag - If completed because of no agents online and complete on offline was set for the given team.
        - Waiting for User - If completed because of waiting for user inactivity

25. **Chat Link**

    It is the chat link for given conversation of the user
    
    Example: `https://<BASE_URL>/athena/user-info/12345678/?conv_no=14&coll_id=28331000`

26. **Notes**

    Agents can add notes while in a conversation. All added notes will be added in this column with a pipe '|' separation

27. **Follow-up Time**

    Agents can set follow-up when closing a conversation. The follow-up time set up is shown here

28. **Follow-up Comment**

    Agents can set follow-up when closing a conversation. The follow-up comment added is shown here

29. **User Rating**

    When the end user shares their conversation feedback by giving a rating, this will be recorded and visible in this column

30. **User Comment**

    When the end user shares their conversation feedback by giving a rating, user can also add a text comment which will be recorded and visible in this column

31. **Abandoned By User**

    When a conversation engagement is abandoned by the end user that is no user message sent while the agent has this conversation, it's counted as abandoned by user and we show a `Yes` value in this column
    
> Note: Read about Abandoned metric [here](https://docs.haptik.ai/agent-chat/analytics#chat-stats)

32. **Delayed**

    Delayed time is set in the Team settings. For all instances, wherein the delay message is sent i.e. the delay time has passed when no agent being assigned to end user, we show a `Yes` string value in this column
    
> Note: Read about Delayed metric [here](https://docs.haptik.ai/agent-chat/analytics#chat-stats)

33. **Messages Sent By Agent**

    Total number of messages which were sent by a specific agent to the end user
    
34. **Messages Sent by user**

    Total number of messages received from the end user.
