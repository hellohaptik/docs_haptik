### Bot Building Process

After years of experience and multiple trial and errors we have come up with a process that helps build high quality bot. This process keeps quality at the forefront and then optimizes for time, communication overhead and complexity.

Every bot should go through the below phases to be able to delivery quality

##### Solutioning

Owner: Program Manager

In this phase the owner solutions and architects the bot which needs to be built. Below are some the key things to follow:

- Identify the right use cases for the bot to solve
- Build prototypes and basic mock ups to visualize a bot
- Conduct user research to understand usage behaviour
- Build detailed flow charts to cover ideal conversation flows
- Identify basic FAQs which surround the use case of the bot
- Identify as many edge cases and negative scenarios the bot should take care of
- Identify the right key metric to track 
- Identify internal and external dependencies to get the bot built
- Basic architecture and tech evaluation to avoid major unknowns in the future

Outcome: Detailed SOW with all internal and external stakeholder dependencies and timelines (comes from the developer). Get requirements, dependencies, architecture, but design, timelines signed off by all stakeholders. We can share some sample SOWs that we have created in the past. 

##### Content creation

Owner: content creator

In this phase a content creator starts to define how the bot should respond to the various different intents the bot can answer.

- Identify the tone and personality of the bot
- Create replies for the various intents the bot can answer to

##### Development

Owner: Engineer / AI trainer

In this phase, the PM, engineers and AI trainers should identify all the tasks required to develop a build a bot. Ideally these task should be small achievable tasks and should be taken up in 1-2 week sprints. Below are the main tasks the team should aim to achieve in this phase

- Use the Haptik bot builder to build out all the conversation flows as per the SOW
- Use internal and external API to build out business logic for the bot to complete its tasks
- Test the bot end to end on staging environments


##### UAT

Owner: QA

In this phase, the bot is sent out to stakeholders and a random group of users who try out the bot. The goal here is to get an idea of how the bot works for various users and to make sure all the requirements are met.

- Get stakeholders to try the bot and give sign off
- Identify and fix bugs
- Analyze usage patterns to identify missed chat flows

##### Production

Owner: customer success / same team as above

In this phase the bot is sent to production, but someone still keeps an eye out on usage patterns to make sure the bot is able to answer majority of the users queries.

- Make bot available to the public
- Keep a close out to identify missed intents
- Continuously monitor and improve the bot



### People Required

To take care of the phases above it is important to create a team (we call it a pod) with varied skill sets who can be self sufficient and take care of the bot end to end within themselves. Below are the list of skill sets, roles and responsibilities of people required to take care of all different aspects of bot building.

##### Program Manager

- Solution and design a bot based on through analysis of requirements, users and industry. 
  - Identify the right business first use cases that solve the problem. 
  - Evaluate and communicate the key metric to track for the bot to be successful
  - Prepare a detailed bot design doc showcasing how the bot is expected to work. Try and cover as many edge cases and possible scenarios.
  - Prepare a detailed SOW with all designs, dependencies, architecture and timelines
- Manage the bot development process end to end
  - Communicate the bot requirements to the rest of the team 
  - Clearly define dependencies on internal and external teams
  - Drive sprint planning and daily scrums
  - Review the bot during development to ensure it is in line with SOW and meets quality standards
  - Support bot development by answering product queries, resolving blockers/alerts
  - Set up sprint goals and create tickets for Development
  - After QA sign-off, coordinate with UX teams for getting sign-off
  - Work closely with QAs and Developers during the UAT phase to help with prioritization, planning, and execution of UAT feedback. Ensure external and internal teams are clearly aware of timelines committed during the UAT phase. 
- Internal and external communication 
  - Ensure delivery team is aware of and on track for commitments
  - Ensure external parties are periodically given a status update with new developments, delays, dependencies & blockers getting called out
  - Coordinate with the external parties to go live



##### Integration Engineer

- Understand, architect, design and estimate Bot development timelines during solutioning
- Provide technical inputs to PMs during solutioning
  - Evaluate the technical feasibility of use cases
  - API evaluation
  - Tech team coordination - calls, meetings for new API development
- Develop bots solutioned by PMs in Sprints. Participate in sprint planning, daily scrums and retrospectives
- Support PMs during bot delivery in:
  - Evaluation and estimates of UAT feedback
  - Reprioritization of sprint goals and commitments in cases of delays/changes.
- Coordinate with various tech teams for any technical/API related clarifications during bot development
- Fix bugs raised by QA/stakeholders/CS teams 
- Move bot to production
- Identify, develop and/or coordinate the development of tools and processes that improve the overall Bot Delivery process



##### QA Engineer

- Participate in bot development kickoffs, assess and create test cases for Bots during solutioning
- Test bots on completion of development & coordinate with developers for fixes. Own the QA phase.
- Drive completion of UAT phase

1. - Evaluate, prioritize, and create the necessary ticket for bugs raised by internal and external stake holders and work towards getting final sign-off. Raise alerts on out of scope or new requirements with PMs.
   - Work closely with PMs to ensure UAT tickets are planned for and completed.
   - Coordinate with internal and external teams for setting up meetings, follow-ups during UAT phase

- Lead the support during customer success phase

- - Evaluate, prioritize, and create necessary tickets for bugs raised by users. Raise alerts on new scope tickets with PMs.
  - Work closely with PMs and developers to get estimates for tickets and communicate back with CS team.
  - Work closely with PMs to ensure CS team’s tickets are planned for and completed.

##### AI Trainer

- Develop bot use cases that do not involve or have minimum involvement of Integration Engineers - Static Flows, FAQs etc
- Coordinate with internal and external teams during bot development for requirements of use cases assigned (Content, FAQs)
- Coordinate with Integration Engineers to integrate their flows with the rest of the bot
- Fix bugs raised during QA and UAT phase of development

##### Content Creator

- Handle all content related tasks during the entire cycle of bot development
  - FAQs clean-up and set-up for development
  - Static content review and the addition of variants.
- Coordinate with other developers, PMs and other stakeholders wherever necessary to finalize on content
- Review content post development (before going into production).

Do note, that even though we have defined owner of each phase, all the members of the team should be involved and aware of every phase as there are inputs needed from different people of the team at every stage.