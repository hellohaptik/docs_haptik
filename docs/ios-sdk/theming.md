---
id: theming
title: Theming
---

## Overview

You can refer the Design Guidelines Document for HaptikLib to know what all theming it supports. To set the specific style guide HaptikLib gives another Public Class `HPThemeService` which also follows the builder pattern just like you did with `HPSignUpObject`.

You have to set the instance of `HPThemeService` to the `themeConfig` property of Haptik Class to see its effects.

Example:

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C

[HPConfiguration shared].themeConfig = [HPThemeService buildWithData:^(HPThemeServiceBuilder * _Nullable builder) {

        // Defaults
        builder.brandColor = [UIColor colorWithRed:(33/250.0) green:(150/255.0) blue:(243/255.0) alpha:1];
        builder.businessChatBackground = [UIColor colorWithRed:(240/255.0) green:(240/255.0) blue:(240/255.0) alpha:1];
        builder.businessChatText = [UIColor colorWithRed:(51/255.0) green:(51/255.0) blue:(51/255.0) alpha:1];
        builder.messageTimeStamp = [UIColor colorWithRed:(119/255.0) green:(119/255.0) blue:(119/255.0) alpha:1];

        builder.lightFont = @"HelveticaNeue-Light";
        builder.regularFont = @"HelveticaNeue";
        builder.mediumFont =  @"HelveticaNeue-Medium";
        builder.boldFont =  @"HelveticaNeue-Bold";
        builder.italicFont =  @"HelveticaNeue-Italic";
}];
```

<!--Swift-->

```Swift
// Swift

HPConfiguration.shared().themeConfig = HPThemeService.build { (builder) in

        // Defaults
        builder?.brandColor = UIColor(red: 33/255.0, green: 150/255.0, blue: 243/255.0, alpha: 1)
        builder?.businessChatBackground = UIColor(red: 240/255.0, green: 240/255.0, blue: 240/255.0, alpha: 1)
        builder?.businessChatText = UIColor(red: 51/255.0, green: 51/255.0, blue: 51/255.0, alpha: 1)
        builder?.messageTimeStamp = UIColor(red: 119/255.0, green: 119/255.0, blue: 119/255.0, alpha: 1)

        builder?.lightFont = "HelveticaNeue-Light"
        builder?.regularFont = "HelveticaNeue"
        builder?.mediumFont = "HelveticaNeue-Medium"
        builder?.boldFont = "HelveticaNeue-Bold"
        builder?.italicFont = "HelveticaNeue-Italic"
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

If you don't provide custom colors to HPThemeService then HaptikLib will use the default colors and fonts mentioned in the above code examples.

If you wish to use your own font, pass all the required fonts in the builder. If the font names passed in are incorrect or if the custom fonts to be used are not registered in the info.plist file then the SDK will assert.

> To find out where all the different properties are used like, where all `brandColor` is used, etc, please refer to the **Design Guidelines Document for HaptikLib**.

---

## NavigationBar Theme Configurations

HaptikLib does not control the Navigation Controller (hence the navigation bar), but the client does. HaptikLib only gives an instance of a `ViewController` (the conversation) that the client application pushes on their navigation stack.

By default on iOS, if you try to present a view controller (open it modally), it does not come up with a navigation bar. Check [this](https://stackoverflow.com/questions/9724194/presentviewcontroller-and-displaying-navigation-bar) link for more details on it. So if you try to present the conversation controller, by default the navigation bar will not show up and it's a necessary requirent for the Haptik SDK as we show some options there for the user to interact with.

In order to do that, rather than presenting that view controller modally present a navigation controller modally with its root view controller set as the view controller you want: which is the conversation controller. The Haptik SDK gives out a helper method to wrap any `UIViewController` inside a `UINavigationController`. Check out it's documentation [here](features.md#navigation-controller-wrapper).

To configure that navigation bar of that navigationController (modify `tint color` and `barTintColor` of navigation bar of the SDK View Controllers), use the following helper method:

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C

/**
 @abstract
 Allows SDK Clients to modify the appearance of navigation bar of HaptikLib's View Controllers

 @param barTintColor Color to be used for tinting the navigation bar. Defaults to default navigation bar tint of iOS
 @param barItemTintColor Used to set the tint color of the navigation items. This is used for the HaptikLib's viewControllers navigation items. Default color is [UIColor blackColor];
 @param translucent BOOL value to set the translucent property of navigation bar. Default is NO
 @param navigationController Instance of the navigationController for which the configurations are to be done

 @discussion
 The params barTintColor is nullable, i.e. you can pass nil if you want it to be set to default (don't want to set).
 */
[[HPConfiguration shared] configureNavigationBarWithTintColor:[UIColor redColor]
                                                 barTintColor:[UIColor whiteColor]
                                              makeTranslucent:YES
                                      forNavigationController:navController];
```

<!--Swift-->

```Swift
// Swift

/**
 @abstract
 Allows SDK Clients to modify the appearance of navigation bar of HaptikLib's View Controllers

 @param barTintColor Color to be used for tinting the navigation bar. Defaults to default navigation bar tint of iOS
 @param barItemTintColor Used to set the tint color of the navigation items. This is used for the HaptikLib's viewControllers navigation items. Default color is [UIColor blackColor];
 @param translucent BOOL value to set the translucent property of navigation bar. Default is NO
 @param navigationController Instance of the navigationController for which the configurations are to be done

 @discussion
 The params barTintColor is nullable, i.e. you can pass nil if you want it to be set to default (don't want to set).
 */
HPConfiguration.shared().configureNavigationBarTintColor(UIColor.red,
                                                        navigationItemTintColor: UIColor.white,
                                                        makeTranslucent: false,
                                                        for: UINavigationController())
```

<!--END_DOCUSAURUS_CODE_TABS-->

The params `tintColor` & `barTintColor` are `nullable`, i.e. you can pass `nil` for the respective param which you want to set to default (don't want to set).