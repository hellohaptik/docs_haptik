---
title: Quickstart
---


This tool is built to help technical writers & developers write documentation quickly. It's the single source of truth for all style & flow related practises. It should, therefore, help you write clear & consistent content.


## Principles

Our communication should be:

*   Crisp \
Make sentences shorter. Use fewer conjunctions (eg: and, but)

*   Comprehensive \
Documentation is solutioning. Include all use cases for all personas with examples.

*   Actionable \
Include steps & processes wherever necessary.

*   Reader Friendly \
Understand if the user wants solution quickly or wants in-depth knowledge


## Documentation

We use Docusaurus for hosting all our public documentation. We have 4 instances of docusaurus hosted across 4 different repositories. The documentation is essentially split into 2 parts

1. Platform Documentation \
This is hosted under the docs_haptik repository. There is no versioning for this set of documentation. The homepage is also hosted and served from here.

2. SDK Documentation (Android/iOS/Web) \
The documentation for the SDKs are hosted under their respective source code repositories. Each SDK gets their own docusaurus instance with independent versioning in accordance with the release process based on Git tags


## Lifecycle

Each article is a seperate .md file. This .md file can be found inside docs_haptik repository for the platform tools. For the SDKs, the .md files are a part of the respective SDK.

Docusaurous converts each .md file to HTML and the file is hosted as a part of GitHub Pages. After every change, a new pull request (PR) needs to be raised.

The changes will be peer reviewed, approved and merged. For the platform tools, the changes should appear within few minutes automatically. For the SDKs, the changes will be live only after a Jenkins job which builds the pages is run.


## Content

### Best Practices

Understand the audience's background, goal and current mood. Write either guides or resources. Guides are goal oriented step-by-step instructions. Resources are information oriented and provide in-depth information.

More information about 8 types of articles and their respective goals can be found in the best practices article.

### Page Mechanics

Guidelines around flow, hierarchy and navigation are shared in the page mechanics article. Few key highlights are:

*   Follow the "Why → What → How" model of content writing
*   Use second-person and describe actions to a user
*   Try to avoid "click here" or "learn more." in the link text
*   Use H2 → H1 → List Heirarchy

### Adding Images

To add images to your .md file, upload them in the 'Assets' folder inside the appropriate repository & use the same filename while

Eg:  To add an image with the name 'basic-overview-users.png'  in the 'Basic Analysis' file of the 'Bot Analytics' section \

1. Open docs_haptik > docs > bot-analytics and upload the image in the 'assets' folder.
2. Open the 'basic-analysis.md' file and add the following markdown: ![Overview Users](assets/basic-overview-users.png)Preview changes and ensure that the spellings are written correctly \

## Documentation Review

While reviewing documentation written by someone else, ensure that they've adhered to the grammar and page mechanics guidelines. It is also important to consider that each person will have a unique style of writing documentation.

Carry out the *Flesch Kincaid Grade Level Readability Test*

While suggesting improvements, include links to the documentation & the best practises to avoid conflicts about implementation.
