const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const initRoutes = require("./routes/initRoutes.routes");
const database = require("./config/connectDatabase");
require("dotenv").config();

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT,
    methods: ["DELETE", "POST", "PUT", "GET"]
}
))
database.connect();
initRoutes(app);
app.listen(PORT, () => {
    console.log("App listening on port", PORT);
})