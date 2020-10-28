---
title: Multilingual IVAs
---

A multilingual chatbot i.e. a bot that can converse with users in multiple languages, can be a tremendous asset to any organization. This particularly holds true in a highly linguistically diverse country like India. The digital revolution in India has exponentially broadened the Internet user base in the country to include large numbers of non-English speakers, who vastly outnumber English language speakers in the country.

Creating a whole new chatbot for each native language isn’t feasible nor pocket-friendly. A single chatbot that can operate effectively in all the languages is what online businesses need! 

Custom Glossary for each language to improve understanding of domain specific terms and overall accuracy.
Native modules for entity recognition (Entity Patterns).
Text cleanup layer before translation.

# Why do we need a multilingual bot?

An IVA that doesn’t support multiple languages restricts your business boundaries. You can’t increase your products/services reach, gain happy customers, and lastly, you’ll be getting revenue that isn’t enough to fill your pocket. 

All online stores who sell their products/services to a large customer base across the globe need to integrate a multi-lingual bot as it empowers you with benefits like-

Increases Geographical Boundary Reach
Provides Personalized Customer Experience 
Enhances Customer Base
Improves Business ROI
Provides Solution In Users’ Native Language

Another early decision that needed to be taken was whether we would build one chatbot that had support for multiple languages, or whether we would build a separate chatbot for each language.

Ultimately, our team decided it would not be feasible to develop a new chatbot for every new language to be added. Particularly since any changes made to the chatbot in one language needed to be implemented across all languages. Maintaining and updating the bot would be far more efficient if changes could be made to a single bot and applied across all the languages it supported.

Essentially, this means that when our multilingual chatbot switches from one language to another, the only things that change are the User Responses, Bot Responses, and Entities – the elements that are directly concerned with language. The rest of the underlying bot framework stays the same. A system like this makes it significantly easier to scale up the number of languages a bot can support over time.

Language support on our platform is divided into 2 parts -

1. *Business*: Manage business level settings and content for multiple languages  
2. *Bot*: Configure bot content that is the user says, bot says etc. for a language. 

# Steps to create a multilingual bot

## Step 1

Default language will be English.

# Glossary

# Entity Support

You only need to add entity reprompts in different languages and if there are any domain specific words they need to be added to glossary
person_name is not supported right now

# List of languages supported out of the box

- Hindi
- Marathi
- Gujurati
- Tamil
- Telegu
- Kannada
- French
- Dutch
- German
- Spanish

system messages which are not available for other languages, by default the platform supports everything
if you want a language not mentioned in the lsit, reach out to the SPOC

## Bot Break, Smart Assist, Disambiguation, Small Talk

small talk and smart assist are currently not supported in non-english

# How it works?

Entire UI screenshots of switching the language and system messages shown on the UI and bot responses shown in Hindi.

Also when the user explicitly mentions I want to switch to Hindi language, how do we tackle that -

WAITING FOR AKSHAY's template
