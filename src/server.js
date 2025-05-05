require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const initRoutes = require("./routes/initRoutes.routes");
const database = require("./config/connectDatabase");
const initAuth = require("./routes/auth.routes");
const service = require("./services/auth.service");
database.connect();

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT,
    methods: ["DELETE", "POST", "PUT", "GET"]
}))

app.use('/',initAuth);
app.get("/home",(req,res)=>{
    return res.send("Hello");
})
const users = async(req,res) => {
    const responsive = await service.usersService();
    return res.status(200).json(responsive);
}

app.get('/users',users);


const listening = app.listen(PORT, () => {
    console.log("App listening on port " + listening.address().port);
})