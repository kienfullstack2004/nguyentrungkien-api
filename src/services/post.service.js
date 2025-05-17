const { v4 } = require("uuid");
const data = require("../models");

const createService = ({ id }, { title, dess, desshort, image }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.PostList.create({
            id: v4(),
            title, dess, desshort, image,
            author: id
        })
        relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "OK" : "Fail",
        })
    } catch (error) {
        return reject(error);
    }
})

const newsServices = () => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.PostList.findAll({
            include: [
                { model: data.User, attributes: ["username"], as: "userdetail" }
            ],
            order: [["createdAt", "DESC"]]
        })
        relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "OK" : "Fail",
            news: responsive ? responsive : null
        })
    } catch (error) {
        return reject(error);
    }
})

const createCommentService = ({ id }, { message, code }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.Comment.create({
            id: v4(),
            author: id,
            message,
            code
        })
        relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "Create comment succeess!" : "Create comment fail!"
        })
    } catch (error) {
        return reject(error);
    }
})

const commentService = ({ id }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.Comment.findAll({
            where: { code: id },
            include: [
                { model: data.User, attributes: ["username", "avatar"], as: "userComment" }
            ]
        });
        return relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "OK!" : "Fail!",
            comment: responsive ? responsive : null
        });
    } catch (error) {
        return reject(error);
    }
})

const newsUserServices = ({ id }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.PostList.findAll({
            where: { author: id },
            include: [
                { model: data.User, attributes: ["username"], as: "userdetail" }
            ]
        });
        return relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "OK!" : "Fail!",
            news: responsive ? responsive : null
        });
    } catch (error) {
        return reject(error);
    }
})

const deleteNewsService = ({ id }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.PostList.destroy({
            where: { id }
        })
        relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "Deleted" : "Fail"
        })
    } catch (error) {
        reject(error)
    }
})
const detailNewsService = ({ id }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.PostList.findOne({
            where: { id },
            include: [
                { model: data.User, attributes: ["username"], as: "userdetail" }
            ]
        })
        relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "OK" : "Fail",
            news: responsive ? responsive : null
        })
    } catch (error) {
        reject(error)
    }
})

const createYtbService = ({ code, type, log }) => new Promise(async (relsove, reject) => {
    try {
      
        const responsive = await data.Youtube.create({
            id:v4(),
            code,
            type,
            log
        })
        relsove({
            code:responsive?0 : 1,
            message:responsive? "OK" : "Fail"
        });
    } catch (error) {
        return reject(error);
    }
})
const ytbService = () => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.Youtube.findAll({})
        relsove({
            code:responsive? 0 : 1,
            message:responsive ? "Success" : "Fail",
            ytbs:responsive ? responsive : null
        });
    } catch (error) {
        return reject(error);
    }
})

module.exports = {
    createService,
    newsServices,
    createCommentService,
    commentService,
    newsUserServices,
    deleteNewsService,
    detailNewsService,
    createYtbService,
    ytbService
}