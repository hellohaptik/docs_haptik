---
title: Chat assignment
---


## Glossary

Let’s understand certain terminologies -

1. Agent Concurrency: The number of chats that an agent can take at any given time. We also call concurrency as the maximum number of chats an agent gets pinned on the MyChats space

2. Empty Slot: Number of chats that can be pinned to an agent at a given time. Say the concurrency for agents is 3 but the agent has only 1 active chat, this means the number of empty slots with agent is 2. 

3. Team Queue: When users are waiting for their chats to get assigned to an agent, they are waiting in a pending or queue state.

4. Idle Time: This Idle time duration is determined by the time elapsed since the agent received the last chat.

Agent status: Agents can be online meaning they can receive chats. And when agents go offline, they would not get fresh / newer chats but they can get user chats wherein they had a conversation earlier or from their own queue. After logging out, all chats from the agent queue, which were pinned to the agent are moved to team queue, and chats which were in waiting for user state, are marked as complete (If the user returns, it is taken up as a new chat.)


## Choosing a chat assignment algorithm

Our clients today will have the flexibility to choose between two chat assignment algorithms -


![Choose assignment routing algorithm](assets/chat-assignment.png)


### A. Balanced distribution (New) 

This accounts for Agent Concurrency, Empty Slots and Idle Time. Chat gets assigned as soon as an agent slot is available i.e. has empty slots (and agent is online)
 
1. It’s Great for: Even chat load distribution among agents and reducing average agent’s idle time to ensure that agents waiting for a long time get the chat first.

2. In case a chat was allocated to an agent, and the agent loses network connection. If the loss of network persists for more than 5 minutes, we move chats back into the team queue, so that another online agent can receive the chat.

> Note: Clients for whom efficiency in distribution is important should choose this chat algorithm.

3. Optimized for: Chat load as it’s almost evenly distributed across online agents at the time.

4. Con(s): Does not account for faster agent response times but only the first response times. Faster high performing agents may not be best utilized. 
 

### B. Speedy resolution 

Fastest agents get more chats. Every time an agent closes a chat or intermittently every 10 seconds, the agent requests for a  new chat from the queue. 

1. Great for: Highly-motivated agent workforce i.e. Fastest agents end up getting maximum chats

2. Optimized for: Agent speed and high chat volume scenarios

3. Con(s): Chat load is not balanced across agents i.e., fast agents are the ones who close chats quickly thus making the call to request for chats frequently. This breaks the 10 seconds cycle and creates uneven distribution of chats.


### Note

1. If you have a single client and multiple businesses set up, all businesses must be the same algorithm

2. If there are multiple clients, one can ideally have different algorithms for all, provided there are no shared agents between the teams of different clients.
