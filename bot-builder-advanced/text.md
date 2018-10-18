## HSL Text Element

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
				"message": "Show another quote{task}",
				"gogo_message": "",
			},
		}, {
			"actionable_text": "Thanks",
			"is_default": 0,
			"type": "TEXT_ONLY",
			"payload": {
				"message": "Thanks",
				"gogo_message": ""
			}
		}, {
			"actionable_text": "❌ Stop updates",
			"is_default": 0,
			"type": "TEXT_ONLY",
			"payload": {
				"message": "❌ Stop updates{reminder_list: 170, user_id: 202308, task_name: Motivational Quote, offset: 0, api_name: exotel }{task}",
				"gogo_message": ""
			}
		}],
	},
}
```

#### Sample Output
![hsl_sample_text](hsl_sample_text.png)


#### Text Element
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

#### Quick Replies 
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
         <td>actionable_text</td>
         <td>The text that will appear in the quick reply</td>
         <th>Yes</th>
      </tr>
      <tr>
         <td>is_default</td>
         <td>1 or 0, if 1, click on the message, will trigger this quick reply</td>
         <th>Yes</th>
      </tr>
      <tr>
         <td>type</td>
         <td>Quick replies currently are supported for "TEXT_ONLY"</td>
         <th>Yes</th>
      </tr>
      <tr>
         <td>payload.message</td>
         <td>message as shown to the user</td>
         <th>Yes</th>
      </tr>
      <tr>
         <td>payload.gogo_message</td>
         <td>message sent to our backend, if null payload.message is sent</td>
         <th>No</th>
      </tr>
   </tbody>
</table>



