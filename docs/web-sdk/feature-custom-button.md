---
title: "Custom Button"
id: feature-custom-button
---

You can use a custom chat button instead of the default one that comes with the SDK.

Within `haptikInitnitSettings` we need to add the following setting. This will initialise the SDK with the custom button.

```js
  window.haptikInitSettings = {
    .
    .
    .
    'custom-button': true,
    .
    .
  };

```

Since we are using a custom button we would need to programatically expand or condense the SDK on click of our custom button depending on the behaviour of our button.
The HaptikSDK provides us `HaptikSDK.show()` and `HaptikSDK.hide()` methods which we can use for opening or closing the SDK.

## Full Example:

```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Haptik JS SDK Custom Icon Demo</title>
    <meta charset="UTF-8">
    <meta content="width=device-width; initial-scale=1.0;" name="viewport">
    <style>
      .custom-icon {
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 35px;
        width: 150px;
        cursor: pointer;
      }
    </style>
  </head>
  
  <body>
    <div style="width: 100%; padding-top: 100px;">
      <div style="max-width: 7000px; margin: 0 auto; padding: 0 40px; text-align: left;">
        <h4>Haptik JS SDK</h4>
        <h6>Custom Icon example</h6> 
          Steps: <br/>
          1) While defining haptikInitSettings simply add 'custom-button': true <br/>
          2) Add your icon, in this case we have directly used an img tag <br/>
          3) After HaptikSDK is intialised, add a click listener on the icon and simply call 'HaptikSDK.show()' in it. Demonstrated in the script tag below. <br/>
          <img src="https://s3.ap-south-1.amazonaws.com/tools-cdn/js-sdk/images/custom-chat-icon.png" class="custom-icon">
      </div>
    </div>
  </body>
  
  <script type="text/javascript">
  window.haptikInitSettings = {
    'business-id': '<provided by haptik>',
    'client-id': '<provided by haptik>',
    'base-url': '<provided by haptik>',
    'custom-button': true
  };
  </script>
  <script type="text/javascript" charset="UTF-8" src="https://toolassets.haptikapi.com/platform/javascript-xdk/production/loader.js"></script>
  <script>
      document.addEventListener('haptik_sdk', function () {
          document.getElementsByClassName("custom-icon")[0].addEventListener("click", function () {
                  HaptikSDK.show();
          });
      });
  </script>
  </html>
```
