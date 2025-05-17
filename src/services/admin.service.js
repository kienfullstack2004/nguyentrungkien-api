const data = require("../models");
const { v4 } = require("uuid");

const createBannerService = ({ image }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.Banner.create({
            id: v4(),
            image,
        })
        relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "Tạo banner thành công !" : "Không tạo được"
        })

    } catch (error) {
        return reject(error);
    }
})

const getBannersService = () => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.Banner.findAll({})
        relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "OK !" : "Error",
            banners: responsive
        })
    } catch (error) {
        return reject(error);
    }
})

const deleteBannerService = ({ id }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.Banner.destroy({
            where: { id }
        })
        relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "Deleted!" : "Fail!"
        });
    } catch (error) {
        return reject(error);
    }
})
const deleteCoursesService = ({ id }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.Courses.destroy({
            where: { id }
        })
        relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "Deleted!" : "Fail!"
        });
    } catch (error) {
        return reject(error);
    }
})

const createNewsService = ({ username }, { }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.PostList.create({
            id: v4(),
            title,
            desshort,
            dess,
            image,
            author: username
        })
    } catch (error) {
        return reject(error);
    }
})

const createYoutubeService = ({ code, type, blog }) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.Youtube.create({
            id: v4(),
            code,
            type,
            blog
        })
        relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "Create Youtube Success!" : "Create Youtube Fail!"
        })
    } catch (error) {
        return reject(error);
    }
})

const youtubeService = () => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.Youtube.findAll({})
        relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "OK!" : "Fail!",
            youtubes: responsive ? responsive : null
        })
    } catch (error) {
        return reject(error);
    }
})

const createCoursesService = ({ username }, { title, dess, image, time, desshort, price, price_sale }) => new Promise(async (relsove, reject) => {
    try {

        console.log(username);

        const responsive = await data.Courses.create({
            id: v4(),
            title,
            dess,
            price,
            desshort,
            price_sale,
            time,
            image,
            author: username
        })
        console.log(username)
        relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "Created!" : "Fail",
        })
    } catch (error) {
        return reject(error);
    }
})

const coursesService = () => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.Courses.findAll({})
        relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "OK" : "Fail",
            courses: responsive ? responsive : null
        })
    } catch (error) {
        return reject(error);
    }
})

const coursesOneService = ({id}) => new Promise(async (relsove, reject) => {
    try {
        const responsive = await data.Courses.findOne({
            where:{id}
        })
        relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "OK" : "Fail",
            courses: responsive ? responsive : null
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports = {
    createBannerService,
    getBannersService,
    deleteBannerService,
    createNewsService,
    createYoutubeService,
    youtubeService,
    createCoursesService,
    coursesService,
    deleteCoursesService,
    coursesOneService
}