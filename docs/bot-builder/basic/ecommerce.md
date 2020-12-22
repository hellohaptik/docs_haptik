---
title: Ecommerce
---

## Introduction

The Ecommerce Smart Skills are eligible to fulfill critical customer support queries. The Smart Skills are selected based on market research and user behavior of the retail vertical.

### 1. **Track Order/Order status** – 
Orders in transit can be tracked in real-time by the users through identifiers like order ID.
- The IVA will be trained to fetch the user's order status. 
- The IVA will first present the list of active orders to the user. 
- The user can proceed by selecting a specific order. 
- The IVA will then fetch the status of that order via a **Track Order API.**
- The order details can be fetched with the help of any unique identifier - Order Id, tracking id,  phone number.


### 2. **Check refund status** – 
Users can check the status of the refund of canceled or returned orders in real-time. The refund status of multiple orders can also be tracked by the user.
- The IVA will be equipped to give out refund status to the user for a particular order. 
- The IVA will first present the list of orders for whom the refund is an active stage.
- Further to the user's selection of the order, the IVA will display the status of the refund.
- The IVA will fetch the refund status via a **CHECK_REFUND_STATUS_API**


### 3. **Cancel my order** – 
When users are not satisfied with the placed order, they can cancel their order on the IVA by choosing an in-transit order.
- A user can initiate an order cancellation via the IVA. The IVA will first present the active orders eligible for the cancellation to the user. The user selects the order to be canceled.  
- The IVA will then fulfill the cancellation request via a Cancel Order API. 


### 4. **Replacement Request** – 
Place a service request to replace a wrong or damaged order on the IVA by choosing from the list of fulfilled deliveries.
- The user can raise a replacement request via the IVA. 
- The IVA will first present the list of items eligible for replacement.
- The user will select the item to be replaced. 
- The IVA will undertake the replacement request via FETCH_ITEM_API, ISSUE_REPLACEMENT_API
