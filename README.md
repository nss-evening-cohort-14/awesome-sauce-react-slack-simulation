# Slack Simulation
Welcome to Slack Simulation, a replica of the messaging application for organizations. 
While logged in as an authenticated user, you can see, create, edit and delete data that as a part of a messaging channel or organization (specific to you delete).
While logged in as an admin, you can see, create, edit and delete data that as a part of a messaging channel or organization (yours and everyone else's delete).

## Deployed Sites


## ERDs


## Wireframes/Diagram
### Week 1 [Workflow Diagram]
### Week 1 [Wireframe]
### Week 2-3 [Excursion Wireframes]

## Description

### Requirements
* Authenticate to perform any actions (CRUD)
* Admin/ Authenticated User
* Messages
* Message Channels
* Like/ Dislike
* Message Timestamps
* Mock Layout/Styling 
* **Stretch goal:** Emojis, Gif Selector, Change Theme

### User Stories

### ADMIN 

#### Authentication
* As a user, when I am authenticated I should be able to see the dashboard.
* As a user, when I am authenticated I should be able to send (C of CRUD) on messages and message channels.
* As a user, when I am authenticated I should be able to perform read, update, and delete (RUD of CRUD) on messages and message channels from everyone.
* As a user, I should be able to login via google.
* As a user, I should be able to logout.

#### Messages
* As a user, I should be able to send (C of CRUD) messages (must include timestamp).
* As a user, I should be able to see (R of CRUD) all messages.
* As a user, I should be able to edit (U of CRUD) all messages.
* As a user, I should be able to delete (D of CRUD) all messages.

#### Message Channels
* As a user, I should be able to send (C of CRUD) message channels.
* As a user, I should be able to see (R of CRUD) all message channels.
* As a user, I should be able to edit (U of CRUD) all message channels.
* As a user, I should be able to delete (D of CRUD) all message channels.

### Authenticated User

#### Authentication
* As a user, when I am authenticated I should be able to see the dashboard.
* As a user, when I am authenticated I should be able to perform all actions on the dashboard (full CRU) on messages and message channels.
* * As a user, when I am authenticated I should be able to perform delete on messages and message channels I have personally created.
* As a user, I should be able to login via google.
* As a user, I should be able to logout.

#### Messages
* As a user, I should be able to send (C of CRUD) messages.
* As a user, I should be able to see (R of CRUD) messages that include me.
* As a user, I should be able to edit (U of CRUD) messages I sent.
* As a user, I should be able to delete (D of CRUD) messages I sent.

#### Message Channels
* As a user, I should be able to add (C of CRUD) message channels.
* As a user, I should be able to see (R of CRUD) message channels that include me.
* As a user, I should be able to edit (U of CRUD) message channels I created.
* As a user, I should be able to delete (D of CRUD) message channels I created.


### Stretch Goals

#### Theme Update
* Add a button/link to the UI labeled "Change Theme".
* Remove the existing elements for changing the theme.
* When user click on Change Theme element, show a Bootstrap modal dialog box.
* Inside the modal, show two color picker fields - one for background color and one for font color.
* Add a Save and Cancel button to modal.
* When user clicks Save apply the chosen colors.

#### GIF Selector
* Giphy Api: Go to https://developers.giphy.com/ and set yourself up with a login and create an app (you can enter whatever information in those fields). You will be using the Search endpoint.
* Near my message input field, I would like to be able to click on Add Gif button. When I click on that button, a text field should show up in some way so that I can search for a gif.
* After searching, I would like to see some options of gifs to choose. I choose a gif by clicking on the image. The options should then disappear and I should see some indicator that I selected a gif for my message.
* When I click send on my message, the gif should appear in the dom with the message that I sent. If there was no text in the chat field, the message should only contain the gif.

#### Emojis
* As an authenticated user, I should be able to user emojis in my messages.


## Project Boards


### Screenshots



## Loom Video Walkthroughs


## Contributors
[Honey-Rae Swan](https://github.com/thedigitalmenagerie)


