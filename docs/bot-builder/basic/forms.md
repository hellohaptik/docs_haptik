##**Forms** 

**Use case**

Whenever the input is expected from a user in a structured format, its best taken in a form. For example, address would be best taken over form with 3-4 fields. Forms should have at least two fields. 

**Form creation**

Forms are placed in the Admin tools section. If you've access to them, follow the steps below.

	•	Step 1: On your dashboard, choose Administrator
	•	Step 2: Click Forms in the Banners, Partners, Forms and Tasks section
	•	Step 3: Now, click on ADD+ blue button on the top-right hand corner
	•	Step 4: You land on a page to configure form by adding fields, task & subtitle 
	•	Step 5: Hit Save to add this form.


You can come back to it and edit it, say add more fields or configure this form as required.
There are multiple field entries and selections while creating a form. Read on each of them below - 

*Common mistake: Forms with more than 4 fields are likely to see lower completion rate. This is because it ends up being too much information being taken from the user. As the form occupies the entire screen with > 5 fields, it isn't a good user experience.*

	•	Task:  This field should generally indicate the Objective of the form. For example, if you are making a form to take delivery address, Task can be Delivery Address

![Add Form](/docs/bot-builder/assets/1_add_form.png)

	•	Subtitle: This field should convey the action needed from the user. For example if you are making a form to take delivery address, Subtitle can be Please help me with your Delivery address
	
	•	Short Hand: This is to be deprecated. Used in older app versions
	
	•	Auto Open: Tick this off to auto open form with a single auto search field on task tap. For these use cases, task is linked to the form. This is deprecated. 
	
	*Tip: The linking of form to task is no longer possible through the Bot builder UI and has to be done through backend only.* 
	
	•	Search Source: When we want some custom response or inputs from a client’s API, we put the API URL here. (ex: we need a list of clinics, we type the API endpoint URL in this field)
	
	•	Search Placeholder: In the Search field, the placeholder text visible for the user to understand what needs to be typed
	
	•	Add fields: Clicking on Add fields opens a pop-up to add the respective field details for a form -

![Create Form](/docs/bot-builder/assets/2_create_form.png)

	•	Sort Position: Enter “0” for a field to be at the top of any form.Add subsequent numbers for the position of any field in a form
	
	•	Key: The field-wise labels that is the text on top of each form field box are to be managed from this Key parameter.

 Tip: Please note that field key maps to an entity when we use entities

	•	Type: Select the type of field from a drop-down titled Type here. Type options are Text, Picker, Time, Date, ContactPicker, StartDate, EndDate, Search, SearchEditable, SavedAddress, DOB, MultiDayPicker, MultiSelectPicker
	
	•	Hint: You can add Hint for each field to tell an user exactly what is needed to be entered. You can also use it to specify the format in which the input is expected (ex: if you expect the user to enter date of birth, Hint can be DD/MM/YY)
	
	*Tip: While the header and the subtitle of the form element are important, the most important element is the Hint for each field. Its best to use picker options in form fields wherever applicable and prefilling wherever details pre-exist. Forms should always be preceded by a message that specifies the intent of sending the bot to the user.*
	
	•	Icon: We have a pre configured list of icons for form fields. And you have to use icon names from that pre-defined list only. These names come directly from the code base
	
	•	Auto fill: Here, add the value to auto fill in the form field based on user's profile (age, gender, user_city, user_address, user_email, user_name, star_sign)
	
	•	Auto fill Source: Enter the Source from where the value should be auto filled. Not sure if apps still use this field


**Form actions**

![Form actions](/docs/bot-builder/assets/3_form_action.png)

	•	Add field: For an already created form, you can still go back and add field(s) in case you feel, you’d missed a field earlier 
	•	Edit: When you click on edit and click the downward chevron arrow, you’d be able to edit the Task, Subtitle field texts as well as check/uncheck the Auto Open check box
	
	*Tip: Pre-filling the forms with details that you have for the user increases the form submission rate significantly. As much as possible, we should pre-fill users information in forms. Exception here is in cases where you might need inputs in a different format compared to what is stored on the backend. For example, in a particular implementation its expected Delhi as the city vs the value available on backend being New Delhi. It might be better to not prefill in this case*
	
	•	Delete: As the action suggests, you’d be able to delete a form by clicking the red Delete button
	•	Transfer form: To move this form from staging to production (live) environment, you click the Transfer form button
	•	Editing existing fields: You can directly click the chevron arrow icon and then click edit/cross icon on any particular field to edit or delete the field from any form. 
	•	Using form in bot builder: To use the form on any node, we type {chatform}{id} in the raw HSL (after clicking Add a chat element). The id is the number assigned to each form in Admin Tools ->  Forms list view

![Form ID](/docs/bot-builder/assets/4_form_id.png)

As you can see from the image above, 689 is a form id for form titled “State List for 4kg Cylinder”






