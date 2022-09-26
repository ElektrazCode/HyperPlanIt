const express = require("express");                     // imports the express package, which facilitates server creation and handling
const app = express();                                  // makes an instance of express and storing it in a constant app
const mongoose = require("mongoose");                   // imports the mongoose package, which helps us create a schema for our data and communicating with MongoDB
const passport = require("passport");                   // imports the passport package, which helps us with adding an authentication feature
const session = require("express-session");             // imports the session package, which helps us with session creation and handling
const MongoStore = require("connect-mongo")(session);            // imports the connect-mongo package, which allows us to create a session connection to the DB
const methodOverride = require("method-override");      // imports the method-override package, which allows us to override the POST method in a form to be able to use PUT & DELETE instead.
const flash = require("express-flash");                 // imports the flash package, which allows us to define a flash message and render it without redirecting the request
const logger = require("morgan");                       // imports the morgan package, which allows http request logging
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");            // imports the main routes from the routes/main file 
const loginRoutes = require("./routes/login");  // imports the dashboard routes from the routes/dashboard file 
const listsRoutes = require("./routes/lists");  // imports the dashboard routes from the routes/dashboard file 

require("dotenv").config({ path: "./config/.env" }); 

// Passport config
require("./config/passport")(passport);

connectDB();                                            //Connect To Database

app.set("view engine", "ejs");                          //Using EJS as a templating language for rendering views 

app.use(express.static("public"));                      //Folder holding all static files like images, icons, fonts, html, css, js
app.use(express.urlencoded({ extended: true }));        //helps with body parsing
app.use(express.json());
app.use(logger("dev"));                                 //logging
app.use(methodOverride("_method"));                     //Use forms for put / delete

// Setup Sessions - stored in MongoDB
app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      // store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
      store: new MongoStore({mongooseConnection: mongoose.connection}), 
    })
  );

  // Passport middleware
app.use(passport.initialize());
app.use(passport.session());


//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes for which the server is listening
app.use("/", mainRoutes);
app.use("/login", loginRoutes);
app.use("/lists", listsRoutes);

app.listen(process.env.PORT, () => console.log("Server is running on port", process.env.PORT));