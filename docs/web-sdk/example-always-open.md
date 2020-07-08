---
title: "Example: Always Open"
id: example-always-open
---

In some cases the SDK needs to embedded in standalone pages where the SDK should be open by default and is not allowed to be minimized.

Within initSettings we need to add the following setting. This will initialise the SDK in `fsm` mode.

```
  'mode': 'fsm'
```

## Full Example:
```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Haptik JS SDK Always Open Demo</title>
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
    'business-id': '<provided by haptik>',
    'client-id': '<provided by haptik>',
    'base-url': '<provided by haptik>',
    'mode': 'fsm'
  };
  </script>
  <script type="text/javascript" charset="UTF-8" src="https://toolassets.haptikapi.com/platform/javascript-xdk/production/loader.js"></script>
  </html>
```
