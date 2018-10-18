## HSL Properties
 
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
	},
	"emoji": "<Emoji from Emoji Framework>"
}
```
 
 
+      actionable_text
This is the text shown on the actionable
 
+      option_unselected_text
Used exclusively with the TAB_LIST element. This is the text shown when no options from the Tab list are selected.
 
+      option_selected_text
Used exclusively with the TAB_LIST element. This is the text shown when an option from the Tab list is selected.
 
+      expired_text
Used exclusively with the TAB_LIST element. This is the text shown when the element expires. The expiry is set in the data in seconds.
 
+      location_required
Sometimes, on tapping on the actionable, we might require the user’s location for the action to work properly. This boolean properly defines whether location is required or not.
 
+      uri
This property defines whether the screen should switch when you tap on the actionable. If yes, the value for uri will mention the destination screen to go to. URI can be empty when there is no destination screen and the action happens on the same screen.
 
	-      CAROUSEL_DETAIL
				Opens a screen which has a carousel of image on the top and space underneath for text.
	 
	-      GALLERY_PICKER
				Pops up the dialog to choose an image from camera / gallery.
	 
	-      LAUNCH_CHANNEL
				Opens up a new channel. The details of the channel to be opened is given in the payload.

	-      SEND_LOCATION
				Opens Place Picker and enables a user to send a particular location.
	 
	-      CAROUSEL_DEFAULT
				Opens up a screen which has little space on the top for text, followed by a carousel of images underneath it and a message sending area underneath it. Primarily built for the Food Delivery channel but still useful in many ways.
	 
	-      APP_AUTHENTICATE
				Used to get <Client> authentication. Launches <Client> app if available other wise fires up a web view.

	-      SAVED_ADDRESSES
				Opens up the Saved Addresses screen with the list of saved addresses, if any. Otherwise, opens up the screen to save a new address.
	-      CALL
				Makes a phone call to a number provided in the payload.
	 
	-      LINK
				Fires up web view with a link provided in the payload.
	 
	-      SEND_MULTIPLE_LOCATIONS
				Used mostly scenarios to allow a user to select two locations and send it back as a message.
	 
+      is_default
This property will visually make the actionable text bold for the particular actionable. Additionally, what is also does is that on tapping on the main message, the action will be the same as that of this actionable.
 
+      type
The way we have type of HSL, we also have type of an actionable. This type defines the nature of the actionable. The available types are:
 
	-      APP_ACTION
				Indicates an action that should happen when you tap on it. Usually combined with a URI.
				
	-      MESSAGE_BAR
				Adds a message bar. Used exclusively along with CAROUSEL_DEFAULT URI.
				
	-      TEXT_ONLY
				Used to send a message in the same channel where this actionable is.
				
	-      TAB_LIST_TEXT_ONLY
				Used to send a message based on the chosen option in the TAB_LIST element.
				
	-      FORM_SHOW
				Used to present a form in the same channel where the actionable is.
				
	-      SHARE_RECEIPT
				Used along with the RECEIPT HSL object to take a snapshot of the receipt and make it shareable.
				
	-      APP_FEEDBACK
				Used to allow a user to give feedback.
				
	-      SHARE_REFERRAL
				Used to share referral message
	 
	-      payload
Actionable Payload is a dictionary which carries the meta-data required for the actionable to do it’s job.
Some of the keys used in this payload are:
 
		*      link
				
		*      gogo_message
				Sometimes we want the apps to send meta-data along with a message so that gogo can use it. We don’t want this message to be visible to the user so we write it in between { } which the apps then hide it from the user. gogo_message is append to the message being sent out from the app.
				
		*      message
					This message is sent when the user taps on the actionable. Mostly used with the BUTTON element.
					
		*      url
					
		*      title
					Used to pass the information for the Carousel Details screen.
					
		*      sub_title
					Used to pass the information for the Carousel Details screen.
					
		*      description
					Used to pass the information for the Carousel Details screen.
					
		*      images
					List of images. Used to pass the information for the Carousel Details screen.
					
		*      actionables
					Actionable within actionable. This is the list of actionables for the next screen, usually used with Carousel Details screen.
					
		*      menu_url
					
					
		*      via_name
					vianame of the channel to switch to. Used with LAUNCH_CHANNEL actionable.
					
		*      id
					Carries an integer. We use this to send the form id and present it using the FORM_SHOW  type.
		 
		*      lat_key
					lat key to be sent back along with the latitude. Used with the SEND_LOCATION & SEND_MULTIPLE_LOCATIONS URIs
		
		*      lng_key
					lng key to be sent back along with the longitude. Used with the SEND_LOCATION & SEND_MULTIPLE_LOCATIONS URIs.
					
		*      package_name
					Used to represent which app needs to be opened to authenticate. Right now we use only Uber.
					
		*      callback_link
					The URL to be called once the apps get the Uber/Ola auth token.
					
		*      location
					List of location dictionaries which mentions how many locations need to be picked up. The dictionary inside contains details required for the location picker and the message to be sent once location is chosen.
					
		*      tool_name
					Usually contains the API name used to fetch the data.
					
		*      price_enabled
					Boolean property. Tells the app whether to show the price on the actionable or not.
		 
		*      expired_message
					Used exclusively with TAB_LIST. This is the message that is sent when the user taps on the an expired actionable.
		 
		*      athena_smart_action
					This is built to make it easy for assistants to get the flight that the user was searching for. It’s contains a link which is opened in an iframe on the Athena RHS. The app needs to append this to the outgoing message.
		 
		*      movie_name (Deprecated)
					Was used along with SHOW_TIME_DETAIL.
		 
		*      movie_image (Deprecated)
					Was used along with SHOW_TIME_DETAIL.
		 
		*      movie_trailer_url (Deprecated)
					Was used along with SHOW_TIME_DETAIL.
		 
		*      options_url (Deprecated)
					Was used along with SHOPPING_DETAIL.
		 
		*      items
		 
		*      emoji
You can add an emoji from the emoji framework. This emoji will be displayed along with the actionable_text. Here are some of the emojis that are supported by the Apps right now.

### Carousel Data

Carousel works mostly on actionables but some parts of it are very specific to Carousel design. Here are the keys:

+      thumbnail
	thumbnail is a dictionary which carries information necessary to show the thumbnail on the carousel. There are two keys, namely image & type. Image has the link to the image & type can be PORTRAIT or LANDSCAPE. Apps support on LANDSCAPE type thumbnails.

+      title
	This is the title shown on the Carousel. The space between Thumbnail & Actionables is divided into three fictional rows which can be filled up using title, subtitle & description. Title font weighs more than sub_title & description.

+      sub_title
	Optional. Takes up the second row when used with a title. 

+      description
	 Optional. Takes up the third row when used with a title & sub_title. 

+      meta
	Usually used to indicate rating etc. Works best with floating numbers.

+      tool_name
	Athena tool name used to build the Carousel. Was used to add the Powered by Zomato tag on the Carousel.


### Tab List Data

Like TAB_LIST has it’s own unique data which is used along with Actionables.

+      selection
  The value of this field can be SELECT_ONE or SELECT_ALL. It suggests whether in multi-tab list is the selection of 1 tab enough or are all the tabs compulsory.

+      tabs
  List of tab dictionaries. Each dictionary represents the information stored in a tab. Keys in the dictionary:

+      unselected_text
  Text to be shown on the actionable when no tab list item is selected.

+      title
  Title as shown in the Tab Header. For e.g. Source-Destination in case of Flights.

+      sub_title
  Subtitle as shown in the Tab Header. For e.g. Date in case of Flights.

+      tab_items: 
  List containing items in the tab. For e.g. all the flights in case of Flights Carousel. These items are dictionaries and contain the following keys:

	+ Possible key values for tab_items
		-      title
	  Title as shown in the row. For e.g The flight time.

		-      price
	  Price of the particular item in that row.

		-      caption
	  Shown under the title. For e.g. duration in case of Flights.

		-      message
	  The message that is sent when the user select this particular item and taps on the actionable

		-      meta
	 Meta-data

		-      emoji
	  Used to add an image in the left side of the row. For e.g. Airline Icon in case of Flights


+      expiry
	No. of seconds after which the tab should expire. On expiry, the actionable text changes based on the expiry_text mentioned in the actionable.

+      analytics
	Dictionary containing analytics related stuff. Apps forward this to all analytics SDKs whenever the user interacts with the HSL.

+      actionables
	Actionable list with a single actionable that has all the details wrt to the actionable.

+      tool_name
	Athena tool name. Usually contains the API name used to fetch all the data in the tabs.

