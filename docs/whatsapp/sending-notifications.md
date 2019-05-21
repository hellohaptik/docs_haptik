---
title: Sending Notifications
---

As explained in the `Types of Conversations` section, you can have the bot initiate a conversation with the user. This is done by sending them a pre-approved message template.


## Highly Structured Message (HSM) Templates
The templates that can be sent to WhatsApp users are called Highly Structured Messages. In short they are often referred to as HSMs.

A HSM is a template message with placeholders for dynamic data. All HSMs need to be approved by WhatsApp before they can be sent to the user.

## Setting up a HSM
To setup a HSM you first need to get access to the FB Business Manager Tool of the business. If you don't already have access, you can request it by sending an email to `platform@haptik.co` with the subject as `Request access to FB Business Manager` and in the body mention the business and the reason for access request.

Once you have access, you can go to the Message Templates section of the business manager tool and create your HSM. 

![Message Template Home](assets/message_templates_home.png)

On the `Message Templates` page click on the **Create Message Template** button to create a new template. 

![Creating a template](assets/create_message_template.gif)

The steps involved in creating a HSM template are:

1) Set the name of the template.
2) Choose the category of template. You can read more about the allowed categories in the next section.
3) Select the language of the template. For a given template type, you can have multipe language versions of it.
4) Insert the content of the template. Inside the content you can use rich text elements like `Bold`, `Italics` etc and you can also insert variables in it.
5) Once satisfied, click on submit to submit the HSM for approval.

> **NOTE:** Once approved, the HSM content cannot be edited.

## Sending a HSM as a notification
After you have submitted your HSM and approval has been granted, you can start sending the HSM as notifications to opted-in users.

You can do this by making a `POST` request to the notification endpoint provided to you by the `DevOps/Platform` team.

The request signature is as below:

```bash
curl -X POST \
  <base_url>/whatsapp/notification/ \
  -H 'Authorization: Bearer <token>' \
  -H 'Content-Type: application/json' \
  -H 'client-id: <client-id>' \
  -d '{
    "business_id": <business_id as a number>,
    "to": "<phone_number>",
    "type": "hsm",
    "hsm": {
        "namespace": "<from whatsapp dashboard>",
        "element_name": "<from whatsapp dashboard> ",
        "language": {
            "policy": "deterministic",
            "code": "en_US"
        },
        "localizable_params": [
            {"default": "Param 1 value"},
            {"default": "Param 2 value"}
        ]
    }
}
'
```

In the request body, `business_id`, `token` and `client_id` will be provided by Haptik.

Details regarding the other fields in the body can be found [here](https://developers.facebook.com/docs/whatsapp/message-templates/sending/). 

Acceptable formats for phone number can be found [here](https://developers.facebook.com/docs/whatsapp/api/contacts#phone).
