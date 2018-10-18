## HSL Text Element

<table border="1" class="docutils">
   <thead>
      <tr>
         <th>Property Name</th>
         <th>Description</th>
         <th>Required</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>text</td>
         <td>The message data</td>
         <th>Yes</th>
      </tr>
      <tr>
         <td>type</td>
         <td>Should be "TEXT"</td>
         <th>Yes</th>
      </tr>
      <tr>
         <td>data</td>
         <td>object that contains a list of quick replies, which can be empty</td>
         <th>Yes</th>
      </tr>
   </tbody>
</table>


#### Sample Json for simple text element
```json
{
	"text": "simple text message",
	"type": "TEXT",
	"data": {
		"quick_replies": []
	}
}
```
#### Sample Output
![hsl_simple_text](hsl_simple_text.png)


#### Sample Json for text element with quick replies
```json
{
	"text": "Hi ! There, this is a quick text message with some quick replies.",
	"type": "TEXT",
	"data": {
		"quick_replies": [{
			"actionable_text": "Show another quote",
			"is_default": 0,
			"type": "TEXT_ONLY",
			"payload": {
				"link": "",
				"message": "Show another quote{task}",
				"gogo_message": "",
				"test4": "4"
			},
		}, {
			"actionable_text": "Thanks",
			"is_default": 0,
			"type": "TEXT_ONLY",
			"payload": {
				"link": "",
				"message": "Thanks",
				"gogo_message": ""
			}
		}, {
			"actionable_text": "❌ Stop updates",
			"is_default": 0,
			"type": "TEXT_ONLY",
			"payload": {
				"link": "",
				"message": "❌ Stop updates{reminder_list: 170, user_id: 202308, task_name: Motivational Quote, offset: 0, api_name: exotel }{task}",
				"gogo_message": ""
			}
		}],
	},
}
```

#### Sample Output
![hsl_sample_text](hsl_sample_text.png)
