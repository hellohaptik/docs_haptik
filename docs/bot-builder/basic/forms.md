---
title: Forms
---

## Use case

Whenever the input is expected from a user in a structured format, its best taken in a form. For example, address would be best taken over form with 3-4 fields. Forms should have at least two fields.

## Form creation

Forms are placed in the Admin tools section. If you've access to them, follow the steps below.

    •	Step 1: On your dashboard, choose Administrator
    •	Step 2: Click Forms in the Banners, Partners, Forms and Tasks section
    •	Step 3: Now, click on ADD+ blue button on the top-right hand corner
    •	Step 4: You land on a page to configure form by adding fields, task & subtitle
    •	Step 5: Hit Save to add this form.

You can come back to it and edit it, say add more fields or configure this form as required.
There are multiple field entries and selections while creating a form. Read on each of them below -

    Common mistake: Forms with more than 4 fields are likely to see lower completion rate. This is because
    it ends up being too much information being taken from the user. As the form occupies the entire screen
    with > 5 fields, it isn't a good user experience.

- Task: This field should generally indicate the Objective of the form. For example, if you are making a form to take delivery address, Task can be Delivery Address

![Add Form](assets/1_add_form.png)

- Subtitle: This field should convey the action needed from the user. For example if you are making a form to take delivery address, Subtitle can be Please help me with your Delivery address
- Short Hand: This is to be deprecated. Used in older app versions
- Auto Open: Tick this off to auto open form with a single auto search field on task tap. For these use cases, task is linked to the form. This is deprecated.
  The linking of form to task is no longer possible through the Bot builder UI and has to be done
  through backend only
- Search Source: When we want some custom response or inputs from a client’s API, we put the API URL here. (ex: we need a list of clinics, we type the API endpoint URL in this field)
- Search Placeholder: In the Search field, the placeholder text visible for the user to understand what needs to be typed
- Add fields: Clicking on Add fields opens a pop-up to add the respective field details for a form -

![Create Form](assets/2_create_form.png)

- Sort Position: Enter “0” for a field to be at the top of any form.Add subsequent numbers for the position of any field in a form
- Key: The field-wise labels that is the text on top of each form field box are to be managed from this Key parameter.

      Tip: Please note that field key maps to an entity when we use entities

- Type: Select the type of field from a drop-down titled Type here. Type options are Text, Picker, Time, Date, ContactPicker, StartDate, EndDate, Search, SearchEditable, SavedAddress, DOB, MultiDayPicker, MultiSelectPicker
- Hint: You can add Hint for each field to tell an user exactly what is needed to be entered. You can also use it to specify the format in which the input is expected (ex: if you expect the user to enter date of birth, Hint can be DD/MM/YY)
  Tip: While the header and the subtitle of the form element are important, the most important element is
  the Hint for each field. Its best to use picker options in form fields wherever applicable and prefilling
  wherever details pre-exist. Forms should always be preceded by a message that specifies the intent of sending
  the bot to the user.
- Icon: We have a pre configured list of icons for form fields. And you have to use icon names from that pre-defined list only. These names come directly from the code base
- Auto fill: Here, add the value to auto fill in the form field based on user's profile (age, gender, user_city, user_address, user_email, user_name, star_sign)
- Auto fill Source: Enter the Source from where the value should be auto filled. Not sure if apps still use this field

## Form actions

![Form actions](assets/3_form_action.png)

- Add field: For an already created form, you can still go back and add field(s) in case you feel, you’d missed a field earlier

- Edit: When you click on edit and click the downward chevron arrow, you’d be able to edit the Task, Subtitle field texts as well as check/uncheck the Auto Open check box
  Tip: Pre-filling the forms with details that you have for the user increases the form submission rate
  significantly. As much as possible, we should pre-fill users information in forms. Exception here is
  in cases where you might need inputs in a different format compared to what is stored on the backend.
  For example, in a particular implementation its expected Delhi as the city vs the value available on
  backend being New Delhi. It might be better to not prefill in this case.
- Delete: As the action suggests, you’d be able to delete a form by clicking the red Delete button

- Transfer form: To move this form from staging to production (live) environment, you click the Transfer form button

- Editing existing fields: You can directly click the chevron arrow icon and then click edit/cross icon on any particular field to edit or delete the field from any form.

- Using form in bot builder: To use the form on any node, we type {chatform}{id} in the raw HSL (after clicking Add a chat element). The id is the number assigned to each form in Admin Tools -> Forms list view.

