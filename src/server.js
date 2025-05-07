require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const database = require("./config/connectDatabase");
const service = require("./services/auth.service");
const initRoutes = require("./routes/initRoutes.routes");
database.connect();

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT,
    methods: ["DELETE", "POST", "PUT", "GET"]
}))

// controllers
// const users = async (req, res) => {
//     try {
//         const responsive = await service.usersService();
//         return res.status(200).json(responsive);
//     } catch (error) {
//         res.status(500).json({
//             code: -1,
//             message: "Interal Server Error"
//         })
//     }
// }

// routers
// app.get('/users', users);
initRoutes(app);

const listening = app.listen(PORT, () => {
    console.log("App listening on port " + listening.address().port);
})