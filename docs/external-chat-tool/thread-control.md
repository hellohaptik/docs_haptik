---
title: Thread control (TC)
---

> Note: Please refer to [actors](https://docs.haptik.ai/external-chat-tool/#actors) for the values of the abbreviations used.

## What is thread control?

Thread control is a way of assigning ownership of a chat conversation (a.k.a. "thread") to a chat tool capable of
responding to a CEU.

The thread control protocol allows for multiple ECTs to be able to respond to a given chat form a CEU, in conjunction
with one another and the Haptik internal tools: Smart Agent Chat (SAC) and the Intelligent Virtual Assistant (IVA).

The chat tool that has thread control at a given instance is the only chat tool allowed to respond to the CEU at that
time.

If another chat tool wishes to respond to the CEU, they must first be given thread control via a thread control
operation.

## Why would you need TC / should you be using TC?

Most of our clients that use TRACT, utilise a Haptik IVA along with a single ECT. This typical use-case manages thread
control implicitly, and you do not need to manually trigger TC operations.

Explicit thread control features are relevant to you in the following use-cases:

- You are a client implementing more than one (>1) ECT in tandem.
- You're using one (1) ECT but using Smart Agent Chat alongside.

## Receivers

A receiver is one of the ECTs configured or one of the Haptik internal tools: SAC and IVA.

### How do I see these receivers?

You can use the `thread_control/listeners/` for this. Please refer to the detailed API
documentation [here](https://docs.haptik.ai/external-chat-tool/thread-control-APIs#api-fetch-listeners).

When you evaluate a response from this API, you will encounter three different flags indicating three different kinds of
receivers:

- `is_default`: Default receiver
- `is_primary`: Primary receivers
- `active`: Active receiver

### What is a default receiver?

For a given client, the default receiver configured gets control of the chat when a CEU first sends a message.
This is applicable for:

- a new user's chat
- a chat for an old user, once either of the following has taken place
    - TC has been reset for that chat
    - That chat has been marked complete

If an explicit receiver is configured as the default receiver, they are always given the TC in the above two cases. You
can make either an ECT or one of the internal tools as the default receiver.

If an explicit default receiver is not set, we use the following priority ladder to decide the default:

- If an IVA is configured for this client, the IVA is made default.
- If an IVA is not configured but SAC is enabled, the SAC is made default.
- If neither of IVA and SAC are configured, but only one ECT is configured, said ECT is made default.

> If TRACT can neither find an explicitly set default, nor can it deduce one from the above rules, an exception is thrown.

### What is a primary receiver?

Currently, we do not require all our ECTs to support TC operations beyond acknowledging a thread that is assigned to
them.

However, the internal tools, i.e. SAC and IVA, are capable of more advanced TC operations like requesting for thread
control and taking away thread control.

This section will be updated with details as we extend our interactions with ECTs to support more complex TC use cases.

> Currently, only the Haptik internal tools SAC and IVA are designated as primary receivers.

### What is an active receiver?

This simply is the current thread owner, currently allowed to actively respond to the CEU.

### What thread control operation can I perform?

Unless negotiated otherwise, as an ECT **you can only pass thread control to one of the primary or the default
receiver**.

Hence,

- Requesting of thread control is currently not supported.
- Taking thread control is currently not supported, unless you are a primary receiver.

> TRACT only allows TC operations from the active or primary receivers as of now.

To perform a thread control operation request please use the `thread_control/request` API. Please refer the detailed API
documentation [here](https://docs.haptik.ai/external-chat-tool/thread-control-APIs#api-thread-management).

### Summary table for receivers

| Type    | Can respond to CEU? | Can take thread control from others? | Can give thread control to others? | Gets first message from new CEU chat | Who can this be? |
| ------- | ------------------- | ------------------------------------ | ---------------------------------- | ------------------------------------- | ---------------- |
| Primary | No                  | Yes                                  | Yes                                | No                                    | SAC/IVA          |
| Default | No                  | No                                   | No                                 | Yes                                   | Any tool         |
| Active  | Yes                 | No                                   | Yes                                | No                                    | Any tool         |

## How does this map to chat states?

While the TC operations themselves are independent of the states of a chat, a few TC operations currently trigger state
changes automatically.

| TC operation    | State change   | Explanation                                                  |
| --------------- | -------------- | ------------------------------------------------------------ |
| Transfer to IVA | Chat Completed | For the IVA to be able to respond properly to the user's next message, we mark the current conversation complete. |
