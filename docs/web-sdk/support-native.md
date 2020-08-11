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

The lifecycle of a WebPage in WebView is coupled to the Android app lifecycle. Therefore for proper user experience, we need to notify Haptik SDK when the app goes in background. Below is the code snippet to do so.

```kotlin
override fun onStop() {
    super.onStop()
    webview.loadUrl("javascript:window.HaptikSDK.pause();")
}
```

## iOS

iOS doesn't need any extra permissions in order to operate. Just open the html file where you've configured the SDK inside the app.

Just like Android, in iOS as well the lifecycle of a WebPage is coupled to the iOS app lifecycle. And we need to notify Haptik SDK when the app goes in background. To do this add inactive state observer in your view controller which consist WkWebView and add following code :

​
```Swift

    override func viewDidLoad() {
        super.viewDidLoad()

            // Register background notification
            NotificationCenter.default.addObserver(
                forName: UIApplication.willResignActiveNotification,
                object: nil,
                queue: nil,
                using: { note in
                    // App moved to background!
                    self.webView?.evaluateJavaScript("window.HaptikSDK.pause();", completionHandler: nil)
            })
    }
    
    deinit {
        // Remove Notification observer
        NotificationCenter.default.removeObserver(self, name: UIApplication.willResignActiveNotification, object: nil)
    }
```