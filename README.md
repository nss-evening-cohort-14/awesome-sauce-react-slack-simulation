# Slack Simulation
Welcome to Slack Simulation, a replica of the messaging application for organizations. 
While logged in as an authenticated user, you can see, create, edit and delete data that as a part of a messaging channel or organization (specific to you).

## Deployed Sites

https://group-slack-sauce.netlify.app

## ERDs

<img width="1440" alt="Screen Shot 2021-05-10 at 9 53 37 PM 1" src="https://user-images.githubusercontent.com/76716670/117746368-5612ed80-b1da-11eb-9246-d97480c5bdfe.png">

## Wireframes/Diagram
### [Workflow Diagram]
### [Wireframe]

https://www.figma.com/file/vUeQ7ajUIsiuHuiyhAmvML/Slack-Simulation?node-id=0%3A1

<img width="901" alt="Screen Shot 2021-05-10 at 9 51 45 PM" src="https://user-images.githubusercontent.com/76716670/117746245-18ae6000-b1da-11eb-8539-5932fe775220.png">



## Description

### Requirements
* Authenticate to perform any actions (CRUD)
* Messages
* Channels
* Organizations
* Intermediary Data
* Mock Layout/Styling 
* **Stretch goal:** Emojis, Gif Selector, Change Theme, Admin/ Authenticated User, Like/Dislike, Timestamps

### User Stories

### Authenticated User

#### Authentication
* As a user, when I am authenticated I should be able to see the dashboard.
* As a user, when I am authenticated I should be able to perform all actions on the dashboard (full CRUD) on all messages, message channels, and organization channels.
* As a user, I should be able to login via google.
* As a user, I should be able to logout.

#### Messages
* As a user, I should be able to send (C of CRUD) messages that include me.
* As a user, I should be able to see (R of CRUD) messages that include me.
* As a user, I should be able to edit (U of CRUD) messages I sent.
* As a user, I should be able to delete (D of CRUD) messages I sent.

#### Message Channels
* As a user, I should be able to add (C of CRUD) message channels that include me.
* As a user, I should be able to see (R of CRUD) message channels that include me.
* As a user, I should be able to edit (U of CRUD) message channels I created.
* As a user, I should be able to delete (D of CRUD) message channels I created.

#### Organization Channels
* As a user, I should be able to add (C of CRUD) on all organization channels that include me.
* As a user, I should be able to see (R of CRUD) on all organization channels that include me.
* As a user, I should be able to edit (U of CRUD) on all organization channels that I created.
* As a user, I should be able to delete (D of CRUD) on all organization channels that I created.


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

### ADMIN

#### Authentication
* As a user, when I am authenticated I should be able to see the message board.
* As a user, when I am authenticated I should be able to perform all actions on the dashboard (full CRU) on messages and message channels.
* As a user, when I am authenticated I should be able to perform delete on messages and message channels I have personally created.
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


#### Organization Channels
* As a user, I should be able to add (C of CRUD) on all organization channels.
* As a user, I should be able to see (R of CRUD) on all organization channels.
* As a user, I should be able to edit (U of CRUD) on all organization channels.
* As a user, I should be able to delete (D of CRUD) on all organization channels.


## Project Boards


### Screenshots

<img width="1440" alt="Screen Shot 2021-05-18 at 5 04 42 PM" src="https://user-images.githubusercontent.com/76716670/118723307-40657f80-b7fb-11eb-99ea-a9c360326241.png">


## Loom Video Walkthroughs


## Contributors
[Honey-Rae Swan](https://github.com/thedigitalmenagerie)
https://github.com/fimoefive
https://github.com/caseywalker
https://github.com/SaraSchoonover


