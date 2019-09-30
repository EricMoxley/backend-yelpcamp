const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "woof",
        cat: "meow",
        goldfish: "...",
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says " +sound);
});

app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = req.params.times;
    var result = "";

for(var i = 0; i < times; i++){
        result += message + " ";
}
    res.send(result);
})

app.get("*", function(req, res){
    res.send("NOPE!");
});

app.listen(3000, function() { 
    console.log('Server listening on new port 3000 Express Exercise'); 
  });