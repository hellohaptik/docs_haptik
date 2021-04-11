---
title: Best Practices to follow
---

## Checklist for QA practices

### 1. All Functional flows verification (As per IVA design document): 
* Testing of all the positive and negative flows as per IVA design.
* Identifying and writing different scenarios before test execution.
* Execution of scenarios, and issues fixes with retesting.

### 2. API testing and its alignment with requirements in IVA:
* Verify the API responses are as per requirements.
* Verfify API errors.
* Verify API response time (should be not more than 20 seconds).
* Verification of different APIs responses handling on the IVA.

### 3. IVA behaviour for various test data and different API responses:
* IVA should be checked with different type of test data, user says variations as per various flows.
* Verify for different types of APIs responses and conditions as per test data.

### 4. Small talk verification:
* IVA should reply correctly for small talk (if it is enabled).  
* Ask the question such as _‘Who made you?’_ It should not give **Haptik** branding. Small talk customized messages are recommended.

### 5. FAQs verification (if FAQs are present):
* All the FAQs should be answered correctly by IVA.
* Each node should have specific intent, avoid similar intents on multiple nodes.
* Ask questions with 3-4 variations for same intent.

### 6. Error handling : API error,invalid inputs, Bot break and reprompts:
* **Bot break message** should be displayed for invalid user inputs.
* **Out of scope queries** should be handled by giving proper guidance through **bot break** or **outro** messages, so as to bring the user back in the bot journey.
* **APIs error** message should be handled by giving appropriate response to the user.
* The **entity reprompt** message should be relevant, along with hint text; so as to guide the user about what is expected

  `Eg. Entity bot says: What's your phone number?`
  
  `Entity retry message: That seems incorrect. Please enter a valid 10-digit phone number.`

  `Entity bot says: What's your date of birth?`
  
  `Entity retry message: That doesn't seem like a date. Please enter a valid date between 18/5/1990 and 26/11/2019.`

### 7. UI elements:
* Verify functioning of various UI elements such as Buttons, QRs, Carousel, Forms.
* Verify elements such as Webviews, Location Picker, etc 
* Links should be clickable and should point to the correct end points.
* Verify if the bot persona is in-line with the company logo and branding.
* Verify the tone used in the bot is as per requirement i.e causal, formal, friendly etc

### 8. Content verification - copies, grammar, emojis, spelling mistakes:
* Check the grammar and spellings along with punctuations.
* Use of correct emojis at correct places and bullet points.

### 9. Outro flows / follow up messages: 
* The journey should never end abruptly at any juncture unless the user abandons the conversation midway. If any Bot Says does not contain QRs, buttons or a follow-up message, it is considered as abrupt.
* Check for follow-up message based on the use-case/journey  
  Example: Was I able to resolve your payment issue?      
* Check if there is a generic follow-up message to re-engage the user.

  `Example: Wait at the end of a journey (20-30 Seconds). `
  
  A normal follow-up message should appear.
  
  `Example: Still looking for chairs? Tell me how many you need.`
  
  Support email or contact number should be present in the bot whenever the user asks for further assistance from support team.

### 10. Negative User Says handling: 
* The IVA should be able to handle negative cases and journeys that are not linear.
  The goal should be to channel the user back into the flow.
  
  `Example:`
  `I don't remember account number`
  `I didn't receive OTP`
  `I did not get any email`

### 11. Circle experience and exit points: 
- The IVA experience should never go in circles. It's more frustrating for the user to see the same answer repeatedly.
- User should never stuck in loop, some exit point should be available to user in form of follow up messages or outro messages.


### 12. For multilingual IVAs:
- Functional flows should work same as it works for primary language.
- Adding different language should not impact English language flow.
- Bot break message language should be checked.

### 13. Chat agent functionality (if enabled): 
* Check if the chat is transferred to agent on bot break or upon user says.
* Check if the chat gets assigned to an agent and if you are getting reponses on the bot.
* Check if agent is able to close the chat.

### 14. Regression testing before go live:
* Retest all the issue which you were facing and were resolved.
* High level sanity of IVA flows for impact of fixes.
* High level sanity check for correct intent detection.

Find the file containing sample test cases, [**here**](https://github.com/hellohaptik/docs_haptik/files/6292796/Test.cases.Template._.Dummy.ISP.IVA.pdf).
