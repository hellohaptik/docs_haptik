---
title: Designing Chat Experiences
---

# 

There are 2 guides in this document:

1. **Quick Guide:** A short 6 step guide that is a light read and can be referred to quickly.

2. **In-Depth Guide:** The In-depth guide covers the fundamentals of UX design and the intricacies of bot design.

# Quick Guide: 6 Steps to Designing Better Bots

1. **Choose the right use-case for chat**

    Choosing the right use case will go a long way in determining the success of your bot. So far the best use-cases we know are customer support, search and conveyance of brand character (using copies). 

2. **Understand your user**

    Understanding the motivations and contexts in which the user will use your bot will give you a better picture of what the user needs. Create a persona and articulate your needs. A persona will align the team and help make methodological design & product decisions.

3. **Design A User Journey. Prototype & Test It**

    Map out a journey/flow and get into the users shoes and test it. Looking at the flow as a whole will give you an idea on where you can make optimizations. Make sure to test this with a variety of people. This will tell you about flows that you may have not accounted for.

4. **Write the Script. Iterate & Test it**

    When writing a script for a chatbot, remember to:

    1. Have a base character/personality to keep the copies consistent.
    2. Regulate message length.
    3. Regulate number of messages sent at once.
    4. Use emojis & line breaks
    5. Use images and GIFs when you have to send a lot of information in messages
    6. Use GUI Chat Elements where necessary

5. **Design for a wide range of free form Queries**

    Users compare bots to humans and thus expect bots to understand conversation like humans. Since that is not possible at the moment, the onus is on design to create fill the gap. Plan for a wide variety of queries a user might ask. The more topics you cover, the higher your feedback rating will be. This is where you can make the bot feel "magical"

6. **Ship, Analyze and Iterate**

    Regardless of how rigorously you follow a design process and think from the user's point of view, there will always be something that you didn't think about. The great thing about chat is that it is easy to collect feedback. Be ready after ship date to iterate and make changes once you get real data.

# In-Depth Guide:

1. **Choose the right use-case for chat**

    Your use case is the foundation of the user experience and the premise of your service. Regardless of how good a bot you build, if the use-case is not a good fit for chat, it's unlikely that the bot will be able to give the user a good experience.

    To be able to judge whether or not a use case is a good fit for chat, it's important to understand interfaces.

    1. What's An Interface

        An interface is a point where two or more people/objects etc. meet and interact. For example, a smartphone's touch screen is the interface between itself and a human. It displays graphical information like buttons, lists etc. to communicate and the user touches the screen to communicate with the device.

        Everything you see on the screen - icons, buttons, text, lists etc - is a system called the GUI (Graphical User Interface).

        With Google Assistant/Alexa/Haptik, language is the interface. The device communicates with us using words. Since words are used instead of graphical elements this type of interface is known as a CUI (Conversational User Interface). 


        In the most rudimentary form, English and Hindi are CUIs as well since humans interface with each other using words too.

    2. GUI vs CUI (Tapping Vs Typing)

        Understanding the strength and weaknesses of GUIs and CUIs will help you decide whether a project is a good use case for a bot or not. 

        When you're looking at a list of flights on the screen, it's easier to tap your preferred one than send a message with the flight number. A GUI can also pack in much more information in the same area than a CUI.

        However once you start packing for the trip, it's easier to ask/type "baggage allowance" and get a reply with the check-in weight allowance as compared to navigating multiple screens, skimming and searching through all the information.

