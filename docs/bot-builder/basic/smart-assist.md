SMART ASSIST

Intelligent Virtual Assistants are always trained to cater to user queries that fall within a fixed scope. However, at times, customers might ask queries that don’t fall within the scope of the IVA. This tends to prevent the IVA from answering the User’s queries.

A key component in Haptik’s conversational experience is Smart Assist. The objective of the component is to respond back to the user smartly, when the IVA is not able to completely understand the User’s query. This should open up the pathways for the users to reformulate or redirect their queries, so that appropriate response can be given.

<b>How does the SMART ASSIST component come into play?</b>

The below graphic depicts the overall scheme of the Smart Assist - 

<IMAGE_1>

<b>What are the components of the SMART ASSIST?</b>

There are various intelligent nudges that the IVA performs, to make an attempt to bring the user back into the conversation. They are described as below - 

1. Asking a user to choose from a list of options, if the bot is not confident on it’s understanding of the query. 

<IMAGE_2>

This is very similar to the “Did you mean?” feature on Haptik platform, the only difference being, that in Smart Assist, the tone of the IVA would be much more apologetic, since it was not able to understand the query of the User properly.

2. There are occasions, when users provide entity values with certain implicit assumptions, but don’t provide their complete requirement. With Smart Assist, the IVA will depict a list of options, which can utilise the entity provided by the user and request users to choose an option to continue the conversation.

<IMAGE_3>

3. The IVA would ask the users to rephrase their query when it’s too short and the IVA has not understood the complete context from the message.

<IMAGE_4>

4. The IVA will identify that the user’s query is out of scope of the IVA and ask the user to take one more attempt at sending their query, by using different words. Another attempt from the might lead the IVA to recognise the query.

<Image_5>

5. The IVA will ask the users to summarise their query, if it’s too long and if the IVA is not able to understand it completely.

<image_6>

<b>Few points to note - </b>

1. A user can also pick options amongst a list of options by saying “1”, “2”, “3” after seeing a list of options.

<b>To demonstrate - </b>

<image_7>

2. The IVA will not send the same type of Smart Assist message for two consecutive User messages. 

E.g if a user received a Smart Assist message to rephrase his query, the next user message will either receive a correct response, or a “Smart Assist” message apart from the rephrase request.

If the bot finds two consecutive messages falling into the same Smart Assist message type, the second message will receive a Final Bot Break message.

To demonstrate - In the below image, the “Show sav” message received a “Smart Assist” response to rephrase the message. However, when the next user message also became eligible to receive a request to rephrase the message, the IVA sent a Final Bot Break Message. The Final Bot Break message is configurable in the “Partner Specific” section of the Business Manager.

<image_8>

3. Those Smart Assist messages that use button text fetch those respective button texts from the “Did you mean?” text section on the respective Nodes in the Bot Builder.

4. Text of the messages sent as Smart Assist responses, is currently non-customisable and controlled directly at the platform level.
