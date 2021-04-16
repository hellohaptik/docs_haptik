---
title: Deploying the IVA
---

After you have created your IVA and tested it locally, you can deploy the IVA on Google Business Messages. Users can start receiving messages from the IVA when they click on **MESSAGE**.

![gbm1](https://user-images.githubusercontent.com/75118325/111489724-653c6880-8760-11eb-9968-42bc725f65df.png)

To deploy the IVA on Google Business Messages, you will have to provide certain tokens on the **Platform Deployments** section.

![businesspage](/assets/gbm4.png)

You can use the **Platform Deployment** sub-section of the **Channels** page on Business Manager. Here's how you can open this section - 

![deploygbm](/assets/gbm5.png)

In the Platform Deployments section - 

1. Select the **_Platform_** as **_Google Business Messasges_**
2. Set the platform as **Active**.
3. Provide the **Brand ID**, **Agent ID** and **Agent Name**.

These are the same IDs which get created during the set up phase.

> NOTE: The Business and IVA created on **staging** are transferred to **production**. But this transfer doesn't include _Platform Deployments_. 
> This means that Platform Deployments will have to be configured explicitly for both the environments.
