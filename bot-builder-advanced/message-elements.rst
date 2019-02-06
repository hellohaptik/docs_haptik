How HSL Elements Work
---------------------------
This page will cover how to use HSL-Elements

Haptik defines a superset of UI elements that are available across multiple platforms. These UI elements are then converted to their platform equivalent (js-sdk, android, ios, facebook-messenger, etc..) if they are not available on that specific platform. Eg. Forms are converted to quick replies on the Facebook platform and collected over free form.

.. _HSL-Elements:
HSL Elements
^^^^^^^^^^^^

Haptik is a chatbot platform where we build chat flows for various use cases. Chat flows are nothing but exchange of messages. These messages can range from being plain text messages to complex UI elements like carousel, smart actions etc.

To build complex UI elements, we introduced Haptik Specific Language, our in-house format of messages. HSL is essentially JSON with a special meaning within the Haptik system. It's a mutual agreement between the backend and the frontend to decide how some of the chat elements should look like and what action they can perform.

All of Haptik’s frontend properties (Android SDK, iOS SDK, Web SDK) are configured to render HSL objects.

The basic anatomy of an HSL looks something like this.

.. code-block:: javascript

  {
    "text": "str",
    "type": "str",
    "data": "dict"
  }

A HSL Object is made up 3 primary properties: text, type & data.

* text - Defines what's seen on the message bubble.
* type - Defines the main function of the HSL. For e.g. whether it's a carousel or a smart action or an order receipt etc.
* data - Contains all the supporting data needed for the particular type.

A quick example for a button smart action.

.. code-block:: javascript

  {  
    "text":"Hey there. This is a HSL Button Smart Action with 1 Actionable. Tapping on the actionable will send a message stored in the payload",
    "type":"BUTTON",
    "data":{  
      "items":[  
         {  
            "actionable_text":"Tap",
            "location_required":"false",
            "uri":"",
            "is_default":0,
            "type":"TEXT_ONLY",
            "payload":{  
               "link":"",
               "message":"Hi, I just tapped on an actionable.",
               "gogo_message":""
            },
            "emoji":""
         }
    ]}
  }
  

The above message will render like this on front end:

.. image:: hsl-button.jpeg

The next message was sent by tapping on the **Tap** actionable.

HSL is a very powerful language that has enabled us to make a lot of use-cases easier to achieve. There are quite a few combinations, that can be used to get the best out of it.
