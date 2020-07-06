---
title: "Example: Custom Signup"
id: example-custom-signup
---

A custom signup example. Read the full documentation in the custom signup section of the documentation.

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
      </div>
    </div>
  </body>
  
  <script type="text/javascript">
  window.haptikInitSettings = {
    'business-id': '<provided by haptik>',
    'client-id': '<provided by haptik>',
    'base-url': '<provided by haptik>',
    'signup-type': 'my-custom-signup-type',
  };
  </script>
  <script type="text/javascript" charset="UTF-8" src="https://toolassets.haptikapi.com/platform/javascript-xdk/production/loader.js"></script>
  <script>
  document.addEventListener('haptik_sdk', function() {
    HaptikSDK.signup({
      username: 'Firstname Lastname',
      auth_id: '9955511100',
      auth_code: 'XXXXXXXXXXXX',
      mobile_no: '8828407051',
      email: 'demo@gmail.com',
      custom_data: { demo: 'demo' },
    }, function(success) {
      console.log('SIGNUP REQUEST SUCCEEDED:', success);
    });
  });
  </script>
  </html>
```
