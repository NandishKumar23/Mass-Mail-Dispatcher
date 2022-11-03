const express=require('express')
const app=express()
const nodeMailer=require("nodemailer")
const bodyParser=require("body-parser")
const { urlencoded } = require('body-parser')


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))


app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html')
})
app.post("/",function(req,res){
    const transportor=nodeMailer.createTransport({
        service:"hotmail",
        auth:{
            user:"nandishkumar6600@outlook.com",
            pass:"Nandish@1"
        }
    
    
     });
const options={
    from:req.body.from,
    to:req.body.to,
    subject:req.body.sub,
    text:req.body.content
};
transportor.sendMail(options,function(err,info){
    if(err){
        console.log(err)
        return
    }
    console.log(info.response)
})
res.redirect("/");
})



app.listen(3000,function(){
    console.log("Server ready at port 3000");
})