require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const database = require("./config/connectDatabase");
const initRoutes = require("./routes/initRoutes.routes");
database.connect();

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())
// app.use(cors({
//     origin: process.env.CLIENT,
//     methods: ["DELETE", "POST", "PUT", "GET"]
// }))
app.use(cors({
    origin: "*",
    methods: ["DELETE", "POST", "PUT", "GET"]
}))
initRoutes(app);

const listening = app.listen(PORT, () => {
    console.log("App listening on port " + listening.address().port);
})