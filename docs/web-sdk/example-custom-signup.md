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
      var query_params = new URLSearchParams(window.location.search);
      var haptikInitSettings = {
        'business-id': query_params.get('business_id'),
    	  'client-id': query_params.get('client_id'),
    	  'api-key': query_params.get('api_key'),
    	  'base-url': query_params.get('base_url'),
    	  'signup-type': query_params.get('signup_type'),
	      'debug': query_params.get('debug')
      };
    </script>
    <script type="text/javascript" charset="UTF-8" src="https://toolassets.haptikapi.com/js-sdk/js/haptik-sdk-loader.js"></script>
    <script>
      //var query_params = new URLSearchParams(window.location.search);
      console.log(query_params.get('user_type') || 'active')
      keys = query_params.keys()
	custom_data = {}
      for (const key of keys) {
	if (key.slice(0, 3) == "cd_")
		custom_data[key.slice(3)] = query_params.get(key);
	};

      HaptikSDK.signup(
        {
          username: 'Firstname Lastname',
          auth_id: '9955511100',
          auth_code: 'XXXXXXXXXXXX',
          mobile_no: '8828407051',
          email: 'demo@gmail.com',
          custom_data: { demo: 'demo' },
        },
        function(status, error, data) {
          if (status) {
            console.log('SUCCESS', data);
          } else {
            console.log('ERROR', error);
          }
        }
      );
    </script>

  </html>
```
