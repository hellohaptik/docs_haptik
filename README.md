# **External Documentation for the Haptik Platform**
> Ye who writes the code, documents it.

## Overview

We use **Docusaurus** for hosting all public documentation. We have 4 instances of docusaurus hosted across 4 different repositories. The homepage links to all the different sections of the documentation and the common header and footer aid in the same.

You can currently access the new documentation portal here https://hellohaptik.github.io/docs_haptik/

The documentation is essentially split into 2 parts

*   **Platform Documentation**
This is hosted under the **docs_haptik** repository. There is **no versioning** for this set of documentation. The **homepage** is also hosted and served from here.

*   **SDK Documentation (Android/iOS/Web)**
The documentation for the SDKs isare hosted under their respective source code repositories. Each SDK gets their **own docusaurus instance** with **independent** **versioning** in accordance with the release process based on Git tags.

**NOTE:** Both sets of documentation follow their own release process. More on that below.

## Making changes to the documentation

### Platform documentation

Since there is no versioning, deploying the documentation is pretty straight forward. All the documentation for this section is stored in **docs_haptik/docs**

1. Create a **new branch** on Github (docs_haptik)
2. Edit the documentation by **modifying the markdown files directly**. You can do this using Github's editor. Hint: The preview tab on github's editor can indicate how the documentation might look on the actual website.
3. Once you've made the necessary edits, create a Pull Request on Github (from your branch to master [base branch])
4. Send the PR to anyone with access to review and merge your changes.
5. Once the changes have been approved and merged, the documentation should update on the website with the respective changes within a few minutes automatically

### SDK Documentation (Android/iOS/Web)

The process of changing the documentation is common across Android, iOS,  and Web. The documentation is hosted alongside the source code itself inside the **docs/pages** folder.

Changes to the documentation should ideally be made along with the corresponding feature being released. This way, the documentation is created/updated during the actual development cycle. The documentation update is also a part of the Pull Request and can be reviewed alongside it. 

In the future, we will be adding automatic checks across the different repositories to make this mandatory.

The documentation changes are released automatically whenever the git tag is bumped (usually following a release)

### Manual Deployment

If you want to deploy the documentation manually, you will need to setup node/npm. Follow the steps to set that up.

*   Make sure `node >= v8.0` is installed alongside `npm`
*   ```
    cd docs/src
    ```
*   ```
    npm install
    ```
*   To run the website locally to see the changes in real time
    ```
    npm run start
    ```
*   To create a new version
    ```
    npm run version NEW_VERSION_NAME
    ```
*   To publish the docs
    ```
    npm run publish-gh-pages
    ```




## FAQs

#### How do I add new pages to the documentation?
New pages can be added by creating a new file and adding it to meta.json
*   Create a new markdown file in the relevant docs folder
*   Add the title meta tag to the top of the file. This is the title that shows up as the heading for the page. This is also the text that would show up on the left-handleft hand sidebarside bar.
    ```
    ---
    title: My New Page
    ---
    ```
*   Once you've created the page. You need to add it to the meta.json file closest to where     you created the page. For example, if you added a page here: **docs_haptik/docs/bot-builder/basic/my-new-page.md** then you would need to edit **docs_haptik/docs/bot-builder/meta.json**
*   Add your document file name (without the extension) to the corresponding section. Make sure it's a valid JSON before pushing.
*   Follow the process outlined in the above section to deploy the changes to the website.

#### How do I edit the documentation for one of the SDKs without bumping the version?**
Currently, we don't support automatic deployments for hotfixes. The deployment must be done manually in this case
*   Follow the steps outlined above to get docusaurus running locally on your dev.
*   Delete the folder for the version you want to update from **docs/src/versioned_docs **and **docs/src/versioned_sidebars**
*   Remove the version entry from **docs/src/versions.json**
*   Run `npm run version-docs VERSION_YOU_WANT_TO_UPDATE`
*   Run `npm run publish-docs` to publish your changes.


## Style Guide

- #### Keep in mind your audience's background, goal & mood
    - Is the reader a prospective user, a new user, or an experienced user? What is the goal of the reader? To complete a task? To research a topic? Is the reader in the middle of a task? Are they in a hurry? Could they be frustrated?

    - Your Article Type (User Wants) ⇒ Best Practise (Context), Cheat Sheet (References), Getting Started (Overview), Pathfinder (Orientation), Tutorial (Guidance), Warning (Assurance) \

- #### Prime the reader with a brief outline of an article's focus in an introductory para
    Include "This article contains… " styled section with certain questions. Read previous & next articles. Ensure that the articles have a common flow

- #### Use ONLY 2nd person future tense
    "First, you'll need to install FooBar v7. Then, when you've frozzled the Whizang, you can start working on the Doodad"

- #### Keep the paragraphs, headlines & sentences short.
    Don't use conjunctions (such as "and" or "or") 3-5 sentences per paragraph

- #### Provide context by using Dashboard GIFs & Screenshots
    Including Screenshots of Empty States

- #### Include examples which will make it easier to understand complex tasks
    Do not use idioms. Do not use fluff words like "very", "pretty", "good" \

- #### Capitalise the first letter of Haptik features. Italicize navigation & button labels
    "First, add a Partner and then proceed to add a Business"
    "Click on _Save & Next_"

- #### Highlight common mistakes & share tips
    Think of all places where someone might make a mistake and highlight those areas with a box to ensure common mistakes are highlighted upfront

- #### Add relevant links in text & further reading
    If you think something should be a part of two documents, include it in BOTH \

- #### Peer review your updates
    Specifically ask for, account for and block some time for your documentation. If possible, write documentation _while_ you're coding. Make it a part of code review

- #### Converting GoogleDoc content to .md (markdown)
    Paste your content on a markdown editor. You can easily find good editors online. For example, Dillinger can be used to export your markdown files. Click here to know more about markdown syntax i.e. making your text bold, italic, adding bullets or images. If you're familiar with markdown, another way is directly editing content on the github editor. Alternatively, you can download Typhora and work offline as well.
