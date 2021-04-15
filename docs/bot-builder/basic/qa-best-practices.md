---
title: Best Practices for Quality Assessment
---

### 1. All functional flows verification (as per IVA design document):

Testing all the functional flows will ensure if the bot is giving correct responses to the user. It will also ensure if the users are going through the journey as desgined during the Conversation Design phase.

* Test of all the positive and negative flows as per the design.
* Identify and write different scenarios before test execution.
* Execution of scenarios, and issues fixes with retesting.

### 2. API testing and its alignment with requirements in IVA:

All the APIs should be tested to ensure users are getting responses and the APIs is giving timely responses.

* Verify the API responses are as per requirements.
* Verfify API errors.
* Verify API response time (should be not more than 20 seconds).
* Verification of different APIs responses handling on the IVA.
* Verify the responses for different types of test data.

### 3. Small talk verification:

Small Talk is a module present for all the bot. Small Talk responds to random questions asked by user such as _Are yuo a robot?_.

* IVA should reply correctly for small talk (if it is enabled).  
* Ask the question such as _‘Who made you?’_ It should not give **Haptik** branding. Small talk customized messages are recommended.

### 4. FAQs verification (if FAQs are present):

* All the FAQs should be answered correctly by IVA.
* Each node should have specific intent, avoid similar intents on multiple nodes.
* Ask questions with 3-4 variations for same intent.

### 5. Error handling : API error,invalid inputs, Bot break and reprompts:

As the bot may break on different scenarios, the users should receive a prompt reply from the bot regarding the error.

* **Bot break message** should be displayed for invalid user inputs.
* **Out of scope queries** should be handled by giving proper guidance through **bot break** or **outro** messages, so as to bring the user back in the bot journey.
* **APIs error** message should be handled by giving appropriate response to the user.
* The **entity reprompt** message should be relevant, along with hint text; so as to guide the user about what is expected

  `Eg. Entity bot says: What's your phone number?`
  
  `Entity retry message: That seems incorrect. Please enter a valid 10-digit phone number.`

  `Entity bot says: What's your date of birth?`
  
  `Entity retry message: That doesn't seem like a date. Please enter a valid date between 18/5/1990 and 26/11/2019.`
  
> Users should not get the same message everytime the bot throws any error. Check the variations added in as bot responses.

### 6. UI elements and Content Verification

* Verify functioning of various UI elements such as Buttons, QRs, Carousel, Forms, Webviews, Location Picker and so on.
* Hyperlinks should be clickable and should point to the correct end points.
* Verify if the bot persona is in-line with the company logo and branding.
* Verify the tone used in the bot is as per design i.e causal, formal, friendly, funny.
* Check the grammar and spellings along with punctuations.
* Use of correct emojis at correct places and bullet points

### 7. Outro flows / follow up messages: 
The journey should never end abruptly at any juncture unless the user abandons the conversation midway. If any Bot Says does not contain QRs, buttons or a follow-up message, it is considered as abrupt.

* Check for follow-up message based on the use-case/journey.
  
  `Example: Was I able to resolve your payment issue?`
  
* Check if there is a generic follow-up message to re-engage the user.

  `Example: Wait at the end of a journey (20-30 Seconds). `
  
  A normal follow-up message should appear.
  
  `Example: Still looking for chairs? Tell me how many you need.`
  
  Support email or contact number should be present in the bot whenever the user asks for further assistance from support team.

### 8. Negative User Says handling: 

Test variations with negative tone within the bot flow.

* The IVA should be able to handle negative cases and journeys that are not linear.
  The goal should be to channel the user back into the flow.
  
  `Example:`
  `I don't remember account number`
  `I didn't receive OTP`
  `I did not get any email`

### 9. For multilingual IVAs (if enabled):

- Functional flows should work same as it works for primary language.
- Adding different language should not impact English language flow.
- Bot break message language should be checked.

### 10. Chat agent functionality (if enabled): 

* Check if the chat is transferred to agent on bot break or upon user says.
* Check if the chat gets assigned to an agent and if you are getting reponses on the bot.
* Check if agent is able to close the chat.

### Regression testing before go live:

* Retest all the issue which you were facing and were resolved.
* High level sanity of IVA flows for impact of fixes.
* High level sanity check for correct intent detection.

The following is a file containing sample test cases, click [**here**](https://github.com/hellohaptik/docs_haptik/files/6292796/Test.cases.Template._.Dummy.ISP.IVA.pdf) to download.
