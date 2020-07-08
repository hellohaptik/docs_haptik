---
id: conversations
title: Conversation
---

## Overview

This document focuses on different techniques with which you can take the user to the conversation after the user is signed up.

Every conversation is tied to a unique string called the `businessvianame` which is provided to you when you partner up with Haptik. Using this unique `businessvianame` identifier you can take the user to the conversation. See the example below:

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C

/**
 @method
 Gets you an instance of the conversation controller using the unique 'businessvianame' provided to you by Haptik.

 @abstract
 It gives you an instance of the conversation controller using the unique 'businessvianame' provided to you. If the 'businessvianame' is not correct the error object is populated.
 You can choose to send a message to haptik from the user side everytime you take the user to the screen. If passed nil or empty no message will be sent.
 You also have the capability to hide the launch message (pass hideLaunchMessage as YES) from the conversation, but it'll still be sent to haptik's backend.
 Think of it like a silent message which can be used to give some context to the bot.
 The message sending will be done after you present or push the haptik's conversation screen.

 @param viaName Represents the key that haptik uses to find your conversation
 @param message String message to be sent from user-side on opening channel screen
 @param hideLaunchMessage If NO,  will display the message as a part of the chat, else it'lll send the message without displaying it to the user
 @param error It requires an NSError object pointer that will be populated in case of a potential fail during the process
 */

 - (void)pushToHaptikConversation {

     NSError *error;
     UIViewController *conversation = [[Haptik sharedSDK] getConversationForViaName:@"yourViaName"
                                                                      launchMessage:@"Hey!"
                                                                  hideLaunchMessage:NO
                                                                              error:&error];

     if (conversation) {
         [self.navigationController pushViewController:conversation animated:YES];
     }
     else {
         // Handle Error.
     }
 }

```

<!--Swift-->

```Swift
// Swift

/**
 @method
 Gets you an instance of the conversation controller using the unique 'businessvianame' provided to you by Haptik.

 @abstract
 It gives you an instance of the conversation controller using the unique 'businessvianame' provided to you.
 You can choose to send a message to haptik from the user side everytime you take the user to the screen. If passed nil or empty no message will be sent.
 You also have the capability to hide the launch message (pass hideLaunchMessage as true) from the conversation, but it'll still be sent to haptik's backend.
 Think of it like a silent message which can be used to give some context to the bot.
 The message sending will be done after you present or push the haptik's conversation screen.

 @param viaName Represents the key that haptik uses to find your conversation
 @param message String message to be sent from user-side on opening channel screen
 @param hideLaunchMessage If NO,  will display the message as a part of the chat, else it'lll send the message without displaying it to the user
 */

 func pushToHaptikConversation()  {

        let conversation = try? Haptik.sharedSDK().getConversationFor(viaName: "yourViaName",
                                                                      launchMessage: "Hey!",
                                                                      hideLaunchMessage: false)
        if let conversation = conversation {
            present(conversation, animated: true, completion: nil)
        }
        else {
            // Handle Error
        }
    }
```

<!--END_DOCUSAURUS_CODE_TABS-->

> Look [here](theming.md#navigationbar-theme-configurations) if you are not able to see the navigation bar of the conversation controller.

---

## Helper Methods

Using the above method gives you flexibility on how you want to take the user to the conversation (push, present, custom transition, etc) as you get the instance of the view controller itself. But if you have a simple need to just push the conversation screen on your stack. You can use the following helper method provided:

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C

/**
 @method
 Take the user to your conversation using the unique 'businessvianame' provided to you by Haptik.

 @abstract
 It takes an instance of the current view controller and the unique 'businessvianame' provided to you and pushes the haptik's conversation controller over your navigation stack.
 You can choose to send a message to haptik from the user side everytime you take the user to the screen. If passed nil or empty no message will be sent.
 You also have the capability to hide the launch message (pass hideLaunchMessage as YES) from the conversation, but it'll still be sent to haptik's backend.
 Think of it like a silent message which can be used to give some context to the bot.

 Note: If the passed via name is not correct then the operation will fail silently.

 @param viaName Represents the string key used to uniquely specify channel inside Haptik
 @param message String message to be sent from user-side on opening channel screen
 @param hideLaunchMessage If NO,  will display the message as a part of the chat, else it'll send the message without displaying it to the user
 @param controller The current view controller over which the channel is expected to be pushed
 */

 #import "MyViewController.h"

 - (void)pushToHaptikConversation {

     [[Haptik sharedSDK] launchChannelWith:@"yourViaName"
                             launchMessage:@"Hey!"
                         hideLaunchMessage:NO
                                controller:self];
 }
```

<!--Swift-->

```Swift
// Swift

/**
 @method
 Take the user to your conversation using the unique 'businessvianame' provided to you by Haptik.

 @abstract
 It takes an instance of the current view controller and the unique 'businessvianame' provided to you and pushes the haptik's conversation controller over your navigation stack.
 You can choose to send a message to haptik from the user side everytime you take the user to the screen. If passed nil or empty no message will be sent.
 You also have the capability to hide the launch message (pass hideLaunchMessage as true) from the conversation, but it'll still be sent to haptik's backend.
 Think of it like a silent message which can be used to give some context to the bot.

 Note: If the passed via name is not correct then the operation will fail silently.

 @param viaName Represents the string key used to uniquely specify channel inside Haptik
 @param message String message to be sent from user-side on opening channel screen
 @param hideLaunchMessage If NO,  will display the message as a part of the chat, else it'll send the message without displaying it to the user
 @param controller The current view controller over which the channel is expected to be pushed
 */

Haptik.sharedSDK().launchChannel(with: "yourViaName",
                                launchMessage: "Hey!",
                                hideLaunchMessage: false,
                                controller: self)
```

<!--END_DOCUSAURUS_CODE_TABS-->