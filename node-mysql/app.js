const express = require("express")
const dotenv = require('dotenv')

const app = express()

dotenv.config({
    path: "./.env"
})


//route
app.get("/", (req,res) => {
    res.send("<h1> Home Page </h1>")
} )

app.listen(5010, () => {
    console.log("Server started on port 5010")
})