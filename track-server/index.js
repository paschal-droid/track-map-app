const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv").config();
const cors = require('cors');
const authRoute = require('./routes/auth');
const trackRoute = require('./routes/trackRoutes');
const verify = require('./middlewares/verify')



const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));


app.use('/', authRoute)
app.use('/', trackRoute)

app.get('/', verify, (req,res) => {
    res.send(`Your email is: ${req.user.username}`)
})

mongoose.connect('mongodb+srv://paschal-droid:necherempaschal@cluster0.pt3im.mongodb.net/map-appDB?retryWrites=true&w=majority').then(()=>{
    console.log("DB has connected sucessfully");
}).catch((err)=> console.log(err))


app.listen(8800,()=>{
    console.log("backend server has started");
})