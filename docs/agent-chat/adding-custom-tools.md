---
title: Adding your own custom tool
---

## Adding Custom Tools

#### Steps

- Go to: [https://staging.hellohaptik.com/home/](https://staging.hellohaptik.com/home/)
- Enter your login credentials
- Once logged in, you will see the below page (may vary based on permissions)

![home_screen](assets/haptik_logged_in_screen.png)

- Select Administrator, the below screen will apear (may vary based on permissions)

![admin_tools_screen](assets/admin_tools_screen.png)

- On clicking on External Tools (highlighted), the below page will open

![external_tool_screen](assets/external_tool_screen.png)

    Ex: We added an external url (https://material.io/design/) which should appear 
    for Flight Hindi Voice Business as "Test External Link".

- Now, click "*Add External Tool*", to land on the screen below. Here, you enter the following details:
        1. Business: Select your unique business name. (will be available in dropdown) 
        2. Partner: Select your unique partner name. (will be available in dropdown) 
        3. Task: Can be ignored, and left blank 
        4. Tool Name: Can be any string (this is what will apear to the agents) 
        5. URL: An external link to your tool 
        6. Tick: "Link" or "Tool" 
        7. Hit Submit

![add_external_tool](assets/add_external_tool.png)

- On success, your tool will now appear for all agents allocated to your business.

![agent_view_tool](assets/agent_view_tool.png)

- Simply click on the tool, and the URL will open on the RHS

![agent_view_tool_url](assets/agent_view_tool_url.png)

#### Important Design Note

- The RHS section, where the tool loads is restricted to exactly 26% of the page ~ 360px in width in most cases.
- Please make sure that the tool is responsive to all required screen resolutions

#### Important Tech Note

- An external tool appears for a business, if a user wishes to use the same tool across multiple businesses, they can do so by adding a the same entry for the other businesses.

- Please make sure your `X-Frame-Options` is set to allow our host, so that your tool can open within our iframe.

```json
Header set X-Frame-Options "allow-from https://staging.hellohaptik.com"
```
