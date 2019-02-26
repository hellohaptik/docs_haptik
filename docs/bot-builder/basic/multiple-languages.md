## Handling Multiple Languages

Language support on our platform is divided into 2 parts. First, is the SDK side of things and second is the actual Bot Building part.

**Business creation for a chosen language**

Currently, only WebSDK supports switching between languages. What essentially happens behind the scenes is that we switch to a different Business.

​      For example, to build a multi language Bot, we create 2 Businesses (english and hindi). When an SDK gets deployed, it opens up with 1 default business (let's say English bot). And as the user taps on *Change Language* in the SDK, the underlying business is changed from English to Hindi.

What it means is that internally, the chat collection, messages, etc. everything is new and not shared with the data of other language (business). Same applies for Taskbox as well because English and Hindi are 2 different businesses, the tasks in Hindi and tasks in English are completely independent.

​      Support for creating Businesses with language support isn't on *mogambo* yet. But it can be easily created from the backend.

**Bot Building**

Unlike Business, a single Bot can support multiple languages. This helps in ease of maintenance so that the story/substory/nodes/connections etc. need not be changed twice.

When a single bot supports multiple languages, the only things that change when switching a language is the User Responses, Bot Responses and Entities. You can use the Language Selection dropdown in the header of Mogambo.

Depending on the language chosen, the User Says/Bot Says section will fetch the correct data as per that language for the node. 

![Language selection on Mogambo](/bot-builder/assets/language-change.gif)

You can add more languages in the bot from the same dropdown menu in the header.

​      Note: We do not auto-translate the User Responses and Bot Responses currently on Mogambo (it can be done from the backend)