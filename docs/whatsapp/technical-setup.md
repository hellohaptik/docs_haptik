---
title: Technical Setup
---

## Overview
Because of end-to-end encryption requirements, WhatsApp requires that business API of any enterprise business be hosted as a separate service. Whatsapp provides a docker image with the business API setup. 

A docker image can be thought of as a container with OS, runtime environments etc pre-configured. Haptik uses this image to start a new server with all those configurations setup automatically. For every new business, Haptik will have to use this docker image to setup a Whatsapp Business API service.

After creating a server instance of WhatsApp, it needs to be registered with the phone number the enterprise wants to use. 

This can be done by using the certificate provided during the number addition earlier. The certificate should be sent as an API request to the whatsapp server and it will register that server instance for the corresponding Whatsapp Number.

There are rate limits on a whatsapp server instance. So if the client has high volume we might have to setup a cluster of multiple servers to handle the load.

We are currently working on setting up a process for doing this automatically but until then you will have to fill up this form and the DevOps/Platform team will perform the setup for you: https://forms.gle/eLYbaqY73CwUN11p8.

