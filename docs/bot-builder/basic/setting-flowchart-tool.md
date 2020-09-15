---
title: Setting up FlowChart tool
---

This is the most important tool in the Conversation Designer’s arsenal to design conversational flows and user journeys.

## Why do you need a flowchart tool?

- A flowchart helps you craft your conversational journey before you invest in building the bot. It provides a fully flexible canvas to modify and play around with ideas at an early stage.

- A flowchart is a great way to brainstorm on all possibilities and chalk out edge cases atop your ideal user journey. This makes your solution a lot more comprehensive and long-lasting.

- A flowchart is ideal for all the stakeholders of your product to visualize the user journey, provide feedback at an early stage.

- A flowchart helps you create a clear benchmark for your product before you go into development. It gives your QA engineer a reference point while testing the virtual assistant.

## How do we do at Haptik?

Over the years, we’ve experimented with several bot design tools — Spreadsheets, Bot Society, Xmind... you name it, and we’ve probably tried it. We finally landed on **Lucidchart** as our Conversation Design tool of choice.

We started using Lucid at the start of 2019 and put it through its paces, only to realize that we needed a central library of elements to ensure that Haptik’s IVA designs looked consistent, no matter who designed them.

Our platform’s users now have access to a central Haptik Library of over 20 Haptik specific UI elements that can be used to design bot flows for any client.

## How to use this Library on any tool?

1. Haptik will provide a downloadable file format that works for your tool - .vsdx, .vsd or .csv.

2. Upload the file to your tool

3. Drag and drop elements to design your conversations

## What to put into a flowchart?

Your flowchart can be structured as follows:

- The user journey for all scenarios with the dialogue. This includes everything we explain in the [Chat Initiation](https://docs.haptik.ai/bot-builder/basic/introduction), [Chat Middle](https://docs.haptik.ai/bot-builder/basic/introduction), [Chat End](https://docs.haptik.ai/bot-builder/basic/introduction) section including the ways to initiate the chat, provide a solution to the user’s query, and complete the user journey.

- The correct elements to be used depending on the platform

- Any clarifications or questions you have for the team

- Anything else that is relevant to the journey that the bot builder must know!

## Other things to keep in mind

Here’s what your flowchart should contain apart from your basic chatflow design described above

1. API calls whenever you need to fetch or send any information from within the bot to another system. Illustrated below

IMAGE PLACEHOLDER

2. Entities - Use a placeholder like **%name** to highlight dynamic values. You may also use actual sample values like **John Doe** but highlight these in some color so that bot builders know that these are dynamic. As shown below —

IMAGE PLACEHOLDER

3. You may use the clarifications box to highlight content options and open questions. Once a clarification is closed, make sure that no important notes are lost — we recommend adding a Note for any important information.

IMAGE PLACEHOLDER

4. Bot Prompts are ‘notifications’ sent to users to draw their attention. Make sure you include them in your flowchart if you wish to define user journeys that begin from these prompts. This is explained in detail in the [Chat Initiation >> Bot Prompt](https://docs.haptik.ai/bot-builder/basic/introduction) section below. 

IMAGE PLACEHOLDER

5. Bot Break messages - Users tend to enter unsupported queries or gibberish during the conversation. Always ensure that your design includes a bot break message alongside the taskbox. You can learn more about how to build better bot break experiences in the [Bot Breaks](https://docs.haptik.ai/bot-builder/basic/introduction) section.

IMAGE PLACEHOLDER

Follow these steps to ensure that your flowchart is comprehensive and provides an excellent base for the Bot Building team to take over!
