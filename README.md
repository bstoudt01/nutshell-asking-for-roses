# Nutshell: The Information Dashboard

## Authors 
Team: Asking for Roses - David Larsen, Brett Stout, Tasha Lane, Sisi Freeley

## Description
Group project at Nashville Software School. As a team we received tickets to create a single-page application using vanilla Javascript which allows the user to store friends, messages, tasks, events, and articles to a database which is dynamically displayed on the DOM. Users can also chat with each other via a message/chat box and add each other as friends and save to a friends list.

## Installation
Steps to get started:
1. git clone git@github.com:nss-day-cohort-41/nutshell-asking-for-roses.git
2. cd into the directory it creates.
3. mkdir api
4. touch api/database.json
5. json-server-p 8088 w- database.json
6. Open localhost:8088 in browser.
7. Open new terminal window.
8. cd in directory created.
9. serve
10. Open localhost:5000 in browser.

> **Note:** Your `database.json` file is already in the `.gitignore` file for this project, so it will never be added to the repo or pushed to Github.

To start you off, here's an example of what the resources in your API should look like once it's populated with some data from your application.

### Users

```json
{ "id": 1, "username": "Steve", "email": "me@me.com", "password": "xxxxxxxxxxxxxxxxxxxxx" }
```

### Messages

```json
{ "id": 1, "userId": 1, "message": "What's up?" }
```

### News

```json
{
    "id": 1,
    "userId": 2,
    "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/",
    "title": "Wormholes Allow Information to Escape Black Holes",
    "synopsis": "Check out this recent discovery about workholes"
}
```

### Friends

```json
{ "id": 1, "userId": 1, "following": 3 }
```

### Tasks

```json
{ "id": 1, "userId": 3, "task": "Take out garbage", "complete": false }
```

## Overview of Features
This app is an easy to use social media application allowing our user to create messages, add tasks, schedule events and keep up with current articles. When the user accesses the site they will begin at "Asking for Roses" registration page. Then they will login with secure email, default user name, and their own unique password. Users then can send and receive messages, chat with friends, create tasks to remind the user to complete them. 

The application displays current interest articles that can accessed through the url provided by whoever posted it. The friends list saves and allows user to search for other friends. The friends list will also allow you to delete and add the friends you follow. 

The events section should allow the user to view their upcoming events and perform full CRUD functionality on each entry.

## Technologies Used

* This project utilizes the following:
    * HTML
    * CSS
    * JavaScript
    * JSON server for database information storage and retrieval

## Skills Utilized
* We utilized all skills and concepts learned up to this point in our time here at NSS, including:
   * Google Docs/Slides Processing Book
   * Sketchboard
   * Modular vanilla JavaScript 
   * Semantic HTML
   * Persistent data storage with JSON Server
   * Relational data and how to manipulate and access this information through JSON relationships and fetch calls
   * dbdiagram
   * Scrum workflow
   * CSS Styling
   * CRUD
   * Git and GitHub
   * Awesome Teamwork






