---
title: Testing Guidelines
---

It's important to remember that the quality of your bot will only be **as 
good** as your Test Set. Following notes will ensure the quality of your test
cases and hence the quality of your bot.

* Let’s say you’ve added following sentences in your User Says:
    * What is SIP
    * Tell me about SIP
    * How can I know about SIP
    
    Then please note that because SIP is occurring in all sentences,
     then there’s a possibility that model will end up firing this node 
     even if user enters:
    * SIP
    * SIP + gibberish Eg. SIP bjhfv vbf
    
    Therefore, you should make sure **your bot is learning the right
     things by testing it on phrases / words occuring repeatedly in your user says**
     
Example: If sentence is "Benefits of SIP", then test your bot on:
    * Benefits of bvdfbv fjdb (Phrase + Gibberish/noise)
    * cricket benefits (Gibberish/noise + Phrase)
    * benefits (Phrase)
    
Solve any of the issues you encounter using [debugging guidelines](https://docs.haptik.ai/bot-builder/advanced/debugging-guidelines).