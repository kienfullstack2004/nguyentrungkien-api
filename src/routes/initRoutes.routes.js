const initAuth = require("./auth.routes");

const initAdmin = require("./admin.routes");

const initUser = require("./user.routes");

const initPost = require("./post.routes");

const initRoutes = (app) => {
    app.use('/',initAuth);
    app.use('/admin',initAdmin);
    app.use('/public',initPost);
    app.use('/current',initUser);
    app.use('/',(req,res)=>{
        res.send("Not Found!");
    });
}

module.exports = initRoutes;