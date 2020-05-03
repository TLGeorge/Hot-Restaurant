// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up 5 Available Tables
const tables = [
    {
    tablename: "Table 1",    
    name: "",
    phoneNumber: "",
    email: "",
    uniqueID: "",
},
{
    tablename: "Table 2",
    name: "",
    phoneNumber: "",
    email: "",
    uniqueID: "",
},
{
    tablename: "Table 3",
    name: "",
    phoneNumber: "",
    email: "",
    uniqueID: "",
},
{
    tablename: "Table 4",
    name: "",
    phoneNumber: "",
    email: "",
    uniqueID: "",
},
{
    tablename: "Table 5",
    name: "",
    phoneNumber: "",
    email: "",
    uniqueID: "",
}
];
 
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  
  // Displays all characters
  app.get("/api/reservations", function(req, res) {
    return res.json(tables);
  });
  
  // Displays a single character, or returns false
//   app.get("/api/reservations/:table", function(req, res) {
//     var chosen = req.params.table;
  
//     console.log(chosen);
  
//     for (var i = 0; i < table.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
  
//     return res.json(false);
//   });