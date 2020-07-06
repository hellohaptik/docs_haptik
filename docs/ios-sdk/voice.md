---
id: voice
title: Voice Support
---

## Overview

The Haptik iOS SDK also supports voice as a medium to interact/chat with the bot/agent. If the appropriate permissions are given by the user, the user can interact with the bot using natural speech.

---

## Integration

Add the speech spec along with `HaptikLib` in your podfile to make use of voice capabilities.

```ruby
use_frameworks!

target YourTargetName do
  pod 'HaptikLib'
  pod 'HaptikLib/Speech'
end
```

---

## Required Permissions

Make sure you add the following permission attributes in your `Info.plist` file:

**_Privacy - Microphone Usage Description_** to enable a user to record their speech to process..

```XML
<key>NSMicrophoneUsageDescription</key>
<string>Your microphone will be used to record your speech when you press the &quot;Mic&quot; button.</string>
```

**_Privacy - Speech Recognition Usage Description_** to determine the words spoken by the user.

```XML
<key>NSSpeechRecognitionUsageDescription</key>
<string>Speech recognition will be used to determine which words you speak into this device&apos;s microphone.</string>
```

---

## Configuration

After adding the required `Speech` spec, you just need set turn on a **BOOL** value for the haptik conversation to make use of voice capabilities. The conversation screen will start showing up a mic button within the composer bar.

See the example below:

<!--DOCUSAURUS_CODE_TABS-->
<!--Objective-C-->

```Objective-C
// Objective-C

[HPConfiguration shared].useVoice = YES;
```

<!--Swift-->

```Swift
// Swift

HPConfiguration.shared().useVoice = false;
```

<!--END_DOCUSAURUS_CODE_TABS-->

> - If the required pod subspec is not added then tapping on the mic button will fail silently.
> - If the required permissions are not added, then tapping on the mic button will result in application assertion.
