const services = require("../services/post.service");

const createNews = async(req,res) => {
    try {
        const responsive = await services.createService(req.user,req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const news = async(req,res) => {
    try {
        const responsive = await services.newsServices();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message:"Interal Server Error"
        })
    }
}

const newsUser = async(req,res) => {
    try {
        const responsive = await services.newsUserServices(req.user);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message:"Interal Server Error"
        })
    }
}

const comment = async(req,res) => {
    try {
        const responsive = await services.createCommentService(req.user,req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const comments = async(req,res) => {
    try {
        const responsive = await services.commentService(req.params);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const deleteNews = async(req,res) => {
    try {
        const responsive = await services.deleteNewsService(req.params);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const detailNews = async(req,res) => {
    try {
        const responsive = await services.detailNewsService(req.params);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const createYtbs = async(req,res) => {
    try {
        const responsive = await services.createYtbService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const ytbs = async(req,res) => {
    try {
        const responsive = await services.ytbService();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

module.exports = {
    createNews,
    news,
    comment,
    comments,
    newsUser,
    deleteNews,
    detailNews,
    createYtbs,
    ytbs
}

