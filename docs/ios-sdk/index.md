---
id: index
title: Quick Start
---

## Prerequisites

To Integrate Haptik iOS SDK, you must obtain following credentials to get started

- **Client ID:** Unique Haptik identification number associated to your account
- **Business viaName (Channel name):** Unique identification topic name of the conversation
- **Auth Type:** authentication type to be used for user registration
- **Base URL:** Link pointing to specific server environment (Different for _Staging_ and _Production_)

With the Haptik SDK for iOS, you can build apps that target native 64-bit devices running iOS 9.0 and later. Developing an application with the Haptik SDK requires the latest version of Xcode. The SDK works with the iPhone device family and supports the **Portrait** device orientation.

---

## Getting Started

The following document contains chronological steps and information regarding the Haptik iOS SDK Integration.

---

## 1. Install Git LFS

For the SDK to compile properly, install [Git LFS](https://git-lfs.github.com/) on your machine before installing the pod and moving further.

## 2. Install Haptik SDK

HaptikLib is available via CocoaPods:

> CocoaPods is a dependency manager and this is by far the easiest and quickest way to get started with Haptik iOS SDK! (If you don't have pods installed yet you can check [CocoaPods installation](https://guides.cocoapods.org/using/getting-started.html "Cocoapods Installation") section for installation guide).

###### Always use the latest release

```ruby
use_frameworks!

target YourTargetName do
  pod 'HaptikLib'
end
```

###### Pinning it to a specific version (e.g. 2.6.0)

```ruby
use_frameworks!

target YourTargetName do
  pod 'HaptikLib', '2.6.0'
end
```

---

## 3. Setup Credentials & Environment

The SDK takes in any types of credentials through your `info.plist` file. You define a **_Dictionary_** object in your `info.plist` file with the name **_HaptikLib_** and add all the required credentials there. These credentials are required else the SDK will give an assert.

After registering with Haptik as a partner, you'll be given the following credentials:

- _**Client ID**_
- _**Base URL**_ (Different for _Staging_ and _Production_)

You also have to set the runEnvironment accoring to the baseURL you are specifying. Set **0** if adding the _**Production URL**_ else keep it as **1** (_Staging_). On opening app's `Info.plist` in _Source Code_ format you can add the required keys as illustrated below -

```XML
<key>HaptikLib</key>
<dict>
  <key>clientID</key>
  <string>Insert_ClientId_Here</string>
  <key>baseUrl</key>
  <string>Insert_BaseUrl_Here</string>
  <key>runEnvironment</key>
  <string>Set_Appropriate_Env</string>
</dict>
```

After adding the credentials, your `info.plist` should look like this:

![Credentials plist screenshot](assets/Main_Credentials_plist.png)

> While releasing the application on the App Store, only the **_Production URL_** (provided by Haptik) should be used and the **_runEnvironment_** should be **0**.

---

## 4. Permissions

HaptikLib requires some basic permissions which almost every application takes to function properly. You can see all the required permissions [here](permissions.md). Make sure to add them else iOS will assert the application when the SDK will try to present the prompt if the respective permission is not granted by the user.

---

## 5. Taking User to Conversation

For you to take the user to the _**conversation screen**_ where the user _interacts/chats_ with the _bot/agent_, you first need to signup the user into haptik first. Haptik SDK provides methods to check if any user is currently signed in or not.

_If the user is signed in you can take the user directly to the haptik conversation, else you'll have to signup the user first and then take him to the conversation screen_.

See examples below:

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
   // Objective-C

   // You can check this from where ever you are taking the user to Haptik's conversation screen
   if ([Haptik sharedSDK].isUserSignedUp) {

      // Take the user to the haptik conversation screen using the unique 'businessvianame' provided to you. Check the conversation flow below. (Existing user flow)
   }
   else {

      // First signup the user into haptik, post that take the user to the haptik conversation screen using the unique `businessvianame` provided to you. Check the signup flow below. (New user flow)
   }
```

<!--Swift-->

```Swift
   // Swift

   // You can check this from where ever you are taking the user to Haptik's conversation screen
   if Haptik.sharedSDK().isUserSignedUp() {

      // Take the user to the haptik conversation screen using the unique 'businessvianame' provided to you. (Existing user flow)
   }
   else {

      // First signup the user into haptik, post that take the user to the haptik conversation screen using the unique 'businessvianame' provided to you. Check the signup flow below. (New user flow)
   }
```

<!--END_DOCUSAURUS_CODE_TABS-->

Each conversation in Haptik is identified by a unique string called the `businessvianame`. You'll be provided with yours when you register with Haptik as a partner.

### 1. Signup

During the signup process (involves a network request), you have to collect the user's information and pass it in the signup function. The public class `HPSignUpObject` is to be used for _collecting the metadata_ of the user as illustrated below:

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C

HPSignUpObject *signupObj = [HPSignUpObject buildWithAuthType:@"AUTH_TYPE_HERE"
                                                          data:^(HPSignUpBuilder * _Nonnull builder) {

    builder.userFullName = @"John Appleseed";
    builder.userPhoneNumber = @"9870000000";
    builder.userEmail = @"john@apple.com";

    // You can set more properties on the builder according to the requirements
 }];
```

<!--Swift-->

```Swift
// Swift

let signupObj = HPSignUpObject.build(withAuthType: "AUTH_TYPE_HERE") { (builder) in

      builder.userFullName = "John Appleseed";
      builder.userPhoneNumber = "9870000000";
      builder.userEmail = "john@apple.com";

      // You can set more properties on the builder according to the requirements
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

You can signup the user using the `signupObj` (containing the user information). See examples below:

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C

[[Haptik sharedSDK] signUpWith:signupObj
                     completion:^(BOOL success, __kindof UIViewController * _Nullable viewController, NSError * _Nullable error) {

     if (success) {

        [[Haptik sharedSDK] setDeviceToken:deviceToken];

        // If 'businessvianame' is provided in the signupObj then after signup,
        // the SDK will give back an instance of the haptik's conversation controller that you can directly push the user too.
        // If 'businessvianame' is incorrect or not passed this will be nil.
        if (viewController) {
           [self.navigationController pushViewController:viewController animated:YES];
        }
        else {
           // Handle error here
        }
     }
     else {
         // Handle error here
     }
 }];
```

<!--Swift-->

```Swift
// Swift

Haptik.sharedSDK().signUp(with: signupObject) { [unowned self] (success, initialVC, error) in

                if success {

                    Haptik.sharedSDK().setDeviceToken(deviceToken)

                    // If 'BusinessviaName' is provided in the signupObj then after signup,
                    // the SDK will give back an instance of the haptik's conversation controller that you can directly push the user too.
                    // If 'BusinessviaName' is incorrect or not passed this will be nil.
                    if let initialVC = initialVC {
                        self.navigationController?.pushViewController(initialVC, animated: true)
                    }
                    else {
                        // Handle Error here
                    }
                }
                else {
                    // Handle Error here
                }
            }
```

<!--END_DOCUSAURUS_CODE_TABS-->

If you want to log out the haptik user when you log out of your application. Check the **Signout** documentation in [features](features.md#signout).

> Note: All the completions are returned on the `mainQueue`.

### 2. Conversation

If a user is already signed-up in Haptik SDK such a user should be directly presented the conversation screen. See the examples below:

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C

if ([[Haptik sharedSDK] isUserSignedUp]) {

  [[Haptik sharedSDK] launchChannelWith:@"mychannelinhaptik"
                             launchMessage:@"Hey!"
                         hideLaunchMessage:NO
                                controller:self];
}
else {
  // Continue with the SignUp flow here
}
```

<!--Swift-->

```Swift
// Swift

if Haptik.sharedSDK().isUserSignedUp() {

   Haptik.sharedSDK().launchChannel(with: "mychannelinhaptik",
                           launchMessage: "Hey!",
                       hideLaunchMessage: false,
                              controller: self)
}
else {
   // Continue with the SignUp flow here
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

Checkout more details on taking the user to conversation [here](conversations.md).

### 3. Sign Out

To Signout the current user from Haptik, use the following method on `[Haptik sharedSDK]`:

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C

/**
 @method
 Signouts the current user from Haptik.

 @abstract
 Use this method to signout the user from Haptik. All of the user's data and chat history will be deleted from the SDK.
 The Haptik SDK maintains all the user data and chat data until you call signout.
 You'll probably need to call it whenever you signout the user from your application.
 It returns the completion on the mainQueue.

 @param completion  Completion Handler which will have the success information and is returned on the mainQueue.
 */

 [[Haptik sharedSDK] signoutFromHaptik:^(BOOL success, NSError * _Nullable error) {

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
 Signouts the current user from Haptik.

 @abstract
 Use this method to signout the user from Haptik. All of the user's data and chat history will be deleted from the SDK.
 The Haptik SDK maintains all the user data and chat data until you call signout.
 You'll probably need to call it whenever you signout the user from your application.
 It returns the completion on the mainQueue.

 @param completion  Completion Handler which will have the success information and is returned on the mainQueue.
 */

Haptik.sharedSDK().signout { (success, error) in

    if success {

    }
    else {

    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

> **Note**: You have to set the device token again after the SignOut.

---

> We try to release new updates frequently. So make sure you always go live with the latest version of the SDK. You can see all the releases tagged [here](https://github.com/hellohaptik/HaptikLib-iOS/releases).