# Shopify Backend Internship Challenge
## Created with PostgreSQL, Express.js, Node.js, and React

This app is an image repository; it allows one to add save images, edit the saved images, and delete previously saved images.

### run `npm i` 
This installs all dev dependencies

### Setting up the Database
* ensure you have Postgres installed
* open psql and create the database using line 1 from database.sql
* I run Postgres from a virtual machine and ran into a problem with the postgres user; so, I created a new user and gave it access to the database. The following is how I created the database and new user:
```sudo -u postgres psql
CREATE DATABASE imagerepository;
create user shopify with encrypted password challenge;
grant all privledges on database imagerepository to shopify;
\c imagerepository shopify
```
* Change the user and password in the db.js file if needed
* Run lines 3-8 in database.sql to create the image repository table

### Ensure that the database is open and start the server
```\cd server
node index.js
```
* If the server started correctly, your console should read: "server has started on port 5000"

### `npm start`
* Once the database and server are up and running, you can run this command to get the client side up and running
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser. Due to the server and the process of cors it will likely be rerouted to a different port. For me it was port 3002.

### Testing Software
* Postman for route testing
* Chrome Dev-tools for front-end

