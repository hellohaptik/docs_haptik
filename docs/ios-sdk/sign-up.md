---
id: sign-up
title: Authentication
---

## Basic Sign Up

During the signup process (involves a network request), you have to collect the user's information and pass it in the signup function. The public class `HPSignUpObject` is to be used for *collecting the metadata* of the user as illustrated below:

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```objective-c
// Objective-C

// Build Sign Up Object
HPSignUpObject *signupObj = [HPSignUpObject buildWithAuthType:@"basic"
                                                          data:^(HPSignUpBuilder * _Nonnull builder) {

    builder.userFullName = @"John Appleseed";
    builder.userPhoneNumber = @"9870000000";
    builder.userEmail = @"john@apple.com";

    // You can set more properties on the builder according to the requirements
 }];

// Signup with SDK
[[Haptik sharedSDK] signUpWith:signupObj
                     completion:^(BOOL success, __kindof UIViewController * _Nullable viewController, NSError * _Nullable error) {

     if (success) {

        [[Haptik sharedSDK] setDeviceToken:deviceToken];

        // If via name is provided in the signupObj then after signup,
        // the SDK will give back an instance of the haptik's conversation controller that you can directly push the user too.
        // If `via_name` is incorrect or not passed this will be nil.
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

```swift
// Swift

// Build Sign Up Object
let signupObj = HPSignUpObject.build(withAuthType: "basic") { (builder) in

      builder.userFullName = "John Appleseed";
      builder.userPhoneNumber = "9870000000";
      builder.userEmail = "john@apple.com";

      // You can set more properties on the builder according to the requirements
}

// Signup with SDK
Haptik.sharedSDK().signUp(with: signupObject) { [unowned self] (success, initialVC, error) in

                if success {

                    Haptik.sharedSDK().setDeviceToken(deviceToken)

                    // If via name is provided in the signupObj then after signup,
                    // the SDK will give back an instance of the haptik's conversation controller that you can directly push the user too.
                    // If `via_name` is incorrect or not passed this will be nil.
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

The **AUTH_TYPE** parameter can be different from `basic` to your product need. This can be discussed while doing the integration.

The **BASIC** authType parameter is required while signing up.

_**Optional Parameter**_: 

- `userFullName` : Pass the user's full name as a String

- `userEmail` : Pass the user's E-Mail as a String

- `userPhoneNumber` : Pass the user's phone number as a String

- `businessvianame` : Channel via name as a String

  Although `HPSignUpBuilder` parameters are optional, but it is **recommended** to provide user details as it does help in customizing user experience.

<a name="third-party-custom-sign-up"></a>

## Custom Sign Up

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```objective-c
// Objective-C

// Build Sign Up Object
HPSignUpObject *signupObj = [HPSignUpObject buildWithAuthType:@"Your_Auth_ID"
                                                          data:^(HPSignUpBuilder * _Nonnull builder) {

    builder.userFullName = @"John Appleseed";
    builder.userPhoneNumber = @"9870000000";
    builder.userEmail = @"john@apple.com";
    builder.authID = @"YOUR AUTH ID HERE";
    builder.authToken = @"YOUR AUTH TOKEN HERE";
                                                            
    // You can set more properties on the builder according to the requirements
    builder.customData = @{@"KEY1" : @"VALUE1", @"KEY2" : @"VALUE2"}

 }];

// Signup with SDK
[[Haptik sharedSDK] signUpWith:signupObj
                     completion:^(BOOL success, __kindof UIViewController * _Nullable viewController, NSError * _Nullable error) {

     if (success) {

        [[Haptik sharedSDK] setDeviceToken:deviceToken];

        // If via name is provided in the signupObj then after signup,
        // the SDK will give back an instance of the haptik's conversation controller that you can directly push the user too.
        // If `via_name` is incorrect or not passed this will be nil.
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

```swift
// Swift

// Build Sign Up Object
let signupObj = HPSignUpObject.build(withAuthType: "YOUR_AUTH_ID") { (builder) in

      builder.userFullName = "John Appleseed"
      builder.userPhoneNumber = "9870000000"
      builder.userEmail = "john@apple.com"
      builder.authID = @"YOUR AUTH ID HERE"
      builder.authToken = @"YOUR AUTH TOKEN HERE"

      // You can set more properties on the builder according to the requirements
      builder.customData = ["KEY1" : "VALUE1", "KEY2" : "VALUE2"]

}

// Signup with SDK
Haptik.sharedSDK().signUp(with: signupObject) { [unowned self] (success, initialVC, error) in

                if success {

                    Haptik.sharedSDK().setDeviceToken(deviceToken)

                    // If via name is provided in the signupObj then after signup,
                    // the SDK will give back an instance of the haptik's conversation controller that you can directly push the user too.
                    // If `via_name` is incorrect or not passed this will be nil.
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

For the custom signup **AUTH_TYPE** parameter can be different as your product need. This can be discussed while doing the integration.

**Mandatory Parameters**

For custom sign up <u>**authID**</u> is a mandatory field.

<a name="optional-parameters-in-sign-up"></a>

**Optional Parameters**

- `userFullName` : Pass the user's full name as a String

- `userEmail` : Pass the user's E-Mail as a String

- `userPhoneNumber` : Pass the user's phone number as a String

- `businessvianame` : Pass Channel via name as a String

- `authToken` : Pass authentication token as a String

- `customData` : Pass any additional data to be sent during sign up as collection of key-value pairs

  Although `HPSignUpBuilder` parameters are optional, but it is **recommended** to provide user details as it does help in customizing user experience.