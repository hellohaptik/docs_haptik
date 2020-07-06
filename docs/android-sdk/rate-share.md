---
title: Rate & Share
---


## 1. Rate Functionality

Users have an option to Rate your app on playstore.

To enable this you need add your app playstore URL as string resource exactly named as,

```xml
<string name="haptik_playstore_link">[Your app Link]</string>
```

## 2. Share Functionality

SDK provides inbuilt share functionality where user share the app with others via social media apps or any other medium through a custom BottomSheet Layout.

When user shares something, a custom content message gets shared.

Client can override this message with their own custom content along with their deeplink URL

To override the default message, add two string resources exactly named as,

```xml
<string name="haptik_share_text">[Your custom Message>]</string>
<string name="haptik_share_link">[Your Share Link]</string>
```
