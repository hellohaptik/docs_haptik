## Data Communication

#### What data will be communicated

We provide data based on requirements as specified by our clients.

#### How do we send data

We send data to the iframe which has loaded the client's external tool via javascript.

```
iframeET = '<the iframe element within our dom>'
data = '<json object with client specified data>'
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