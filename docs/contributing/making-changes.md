---
title: Updating Documentation
---

## Platform documentation

> Bot Builder/Bot Analytics/Agent Chat/Others

Since there is no versioning, deploying the documentation is pretty straight forward. All the documentation for this section is stored in **docs_haptik/docs**

1. Create a **new branch** on Github (docs_haptik)
2. Edit the documentation by **modifying the markdown files directly**. You can do this using Github's editor. Hint: The preview tab on github's editor can indicate how the documentation might look on the actual website.
3. Once you've made the necessary edits, create a Pull Request on Github (from your branch to master [base branch])
4. Send the PR to anyone with access to review and merge your changes.
5. Once the changes have been approved and merged, the documentation should update on the website with the respective changes within a few minutes automatically

## SDK Documentation

> Android/iOS/Web

The process of changing the documentation is common across Android, iOS, and Web. The documentation is hosted alongside the source code itself inside the **docs/pages** folder.

Changes to the documentation should ideally be made along with the corresponding feature being released. This way, the documentation is created/updated during the actual development cycle. The documentation update is also a part of the Pull Request and can be reviewed alongside it.

In the future, we will be adding automatic checks across the different repositories to make this mandatory.

The documentation changes are released automatically whenever the git tag is bumped (usually following a release)

## Manual Deployment

If you want to deploy the documentation manually, you will need to setup node/npm. Follow the steps to set that up.

- Make sure `node >= v8.0` is installed alongside `npm`
- `cd docs/src`
- `npm install`
- To run the website locally to see the changes in real time
  `npm run start`
- To create a new version
  `npm run version NEW_VERSION_NAME`
- To publish the docs
  `npm run publish-gh-pages`
