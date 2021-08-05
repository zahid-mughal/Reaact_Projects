var express = require("express");
var app = express()

app.get("/" ,function(req,res_){
    console.log("simple log")
    // to get app functions
    // console.log(app)
    res_.send("hello world zahid")

})
app.set('port',process.env.PORT || 5000);
app.listen(app.get('port'),function(){
    console.log("listing port"+app.get('port'));
})


// app.listen('5000',(err)=>{
//     if(err){
//         console.log("something went wrong")
//     }
// })