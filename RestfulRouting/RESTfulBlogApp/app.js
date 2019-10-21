var bodyParser = require("body-parser"),
mongoose       = require("mongoose"),
express        = require("express"),
app            = express();


//APP Config
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", function(req, res){
    res.render("landing");
});


// Mongoose/Model Config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

Blog.create({
    title: "Test Blog",
    image: "https://unsplash.com/photos/KdeqA3aTnBY",
    body: "Hello this is a blog post!"
});

// Restful Routes




app.listen(3000, function(){
    console.log("Server is running");
});

