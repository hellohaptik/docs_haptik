# **Uni Directional Metadata flow**

### Purpose of this feature

**What is metadata?**
In this document we refer to metadata as 

- Business data
- Tasks data
- Forms data
- Form Fields data
- Banner data

In our current architecture we have admin tools that allow us to create metadata for each environment separately. Because different people create different data in staging and production there are few issues that we face

- **Double Entry**: Product team has to first create data in staging on which the engineering will test and setup flows. Once the flows are tested and ready to go into production, the product team has to go into production and re-create all the data. This is prone to a lot of manual errors
- **DIfferent IDs**: The IDs of the same metadata in staging and production are different and because of that ML has to setup different flows for different environments using different IDs. This causes a lot of confusion between staging and production testing.

The purpose of this feature is to solve the above 2 problems. The plan here is to

- Allow product to create data in staging. 
- Once the data is tested out and ready to go into production, there should be a button on staging to transfer only the newly created data in pre prod.
- Once it is tested in pre-prod there should be a button to move it into production
- No one will be allowed to create data straight in production.
- This way the integrity of data between staging and production is maintained
- The data that QA or Dev team creates should not be allowed to go into production.

### Data flow & access	

- Only people with _product_manager_	permission can send data to different environments
- Staging -> Pre prod -> Production
- Staging : Read, write, and transfer permissions
- Pre-prod: Read and transfer permissions
- Production: Read permission



### User Epics and Job Stories

1. As a PM I should be able to create data in staging.
2. There should be an easy way to select which row goes into production and which one does not.
3. It is the responsibility of the PM to transfer the data when the data is ready for production and verify that the data has been transfered properly as expected.
4. The PM will have to go and individually transfer all the newly created rows in different admins.
5. The button to transfer data should only be visible to product team and no one else.
6. No one should be allowed to add or edit data in production, pre-prod
7. Everyone should be able to view data in production.
8. QA and Dev teams should not be able to transfer data into production 
9. Data when moved to a new environment should get synced to the app based on modified_At. (Modified_at should be updated to the value of now instead of when it was modified at the source)



### Apps 

_This section demonstrates how features will work from the perspective of the user_


No change to apps required. The apps still make the calls to the regular API end points as they would and expect the right data to come from the API calls.

### Gogo

_This section has any specifications related to changes to Gogo_	

ML team will still have to index data in staging and production but the IDs and the data should ideally be the same. 
After this is live, IDs in staging, preprod and production should be the same. The first we release this we have to make sure to re-index all the data based on the production IDs in all environments

_NOTE: The ML team should re-confirm with the PMs that the data has been transferred from staging to production_



### Athena Assistant	

This section has specifications related to the Athena tool

#####		Admin Tools 

There are 4 main admin tools that will be affected by this features (Staging URLs)

- Business admin: http://staging.hellohaptik.com/admin_tools/business_admin/
- Tasks admin: http://staging.hellohaptik.com/admin_tools/business_task/422/
- STS: http://staging.hellohaptik.com/admin_tools/business_sts/422/
- Forms admin: http://staging.hellohaptik.com/admin_tools/add_form/
- Banner admin: http://staging.hellohaptik.com/admin_tools/app_banner/

##### Backward compatibility

There are no backward compatibility issues here because once we change it everyone will start using the new admin tool

##### Possible edge cases

We need to be very careful with this because it affects data in production as well. 

- Make sure modified at are updated when data is transfered
- Make sure cities are udpated when data is transfered
- Make sure partners are updated when the city is transfered
- ​

### Technical Documentation

Need to create new environment variables to define destination of the data. These variables will be.


**MySQL**

- UNI_DIR_DESTINATION_SQL_DB_NAME
- UNI_DIR_DESTINATION_SQL_DB_USER
- UNI_DIR_DESTINATION_SQL_DB_PASSWORD
- UNI_DIR_DESTINATION_SQL_DB_HOST
- UNI_DIR_DESTINATION_SQL_DB_PORT

**Mongo**

- UNI_DIR_DESTINATION_NOSQL_DB_NAME
- UNI_DIR_DESTINATION_NOSQL_DB_HOST
- UNI_DIR_DESTINATION_NOSQL_DB_PORT
- UNI_DIR_DESTINATION_NOSQL_DB_PASSWORD
- UNI_DIR_DESTINATION_NOSQL_DB_USER

**Description**

- When the transfer row button is clicked it will call a view with the Primary ID of that row and the data type (business, tasks, forms, form fields, banner etc)
- On the backend, we will take the ID  and for that table we will fetch the data from staging database
- We will then check if a row for that ID already exists in production. If it does that means it’s an update query otherwise it’s an insert query.
- We will then take all the data from staging and insert or update all the columns in production.
- Create a new permission in the backend called ‘product_manager’
- Only show the transfer data to people with ‘product manager’ permission
- Remove the edit buttons in production for everyone (TBD: instead od edit button, let them get to the edit page to see details but don't let them submit and click save)
- As part of making this production ready we have to
  Move data from production to staging and prepared for
  Business, forms, tasks, form fields, banners, external tools (and all related data)



### TODOs

- When a task / sts is deleted it goes away from the UI and there is no way to transfer that deleted row into production. Need to fix this. For now please ask one of the engineers to update this from the shell
- Business Icons: Right now business icons don't get migrated. So once the business is migrate you will have to add them in production separately.
- Make sure partner names are same in production, staging and development. If hte partner names are different we won't be able to find the partner in the destination

### Unit Test Cases

| Test case                   | Validation                               |
| --------------------------- | ---------------------------------------- |
| insert data in staging      | Make sure all data can be inserted in staging |
| City updates                | Make sure city of meta data updates properly |
| Partner updates             | Make sure partner of data updates properly |
| Modified at updated         | Make sure modified at updates properly   |
| Forms                       | Make sure forms and form fields update properly |
| Order receipts              | Make sure when a task is moved the order recipet is moved properly |
| Emojis and funny charecters | Makre sure data with funny charecters move |



### release process

To release this feature the below needs to be done

- Make sure code is in master
- Make sure all the env variables are set as mentioned above
- Make sure all data in production is up to date. (Mainly check the TOI partner etc)
- Transfer data from production into staging and preprod
- Re-index gogo data for staging and preprod
- Give product_manager permission to the right people in staging and preprod (Remember to not do this in production)

To revert

- To revert incase things go bad, make sure we fall back to editing straight in production. To do this, hack it in the permission files
  `api/lib/permissions.py`

  in function `is_staging` always return true. 
  This will allow people to edit in production.
  Remove `product_manager` permission for all users in staging and preprod

  ​
