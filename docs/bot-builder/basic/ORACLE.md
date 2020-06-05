---------
<b>ORACLE</b>
---------

The ORACLE Module helps Bot Builders discover methods by which an IVA can be improved and brought to a state where it is utilising capabilities of the ML Model to its maximum potential. It aims to give feedback to Bot Builders on how well the IVA has been trained from the "User Says" and "Nodes" created by the Bot Builder. However, before we delve into the details of the ORACLE Module, it’s essential to understand the expectations of the ML Model from the Bot Builder, so that improvements can be made accordingly.

<b>What does the ML Model expect to perform at its fullest?</b>

   1. 10 variants on each START NODE

   2. 10 variants on each CONNECTION RESPONSE including - 
    
       a. START NODE to DEPENDENT NODE
       
       b. DEPENDENT NODE to DEPENDENT NODE
       
       c. OUTPUT NODE to STATIC NODE
       
       d. OUTPUT NODE to DEPENDENT NODE

<b>NOTE</b> - If >10 CONNECTION RESPONSES are not present, the performance of the ML Model, even on START Nodes would be affected negatively.

   3. Similar or exact same “User Says” should not be present in multiple nodes. It has also been 
    illustrated in the example shown above.

   4. NODES should not be too similar in the goal they aim to achieve, else the IVA may not be able to clearly differentiate and decide the correct NODE. Illustrated in the images below are two similar Nodes - 
   
   ![ORACLE_1](/assets/ORACLE_1.png) ![ORACLE_2](/assets/ORACLE_2.png)

Due to high similarity between Nodes, a minor variation in the User Message prevented a one-shot response from the IVA and triggered a Disambiguation Message.

   ![ORACLE_3](/assets/ORACLE_3.png)

   5. Quality of the “User Says” should be as per User Says Guidelines.


The ORACLE Module reaches the Bot Builder as part of the Training Completion Email. It is divided into 3 sections, each section having a list of issues with Training Data present in the IVA. If either of the sections have more than 30 entries, the section would be attached as a CSV to the email. 

The Bot Builder should prioritise in the order of Section 1, Section 2, Section 3 while fixing the issues highlighted by ORACLE Email.

<b>NOTE</b> -  The ORACLE Module only considers START NODES for the evaluation and display purposes.

#### SECTION 1 - PRESENCE OF SIMILAR USER SAYS ACROSS TWO NODES

This section shows a list of those “User Says” whose very close to each other or are present on more than one NODE. The aim of this section is to - 

      1. Bring forward some basic data sanity issues like duplicate User Says present in multiple nodes

      2. Highlights the possibility of Disambiguation with minor variations in User Utterance,due to presence
         of similar data across two Nodes.

Below image shows how Section 1 will appear in the ORACLE Email.

   ![ORACLE_4](/assets/ORACLE_4.png)

<b>Why should the issues in Section 1 be fixed?</b>

To better understand the need of fixing entries in Section 1, we need to see the first row in the above image. It shows two similar utterances present in the IVA across two different nodes. Consequently, when the user sends that statement as a message, the IVA, instead of responding in the first instance, sends a disambiguation message and hence, a sub-par User Experience. 

   ![ORACLE_5](/assets/ORACLE_5.png)

Ideally, the IVA should have replied in one instance, but the Disambiguation message made the chat a two step process, putting additional effort on the user to get information. The user might have ended up perceiving the IVA as non-intelligent, since the IVA got confused with a simple variation of the user utterance.

<b>What should the Bot Builder do after seeing entries in Section 1? </b>

   1. Check if exactly the same “User Says” or highly similar “User Says” are present across multiple Nodes, as highlighted in Section 1.

   2. Test minor variants of statements present in Section 1. If the IVA responds with Disambiguation or responds from a wrong node, then the newly generated test variant should be added to the right node. It’s shown in debugging guidelines here as well.

   3. There is no need to test the exact statement present in Section 1, since the ML Model is designed to ALWAYS make the exact “User Says” work correctly. The user, however, may enter variations of the exact statements entered in User Says and hence, Bot Builder needs to test the variants of the statements present in Section 1, to ensure that they work as expected.
    
#### SECTION 2 - BOT MAY NOT WORK ON THE VARIATIONS OF BELOW STATEMENTS

This section shows a list of “User Says” which have not been completely understood by the ML Model. The aim of this section is to - 

      1. Bring forward “User Says” on certain Nodes which need more variations to be added to help the ML Model 
         understand the context of that particular “User Says” completely.
    
      2. Highlights the possibility of some severe issues with the IVA. This will be reflected when the list of 
         messages in Section 2 is unusually long (> 100 entries).
    
