let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let campgrounds = [
    {name: "Salmon Creek", image: "https://photosforclass.com/download/pixabay-3048299?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e0d14b485ba514f6da8c7dda793f7f1636dfe2564c704c732672dc9644c45d_960.jpg&user=kareni"},
    {name: "Granite Hill", image: "https://photosforclass.com/download/pixabay-1807524?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d5444f50a814f6da8c7dda793f7f1636dfe2564c704c732672dc9644c45d_960.jpg&user=sasint"},
    {name: "Mountain Goat's Rest", image: "https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732673d19544c758_960.jpg&user=Pexels"},
    {name: "Salmon Creek", image: "https://photosforclass.com/download/pixabay-3048299?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e0d14b485ba514f6da8c7dda793f7f1636dfe2564c704c732672dc9644c45d_960.jpg&user=kareni"},
    {name: "Granite Hill", image: "https://photosforclass.com/download/pixabay-1807524?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d5444f50a814f6da8c7dda793f7f1636dfe2564c704c732672dc9644c45d_960.jpg&user=sasint"},
    {name: "Mountain Goat's Rest", image: "https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732673d19544c758_960.jpg&user=Pexels"},
    {name: "Salmon Creek", image: "https://photosforclass.com/download/pixabay-3048299?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e0d14b485ba514f6da8c7dda793f7f1636dfe2564c704c732672dc9644c45d_960.jpg&user=kareni"},
    {name: "Granite Hill", image: "https://photosforclass.com/download/pixabay-1807524?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d5444f50a814f6da8c7dda793f7f1636dfe2564c704c732672dc9644c45d_960.jpg&user=sasint"},
    {name: "Mountain Goat's Rest", image: "https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732673d19544c758_960.jpg&user=Pexels"},
    {name: "Salmon Creek", image: "https://photosforclass.com/download/pixabay-3048299?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e0d14b485ba514f6da8c7dda793f7f1636dfe2564c704c732672dc9644c45d_960.jpg&user=kareni"},
    {name: "Granite Hill", image: "https://photosforclass.com/download/pixabay-1807524?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d5444f50a814f6da8c7dda793f7f1636dfe2564c704c732672dc9644c45d_960.jpg&user=sasint"},
    {name: "Mountain Goat's Rest", image: "https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732673d19544c758_960.jpg&user=Pexels"},
    ]

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    let {name, image} = req.body
    let newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(3000, function(){
    console.log("The YelpCamp Server has started!")
});
