---
title: Chat Elements
---

## What are Chat Elements?
 In the *Bot Says* documentation, we saw how we can respond to the users based on different inputs. In this document we will look at the different ways in which the bot can respond to the user.

 > Tip: In the haptik platform these elements can also be called as HSL elements. HSL stands for Haptik Specific Langauge.

## ***Text Responses***
The first type of Chat Element we will look at is `Text Responses`. These are simple chat elements where you can use simple text messages as responses.

You can use this chat element by opening *Bot Says* and going to the **Bot Says** section within it. Here you can click on the `Tap to add` faded button to create a text response.

After you click the button, a new menu should slide out with an input field where you can enter the text you want to respond with.

![Text Elements](assets/bot-builder-chat-elements/chat-elements-text-responses.gif)

## ***Quick Replies***
The second type of chat elements we will look are `Quick Replies`. Quick Replies provide a way to present buttons to the user. The users can tap these buttons to send a message to the bot. 

![Quick Reply Preview](assets/bot-builder-chat-elements/chat-elements-quick-reply-preview.png)

Once the users tap on these buttons they automatically disappear and a text message gets sent by the user.

There are two ways to use Quick Replies:

### The Quick way to add Quick Replies
The first way is by clicking on the `+ add chat elements`. This is useful if you have already added other chat elements as responses and want to add 'Quick Reply' options at the end of the responses.

Once you click the `+ add chat elements` button, you will see a new button show up next to it. Here you can add the message you want to add in the quick reply. The message added here will be shown as the button text. It is also the message that will be sent by the user when they click the button.

![Using Quick Replies 1](assets/bot-builder-chat-elements/chat-elements-quick-replies-1.gif)

### Advanced options to add Quick Replies
The second way to add quick replies provides you with more configuration options. 

You can add quick replies using this option by clicking on the `+ Add a Chat Element`. This should slide a menu for adding HSL elements. Inside this menu the first option is the `Text & Quick Replies` option.

![HSL Chat Menu](assets/bot-builder-chat-elements/chat-elements-hsl-menu.png)

Using this option we can add some text followed by Quick Replies. To do this click on the `Text & Quick Replies` option. This should open a new menu. In this menu you can add any text you want in the Bot Says input field.

After adding the text you can click on the `+ Add Quick Reply` link below the text field. This should create a new quick reply with the default name as Quick Reply 1. If you add another quick reply it will be called Quick Reply 2 by default and so on.

You can edit the quick reply by clicking on it. Or if you have accidentally added it, you can delete it by clicking on the bin icon next to it. Once you open the quick reply for editing you will see three fields.

> Tip: You can see the preview of how any HSL chatbot would look inside the chat on the center of the screen.

#### Quick Reply
Using the first field you can edit the quick reply text. Whatever you put in here is what the user will see as the title of the button. This will also be the text message that will be sent on behalf of the user. 

#### Add a different user message
In some cases you might want to send more information than what can fit inside a button title. For example you might want to send a text message like "Yes, I would like to proceed with the booking". You can't put such a long message as the title of the button.

In such cases we can use this option to send a different user message. Just click on the `+ Add a different user message` link and enter the message you want to send.

#### Add a different gogo message
Additionally, in few cases you might want to send data which you don't want the user to see in the chat window. Your bot backend might need this information and you don't want to add all the info to the user message in the chat window. 

For example we might want to send the flight booking details in the user message like "Yes, I want to proceed. {from: Goa, to:Mumbai, date:31/03/2019, passengers:1}". Showing this message in the chat window is a bad experience but our backend still needs the information.

In such cases we can solve this option by clicking on `+ Add a gogo message`. Here you can add the message that the bot backend will receive when the user taps on the button.

> Note: On click of a quick reply, gogo message is the message that the bot receives. User message is the message that is seen in the chat window as the sent message.

![Quick Replies 2](assets/bot-builder-chat-elements/chat-elements-quick-replies-2.gif)

### Reordering Quick Replies
Sometimes you might want to change the order in which the quick replies are shown to the user. You can do this by using the hamburger menu on the left of the quick reply.

Just click and hold the hamburger menu and drag the quick reply to reorder it.

![Quick Reply Reorder](assets/bot-builder-chat-elements/chat-elements-quick-replies-reorder.gif)


## ***Buttons***
In the previous section we looked at `Quick Replies` which are buttons that disappear after user clicks on them. But in some cases we might want to provide users with buttons that don't disappear after clicking on them. This is useful for menu like buttons which the user can click multiple times.

Also in some cases you might want to do more than just sending a text message on tap of the button. For example you might want to add a button to make a phone call or send an email.

![Buttons Preview](assets/bot-builder-chat-elements/chat-elements-button-preview.png)

In such cases you can add persistent buttons of different types by choosing the `Buttons` option from the HSL menu.

On opening the Button menu, you have an option to enter the text message to be sent with the buttons. After adding the text message, you can click on the `+ Add Button` link to add a button.

