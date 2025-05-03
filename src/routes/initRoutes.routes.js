const initAuth = require("./auth.routes");

const initRoutes = (app) => {
    app.use('/',initAuth);
    app.use('/',(req,res)=>{
        res.send("Not Found!");
    });
}

module.exports = initRoutes;