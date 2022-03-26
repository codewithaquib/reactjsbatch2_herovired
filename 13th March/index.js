const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Book = require(__dirname+'/schemas/bookSchema');
const bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect("mongodb+srv://HeroVired:HeroVired@herovireddemo.g70sx.mongodb.net/mylibrary?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected to mongo!');
});

const ejs = require('ejs');
app.set('view engine', 'ejs');
var books = [
    {
        id:100,
        title:"The Midnight Library"
    },
    {
        id:101,
        title:"Sprint"
    },
    {
        id:102,
        title:"Ted Talk"
    }
];


app.get('/',(req,res)=>{
    res.render('index',{userType:'paid', books});
});


// Showing all books
app.get('/books', function(req,res){

    Book.BookModel.find({}, function(err,result){
        if(err)
            console.log('Error : '+err);
        else
        {
            console.log(result);
            res.render('book',{result});
        }
            
    });

});

app.get('/search', (req,res)=>{
    res.sendFile(__dirname+'/views/search.html');
});

app.get('/searchBook', (req,res)=>{
    
    const searchedBook = req.query.bookName;
    Book.BookModel.find({name:searchedBook}, function(err,result){
        if(err)
            console.log('Error : '+err);
        else
        {
            console.log(result);
            res.render('book',{result, searchedBook});
        } 
    });
});

app.get('/addBook', (req,res)=>{
    res.sendFile(__dirname+'/views/addBook.html');
});

app.post('/addBook', (req,res)=>{
    Book.BookModel.create({name:req.body.bookName, author:req.body.authorName, price:req.body.bookPrice});
    res.redirect('/books');
});

// Subsribe to the library
app.get('/subscribe', function(req,res){
    res.sendFile(__dirname + '/pages/subscribe.html');
});
app.post('/subscribe', function(req,res){
    // User Schema
    const user = new mongoose.Schema({
        user_name : {
            type:String,
            required:true
        },
        user_email : {
            type:String,
            required:true
        }
    });

    const User = connection.model('User', user);

    User.create({user_name:req.body.username, user_email:req.body.useremail}, function(err){
        if(err)
            console.log("Something went wrong : "+err);
        else
        {
            console.log("User added!");
            res.redirect('/');
        }
    });

    });

// Borrowing a book
app.post('/borrow', function(req,res){
});

app.listen(3000,()=>{
    console.log("Running!");
});