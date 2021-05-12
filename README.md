# Project Name
CodeHouse
## Description

CodeHouse serve the purpose of connecting web developers all around the world. It's a social network to discuss anything code related, make new friends and chat.
 
## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **posts list** - As a user I want to see all the posts available so that I can choose which ones I want to comment on and like/dislike
- **create posts** - As a user I want to create posts so that I can share it with the community
- **posts comments** - As a user I want to see the comments and likes/dislikes on my posts and on other peoples posts 
- **adding friends** - As a user I want to be able to add friends and connect with them
- **chat messaging** - As a user I want to be able to message my friends and get replies 

## Backlog

List of other features outside of the MVPs scope

User profile:
- see my profile
- upload my profile picture
- see other users profile
- list of posts created by the user
- see comments, likes/dislikes

Geo Location:
- add geolocation to posts when created

Homepage
- ...

## ROUTES:

- GET / 
  - renders the homepage
- GET /auth/signup
  - redirects to / if user logged in
  - renders the signup form (with flash msg)
- POST /auth/signup
  - redirects to / if user logged in
  - body:
    - username
    - email
    - password
- GET /auth/login
  - redirects to / if user logged in
  - renders the login form (with flash msg)
- POST /auth/login
  - redirects to / if user logged in
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)

- GET /posts
  - renders all posts list + the create post
- POST /posts/create 
  -create a post
- PUT /posts/:id
-update a post
- DELETE /posts/:id
  -delete a post
- PUT /posts/:id/like
  -like a post
- GET /profile/:username
  - renders user's all posts

- POST / 
  - creates message

- GET /:conversationId
  - render messages

## Models

User model
 
```
username: String
email: String
password: String
profilePicture: String
followers: Array
follows: Array
city: String
```

Post model

```
owner: ObjectId<User>
date: Date
location: String
img: String
likes: Array
``` 

Message model

```
conversationId: ObjectId<User>
sender: String
text: String

```

## Links

### Git

The url to your repository and to your deployed project

[Server Repository Link](https://github.com/robertnagy92/CodeHouse-Server)

[Client Repository Link](https://github.com/robertnagy92/CodeHouse-Client)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)