---
title: Preparing for Quality Assessment
---

Like every Software Product follows a **Software Development Life Cycle**
, our Bots should also follow a Development Life Cycle. We recommend
 following phases during the Bot Development:

1. **Prepare a Test Set**

    Create a comprehensive test set of sentences which you expect your
     users to say, containing sentences of following types:
    * the sentence should be handled by the bot
    * the sentence is `out of scope sentence` for the bot

    *Don’t add these sentences to any of the user says*

    This is in principle with doing Test-driven development (TDD),
     which is a development technique where you must first write a test
      that fails before doing any new development.

    Once you have a reasonably sized Test set, you can move to the next step. Checkout the
    [Testing Guidelines](https://docs.haptik.ai/bot-builder/advanced/testing-guidelines) to see
     how you can prepare test cases.

> **_Pro Tip -_**
> You should keep revisiting the test set during development to:
> * Test whatever you’ve built works on these test cases
> * Add new test cases, edge cases which you might discover during development


2. **Development**

    * Add user says, following [user-says guidelines](https://docs.haptik.ai/bot-builder/basic/user-says-guidelines),
     preferably for max 2-3 nodes together at a time or those nodes which are related to each
      other

    * Test on the test set which you had created earlier in addition to
     your new test cases. Here’s how you should go about it:

        * Check if there’s a pattern of sentences on which bot is failing.
         Some patterns to look out here for are:
         
            * All the sentences in user says are of similar syntactical
             structure and sentences of different syntactical structure
              are failing

            * Sentences having little bit of noise are failing:
                * For eg, if user says has following type of sentences:
                    * New 4g plans
                    * Latest International plans
                    * Cheapest Roaming plans
                    
                    Then there’s a possibility that sentences like
                     “I am going abroad next week. Can you tell me about
                      the roaming plans you might have” fail or have low
                       score

            * <Some word/phrase which is getting repeated in user says> + noise in english 
                * Example: International plans for buying oranges
                
            * Noise in english + <Some word/phrase which is getting repeated in user says>
                * Example: Electricity plan in abroad countries
                
            * <Some word/phrase which is getting repeated in user says> + gibberish
                * Example: Roaming plans dnjcnd ncvjiefnv eniuvcnefji
                 jiefjivj jivefjv

            * Gibberish + <Some word/phrase which is getting repeated in user says>
                * Mujhe aap btaoge international plan ke baare mein thoda

    * Debug and Solve the issues you encounter using Debugging guidelines
    
    * Repeat the whole process, each time adding 2-3 more nodes to your bot.
