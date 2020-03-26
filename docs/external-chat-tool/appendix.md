
# Appendix

Device platforms

| **ID** | **Name** |
| --- | --- |
| 2 | &quot;Android&quot; |
| 3 | &quot;Facebook&quot; |
| 5 | &quot;WebSDK&quot; |
| 6 | &quot;iOS&quot; |
| 13 | &quot;Webhook&quot; |
| 14 | &quot;WhatsApp&quot; |

## Event types

| **Category** | **Subcategory** | **Trigger** | **via** | **Description** |
| --- | --- | --- | --- |
| conversation\_state | bot | tract | hook | The chat conversation has been put into the bot state. This can either be a new conversation or a previously completed conversation. This conversation can either go to complete or incomplete state.
|   | incomplete | tract | hook | The chat conversation has been put into the imcomplete state by the IVA. The IVA was unable to complete a conversation flow with the CEU. Incomplete conversations need AEUs to intervene and respond.
|   | complete | tract | hook | The chat conversation has been put into the complete state by the IVA. The IVA successfully completed one conversation flow with the CEU without errors. This conversation will stay complete as long as the user does not initiate a new message.
| message | receive |   |   |
| aeu\_events | received | ect | | 
|   | allocated | ect | API | The chat conversation has ben (re)allocated to an AEU.
|   | user\_timeout | ect | API | The user conversation timed out due to inactivity from the CEU.
| user\_events | create\_user | tract | hook | A new CEU has been created in the system.

## Message types

| **ID** | **Type** | **Description** |
| --- | --- | --- |
| 0 | regular | Unstructured text messages typed by users and assistant(not bot) |
| 1 | image | Images uploaded by users or assistants |

Additional endpoints to be provided at a later stage upon review by the Security and Compliance team.

## Message content

HSL - [https://docs.haptik.ai/hsl/index#hsl-elements](https://docs.haptik.ai/hsl/index#hsl-elements)

## Senders

| **Name** | **Description** |
| --- | --- |
| ceu | Chat End User | 
| iva | Intelligent Virtual Assistant | 
| haptik | Haptik System | 
| ect | External Chat Tool | 
| aeu | Agent End User | 

