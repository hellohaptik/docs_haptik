---
title: "Example: Voice"
id: example-voice
---

The bot-type app setting needs to be set to `VOICE` in order for the XDK to load the Voice experience

## Full Example:
```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Haptik JS XDK Custom Icon Demo</title>
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
        <h4>Haptik JS XDK</h4>
      </div>
    </div>
  </body>
  
  <script type="text/javascript">
  window.haptikInitSettings = {
    'business-id': '<provided by haptik>',
    'client-id': '<provided by haptik>',
    'base-url': '<provided by haptik>',
    'bot-type': 'VOICE',
  };
  </script>
  <script type="text/javascript" charset="UTF-8" src="https://toolassets.haptikapi.com/platform/javascript-xdk/production/loader.js"></script>
  </html>
```

> Additional properties such as voice-type, voice-service to further configure the Speech-to-Text and Text-to-Speech services. Check the configuration section for more information
