var express = require('express');
var app = express();

app.get("/", function(req,res){

console.log("app.get / response");

res.send("Hello world");
})

app.get("/login", function(req,res){
console.log("app.get /login response");
    
res.send("login succed");

// res.json({key:"value"})
})
app.get('/signup', function (req, res) {
    console.log("app.get /signup response");

    // logics > signup

  res.send('hello world')
})


app.get('/forget', function (req, res) {
    console.log("app.get /forget response");

    // logics 

  res.send('hello world')
})










let x = "5002";
app.listen(x,(err)=>{
    if(err){
        console.log("something went wrong")
    }else{
        console.log("serve listen on port"+x)
    }

})