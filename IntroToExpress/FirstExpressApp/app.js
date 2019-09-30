const express = require("express");
const app = express();

// "/" => "Hello!"
app.get("/", function(req, res){
    console.log('Someone requested this page!');
    res.send("Hello!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/pog" => "champ!"
app.get("/pog", function(req, res){
    res.send("champ!");
});

app.get("*", function(req, res){
    res.send("NOPE");
});

app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });