require('dotenv').config()
const express = require("express");
const app = express();

const port = process.env.PORT || 8080;


app.get('/twitter',(req, res) =>{
    res.send('hello prashant')
})

app.get('/login',(req, res) =>{
    res.send('<h1>hello login page</h1>')
})

app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
})
