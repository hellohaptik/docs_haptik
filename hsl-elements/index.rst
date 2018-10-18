HSL Elements
==================================

Haptik started as a simple chat application with simple text messages being exchanged between the user & the assistant. As we evolved, we introduced new chat elements which go beyond simple text messages and are able to handle complex use-cases. For a long time we hacked the text messages and added more meaning to it by appending some meta at the end of the message which the apps agreed to treat differently. 

With a lot more complex chat elements came the need for a new way for the apps & backend to communicate. This is how HSL was born. HSL is simply a way in which the Apps & Backend can talk to each other. We implement this using JSON since it’s lightweight & can hold all the details we would like to use.
 
On a high level, this is how a HSL message looks:
 
 
{
    "text": <text>,
    "type": <type>,
    "data": <dictionary>
}

.. toctree::
   :maxdepth: 1
   :caption: HSL - Haptik Specific Language:

   hsl-properties
   image
   text
   button
   carousel
