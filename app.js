const express = require("express");
const crypto = require("crypto");
const bodyParse = require("body-parser");

const app = express();

app.use(bodyParse.json({}));

app.get("/", (req,res)=>{
    return  res.send("Hello World in md5 : \n" +  crypto.createHash('md5').update('Hello World').digest("hex")+ "\n")
})

app.get("/md5/:text", (req,res)=>{
    return res.json({
        "original":req.params.text,
        "hashed":crypto.createHash("md5").update(req.params.text).digest("hex")
    });
})

app.get("/sha1/:text",(req,res)=>{
    return res.json({
        "original": req.params.text,
        "hashed": crypto.createHash("sha128").update(req.params.text).digest("hex")
    })
})
app.get("/sha2/:text",(req,res)=>{
    return res.json({
        "original": req.params.text,
        "hashed": crypto.createHash("sha256").update(req.params.text).digest("hex")
    })
})

app.get("/sha512/:text",(req,res)=>{
    return res.json({
        "original": req.params.text,
        "hashed": crypto.createHash("sha512").update(req.params.text).digest("hex")
    })
})

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log("server listening on port 3000");
})