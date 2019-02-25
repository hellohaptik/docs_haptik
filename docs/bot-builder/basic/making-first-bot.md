---
title: Making Your First Bot
---

To start building your first bot, log in to the [Haptik platform](https://staging.hellohaptik.com/home/) using credentials that were shared with you via email. Once you've successfully logged in, navigate to the Bot Builder Tool. You will be directed to the bot builder homepage.

Click the "*+ New Bot*" button, located in the upper left hand corner of the page:

![createbot_header_may](assets/createbot_header_may.png)

Now, a pop-up will appear with prompts to configure your bot's basic details:

![createbot_popup_may](assets/createbot_popup_may.png)

Fill the bot details according to the instructions given here:

- **Bot Name (in chatflow)**: Give your bot a name. Note that bot names may not be replicated. This is visible on the chat window for the end users.

- **Bot Name (in backend)**: Only lower case characters, numbers, underscore and spaces are allowed in this field. This name is visible on the backend for bot builders.

- **Bot Description**: Describe thr purpose of your bot. This text here isn't visible anywhere on frontend. Moreover, this text field here works as a reference for everyone.

- **Test Business**: If you aren't yet familiar with the organizational system used to classify bots, we recommend you read the full overview [here](https://docs.haptik.ai/bot-builder/basic/bot-heirarchy) before continuing with your bot building. _As a refresher, a [business](https://docs.haptik.ai/bot-builder/basic/business) is a single bot or cluster of bots that can be deployed across a single partner or multiple partners._ This field is where you'll set the test business for your bot, which is a prerequisite to using the Test Chat feature in the bot building graph. When you test your bot in the graph, you'll be able to test not just the individual bot you're working on, but also the other bots that are live within a business that's been deployed on a particular partner. Because bots can be deployed across multiple businesses and certain business level chat settings can be customized for the different partners it's live on. Setting a test business becomes mandatory because this determines which business/settings the test chat feature will allow users to interact with.

- **Test Partner**: Just like businesses, partners are another component of the platform's organizational hierarchy. _In short, a partner is the bot building tool's largest unit of organization, and is a single business or cluster of businesses that can be deployed in multiple locations (i.e. a website, Facebook Messenger, and so forth)._ For the same reason as above, users must set a test partner to make it possible to use the Test Chat feature in the bot building graph.

One last feature to note is that while creating a new bot, you may set the test business and test partner from a list of pre-existing businesses and partners that you have access to, or you can create one here. To create a new business from the bot creation flow, first name your bot. Then navigate to the Test Business bar and type the name of the business you want to create. Select the bar below that appears that prompts you to create new business, as shown below:

![create_new_business](assets/create_new_business.png)

If you're creating a new partner as well, follow the same steps in the Test Partner bar. Note that these actions will allocate these businesses and partners as the test business and test partner for your bot, as well as create actual businesses and partners.

Click "*Create Bot*" to go on to the next page, where you'll be prompted to input the stories and sub-stories that will make up your conversation flow.

To read more about how to plan for and create stories and sub-stories, go to the next page about [creating a story flow](https://docs.haptik.ai/bot-builder/basic/creating-story) section.
