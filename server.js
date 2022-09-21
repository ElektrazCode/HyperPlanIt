const express = require("express");                     // imports the express package, which facilitates server creation and handling
const app = express();                                  // makes an instance of express and storing it in a constant app
const logger = require("morgan");                       // imports the morgan package, which allows http request logging
const mongoose = require("mongoose");                   // imports the mongoose package, which helps us create a schema for our data and communicating with MongoDB
const mainRoutes = require("./routes/main");            // imports the main routes from the routes/main file 
const connectDB = require("./config/database");

connectDB();                                            //Connect To Database

app.set("view engine", "ejs");                          //Using EJS as a templating language for rendering views 

app.use(express.static("public"));                      //Folder holding all static files like images, icons, fonts, html, css, js
app.use(express.urlencoded({ extended: true }));        //helps with body parsing
app.use(express.json());
app.use(logger("dev"));                                 //logging

//Setup Routes for which the server is listening
app.use("/", mainRoutes);

app.listen(process.env.PORT, () => console.log("Server is running on port", process.env.PORT));