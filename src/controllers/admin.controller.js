const servers = require("../services/admin.service");

const banners = async(req,res) => {
    try {
        const responsive = await servers.getBannersService();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const createBanners = async(req,res) => {
    try {
        const responsive = await servers.createBannerService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const deleteBanner = async(req,res) => {
    try {
        const responsive = await servers.deleteBannerService(req.params);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const deleteCourses = async(req,res) => {
    try {
        const responsive = await servers.deleteCoursesService(req.params);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const createNews = async(req,res) => {
    try {
        const responsive = await servers.createNewsService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const createYoutube = async(req,res) => {
    try {
        const responsive = await servers.createYoutubeService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const youtubes = async(req,res) => {
    try {
        const responsive = await servers.youtubeService();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const createCourses = async(req,res) => {
    try {
        console.log(req.user,req.body);
        const responsive = await servers.createCoursesService(req.user,req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const courses = async(req,res) => {
    try {
        const responsive = await servers.coursesService(req.params,req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const getOnecourses = async(req,res) => {
    try {
        const responsive = await servers.coursesOneService(req.params);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

module.exports = {
    banners,
    createBanners,
    deleteBanner,
    createNews,
    createYoutube,
    youtubes,
    createCourses,
    courses,
    deleteCourses,
    getOnecourses
}