![Form ID](assets/4_form_id.png)

As you can see from the image above, _689_ is a form id for form titled “State List for 4kg Cylinder”.

## Types of Form Fields

Now that you know how to create forms, it’s also important to understand the different types of forms you can use: Text, Picker, Time, Date, ContactPicker, StartDate, EndDate, Search, SearchEditable, SavedAddress, DOB, MultiDayPicker, MultiSelectPicker.

Let us understand each type of form field in detail.

**Text**: Text field is used when you want a text input from the user in the form field. There are 3 types of Text input and it is mandatory to select any 1 type from the Keyboard type option.

![Form1](assets/Form1.png)

- Normal: This can be used to get any text input from the user eg- Name, Address etc.

- Number: This can be used to get number inputs from the user eg- Mobile number, Pan card number, etc.

- Email: This can be used to get the Email id from the user

> Keyboard type has nothing to do with the validations, it is useful to enable the keyboard type for that particular field and is useful on the Mobile devices. Eg - Number type will directly open the the number pad of the mobile keyboard.

**Picker**: Picker field is used when you want a user to select any one option from the given multiple options using the dropdown. As shown below in the sample use case where a user has to select the city from the given 3 options

![Form2](assets/Form2.png)

To create this picker form field just select the type as **Picker** and in the Options field pass the Comma-separated values you want. Eg- Mumbai, Delhi, Hyderabad

> Use words & phrases entity to capture them with all the options present in the Dictionary of that entity

**Time**: Time field is used to get the time from a user. It uses the clock widget where user can select the time as shown below -

![Form3](assets/Form3.png)

**Date**: Date field is used to get the date from a user. It uses the calendar widget where users can select the date & year as shown below -

![Form4](assets/Form4.png)

> Use Entity type time & date to store these values 

**DOB**: It is used to get the Date of birth from a user and works similarly as the Date field mentioned above except, the user cannot select the future dates as shown below -

![Form5](assets/Form5.png)

## Using a Form in a Node

Now that we are aware of how to create a form and various form fields, let us take an example to understand its usage.

Here we are creating a flow for **Booking an appointment** where users will enter Name, City, Time & Date. 

Create a form by clicking the add button, then enter the Task, Subtitle, Short Hand text. Adding 4 fields with type Text for Name, Picker for City, Time & Date for getting the Time & Date of booking with correct sort order as shown below 

**Note:**

1. The Key parameter is important for each type while creating the form field as it maintains the mapping with the entity which we will use to store the values.
2. We have a pre configured list of icons for form fields. And you have to use icon names from that pre-defined list only.

![Form6](assets/Form6.png)

Once the form is created successfully, save the Form ID by searching your form with the text entered in the Task field. (Using Ctrl+F)

As you can see from the image above, **1451** is a form id for the form titled as “Please enter your info” and this ID is unique for the form you have created. After the form is created, we will need entities to capture all the values from the form. So here we have created 4 entities to store the 4 form fields as shown below 

![Form7](assets/Form7.png)

- **person_name** entity is used to capture the Name entered in the 1st form field and the mapping is done using the form_keys present under the Advanced options in that entity.

![Form8](assets/Form8.png)

> Use the same Form Key in the entity as the one entered while creating the form field

For name form field, we have used **Name** in the Key parameter, so **Name** should be present in the Form_keys too while creating/adding the entity.

- **utils_city** entity is used to capture the city user selects from the 2nd form field using the Picker. Key used here was **City** in form field & in Form_keys for entity too.

- **time** entity is used to capture the time user selects from the 3rd form field using the clock widget. Key used here is **Time** in form field & in Form_keys for entity too.

- **departure_date** is used to capture the date user selects from the 4th form field using the calendar widget. Key used here is **Date** in form field & in Form_keys for entity too

> We have used the System entities to capture the above 4 form fields but you can create your own entity with correct Key name in the Form_keys field

After creating entities with correct entity type & Key, we need to display the form on the bot. We have a syntax which is to be used in the bot says of the same node where we want the form & place all the entities.

**Syntax: {chatform}{form id}**

In this case, the form id was 1451, So we have used {chatform}{1451} in the bot says to show the form

![Form9](assets/Form9.png)

Let’s test this flow and check how the form looks on the bot

![Form10](assets/Form10.png)

This is how the form will look after the user fills the form & clicks on the Send button

![Form11](assets/Form11.png)

**Note:** Check the values captured in the entities using the debug log as shown above
