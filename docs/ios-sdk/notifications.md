---
id: notifications
title: Push Notifications
---

Push notifications can considerably enhance your customer experience. Haptik can also be configured to receive and handle _Push Notifications_ for the conversation.

## Checklist

1. Make sure you have valid APNS (.p8) certificate shared with Haptik
2. Make sure your app supports push notifications under Signing & capablities 

> For detailed instructions on how to request an authentication token signing key, see [Establishing a Token-Based Connection to APNs.](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/establishing_a_token-based_connection_to_apns)

## Sync Device Token

You just need to pass the **Device Token** to Haptik for it to trigger push notifications from the backend whenever required. One point where you need to set the `deviceToken` is when the application gets the token after requesting. See the examples below:

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {

    ...

    [[Haptik sharedSDK] setDeviceToken:deviceToken];

    // or if you wish to set it as a string directly, use:

    [[Haptik sharedSDK] setDeviceTokenAsString:deviceTokenString];
}
```

<!--Swift-->

```Swift
// Swift
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {

        ...

        Haptik.sharedSDK().setDeviceToken(deviceToken)

        // or if you wish to set it as a string directly, use:

        Haptik.sharedSDK().setDeviceTokenAsString(deviceTokenString)
    }
```

<!--END_DOCUSAURUS_CODE_TABS-->

---

## Handle Notification Tap

The Haptik SDK is capable of handling it's notifications also. It's also possible to determine whether notification payload is Haptik-specific or not. If yes then let haptik handle the notification.

For Haptik to handle it's own notifications, you have to pass the required **notification response** that you get in the **notifications payload** and the instance of the `viewController` from where the notifications should be handled. It will take the user directly to the conversation screen. See example below:

##### For iOS 9.x and below iOS 10.x

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C
 - (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo {

 ...

 BOOL canBeHandledByHaptik = [[Haptik sharedSDK] canHandleNotificationWithUserInfo:userInfo];

 if (canBeHandledByHaptik) {

    NSLog(@"do housekeeping");
    [[Haptik sharedSDK] didReceiveHaptikRemoteNotification:userInfo
                                                controller:((UINavigationController *)self.window.rootViewController).visibleViewController];
    }
 }
```

<!--Swift-->

```Swift
// Swift
func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any]) {

        // Check if the notification received belongs to haptik and take action accordingly

        let isHaptikNotification = Haptik.sharedSDK().canHandleNotification(userInfo: userInfo as! [String : Any])

        if isHaptikNotification {

            print("Do Housekeeping")
            if let rootVC = self.window?.rootViewController {
                if let controller = rootVC as? UINavigationController {

                    // You need to pass an instance of a viewController from which the user will be taken to the conversationViewController (where the user will be conversing)
                    // on the tap of the Notification
                    Haptik.sharedSDK().didReceiveRemoteNotification(userInfo as! [String : Any], controller: controller.visibleViewController!)
                }
            }
        }
    }
```

<!--END_DOCUSAURUS_CODE_TABS-->

##### For iOS 10.x and above

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C
- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response
          withCompletionHandler:(void(^)(void))completionHandler {

     ...

     BOOL canBeHandledByHaptik = [[Haptik sharedSDK] canHandleNotificationWithUserInfo:userInfo];

     if (canBeHandledByHaptik) {

        NSLog(@"do housekeeping");
        [[Haptik sharedSDK] didReceiveHaptikNotificationResponse:response
                                                      controller:((UINavigationController *)self.window.rootViewController).visibleViewController];
        }
 }
```

<!--Swift-->

```Swift
// Swift
@available(iOS 10.0, *)
    func userNotificationCenter(_ center: UNUserNotificationCenter,
                                didReceive response: UNNotificationResponse,
                                withCompletionHandler completionHandler: @escaping () -> Void) {

        // Check if the notification received belongs to haptik and take action accordingly
        let isHaptikNotification = Haptik.sharedSDK().canHandleNotification(with: response)

        if isHaptikNotification {

            print("Do Housekeeping")

            if let rootVC = self.window?.rootViewController {
                if let controller = rootVC as? UINavigationController {

                    // You need to pass an instance of a viewController from which the user will be taken to the conversationViewController (where the user will be conversing)
                    // on the tap of the Notification
                    Haptik.sharedSDK().didReceive(response, controller: controller.visibleViewController!)
                }
            }
        }
    }
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Advanced Handling

If you want to take control on taking the user to the conversation by yourself, you can do that too. After checking if the notification belongs to Haptik, you just have to **tell the SDK to prepare for the notification** so that it internally gets ready for handling the respective changes and will **return you the unique `'businessvianame` of the conversation** that the notification belongs too.

After that you can just make another instance of the Haptik's conversation controller and take the user to it like you do.

Check example implementation below:

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C

- (void)userNotificationCenter:(UNUserNotificationCenter *)center
didReceiveNotificationResponse:(UNNotificationResponse *)response
         withCompletionHandler:(void(^)(void))completionHandler {

    if ([[Haptik sharedSDK] canHandleNotificationWithResponse:response]) {

        UIViewController *visibleVC = ((UINavigationController *)self.window.rootViewController).visibleViewController;
        NSString *viaName = [[Haptik sharedSDK] prepareHaptikNotificationForResponse:response];

        [[Haptik sharedSDK] launchChannelWith:viaName launchMessage:@"" hideLaunchMessage:NO controller:visibleVC];
    }

    completionHandler();
}
```

<!--Swift-->

```Swift
// Swift

@available(iOS 10.0, *)
    func userNotificationCenter(_ center: UNUserNotificationCenter,
                                didReceive response: UNNotificationResponse,
                                withCompletionHandler completionHandler: @escaping () -> Void) {

        // Check if the notification received belongs to haptik and take action accordingly
        let isHaptikNotification = Haptik.sharedSDK().canHandleNotification(with: response)

        if isHaptikNotification {

            print("Do Housekeeping")

            if let rootVC = self.window?.rootViewController {
                if let controller = rootVC as? UINavigationController {

                    let viaName = Haptik.sharedSDK().prepareNotification(for: response)
                    if let viaName = viaName {
                        Haptik.sharedSDK().launchChannel(with: viaName, launchMessage: nil, hideLaunchMessage: false, controller: controller.visibleViewController!)
                    }
                }
            }
        }
    }
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Class Validations

You can also check if the `visibleViewController` is of type Haptik's Conversation Controller. You may need to check it when you don't want to push another haptik's conversation controller over an existing conversation controller while handling notifications yourself.

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C

return ([visibleViewController isKindOfClass:HPConversationClass()]);

```

<!--Swift-->

```Swift
// Swift

return visibleViewController.isKind(of: HPConversationClass())
```

<!--END_DOCUSAURUS_CODE_TABS-->

You can additionally also check if a conversation controller belongs to a specific 'businessvianame' or not. Check example below:

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C

if (HPCheckConversationForViaName(viaName, conversationController)) {
    // YES
}

```

<!--Swift-->

```Swift
// Swift

if HPCheckConversationForViaName(viaName, conversationController) {
    // true
}
```

<!--END_DOCUSAURUS_CODE_TABS-->