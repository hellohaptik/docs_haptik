---
title: "Native Support"
id: support-native
---

The SDK supports integrations with Native platforms such as iOS and Android. This is done with the help of a Web View.

## Android

To ensure that the SDK loads up inside an Android WebView. Make sure the following permissions are present in the Manifest

    <uses-permission android:name="android.permission.INTERNET"/>

The following settings on the WebView are also necessary to ensure the SDK has the necessary permissions.

    webSettings.setJavaScriptEnabled(true);
    webSettings.setDomStorageEnabled(true);
    webSettings.setLoadWithOverviewMode(true);
    webSettings.setLoadsImagesAutomatically(true);
    webSettings.setAppCacheEnabled(true);

The lifecycle of a WebPage in a WebView is coupled to the Android app lifecycle. Therefore for proper user experience, we need to notify Haptik SDK when the app goes in background. Below is the code snippet to do so.

```kotlin
    override fun onStop() {
        super.onStop()
        webview.loadUrl("javascript:window.HaptikSDK.pause();")
    }
```

## iOS

iOS doesn't need any extra permissions in order to operate. Just open the html file where you've configured the SDK inside the app.
