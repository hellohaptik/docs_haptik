---
title: Allowed Notification Types
---

There is a limited number of use cases for which sending notifcation templates is allowed. At a high level, notifications are allowed for only transactional events and they can't be promotional in nature.


## Allowed Use Cases


<table border="1" class="docutils">
   <thead>
      <tr>
         <th>Template</th>
         <th>Allowed Use Case</th>
         <th>Examples</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>ACCOUNT_UPDATE</td>
         <td>Notify the message recipient of a change of account settings.</td>
         <td>
            * Profile has changed.<br/>
            * Preferences are changed.<br/>
            * Settings have changed.<br/>
            * Membership has expired.<br/>
            * Password has changed.
         </td>
      </tr>
      <tr>
         <td>PAYMENT_UPDATE</td>
         <td>Notify the message recipient of a payment update for a transaction.</td>
         <td>
            * Send a receipt.<br/>
            * Send an out-of-stock notification.<br/>
            * Notify an auction has ended.<br/>
            * Status on payment transaction has changed.
         </td>
      </tr>
      <tr>
         <td>PERSONAL_FINANCE_UPDATE</td>
         <td>Confirm a message recipient's financial activity.</td>
         <td>
            * Bil-pay reminders.<br/>
            * Schedule payment reminder.<br/>
            * Payment receipt notification.<br/>
            * Funds transfer confirmation or update.<br/>
            * Other transactional activities in financial services.
         </td>
      </tr>
      <tr>
         <td>SHIPPING_UPDATE</td>
         <td>Notify the message recipient of a change in shipping status for a product that has already been  purchased.</td>
         <td>
            * Product is Shipped.<br/>
            * Status change to in-transit.<br/>
            * Product is delivered.<br/>
            * Shipment is delayed.
         </td>
      </tr>
      <tr>
         <td>RESERVATION_UPDATE</td>
         <td>Notify the message recipient of updates to an existing reservation.</td>
         <td>
            * Itinerary changes.<br/>
            * Location changes.<br/>
            * Cancellation is confirmed.<br/>
            * Hotel booking is cancelled.<br/>
            * Car rental pick-up time changes.<br/>
            * Room upgrade is confirmed.
         </td>
      </tr>
      <tr>
         <td>APPOINTMENT_UPDATE</td>
         <td>Notify the message recipient of a change to an existing appointment.</td>
         <td>
            * Appointment time changes.<br/>
            * Appointment location changes.<br/>
            * Appointment is cancelled.
         </td>
      </tr>
      <tr>
         <td>TRANSPORTATION_UPDATE</td>
         <td>Notify the message recipient of updates to an existing transportation reservation.</td>
         <td>
            * Flight status changes.<br/>
            * Ride is cancelled.<br/>
            * Trip is started.<br/>
            * Ferry has arrived.
         </td>
      </tr>
      <tr>
         <td>TICKET_UPDATE</td>
         <td>Notify the message recipient or send reminders for an event for which a person already has a ticket.</td>
         <td>
            * Concert start time changes.<br/>
            * Event location changes.<br/>
            * Show is cancelled.<br/>
            * A refund opportunity is made available.
         </td>
      </tr>
      <tr>
         <td>ISSUE_RESOLUTION</td>
         <td>Notify the message recipient of an update to a customer service issue that was initiated in a Messenger Conversation, following a transaction.</td>
         <td>
            * Issue is resolved.<br/>
            * Issue status is updated.<br/>
            * Issue requires a request for additional information.
         </td>
      </tr>
      <tr>
         <td>ALERT</td>
         <td>Notify the message recipient of something informational.</td>
         <td>
            * Business Hours/Hours of Availability<br/>
            * Check-in/Check-out times.
         </td>
      </tr>
    </tbody>
</table>
