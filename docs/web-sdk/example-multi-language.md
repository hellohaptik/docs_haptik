---
title: "Example: Multi Language"
id: example-multi-language
---

SDK also supports multi-language bots where the user can seamlessly switch between multiple languages.

The default language first loaded can be changed by adding the `default-language` parameter
```
  'default-language': 'hi'
```

## Full Example:
```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Haptik JS SDK Multi Language Demo</title>
    <meta charset="UTF-8">
    <meta content="width=device-width; initial-scale=1.0;" name="viewport">
  </head>
  
  <body>
    <div style="width: 100%; padding-top: 100px;">
      <div style="max-width: 7000px; margin: 0 auto; padding: 0 40px; text-align: left;">
        <h4>Haptik JS SDK</h4>
      </div>
    </div>
  </body>
  
  <script type="text/javascript">
  window.haptikInitSettings = {
    'client-id': '<provided by haptik>',
    'base-url': '<provided by haptik>',
    'default-language': 'hi'
  };
  </script>
  <script type="text/javascript" charset="UTF-8" src="https://toolassets.haptikapi.com/platform/javascript-xdk/production/loader.js"></script>
  </html>
```

> SDK Method `HaptikSDK.changeLanguage()` can be used to change the language of the bot programmatically as well.
> 
