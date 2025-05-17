const data = require("../models");

const userCurrentServies = (user) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.User.findOne({
            where: { id: user.id },
            attributes: {
                exclude: ["password"]
            }
        })
        return relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "OK!" : "Fail!",
            users: responsive
        })
    } catch (error) {
        return reject(error);
    }
})

const updateUserService = ({ id, username, email, avatar, youUrl, twiUrl, faceUrl }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.User.update({
            username, email, avatar, youUrl, twiUrl, faceUrl
        }, {
            where: { id }
        })
        return relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "Updated!" : "Fail!",
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports = {
    userCurrentServies,
    updateUserService,
}