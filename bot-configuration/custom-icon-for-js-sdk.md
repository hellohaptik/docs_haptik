## Haptik JS SDK Custom Icon Demo

The below file, is a running example of hosting our js-sdk on your website with a custom icon instead of
the default haptik icon.


```json
<!DOCTYPE html>
<html>

<head>
  <title>Haptik JS SDK Custom Icon Demo</title>
  <meta charset="UTF-8">
  <meta content="width=device-width; initial-scale=1.0;" name="viewport">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
  <link rel="stylesheet" href="https://cdn.rawgit.com/necolas/normalize.css/master/normalize.css">
  <link rel="stylesheet" href="https://cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css">
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
        2) Add you icon, in this case we have directly used an img tag <br/>
        3) On click of the icon, create a function that simply calls 'HaptikSDK.expandWidget()' <br/>
        <img src="https://s3.ap-south-1.amazonaws.com/tools-cdn/js-sdk/images/custom-chat-icon.png" onClick="openChat()" class="custom-icon">
    </div>
  </div>
</body>

<script type="text/javascript">
var haptikInitSettings = {
  'business-id': '<provided by haptik>',
  'client-id': '<provided by haptik>',
  'api-key': '<provided by haptik>',
  'base-url': 'https://staging.hellohaptik.com',
  'signup-type': 'guest',
  'custom-button': true
};
</script>
<script type="text/javascript" charset="UTF-8" src="https://toolassets.haptikapi.com/js-sdk/js/haptik-sdk-loader.js"></script>
<script>
function openChat() {
  HaptikSDK.expandWidget()
}
</script>
</html>
```