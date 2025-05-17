const services = require("../services/user.service");

const userCurrent = async(req,res) => {
    try {
        const responsive = await services.userCurrentServies(req.user);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const updateUser = async(req,res) => {
    try {
        const responsive = await services.updateUserService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

module.exports = {
    userCurrent,
    updateUser
}