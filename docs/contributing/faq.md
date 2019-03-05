---
title: FAQs
---

## How do I add new pages to the documentation?

New pages can be added by creating a new file and adding it to meta.json

- Create a new markdown file in the relevant docs folder
- Add the title meta tag to the top of the file. This is the title that shows up as the heading for the page. This is also the text that would show up on the left-handleft hand sidebarside bar.
  ```
  ---
  title: My New Page
  ---
  ```
- Once you've created the page. You need to add it to the meta.json file closest to where you created the page. For example, if you added a page here: **docs_haptik/docs/bot-builder/basic/my-new-page.md** then you would need to edit **docs_haptik/docs/bot-builder/meta.json**
- Add your document file name (without the extension) to the corresponding section. Make sure it's a valid JSON before pushing.
- Follow the process outlined in the above section to deploy the changes to the website.

## How do I edit documentation without a version bump?

Currently, we don't support automatic deployments for hotfixes. The deployment must be done manually in this case

- Follow the steps outlined above to get docusaurus running locally on your dev.
- Delete the folder for the version you want to update from **docs/src/versioned_docs **and **docs/src/versioned_sidebars**
- Remove the version entry from **docs/src/versions.json**
- Run `npm run version-docs VERSION_YOU_WANT_TO_UPDATE`
- Run `npm run publish-docs` to publish your changes.
