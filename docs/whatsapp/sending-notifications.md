---
title: Sending Notifications
---

As explained in the `Types of Conversations` section, you can have the bot initiate a conversation with the user. This is done by sending them a pre-approved message template.


## Highly Structured Message (HSM) Templates
The templates that can be sent to WhatsApp users are called Highly Structured Messages. In short they are often referred to as HSMs.

A HSM is a template message with placeholders for dynamic data. All HSMs need to be approved by WhatsApp before they can be sent to the user.

## Setting up a HSM
To setup a HSM you first need to get access to the FB Business Manager Tool of the business. If you don't already have access, you can request it by sending an email to `platform@haptik.ai` with the subject as `Request access to FB Business Manager` and in the body mention the business and the reason for access request.

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

> **NOTE:** The  older version of send notification API (`/whatsapp/notification/`) is now deprecated in favor of `/whatsapp/notification/v2/` of the same API.


The request signature is as below:

```bash
curl -X POST \
  <base_url>/whatsapp/notification/v2/ \
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

If the number does not exist on WhatsApp you will get the below message as response body:
```
{
    "error_message": "unable to verify contact details"
}
```

When API call is successful you will get the below but does not mean message was delivered but Notifications API was triggered and WhatsApp sent the message to defined number. Sent vs Delivered messages only stats are available on WhatsApp dashboard.
```
{
   "meta" : {
      "api_status" : "stable",
      "version" : "2.25.1"
   },
   "messages" : [
      {
         "id" : "<random message id>"
      }
   ]
}
```

In case of any other errors if returned by WhatsApp, they will be returned as it is with the corresponding status codes. You can refer [this](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates/#response) for reference.

Details regarding the other fields in the body can be found [here](https://developers.facebook.com/docs/whatsapp/message-templates/sending/).

Acceptable formats for phone number can be found [here](https://developers.facebook.com/docs/whatsapp/api/contacts#phone).

## Sending a media HSM

Other than text based HSMs to our Whatsapp end users, you can send Media HSMs as well. 

Checkout the examples below:

**Text HSM**

![Text HSM](assets/1text-hsm.png)

Nothing new here.

**Image HSM**

![Image HSM](assets/2image-hsm.png)

HSM sent with an image file as an attachment.

**Document HSM**

![PDF HSM](assets/3pdf-hsm.png)

HSM sent with a PDF file as an attachment.

**Video HSM**

![Video HSM](assets/4video-hsm.png)

HSM sent with a Video file as an attachment.

Pardon us for the text copies and images in above messages. Also, only PDF's supported. Docx files are not supported as of now.

How to use them:

Well here is a simple structure of the message used for sending Media HSM with an Image.

```
{
    "business_id": XXX,
    "to": "XXXXXXXXXX",
    "type": "template",
    "template": {
        "namespace": "<NAMESPACE>",
        "name": "<NAME>",
        "language": {
            "policy": "deterministic",
            "code": "en"
        },
        "components": [
            {
                "type": "header",
                "parameters": [
                    {
                        "type": "image",
                        "image": {
                          "link": "<URL>"
                        }
                    }
                ]
            },
            {
                "type": "body",
                "parameters": [
                {
                  "type": "text",
                  "text": "Ticket to Hollywood"
                }
                ]
            }
        ]
    }
}
```

Note: The above structure is for reference only and will change based on the way we create HSM on Whatsapp Business Manager and for each media type. The param type will change as per the media type used - `image` or `pdf`.

> Only Images, PDF, MP3 and MP4 files are supported.

## FAQs

I keep getting `"unable to verify contact details"` in response even though the Mobile Number entered is a valid WhatsApp account.
> This could happen because of the following reasons:
> - If the credentials entered in Mogambo's Business Manager are incorrect.
> - If you have not specified the Country code in the `to` field when sending the HSM and if it is different from the Country Code used when setting up the WhatsApp Number.
