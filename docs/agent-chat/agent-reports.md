---
title: Agent Reports
---

The Agent Chat report gives you a list of all the agent conversations in a selected time period. You can now analyse your agents based on various metrics like response times and more on a granular level. Please go through each of the metrics mentioned below. We have described each column metric added in the report so that you could find out the best and worst performing agents.


1. **Chat Initiation (First User Message)**

    It is a first message timestamp for the given conversation.
    
    Example: `2020-06-25 07:01:05+05:30`
    
2. **Agent Name**

    It is an expert's unique name who has claim this chat conversation.

    Examples: `gogo`, `saurabhsingh`

    ```
    Note: `gogo` is an internal name for our system (bot)
    ```

3. **Team Id**

    Team Id is the team's system identifier which the chat was assigned to.
    
    Example: `10`

    ```
    Note: For Agent Name = `gogo`, Team name is the business's default team which was set in business manager section.
    ```

4. **Channel Name**

    Channel Name is the business via name value which was set in [business manager section](https://docs.haptik.ai/bot-builder/basic/business#section-1-general-settings).
    
    Example: `lalpathlabchannel`, `lalpathlabchannel_hi`

5. **User Id**

    System generated client specific user identifier

    Example: `58145996`

6. **Messages Sent**

    Total number of message which was sent by this specific agent to the end user.
    
7. **Messages Received**

    Total number of message which was received by this specific agent from the end user.
    
8. **Average response time**

    It is average calculated using the all response times by this specific agent.

    Example: `30.5` (seconds)

9. **First Response time (seconds)**

    It is the time taken by this specific agent for it's first response to the end user.

    
10. **First Response time (timestamp)**

    It is a first response timestamp by this specific agent to the end user.

    Example: `2020-06-25 07:31:58+05:30`
    
11. **Automated messages**

    Total number of automated messages which was sent during this specific agent to the end user.

12. **[Chat Disposition Reason](https://docs.haptik.ai/agent-chat/claiming-and-closing#chat-disposition)**

    Disposition reason selected by the agent while closing the chat.

  
13. **[Chat Disposition Sub-Reason](https://docs.haptik.ai/agent-chat/claiming-and-closing#chat-disposition)**

    Disposition sub-reason under selected reason selected by the agent while closing the chat.
    
14. **[Chat Disposition Comment](https://docs.haptik.ai/agent-chat/claiming-and-closing#chat-disposition)**

    Any closing comment add by the agent while closing the chat.
 
 >    Note: Disposition data will be blank on various cases like chat was closed by gogo, or reassigned to another agent/team or got autocomplete because of inactivity.

15. **Resolution time**

    Total time taken (in seconds) to resolve the user's query. (Diff between first user message time and last agent's message time)
    
16. **Chat Closure time**

    It is a last agent's message timestamp.

    Example : `2020-06-25 07:36:53+05:30`
    
17. **Chat Link**

    It is the Chat Link for given conversation of the user
    
    Example: `https://<BASE_URL>/athena/user-info/12345678/?conv_no=14&coll_id=28331000`

18. **Conversation Identifier**

    It is the unique conversation identifier of the user

    Example : `28331000_14`
    
19. **Completion Method**

    This metrics indicates how this chat was closed

    - `agent` : If this chat was closed by an agent
    - `gogo` :  If this chat was closed, when user reached end node of the bot
    - `autocomplete`: When chat got autocompleted because of bot state inactivity, waiting for user inactivity, or no agents online and complete on offline was set for the given team.
    
20. **Completed By**

    - if `agent` then values would be the `agent_name` who completed the chat
    - if `gogo` then values would be the last `node_name` which got identified.
    - if `autocomplete` then one of the following case
        - Bot completed - If completed because of waiting for bot state inactivity
        - Team Offline Flag - If completed because of no agents online and complete on offline was set for the given team.
        - Waiting for User - If completed because of waiting for user inactivity

21. **Reassigned**

    The values is `Yes` if the chat was reassigned otherwise value will be `No`
    
22. **Device Platform**

    Device platform of the user - `Android App, IOS App, Android SDK, Facebook, Jio, Web SD, IOS SDK , Skype, Alexa, Voic, Twilio, Kookoo, Phonecom, Webhook, Whatsapp, Jio Chat Connector, Haptik IVR, ISO, JIO IVR `
    
23. **Partner Name**

    It is the partner name associated to the business
    
24. **Third-party ID**

    A unique identifier used for authenticating the user, this is an alphanumeric user identifier from your system.

    Example: `92609cd2758448ae4fbb93b0ed22d40ef3b57e1b`
    
25. **Average response time (hh:mm:ss)**

    It is average time in `hh:mm:ss` format calculated using the all response times by this specific agent.
    
26. **First Response time (hh:mm:ss)**

    It is the time taken in `hh:mm:ss` format by this specific agent for it's first response to the end user including the pending time
    
27. **Resolution time (hh:mm:ss)**

    Total time taken (in `hh:mm:ss` format) to resolve the user's query. (Diff between first user message time and last agent's message time)

28. **Agent First Response Timestamp (without queue time)**

    It is the time taken in `hh:mm:ss` format by this specific agent for it's first response to the end user excluding the pending time 

29. **Avg Agent Response Time (without queue time)**

    It is average time in `hh:mm:ss` format calculated using the all response times by this specific agent excluding the pending time.

30. **Agent Resolution Time (without queue and wait time)**

    Total time chat was pinned to this specific agent in `hh:mm:ss` format 

31. **Queue Time**

    Total time chat was queued state before got assign this specific agent in `hh:mm:ss` format 

32. **Wait Time**

    Total time chat was waiting state before got assign this specific agent in `hh:mm:ss` format 