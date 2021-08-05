var express = require("express");
var cors = require("cors");
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());










app.get("/", function(req,res){
    console.log("app.get / request");
    req.clientData

    res.send("app.get / response")
})
// app.post('/signup', function (req, res) {
//     // console.log(req.body)
//     console.log("app.get /signup response")
//      // logics > signup
// //    res.json({name: req.body.name})
// res.send("app.get /signup response")

//  })

app.get("/login", function(req, res){
 console.log("login request")
 let check={id:"123", name:"zahid"}
 res.status(200).json(check);
    // res.send("login succeded");
})
app.post('/signup', function (req, res) {
    console.log(req.body)
     // logics > signup
   res.json({name: req.body.name})
 })











let x=5000;
app.listen(x,(error)=>{
if(error){
    console.log("something wrong")
}else{
    console.log("server listen port :"+x)
}
})