<h1 >
    <b>Yoga Registration </b> 
<br>
</h1>

## What is this for?

This is a Yoga Class Registration & Login systems app done with Node.js Framework using MongoDB(Atlas) as the data store, Express as the routing system, Body-parser as the parser for webpage, Express-session used to track the user's session and of course Mongoose to make interacting with Mongo from Node easy.

## Getting Started

## Running the tests

### •Registration Form:

Allows the user to register their account by filling their Email, Username, Password.

![image](https://user-images.githubusercontent.com/55663137/207046894-84eba311-9132-4ac8-907f-1dec464579de.png)

### •Login Form:

If the user has been registered on the app, can login by passing the credentials.

![image](https://user-images.githubusercontent.com/55663137/207046989-836c5f44-9eaf-40e4-9b55-6dbcbcec414c.png)

### •User's Profile:

After the user logged in, a simple profile with the user's username and password and batch time and paymeny info <br>displayed with a session Logout button.

![image](https://user-images.githubusercontent.com/55663137/207047153-e15751ee-5103-433d-9cc4-8e2154de9a39.png)

### ER Diagram

The ER diagram for the given system at the moment is:

### DataBase:

Here we use Mongodb as the database. Here we have two collection created, named as:

- users.
- sessions.

## Prerequisites

Tools that we need to run this app:

- **_[Node.js](https://nodejs.org/en/)_**
- **_[Node Package Manager](https://www.npmjs.com/get-npm)_**

## Installing

```
npm install
```

## To Run the App

```
node server.js
```

The server will start Running on

- http://localhost:3000/
