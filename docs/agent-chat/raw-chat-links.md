---
title: Understanding a Raw Chat Link
---

## What is a Chat State?

One can think of chat states as a condition of a users interaction with a business at any given point of time. A user and business will always share a single state for a chat, i.e., there is no scenario in which the same user of a business has a chat in Bot state and in Assigned State.

## Types of Chat States

### Bot State

**This indicates that a user is currently interacting with the bot.**

- If a bot is present for a business, all new conversations will initially start from this state.
- If the user is inactive for 8 mins, i.e., the user does not send any message, we will auto-complete this chat.
- Technically a team lead could move a chat from Bot state to Queued state in case they deem it necessary, via Smart Agent Chat business or team page.

### Queued State

**This indicates that a chat is currently waiting for an available slot for an agent who is a part of either the default or a specific team. It indicates that the chat is not currently assigned to any Agent or IVA.**

- If an available slot is found, the chat is allocated immediately. 

> Note: High Queue time is a strong indicator that a team should have more agents.

- When the bot is not involved, all chat directly opens as queued.
- When the bot breaks, we move the chat to queued if human assistance is enabled on Business Manager and the default team is set.
- When the bot has requested that this chat should be taken up by a specific team or ECT via an integration function, we move the chat to queued state and add it to the specific team queue

### Assigned

**This indicates that a chat is currently being handled by an agent.**

- A chat will stay in the assigned state until it is exclusively marked as “waiting for user” or “completed”.

- A chat could be re-assigned to another agent directly
  - If that agent is at max chat concurrency, the chat will be allocated to said agent’s queue. It will be assigned to the agent once a free slot is detected for this agent.
 
- A chat could be re-assigned back to a team directly
  - If all agents of a team are at max capacity, it will wait in the queued state.
  - If an available slot is detected, it is immediately assigned.
  
- If there are chats assigned to an agent, and he/she marks himself as taking a break, the chats remain in the assigned state and are expected to be completed by the agent.

### Completed

**This state signifies that the conversation is completed.**

- An agent could mark a chat assigned to him/her as completed.
- A Team Lead could mark any chat as completed, irrespective of its current state.
- The system could mark the chat as complete based on
  - Team Settings configured while creating a team.
  - Agent Logging out, while chat was pinned.
  - 8 mins of user inactivity, while chat was in waiting for state/bot state.

### Waiting 

**This is a special state that is available to all agents, they can mark any chat that is currently assigned to them as “waiting for user”. We recommend using this state when the user seems to be unresponsive.**

This frees up a slot for an agent to take a fresh chat, better utilizing his/her time.

- If a chat is in the “waiting for user” state for 8 mins and the user has remained inactive. (no user response since put on waiting/last user message), we auto-complete the chat.
- If a chat is in the “waiting for user” state and the agent go offline, we re-allocate this chat back to the team queue at the highest priority, it will get reassigned back to the next free agent irrespective of the user response.
- Unfortunately, once a chat is marked as waiting, the agent cannot retake that chat manually. (A TL could however do this from the Chats section).

## What is a Chat Event?

A chat is an event that happened during a chat between a user and a bot, or agent, or both. These events shed visibility on what all transpired during the chat

Chat events are currently available to view - 
raw chat links
User-info links


Here is the list of chat events that we current log.

### 1. coll_started

This event indicates that a brand new conversation has started, it is available in the user_info link.

![image](https://user-images.githubusercontent.com/75118325/116323642-157ba300-a7dc-11eb-993b-42e5c95d52c5.png)

### 2. Coll_ended

This event indicates that a conversation has ended, it is available in the user_info link.

![image](https://user-images.githubusercontent.com/75118325/116323681-27f5dc80-a7dc-11eb-8dde-cfeafae41c35.png)


### 3. coll_went_to_pending

This state indicates that this chat is now eligible to be assigned to a free slot of an agent.

As seen on on the raw chat link - 

![image](https://user-images.githubusercontent.com/75118325/116324087-0cd79c80-a7dd-11eb-830a-7d350a58ea7d.png)

On the user info link, it appears as: **Assigned to team** -


### 4. team_change_flag

This event provides visibility that this chat is moved into a team’s queue, and is eligible to be assigned to an available slot of this agent.

On the user info link, it appears as: **Assigned to Team team_id** -

### 5. change_claim_name

This event indicates that this chat has official been transferred from **Bot/Agent1/None** to **Bot/Agent1/None**
- The claim name changes to none, of the agent who it is currently assigned to logs out.
- When chats are reassigned between agents or teams.
- When a new user comes in, the claim name would change from none to Bot/Agent depending on how your business use cases are defined.

On the user info link, it appears as: **Assigned from A to B** -

### 6. coll_went_to_pinned

This event indicates that this chat is currently assigned to an agent, and is visible to the agent.

On the user info link it appears as: **Assigned to <agent_name>**

### 7. coll_went_to_waiting

This event indicates that an agent has marked this chat in the “waiting for user“ state.

On the user info link it appears as: **Waiting for user**

### 8. coll_went_to_complete

This event indicates that this chat has been marked as complete.

On the user info link it appears as: **Marked as Complete**

### 9. coll_went_to_bot

This event indicates that this chat is currently assigned to a bot.

On the user info link it appears as: **Assigned to bot**

### 10. delayed_activity_flag

Based on the value set in team settings, if the delay threshold is crossed for a chat, this event is triggered.

On the user info link it appears as: **Delayed**

## The below-mentioned events are exclusively for [**balanced distribution**](https://docs.haptik.ai/agent-chat/chat-assignment#a-balanced-distribution-new).

### 11. chat_marked_for_agent

This chat is pre-allocated to an agent to have with the intention of having all agents share an equal amount of chat volume at any given point in time.

On the user info link it appears as: **Chat Marked for Agent**

### 12. agent_receives_marked_chat

This event indicates that the agent has received the pre-allocated chat.

On the user info link it appears as: **Agent Received Marked Chat**

### 13. move_marked_chat_to_team_queue

This chat is pre-allocated to a team, and an agent is going to be pre-selected for the eventual assignment.

On the user info link it appears as: **Move Marked Chat To Team Queue**

### 14. agent_inactive_unmark_chat

If a chat was assigned, pre-assigned to an agent, and the agent has stopped logging online hours (no internet, tab closed) for 5 mins, we deallocate this chat from the agent, and re-assign this chat to an available agent with a free slot.

On the user info link it appears as: **Chat unmarked from Agent due to Inactivity**
