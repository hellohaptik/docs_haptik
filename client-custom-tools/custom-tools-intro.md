## Introduction

#### What Are Custom Tools

When a client wishes to use some of their internal tools within our agent dashboard for ease of data access, the can do so.

The below example shows how we use out tools internally.

![all_custom_tools](all_custom_tools.png)

The RHS section is where all the tools, as defined by our clients will appear.

When a user selects a tool, the url associated to that tool will be loaded within that iframe.
Example: Click on reminders, the below tool is loaded within the RHS.

![reminders_custom_tool](reminders_custom_tool.png)

The agent can then use the tool as its meant to be, and assit the user in accomplishing his/her task.


#### Important Note

* An external tool appears for a business, if a user wishes to use the same tool across multiple businesses, they can do so by adding a the same entry for the other business.

* The RHS section, where the tool loads is restricted to exactly 26% of the page ~ 360px in width in most cases.

* Please make sure your X-Frame-Options is set to allow our host, So that your tool can open within our Iframe.

```json
Header set X-Frame-Options "allow-from https://staging.hellohaptik.com"
```

