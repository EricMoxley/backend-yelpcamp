const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Schema setup
const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

const Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Salmon Creek",
//         image: "https://photosforclass.com/download/pixabay-3048299?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e0d14b485ba514f6da8c7dda793f7f1636dfe2564c704c732672dc9644c45d_960.jpg&user=kareni",
//         description: "Beware of bears."

//     }, function(err, campground){
//         if(err){
//         console.log(err);
//     } else {
//         console.log("Newly created campground: ");
//         console.log(campground);
//     }
// });

// const campgrounds = [
//     {name: "Salmon Creek", image: "https://photosforclass.com/download/pixabay-3048299?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e0d14b485ba514f6da8c7dda793f7f1636dfe2564c704c732672dc9644c45d_960.jpg&user=kareni"},
//     {name: "Granite Hill", image: "https://photosforclass.com/download/pixabay-1807524?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d5444f50a814f6da8c7dda793f7f1636dfe2564c704c732672dc9644c45d_960.jpg&user=sasint"},
//     {name: "Mountain Goat's Rest", image: "https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732673d19544c758_960.jpg&user=Pexels"},
//     {name: "Salmon Creek", image: "https://photosforclass.com/download/pixabay-3048299?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e0d14b485ba514f6da8c7dda793f7f1636dfe2564c704c732672dc9644c45d_960.jpg&user=kareni"},
//     {name: "Granite Hill", image: "https://photosforclass.com/download/pixabay-1807524?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d5444f50a814f6da8c7dda793f7f1636dfe2564c704c732672dc9644c45d_960.jpg&user=sasint"},
//     {name: "Mountain Goat's Rest", image: "https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732673d19544c758_960.jpg&user=Pexels"},
//     {name: "Salmon Creek", image: "https://photosforclass.com/download/pixabay-3048299?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e0d14b485ba514f6da8c7dda793f7f1636dfe2564c704c732672dc9644c45d_960.jpg&user=kareni"},
//     {name: "Granite Hill", image: "https://photosforclass.com/download/pixabay-1807524?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d5444f50a814f6da8c7dda793f7f1636dfe2564c704c732672dc9644c45d_960.jpg&user=sasint"},
//     {name: "Mountain Goat's Rest", image: "https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732673d19544c758_960.jpg&user=Pexels"},
//     {name: "Salmon Creek", image: "https://photosforclass.com/download/pixabay-3048299?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F55e0d14b485ba514f6da8c7dda793f7f1636dfe2564c704c732672dc9644c45d_960.jpg&user=kareni"},
//     {name: "Granite Hill", image: "https://photosforclass.com/download/pixabay-1807524?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d5444f50a814f6da8c7dda793f7f1636dfe2564c704c732672dc9644c45d_960.jpg&user=sasint"},
//     {name: "Mountain Goat's Rest", image: "https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732673d19544c758_960.jpg&user=Pexels"},
//     ]

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//INDEX: SHOW ALL CAMPGROUNDS
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds:allCampgrounds});
        }
    });
});

//CREATE: ADD NEW CAMPGROUNDS TO DATABASE
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    let {name, image, desc} = req.body
    let newCampground = {name: name, image: image, description: desc}
    // Create a new campground and save to database
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

// NEW DISPLAYS FORM TO MAKE NEW CAMPGROUND
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

//SHOW: SHOWS INFO ABOUT 1 CAMPGROUND.
app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
    req.params.id
    //render show template with that campground
});

app.listen(3000, function(){
    console.log("The YelpCamp Server has started!")
});
