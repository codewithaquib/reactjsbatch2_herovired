const express = require('express');
const app = express();
const courseModel = require(__dirname+'/schemas/CourseSchema.js');

const uri = "mongodb+srv://HeroVired:HeroVired@herovireddemo.g70sx.mongodb.net/nodeMongoDemo?retryWrites=true&w=majority";
const mongoose = require('mongoose');
mongoose.connect(uri);
var db = mongoose.connection;

app.use((req, res, next)=>{
    console.log("App Use");
    next();
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.get('/courses', async (req,res)=>{
    db.once('open', function() {
        var course1 = new courseModel({courseTitle:"One", coursePrice:1000});
        course1.save(function (err, course) {
            if (err) return console.error(err);
            console.log("Course added");
        });
    });
});

app.post('/', (req,res)=>{
    res.send("Posted!");
});

app.listen(3000, ()=>{
    console.log("Server started!");
});