1. **Arrive at an ideal user experience**

    1. Know Thy User: Who, When and Why

        *Who*
        
        If you don't have a clear picture of the user in your mind, you'll end up falling into the trap of designing for yourself. And since many stakeholders participate (either directly or indirectly) in the design process, the product can become a mess with everyone designing for themselves. Having a clear, defined persona of the user will give the team a common vision. 

        What's A Persona? A persona is a fictional character that is a close approximation of your user. If data shows that flight bookings are done by 2 kinds of users - business travellers and leisure travellers - you can design 2 personas to represent each type of user. Give each of them a name, age, hobby, back story and purpose. Try to make the character as real, relatable and accurate to your user as possible.

        When it's time to make UX decisions, put yourself in their shoes and think about "What would (persona name) do?". Argue it out with your collaborators on why you think your persona would take that action. Since personas have a back story and a character, the argument will be guided and fruitful; and bring even more clarity about the user's intentions.

        *Why*

        Once you've created the persona, list down her/his motivations to use your bot. Also list down the reasons why he/she may not use your bot, or maybe stop using it eventually. This will tie in closely with picking a good use case.

       *When*

         In what context will the user be using this? Is there a specific place and time? Is it possible to optimise for those conditions?

         For example, if your bot helps a user get a train schedule, and he is most likely to use it in the train, while traveling outstation, it's important to note that he could be in limited network connectivity and possibly in a crowded environment.

    4. Design A User Journey

        *What's a User Journey?*
        
        A user journey (or flow) is a list or visualization of the steps that a user goes through to complete a task.

        *How Does It Help?*
        
        Writing down / sketching out the flow will help you identify where your users spend most of their time and how you can optimise for them to get their task done as easily as possible. 

        *Prototype, Test & Get Feedback*
        
        Once you've sketched out the flow, write tentative copies and have a mock conversation with someone. Check whether they tend to go in the flow you've envisioned. The more people you do this with, the more possibilities you'll see of potential branches that go off the flow. Since this is done at a fairly early stage, you can address them easily right now.

    5. Write. Prototype. Test. Iterate. Repeat

        If your use-case is the foundation of the UX, the user journey is the structure and the script is the meat. How you write the script affects the user experience at multiple levels. At the very least, a script needs to be clear and understandable, for a user to be able to complete a user journey comfortably. At a more advanced level, the script is what can make your bot memorable and highly retentive. Copy can convey character and emotion in a way that elements of a GUI cannot. 

        Here are some good script writing practices for chatbots:

        *Create A Character/Personality*

          Similar to a creating a persona for the UX design, a character gives a common vision to the team in the scriptwriting process. The character's personality will influence the tone of the copy. When done right, this creates a memorable experience for the user.

          The character need not be a visual mascot that the user sees. It can simply be a background idea that gives a team of scriptwriter/product managers a concrete idea of the personality. This will help to keep copies consistent internally.

        *Regulate the Message Length*

          The shorter the message, the better. Avoid ever having messages more than 3 lines long. It's better to have 3 seperate messages, with 1 intent being communicated in each message, rather than having 1 long message.

        *Regulate the Number of Messages Sent At Once*

          Try and convey your intent in the simplest and shortest way you can. In a situation where you need to send multiple messages, make sure to not overwhelm your user by sending content that covers more than half their screen space at once. If you're stuck in a situation where you absolutely have to send several messages, make sure to break it with a user message or two, in between. Even if its a simple "ok" quick reply.

        *Emojis & Formatted Messages ✏️*

          Emojis help convey information easily & quickly, validating the saying "a picture is worth a thousand words". Use it at the start of a line to give the user a gist about what the sentence is going to mean. This will set the right intent for him when reading it. If it's related to a word or a phrase that's at the end of message, add it to the end. It's unadvisable to use an emoji mid sentence because that can break the user's reading rhythm.

          Make sure to format your messages as neatly as possible. Use line spacing and numbering/bullets to give the message visual structure. You can also use emojis as bullet points.

        *Using Images and GIFs*

          There are certain situations where a text message bubble will not be enough to convey information. When you have a comparison like a table or a quiz leaderboard or when you have to pass a lot of info to the user like terms and conditions; its better of sent as an image which the user can open and read at her/his convenience.

        *Use GUI Chat elements where appropriate*

          While chat works great for certain interactions, other interactions may benefit from a GUI. For this reason there are elements like quick replies, carousels, smart action buttons & more:

          1. Quick Replies
Quick replies are likely to be the most commonly used interactive element in your flow. They are extremely useful to suggest flows to the user and take away the work of typing.

          2. Smart Action buttons
Smart action buttons help a user get through a fork in the flow by showing options. Unlike Quick Replies, they stay persistent and don't disappear. They occupy vertical space and are not a good element to use when you have many options. Even though Smart Action Buttons get higher click-throughs than quick replies, it's better to use quick replies when you have more than 3 options. If you have an even higher number than appropriate for quick replies, defer to a list view.

          3. Carousels
A carousel element is useful to showcase multiple options with some description of each. In addition to this unique feature, carousels also help beautify and direct the flow. Carousels can have 3 widths - small, medium and fat.

          4. List View
Whenever there's a fork where a user has to make a decision and continue the flow, you can use lists, quick replies, carousels or smart action buttons. Lists come in handy when there are a lot of options, since covering all the options when using the other elements, would need a fair bit of scrolling.

          5. Forms
A chat interface is usually a good replacement for forms. However, there are some situations when you want an exact response from your user, or want to make sure that you receive certain information before the user can proceed in the flow. Other times, you may already know potential responses of a user and it may be faster for her/him to simply tap. This is where forms come in handy. Use quick replies when there are only a few ways a user can respond. Use Forms when there's a larger number of responses potential. Resort to free form when there's a gigantic number of potential responses.

          6. Receipts
Use the Receipt HSL to give the user visual confirmation of a transactional action that he/she just completed - like a flight booking or a recharge.

3. **Accomodate for a variety of Free Form Queries**

    One major difference between GUIs and CUIs is that designers have very little control of where the flows on CUIs can end up. On a GUI, the user only has certain number interactive elements that will lead her/him to another flow. On a CUI, there's an infinite number of flows a user can end up in, simply because there's an infinite variety of things a user can type in freeform.

    It's impossible to account for every potential flow, but it's important to account for as many flows as possible. It's an opportunity to make the bot smart and closer to being "magical" like in the movies, where the bot feels like another human (for example Jarvis in Ironman). 

    When designing for a variety of free form queries, past data can be a gold mine. It's impossible to predict what everyone will think. Thus use any resource possible that tells you about user behaviour in a specific context. For example, if you're building for a use case in which a user recharges their prepaid account, find data on what else users are interested in at that time. They could be interested in information like how much time it takes to reflect in their account. Or, what offers are ongoing. Or what action should be taken if the recharge fails. If you don't have data, the next best tool is going back to II-2-C : Prototyping and Testing. Test your flow with as many people as possible.

    Designing for a large variety of free form queries will take your bot from being functional to being a good, well designed experience.

4. **Ship, Analyze and Iterate**

    Some of the best insights for design actually come after the bot is live. This is because there is real data to understand user behaviour. The analytics tools will help you understand what flows are successful, where users tend to drop off, where the bot breaks and how you can improve your bot with the qualitative feedback users give you. Use this information to keep iterating.
