
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));

// Setting up EJS 
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render('index');
});

app.post("/", (req, res)=>{
    const userName = req.body.userName;
    const userPassword = req.body.userPassword;

    if(userName == "student@email.com" && userPassword == "Student123!@#"){
        res.redirect("/fill-details");
    }
    else {
        res.render("sign-in-wrong");
    }
});


app.get("/fill-details",(req, res)=>{
    res.render("fill-details.ejs");
});

app.post("/sign-in-wrong", (req, res)=>{
    res.redirect("/");
});


//Getting First Name from Employment form submitted by user 
app.post("/fill-details", (req, res)=>{
    const firstName = req.body.firstName;

    res.send(firstName);
});

app.listen(PORT, function(){
    console.log("Server started at port 3000...");
})