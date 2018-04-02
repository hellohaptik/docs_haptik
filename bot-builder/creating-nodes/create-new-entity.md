  - **To create a new entity**

    - Click on Create Entity if an appropriate entity doesn't exist. 

      [insert image from http://haptik-docs.readthedocs.io/en/latest/bot-builder/nodes.html]

    - Enter the name (must be a lower case, underscrore separated text) and description of an Entity. Try to make the description as relevant as possible, as it will help you better search for your entity in the future.

      [insert image from http://haptik-docs.readthedocs.io/en/latest/bot-builder/nodes.html]

    - Enter the details of the data dictionary. You can use ‘tab’ to quicky add words and variants. Once variants for a particular word are entered, press enter to store and to add new words and variants.

      [insert image from http://haptik-docs.readthedocs.io/en/latest/bot-builder/nodes.html]

    - **A few technical details**: 

      > The ‘Backup’ button will download the current data set for a dictionary.
      >
      > The ‘Upload New Dictionary’ button will upload data from a csv into the dictionary.
      >
      > Format for upload and backup: word1|variant1,variant2,variant3 word2|variant4,variant5,variant.
      >
      > Any other format will be rejected.

    - Click 'Next Step' once you're satisfied with your dictionary.

    - In the final step you can add a default message that the node should respond when the entity is detected

    - On clicking 'Save', the entity will be created.

    - You can add the newly created entity to the existing node, or you can edit the newly created entity. 