## HSL Properties

This doc will describe the various valid attributes and their values that can be used while generating the HSL jsons as and when applicable.

## HSL Data Attribute/Parameter Descriptions
 
The data part of the HSL holds most of the complex information enabling us to create complex chat elements. The data varies for every different type of the HSL. Before we dig into what all different data we could have, let’s quickly look into what actionables are how are they used along with different HSLs. Actionable is one of the most important part of the data is used heavily across all kinds of HSL.

### Actionable
 
Actionables exist to define both the existence & action of CTAs. Anatomy of an actionable object:
 
```json
{
    "actionable_text": "<text on the CTA>",
    "location_required": "<true or false>",
    "uri": "<URI>",
    "is_default": "<0 or 1>",
    "type": "<type of actionable>",
    "payload": {
        "link": "<link>",
        "gogo_message": "<message>"
    }
}
```


<table border="1" class="docutils">
   <thead>
      <tr>
         <th>Property Name</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>actionable_text</td>
         <td>This is the text shown on the actionable</td>
      </tr>
      <tr>
         <td>location_required</td>
         <td>true or false, if true, location information is sent to backend</td>
      </tr>
      <tr>
         <td>uri</td>
         <td>dictates the screen interaction</td>
      </tr>
      <tr>
         <td>is_default</td>
         <td>0 or 1, if 1, on click of the element, this actionable will get triggered</td>
      </tr>
      <tr>
         <td>type</td>
         <td>We have a type for an actionable, similar to types of hsl's</td>
      </tr>
      <tr>
         <td>payload</td>
         <td>dictionary which carries the meta-data required for the actionable to do it’s job.</td>
      </tr>
   </tbody>
</table>


## Possible values for "uri"
<table border="1" class="docutils">
   <thead>
      <tr>
         <th>Values</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>CAROUSEL_DETAIL</td>
         <td>Opens a screen which has a carousel of image</td>
      </tr>
      <tr>
         <td>GALLERY_PICKER</td>
         <td>Pops up the dialog to choose an image from camera / gallery.</td>
      </tr>
      <tr>
         <td>SEND_LOCATION</td>
         <td>Opens Place Picker and enables a user to send a particular location.</td>
      </tr>
      <tr>
         <td>CAROUSEL_DEFAULT</td>
         <td>opens carousel with title and actionables (buttons)</td>
      </tr>
      <tr>
         <td>SAVED_ADDRESSES</td>
         <td>Opens up the Saved Addresses screen with the list of saved addresses, if empty, user can add</td>
      </tr>
      <tr>
         <td>CALL</td>
         <td>Makes a phone call to a number provided in the payload.</td>
      </tr>
      <tr>
         <td>LINK</td>
         <td>Fires up web view with a link provided in the payload.</td>
      </tr>
      <tr>
         <td>SEND_MULTIPLE_LOCATIONS</td>
         <td>To allow a user to select two locations and send it back as a message.</td>
      </tr>
   </tbody>
</table>



## Possible values for "type"
Like we have type of HSL, we also have type of an actionable. This type defines the nature of the actionable. The available types are:
<table border="1" class="docutils">
   <thead>
      <tr>
         <th>Values</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>APP_ACTION</td>
         <td>Indicates an action that should happen when you tap on it. Usually combined with a URI.</td>
      </tr>
      <tr>
         <td>MESSAGE_BAR</td>
         <td>Indicates an action that should happen when you tap on it. Usually combined with a URI.</td>
      </tr>
      <tr>
         <td>TEXT_ONLY</td>
         <td>Used to send a message in the same channel where this actionable is.</td>
      </tr>
      <tr>
         <td>TAB_LIST_TEXT_ONLY</td>
         <td>Used to send a message based on the chosen option in the TAB_LIST element.</td>
      </tr>
      <tr>
         <td>FORM_SHOW</td>
         <td>Used to present a form in the same channel where the actionable is.</td>
      </tr>
      <tr>
         <td>SHARE_RECEIPT</td>
         <td>Used along with the RECEIPT HSL object to take a snapshot of the receipt and make it shareable.</td>
      </tr>
      <tr>
         <td>APP_FEEDBACK</td>
         <td>Used to allow a user to give feedback.</td>
      </tr>
      <tr>
         <td>SHARE_REFERRAL</td>
         <td>Used to share referral message</td>
      </tr>
   </tbody>
</table>
 
## Keys of "payload" object
Actionable Payload is a dictionary which carries the meta-data required for the actionable to do it’s job.
Some of the keys used in this payload are:
<table border="1" class="docutils">
   <thead>
      <tr>
         <th>Values</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>url</td>
         <td>url to redirect to</td>
      </tr>
      <tr>
         <td>message</td>
         <td>This message is sent when the user taps on the actionable. Mostly used with the BUTTON element.</td>
      </tr>
      <tr>
         <td>title</td>
         <td>Used to pass the information for the Carousel Details screen.</td>
      </tr>
      <tr>
         <td>sub_title</td>
         <td>Used to pass the information for the Carousel Details screen.</td>
      </tr>
      <tr>
         <td>description</td>
         <td>Used to pass the information for the Carousel Details screen.</td>
      </tr>
      <tr>
         <td>images</td>
         <td>List of images. Used to pass the information for the Carousel Details screen.</td>
      </tr>
      <tr>
         <td>lat_key</td>
         <td>lat key to be sent back along with the latitude. Used with the SEND_LOCATION & SEND_MULTIPLE_LOCATIONS URIs</td>
      </tr>
      <tr>
         <td>lng_key</td>
         <td>lng key to be sent back along with the longitude. Used with the SEND_LOCATION & SEND_MULTIPLE_LOCATIONS URIs.</td>
      </tr>
      <tr>
         <td>callback_link</td>
         <td>The URL to be called once the apps get the Uber/Ola auth token.</td>
      </tr>
      <tr>
         <td>lng_key</td>
         <td>lng key to be sent back along with the longitude. Used with the SEND_LOCATION & SEND_MULTIPLE_LOCATIONS URIs.</td>
      </tr>
      <tr>
         <td>items</td>
         <td>a list of carousel elements</td>
      </tr>
   </tbody>
</table>


## Carousel Data
Carousel works mostly on actionables but some parts of it are very specific to Carousel design. Here are the keys:
<table border="1" class="docutils">
   <thead>
      <tr>
         <th>Values</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>title</td>
         <td>This message is sent when the user taps on the actionable. Mostly used with the BUTTON element.</td>
      </tr>
      <tr>
         <td>title</td>
         <td>This is the title shown on the Carousel.</td>
      </tr>
      <tr>
         <td>sub_title</td>
         <td>Optional. Takes up the second row when used with a title.</td>
      </tr>
      <tr>
         <td>description</td>
         <td>Optional. Takes up the third row when used with a title.</td>
      </tr>
</table>

