---
title: "Quick Start"
id: index
---

## Introduction

The **Haptik Javascript SDK** is a completely modular conversational interface. It renders a complete chat experience that can be easily integrated across different web environments.

The footprint is tiny, it supports SSL, and works asynchronously – so it won’t block your website.

## **Prerequisites**

Before Integrating the SDK make sure you have these:

- Business ID
- Client ID
- Base URL

> These are **mandatory** and can be provided on request. Please contact us for these values.

## **Installation**

The installation is a fairly simple process.
Add the following script at the bottom of the page before the closing tag.

```html
<script>
  window.haptikInitSettings = {
    "business-id": "<business-id>",
    "client-id": "<client-id>",
    "base-url": "<base-url>",
  };
</script>
<script
  type="text/javascript"
  charset="UTF-8"
  src="https://toolassets.haptikapi.com/platform/javascript-xdk/production/loader.js"
></script>
```

### **Complete Example:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Haptik JS SDK Integration Demo</title>
    <meta charset="UTF-8" />
    <meta content="width=device-width; initial-scale=1.0;" name="viewport" />
  </head>
  <body>
    ...Some HTML Code Snippet...
    <script>
      window.haptikInitSettings = {
        "business-id": "<business-id>",
        "client-id": "<client-id>",
        "base-url": "<base-url>",
      };
    </script>
    <script
      type="text/javascript"
      charset="UTF-8"
      src="https://toolassets.haptikapi.com/platform/javascript-xdk/production/loader.js"
    ></script>
  </body>
</html>
```
