## Using Conversation Data in the External Tools

#### Data 

- [ ] Format


We provide data in the below mentioned format.
```
{
    'bot': {
        'predicted_domain': '<bot name>',
    },
    'entities': {
        '<entity_name_1>': null,
        '<entity_name_2>': [{
            'detection': 'message',
            'language': 'en',
            'entity_value': 'what our system understands',
            'original_text': 'what the user actually said'
        }]
    },
    'user_message_language_script': 'en',
    'user_message_vocabulary_source_language': 'en'
}
```

**Note:**
* The entity names will be generated and provided to the clients based on which metrics the client wishes to collect.
* The bot will converse with the user and collect data, once an agent claims the chat, the collected data will be sent to the external tool. The agent will not receive any future updates in any entity value.
* If a particular entity was not collected by the bot before the agent claims the chat, the entity value will be null.

<table border="1" class="docutils">
   <thead>
      <tr>
         <th>Property Name</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>bot.predicted_domain</td>
         <td>The name of the bot that was handling the conversation with the user</td>
      </tr>
      <tr>
         <td>entities</td>
         <td>This block will hold meaningfull intents of the user</td>
      </tr>
      <tr>
         <td>entities.entity_name</td>
         <td>The entity names are unique to each of our bots</td>
      </tr>
      <tr>
         <td>entities.entity_name.detection</td>
         <td>How we detected the entity, its value will in most cases be 'message'</td>
      </tr>
      <tr>
         <td>entities.entity_name.language</td>
         <td>Launguage of the conversation</td>
      </tr>
      <tr>
         <td>entities.entity_name.entity_value</td>
         <td>What we derived</td>
      </tr>
      <tr>
         <td>entities.entity_name.original_text</td>
         <td>What the user said</td>
      </tr>
    </tbody>
</table>

#### How do we send data

We send data to the parent iframe of the external tool via javascript.```

```
iframeET = '<iframe on which the external tool loads>'
data = '<json object with data>'
iframeEl.contentWindow.postMessage(data)
```

for more information on what postMessage is, please refer to [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage )


#### How we expect the client to receive the data

The client's external tool will have to add a listener for 'message' sent via [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

We will provide the data once the iframe is loaded successfully.

Refer to the below code snippet that explains how a client should receive data.

```json
function setEventListener(element, eventName, eventHandler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
}

setEventListener(window, 'message', function (e) {
	// e.data is the json object sent by the parent window
    var parentData = e.data;
    // client code to utilize the data for their respective activities.
});

```
