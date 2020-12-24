---
title: Smart Variants
---

## Introduction

IVA processes user messages in order to identify the intent of the user. While developing the IVA, a bot builder has to enter a set of meaningful user variants (at least 10) on every start node to set an intent for the node. This activity takes a significant amount of time since the bot builder has to come up with variants of the user says for every node. 

Smarts Variants helps us to reduce this development effort by adding user variants on a node using complex Machine Learning models. 

## What are Smart Variants?

Smart variants are automatically generated, linguistically similar user variants.

![smartvariantsdisplay](assets/smartvariants2.png)

## How to add Smart Variants?

To add Smart Variants, simply click on the **Transfer** button on the top right corner of the bot screen.

Once you click on the Transfer button, a popup will appear which will contain information about the number of smart variants that can be added to the IVA.

![addsmartvariants](assets/smartvariants5.png)

Once you click on **Add Smart Variants**, the **Transfer** and **Train** button will be disabled since the IVA is getting trained for the newly added Smart Variants.

![addsmartvariants](assets/smartvariants6.png)

When you click on the small blue icon present on the disabled Transfer button, you can see the following popup on the screen

![addsmartvariants](assets/smartvariants7.png)

Once the IVA has been populated with all the Smart Variants, you will receive two emails.

1. The first email with the title **Smart Variants Generation for IVA complete!**

This email contains the summary of the all added Smart Variants. 
On the same email, you will receive a CSV file with the name **augmentations.csv** which will have details of every Smart Variant added on the IVA with a corresponding link to its Node. 

Here a snippet of the email - 

![smartvariantsemail](assets/smartvariants8.png)

> Note: You **do not** have to train the IVA after adding the Smart Variants.

2. The second email is the **Oracle feedback**. This email helps Bot Builders discover methods by which an IVA can be improved and brought to a state where it is utilising capabilities of the ML Model to its maximum potential. You can read more about the Oracle Module [**here**](https://docs.haptik.ai/bot-builder/basic/oracle-feedback)

You can disable any Smart Variant added by the algorithm by clicking on the disable button.

![disablesmartvariants](assets/smartvariants3.png)

Once the IVA development has been completed end-to-end and there are no more new Smart Variants to be added, on the click of the **Transfer** button you will get the below popup.

![transferiva](assets/smartvariants9.png)