Below image shows how Section 2 will appear in the ORACLE Email.

   ![ORACLE_6](/assets/ORACLE_6.png)
            
<b>Why should the issues in Section 2 be fixed? </b>

The need to fix entries in Section 2 can be best understood from the illustration below. The User message “Telemedicine” worked because there was an exact match present in the “User Says”. 

However, as per Section 2 of the Email, the ML Model has not learnt variations of “Telemedicine” completely. Thus, when the user sent a minor variation as a message to the IVA, the IVA sent a Disambiguation message.

   ![ORACLE_7](/assets/ORACLE_7.png) ![ORACLE_8](/assets/ORACLE_8.png)

Ideally, the IVA should have replied in one instance, but the Disambiguation message made the chat a two step process, putting additional effort on the user to get information. The user might have ended up perceiving the IVA as non-intelligent, since the IVA got confused with a simple variation of the user utterance.

<b>What should the Bot Builder do after seeing entries in Section 2? </b>

   1. Ensure all START Nodes have > 10 User Says.

   2. More variations of the list of statements present in section 2 should be added to the respective Node. 

        - With respect to the above illustration, variants like “Can you tell me about telemedicine”, “I have to use telemedicine” etc should be added to the “Telemedicine” node, so that the ML Model strongly understands that Telemedicine’s association with this Node.
        
   3. If the list in Section II is too long, it should be checked whether all DEPENDENT responses have 10 variations each. If that's not the case, the Haptik's ML Team can be contacted for further assistance.
    
<b>NOTE</b> - If 10 or more CONNECTION RESPONSES are not present on each connection, the performance on even the START NODES would be affected negatively.

   4. There is no need to test the exact statement present in Section 1, since the ML Model is designed to ALWAYS make the exact “User Says” work correctly. The user, however, may enter variations of the exact statements entered as User Says and hence, Bot Builder needs to test the variants of the statements present in Section 1, to ensure if they are working as expected.
    
#### SECTION 3 - CONFUSION IN THE BOT DUE TO SIMILARITY BETWEEN NODES

The aim of this section is to bring to the Bot builder’s notice -

      1. Those PAIR OF NODES which appear similar in varying degrees, to the ML Model. The section also displays 
         the User Says on those Nodes which might be causing the Overlap.

      2. Certain Nodes, which appear similar since >10 User Says have not been added to them.

Below image shows how Section 3 will appear in the ORACLE Email.

   ![ORACLE_9](/assets/ORACLE_9.png)

<b>Why should the issues in Section 3 be fixed?</b>

   The issues need to be fixed because if the Nodes created by the Bot Builder appear similar in their objective to the ML Model, the model may end up giving inaccurate responses to the End User. It may also happen that the user unnecessarily receives a Disambiguation message, while the User Query could have been answered directly.

<b>What should the Bot Builder do after seeing entries in Section 3?</b>

   1. Evaluate if certain START NODES can be merged if the use-case they aim to cater to are too from a User’s point of view, as shown in illustration below.

      Check the below snapshots and notice that the NODES communicate a very similar message. It should be evaluated if there is a need to keep them as two separate nodes. There is very little probability that a User would be able to come up with such an intent which can be differentiated to such a granular level.
      
         ![ORACLE_11](/assets/ORACLE_11.png)  ![ORACLE_12](/assets/ORACLE_12.png)

   2. The PAIR OF SIMILAR Nodes shown in this section show the possibility of wrong response being sent to the User. Hence, adequate testing needs to be done. Variants for testing can be generated by borrowing some keywords from Node B and adding them to variants present in Node A, as shown in steps below.

      a. As seen in the snapshot above, Section 3 highlights Nodes that appear similar to the Model - E.g Node A                        <b>Custom size</b> and Node B as <b>What size to order</b>.

      b. Pick 1 statement from each node - “What are the available mattress sizes?” 
         and “Can you help with the size?”. 

      c. Generate a variant on lines of “Can you help with available mattress sizes?”

      d. Send such variants as messages on the Bot to test them out. 

      e. If such variants go to a wrong node or show disambiguation, add these newly generated test 
         variants to the right node. 
               
      E.g In the below image, Bot Builder should evaluate which Node can the User Message be added to. This process is similar to the one shown in Debugging Guidelines.
      
         ![ORACLE_10](/assets/ORACLE_10.png)

   3. Section 3 also mentions Nodes containing less than 10 User Says. There is a high chance the ML Models ends up considering Nodes similar, if 10 User Says are not added to all the START NODES and CONNECTION Responses.
  
