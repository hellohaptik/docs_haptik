---
title: Deploying the IVA on GBM
---

After you have created your bot and tested it locally, you can connect the IVA to Google Business Messages, so users can start receiving messages from the IVA when they click on **MESSAGE**.

To deploy the IVA on Google Business Messages, you will have to provide certain tokens on in the Platform Deployments section.

![businesspage](/assets/gbm4.png)

You can use the Platform Deployment sub-section of the Partner specific area in Business Manager. Here's how you can open this section - 

![deploygbm](/assets/gbm5.png)

In the Platform Deployments section - 

1. Select the **_Platform_** as **_Google Business Messasges_**
2. Set the platform as **Active**.
3. Provide the **Brand ID**, **Agent ID** and **Agent Name**.
These are the same IDs which get created while during the set up phase.

> NOTE: The businesses and IVA created on staging are transferred to production. But this transfer doesn't include _Platform Deployments_. 
> This means that Platform Deployments have to be configured explicitly for both the environments. 
