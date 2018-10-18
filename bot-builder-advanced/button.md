## HSL Button Element

#### Sample Json
```json
{
	"text": "Click on the below button to be redirected",
	"type": "BUTTON",
	"mic_auto_open": false,
	"data": {
		"items": [{
			"actionable_text": "Google",
			"location_required": false,
			"is_default": 0,
			"uri": "LINK",
			"type": "APP_ACTION",
			"payload": {
				"message": "message that will be sent as a chat message on behalf of the user",
				"url": "https://google.com",
				"gogo_message": ""
			}
		}]
	}
}
```

#### Sample Output
![hsl_sample_button](hsl_sample_button.png)
