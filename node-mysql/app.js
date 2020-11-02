const express = require("express")
const mysql = require("mysql")
const dotenv = require('dotenv')

const app = express()

dotenv.config({
    path: "./.env"
})

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME
})

// connect to db
db.connect( (error) => {
    if(error)
        console.log(error)
    else
        console.log("MySQL CONNECTED!!")
})

//route
app.get("/", (req,res) => {
    res.send("<h1> Home Page </h1>")
} )

app.listen(5010, () => {
    console.log("Server started on port 5010")
})