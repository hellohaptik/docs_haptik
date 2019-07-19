---
title: Multiple Languages
---

# How does it work?

Language support on our platform is divided into 2 parts -
1. *Business*: Manage business level settings and content for multiple languages  
2. *Bot*: Configure bot content that is the user says, bot says etc. for a language. 

## Part 1 - Create multi-language businesses

Every Business supports 1 Language only. So if you want multiple languages supported, you will have to create Businesses for every language, as explained below.

Create 1 business for every language that you want to support in the SDK. For example, your bot supports English and Hindi, so we need 2 businesses. If you need support for 5 languages, create 5 businesses. Select language in Business manager as shown on the red box in image below. 

![Language selection on business manager](/assets/language_selection.png)

The SDKs use Business via_name to combine the different language Businesses. So decide on a fixed prefix for the business via_name and use that for all the Businesses. For example, take **Dr. Path Labs** businesses creation, we have the via_name prefix as **drlalpathlabschannel**. So the corresponding business_via_name for the English and Hindi businesses would be **drlalpathlabschannel_en** and **drlalpathlabschannel_hi** respectively. You can set this via name in the business manager. This is highlighted in the image above as well.

       To summarize, the businesss_via_name should be changed to "fixed-prefix_<language-code>" 

Once the above is completed, if you want to test the changes that you have just made, you can refer to the below link and update the specific fields here -

https://toolassets.haptikapi.com/js-sdk/html/demoqp.html?default-language=language_code&business-via-name=via_name_prefix>&client-id=<**client_id**>&api-key=<**api_key**>&base-url=<**base_url**>

       When an SDK gets deployed, it opens up with 1 default business (let's say English bot). 
       And as the user taps on *Change Language* in the SDK, the underlying 
       business is changed from English to Hindi. What it means is that, 
       the chat collection, messages, etc. everything is new and not shared 
       with the data of other language (business). Same applies for Taskbox 
       as well because English and Hindi are 2 different businesses, the 
       tasks in Hindi and tasks in English are completely independent.


## Part 2 - Add languages to the bot view

Unlike Business, a single Bot can support multiple languages. This helps in ease of maintenance so that the story/substory/nodes/connections etc. need not be changed twice.

When a single bot supports multiple languages, the only things that change when switching a language is the User says, Bot says and Entities. You can use the Language Selection dropdown in the header of Mogambo.

Depending on the language chosen, the bot builder can now configure User Says/Bot Says with the correct data as per language.

![Language selection on Mogambo](/assets/language-change.png)

You can add more languages in the bot from the same dropdown menu in the header.

    Note: We do not auto-translate the User Responses and Bot Responses currently 
    on Mogambo. Bot builders will later be able to use a Translate functionality 
    which is in progress. Currently, bot builders themselves add language specific 
    bot content. Please bookmark this page for future updates. 
