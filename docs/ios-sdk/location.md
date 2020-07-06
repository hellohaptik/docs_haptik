---
id: location
title: Location Support
---

## Overview

For some applications, a conversation might need input around geo-locations. Haptik iOS SDK also supports location and maps as a chat component to interact with the bot/agent, if the appropriate permissions are given by the user.

---

## Integration

Add the location spec along with `HaptikLib` in your podfile to make use of location capabilities.

```ruby
use_frameworks!

target YourTargetName do
  pod 'HaptikLib'
  pod 'HaptikLib/Location'
end
```

---

## Required Permissions

Make sure you add the following permission attributes in your `Info.plist` file:

**_Privacy - Location When In Use Usage Description_** to enable location module to process.

```XML
<key>NSLocationWhenInUseUsageDescription</key>
<string>To provide location based services like cab booking, nearby landmarks and others</string>
```

---

## Configuration

After adding the required `Location` spec, you don't need any additional setup. The conversation screen will start showing up location and map whenever the bot/agent asks for it.
