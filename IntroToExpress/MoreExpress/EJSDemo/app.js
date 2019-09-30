var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("home");
});

app.get("/love", function(req, res){
    res.render("love");
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My pet bunny", author: "Carlos"},
        {title: "Can you believe this?" , author: "George"},
    ];
    res.render("posts", {posts: posts});
});

app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });