---
id: features
title: Additional Features
---

## Sync Custom Data

In some cases you might need additional data before initiating the chat with user. For example, you might need the order details before resolving the user's query. Here's how you can do that:

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C

/**
 @method
 Let's you sync some custom data with the backend for the signed in user to give the bot/agent some context.

 @abstract
 Use this method if you have any requirement to send any related/necessary data to the backend for the bot/agent to take into account for the conversation before taking the user to the conversation screen.
 The completion is returned on mainQueue.

 Note: You can also pass this customData during the signup also by setting it in the HPSignupObject's customData property. This method updates over the key values if already present in the backend else creates them.

 @param data Custom data needed to be updated for the user
 @param completion Completion Handler which will have the success and error information and is returned on the mainQueue.
 */

 [[Haptik sharedSDK] syncUserCustomData:@{@"key": @"value", @"key": @"value"}
                             completion:^(BOOL success, NSError * _Nullable error) {

     [[Haptik sharedSDK] launchChannelWith:@"mychannelinhaptik"
                             launchMessage:@"Hey!"
                         hideLaunchMessage:NO
                                controller:self];
 }];
```

<!--Swift-->

```Swift
// Swift

/**
 @method
 Let's you sync some custom data with the backend for the signed in user to give the bot/agent some context.

 @abstract
 Use this method if you have any requirement to send any related/necessary data to the backend for the bot/agent to take into account for the conversation before taking the user to the conversation screen.
 The completion is returned on mainQueue.

 Note: You can also pass this customData during the signup also by setting it in the HPSignupObject's customData property. This method updates over the key values if already present in the backend else creates them.

 @param data Custom data needed to be updated for the user
 @param completion Completion Handler which will have the success and error information and is returned on the mainQueue.
 */

Haptik.sharedSDK().syncUserCustomData(["key": "value", "key": "value"]) { (success, error) in

    if success {

    }
    else {

     }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

---

## Update Authentication Credentials

The following method let's you update your user's authentication credentials. See example below:

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C

/**
 @method
 Updates the user's authentication credentials if expired.

 @abstract
 Update user authentication credentials with the new ones.
 It returns the completion on the mainQueue.

 @param token   Token that need to be updated.
 @param authID  AuthenticationID of the loggedIn user.
 @param authType    AuthenticationType of the loggedIn user.
 @param completion  Completion Handler which will have the success information and is returned on the mainQueue.
 */

 [[Haptik sharedSDK] updateUserToken:@"Updated Auth Token/Code"
                              authID:@"User's Auth ID"
                            authType:@"User's Auth Type"
                          completion:^(BOOL success) {

        if (success) {

        }
        else {

        }
 }];
```

<!--Swift-->

```Swift
// Swift

/**
 @method
 Updates the user's authentication credentials if expired.

 @abstract
 Update user authentication credentials with the new ones.
 It returns the completion on the mainQueue.

 @param token   Token that need to be updated.
 @param authID  AuthenticationID of the loggedIn user.
 @param authType    AuthenticationType of the loggedIn user.
 @param completion  Completion Handler which will have the success information and is returned on the mainQueue.
 */

Haptik.sharedSDK().updateUserToken("Updated Auth Token/Code", authID: "User's Auth ID", authType: "User's Auth Type") { (success) in

    if success {

    }
    else {

     }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

---

## Unread Count

HaptikLib provides the `unreadCount` of the chat that the user has not read.

```ObjC
- (void)getUnreadCountFor:(NSString *)viaName
           WithCompletion:(void(^)(NSUInteger unreadCount, NSError * _Nullable error))completion;
```

You get the count(`NSUInteger` or, `UInt` in swift) in the `completion` block of the function. The completion is returned on the `mainQueue`. You can potentially use this count and add a Glyph Label on the Icon from where you are pushing the user inside **Haptik**.

Example:

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C

/**
 @method
 Calling this method will get you the count of the messages that the user hasn't read in the conversation identified by the uniquie 'BusinessviaName'.
 The completion is returned on mainQueue.

 @param viaName Represents the string key used to uniquely specify channel inside Haptik
 @param completion this will be called with  an NSUInteger for number of unread messages,  an optional error object which will be populated in case of failure else nil be returned. It's returned on the mainQueue.
 */

[[Haptik sharedSDK] getUnreadCountFor:@"yourViaName"
                       WithCompletion:^(NSUInteger unreadCount, NSError * _Nullable error) {

                        if (error) {
                            NSLog(@"%@", [error localizedDescription]);
                        }
                        else {

                            // Use the unread count here
                        }
    }];
```

<!--Swift-->

```Swift
// Swift

/**
 @method
 Calling this method will get you the count of the messages that the user hasn't read in the conversation identified by the uniquie "BusinessviaName".
 The completion is returned on mainQueue.

 @param viaName Represents the string key used to uniquely specify channel inside Haptik
 @param completion this will be called with  an NSUInteger for number of unread messages,  an optional error object which will be populated in case of failure else nil be returned. It's returned on the mainQueue.
 */

Haptik.sharedSDK().getUnreadCount(for: "yourViaName") { (unreadCount, error) in

            if let error = error {

                // Handle Error here
            }
            else {

            }
        }
```

<!--END_DOCUSAURUS_CODE_TABS-->

---

## Navigation Controller Wrapper

The Haptik SDK gives out a helper method to wrap any `UIViewController` inside a `UINavigationController`.

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C

/**
@abstract
Get's you an instance of UINavigationController embedding the passed viewController as it's rootViewController.

@param viewController vieController to embedd as rootViewController
*/

[[HPConfiguration shared] embeddInNavigationController:viewController];
```

<!--Swift-->

```Swift
// Swift

/**
@abstract
Get's you an instance of UINavigationController embedding the passed viewController as it's rootViewController.

@param viewController vieController to embedd as rootViewController
*/

HPConfiguration.shared().embedd(inNavigationController: viewController)
```

<!--END_DOCUSAURUS_CODE_TABS-->

---

## Localization

HaptikLib provides the option to change the language of the SDK.

HaptikLib uses the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format for languages.

The list of supported languages can be accessed from `HPLanguages`.

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```objective-c
if ([HPLanguages containsObject:@"en"]) {
    //do your thing
}
```

<!--Swift-->

```swift
if HPLanguages.containsObject("en") {
    //do your thing
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

Current selected language can be obtained from `HaptikConfigs.currentHaptikLocale` which will return a [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
The default selected language will be English ("en").

You can change the current language of the SDK using the following method in `HaptikConfigs`

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```ObjC
[HaptikConfigs setHaptikLocale: @ "en"
  with: ^ (BOOL success) {

    if (success) {
      //language is successfully set
    } else {
      //revert back
    }
  }
];
```

<!--Swift-->

```swift
HaptikConfigs.setHaptikLocale("en", with: { success in

    if success {
        //language is successfully set
    } else {
        //revert back
    }
})
```

<!--END_DOCUSAURUS_CODE_TABS-->

> Note: Changing Language triggers a network call, meaning the callback won't necessarily be called immediately. Plan your language change calls accordingly.

Also users can change the language from conversation screen. So make sure you check `HaptikConfigs.currentHaptikLocale`