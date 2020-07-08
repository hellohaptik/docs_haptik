---
title: "Launch Message"
id: feature-launch-message
---

You can launch the Bot with a task or message on behalf of the user. Haptik provides the following methods for doing so.

### `launchTask(taskId, callback)`

*Launches the SDK and automatically sends specified taskId as a user message (The same message that would be sent if the user tapped on that task)*

**Params:**

- `taskId <Number>`
*The task id is specified in the tasks section of the bot builder (business manager)*
- `callback <Function>`  _`(optional)`_
*The callback executes once the call completes. The callback function is executed with `success` boolean flag as a parameter indicating whether the call completed or failed.*

### `launchMessage(message, callback, hidden)`

*Launches the SDK and automatically sends specific message as a user message. It can optionally be sent as a hidden user message*

**Params:**

- `message <String>`
*The message that is to be sent*
- `callback <Function>`  _`(optional)`_
*The callback executes once the call completes. The callback function is executed with `success` boolean flag as a parameter indicating whether the call completed or failed.*
- `hidden <Boolean>`
*Whether to send the message as a hidden user message. A hidden message is not visible to the user but can be seen by the agent or bot*
