const express = require("express");
const app = express()
const PORT = 3000;
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html" )
})

app.get("/circle",(req,res)=>{
    res.sendFile(__dirname + "/circle.html" )
})
app.post("/circle",(req,res)=>{
    const radious = req.body.radious
    console.log(radious);
    const result = Math.PI * radious * radious
    res.send(`Result of circle radious = ${result}`)
})

app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname + "/triangle.html")
})

app.post("/triangle",(req,res)=>{
    const Base = req.body.Base;
    const Heigth = req.body.Heigth
    const result = 0.5 * Base * Heigth
    res.send(`The result of triangle area = ${result}`)
})


app.listen(PORT,(req,res)=>{
    console.log(`Server run successfully http://localhost:${PORT}`);
})
