# Teams in Agent Chat

Read this document to know about the **Team** feature in Agent Chat. Team is a feature used by Team Leaders who are responsible to manage a team of agents.

## What is a team?
A team is a group of agents who are trained to handle user queries related to a specific topic. The team can be divided based on the subject matter/location of a user/expertese of agents etc. The logic for team routing can be defined as per the requirement. 


## Business Configurations for Enabeling Chat Assignment to a Team

A team can receive chats from a business in 2 possible configurations

- If a Business is **Bot + Human Assisted** 
https://www.dropbox.com/s/u0ulqf4l192z7cv/Screenshot%202019-03-12%2016.52.37.png?dl=0

- If a Business is **Completely Human Assisted**
https://www.dropbox.com/s/kja50v665n1xauz/Screenshot%202019-03-12%2016.51.47.png?dl=0

_Note: If a Business is **Completely Bot Assisted**, the chat will never be assigned to a team._
https://www.dropbox.com/s/kja50v665n1xauz/Screenshot%202019-03-12%2016.51.47.png?dl=0




## Example

https://www.dropbox.com/s/ppy6zhv5fjcatzs/Screenshot%202019-03-12%2017.09.32.png?dl=0

In the above example, Airtel is a partner. There are three teams, which lie under Airtel as a Partner. Teams are not directly associated with a business. They are associated with nodes in the chatflow for a particular bot.

Note: Every Business has a default team in case no team is detected.

Note: For no bot condition, the default team is the only team a partner can have)


## Chat routing to a team

There are three ways in which a chat can be assigned to a team



1. Routing from a bot's node
2. Manual Assignment
3. Team routing from Business (When a business has no bots)



## How to create a team?



### Step 1 - Write Team name

The team name is used for internal purpouse for the Team Leaders & Agents. A user will never see the team name of know about the team assigned to him.

### Step 2 - Select Team Owner(Client)

Select the company to which the team belongs. This is used by agencies who deal with multiple clients at a given time.

### Step 3 - Select Team Status (Online/ Offline)

Team status defines if the team can receive chats from a business or not.

Online - Team will receive chats from a business
Offline - Team will not receive chats from a business

### Step 4 - Setup Team Offline message

If a team status id defined as offline, the team should configure 
### Step 5 - Setup Team Delay Message and Delay Time

## How to Manage Agents of a Team



1. Add Agents
2. Remove agents
3. View no. od queues, active, waiting for user chats
4. View Agent status
5. View agent chats


## Team Chats



1. View team chats
2. Filter chat list based on
    1. Chat status
    2. Agents
3. Take actions on chat
    3. Assign chats to 
        1. Self
        2. Team
        3. Agent
    4. Report inappropriate
    5. View User details


## Team Analytics



1. View Team level statistics
2. View agent level statistics
3. Set duration

## What is a Default Team?

There can be a situatuion when the team routing logic fails and no team is shortlisted to assign a chat. In that case, the chat is assigned to the default team.

### Step 1 - Create A Team in Agent Chat

Make a team in agent chat which is supposed to take chats which are not assigned to any team(due any technical reason).

### Step 2 - Select Default team in business Manager

Open General Settings in business manager & set the default team.

https://www.dropbox.com/s/zlr76opfokzrzav/Screenshot%202019-03-12%2016.54.15.png?dl=0

## Tips to manage a Team

✅ Track No. of Delayed Chats and reduce them at peak hours

✅ Track No. of Live Chats at a given time

✅ View Team Analytics for a given time frame

✅ View Agent Analytics to compare agent performance

✅ View Individual Chats to get quality feedback

✅ Analyze end of day conversation wise reports
