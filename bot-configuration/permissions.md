# Permissions

This section contains informaiton as to how permissions are maintained within the Haptik Tools. You can control the granularity of access each user has to various tools in the system.





## Partner Assignment

Each user must be assigned a *partner* and can only access data pertaining to that particular partner. That information can be a bot, a business, other users, chat data, analytics data forms, content and many more. Any data you view on the system will be filtered based on the partner you are assigned.



User's are assigned partners within the Expert Dashboard.



## Features

Features are actions that a user can do with any of the tools. A user can be granted access to any feature by linking the name of the feature to the user. Examples of Features are:

1. Forms link on the admin tool
2. Transferring a bot to production
3. Viewing Chat Data
4. Ability to create users



Things that are not specified to be a ‘feature’ should be accessible to all users.



## Permission Groups

A permission group is a collection of features. Whenever a user is linked to a permission group, he will get access to all the features in that group. A user shall never be linked to a feature directly. Users should only be linked to a feature via permission groups. 



Permission Groups can be created on the fly, as per the requirement. Various features can be mixed to create a Permission Group and assigned to the user.