Inside the button menu there are two fields. The first is the Button type and the second is the Button text. Button type refers to the type of the button. The different options available here are:

### Text
The first and most simple type of button is text. On clicking this button a text message is sent from the user to the bot.

To use this button type select the `Text` option in the button type dropdown. Then fill in the title of the button in the button text field. Finally, you can enter the message that needs to be sent in the Message to send field.

![Text Button](assets/bot-builder-chat-elements/chat-elements-text-button.gif)

### Open Screen
In some cases you might want to open a new visual screen to collect some information or show some information. An example is opening a link to show a form or display information. In such cases you can use the `Open Screen` button type.

To use this button type just set the button type as `Open Screen`. Then set the button text and choose the type of screen you want to open. Some of the screen types available are:

* **Carousel Detail**: Opens a screen which has a carousel of image on the top and space underneath for text. This option comes with both text and button.
* **Upload / Take photo**: Pops up the dialog to choose an image from camera / gallery. This option comes for both native apps and web.
* **Upload document**: Pops up the dialog to choose a document from device.
* **Open Channel**: Opens up a new channel. The details of the channel to be opened is given in the payload.
* **Send Location**: Opens Place Picker and enables a user to send a particular location.
* **Link**: Opens the mentioned link on a new tab.
* **Webview**: Opens up a custom webview.

### Call
This option is useful when you want the user to be able to make a call on click of the button. Clicking this button will open the default calling app and prefill the number to be called.

You can use this by setting the button type as `Call`. Then you can set the button text and the Phone Number to be prefilled.

![Call Button](assets/bot-builder-chat-elements/chat-elements-call-button.png)

> Note: This option is only available on Android and IOS sdk.

### SMS
This option is useful if you want to let the user send an SMS on click of a button. Clicking this button will open the default SMS app on the users phone with a prefilled SMS message.

You can use this by setting the button type as `SMS`. Then you can set the button text and the SMS message to be prefilled.

![SMS Button](assets/bot-builder-chat-elements/chat-elements-sms-button.png)

> Note: This option is only available on Android and IOS.

### Email
This type of button is useful when you want to let the user send an email on click of the button. You can configure the "to email address","subject" and "message" of the email in button settings. When the user clicks on the button, the bot will open the default email client of the user. It will preload the email data into the client as well.

You can use this button by setting button type as `Email`. Then you get options to set the button title, to email address, subject and the message body.

![Email Button](assets/bot-builder-chat-elements/chat-elements-email-button.gif)

### Feedback Flow
This type of button can be used to trigger a feedback flow. The feedback flow asks the user to rate the bot on a scale of 5 stars. The user can also provide any specific feedback in free text form after that.

You can use this button by setting button type as `Feedback Flow`. After that you set the button text and click on Done to complete the setup.

![Feedback Button](assets/bot-builder-chat-elements/chat-elements-feedback-button.png)

### Share
There might be cases where you want to let users share some content. In such cases you might want to provide a share button. 

You can add this button by setting the type as `Share`. After that you have options to provide

* Button text: The title or text inside the share button
* Image: The image to be shared on the click of the button
* Share Message: The message to be shared
* Whatsapp Share Message: In whatsapp there is an option to provide additional message while sharing things. This field can be used to add that message.
* Gogo Message: The message to be sent to the bot backend when user clicks the share button. This message can be used to track message clicks.
* Show Share Option: This option can be turned on if you want to show the native share options from Android/IOS.

![Share Button](assets/bot-builder-chat-elements/chat-elements-share-button.png)

> Note: This option is only available on Android and IOS SDK.

## ***Carousel***
This type of chat element helps you build a carousel of elements. Each of these elements can have a thumbnail image, title, subtitle, description and buttons.

![Carousel](assets/bot-builder-chat-elements/chat-elements-carousel-button.png)

You can use this type of chat element by clicking on add a chat element and then selecting carousel. Inside the carousel menu we can edit the size of the carousel and also set the aspect ratio. You can then add a notification text to be sent with a carousel.

![Carousel Build 1](assets/bot-builder-chat-elements/chat-elements-carousel-build-1.gif)

Then you can go into carousel details and add a image, a URL to open on click of the image, title, subtitle and description. Finally you can edit the button for the carousel with all the same options as the buttons in the previous section. You can also add or remove buttons as you need.

![Carousel Build 2](assets/bot-builder-chat-elements/chat-elements-carousel-build-2.gif)

## ***Image***
This option allows you to send an image as a response to a user query. You can configure this by clicking on the `Add a chat element` link and then selecting Image.

After choosing Image as the chat element option you have several configuration choices. You can select the size and set the aspect ratio for the image. You can then add a text message to be sent with the notification and finally upload the image to be sent.

![Image Button](assets/bot-builder-chat-elements/chat-elements-image-button.png)

## ***Raw Text/HSL***
If you want to use a custom chat element you can use this option. A custom chat element is something that is not part of the standard elements mentioned above. 

In such cases you can enter the raw HSL code directly and that element will be rendered by the bots.
