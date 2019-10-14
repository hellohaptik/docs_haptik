---
title: Technical Setup
---

## Overview
Because of end-to-end encryption requirements, WhatsApp requires that business API of any enterprise business be hosted as a separate service. 
Whatsapp provides a set of Docker images with the business API setup which will be setup end-end by Haptik.
Production level setup with HA, alerting etc. will be done. 

Post, setup of WhatsApp system, the number will be verified using certificate from Facebook Business manager & Two Factor Authentication Pin. 
The number will be registered on the WhatsApp system by Haptik. (Number needs to be online to receive OTP)

There are rate limits on a WhatsApp standalone setup. It is around 20 messages/sec. So if the client has high volume we might have to setup a multi-connect cluster to handle the load.
