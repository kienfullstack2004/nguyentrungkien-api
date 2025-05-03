const db = require("../models");
const {v4} = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Hash Pass  
const securityHashPass = (pass) => bcrypt.hashSync(pass,bcrypt.genSaltSync(12));

const registerService = ({username,password,email}) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await db.User.findOrCreate({
            where:{email},
            defaults:{
                id:v4(),
                username,
                password:securityHashPass(password),
                email
            },
            raw:true
        })
       relsove({
            code: responsive[1] ? 0 : 1,
            message:responsive[1] ? "Đăng ký tài khoản thành công": "Đăng ký thất bại!", 
        })

    } catch (error) {
        return reject(error);
    }
})

const loginService = ({email,password}) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await db.User.findOne({
            where:{email}
        })
        const jwtUser = {
            email:responsive?.email,
            username:responsive?.username,
            avatar:responsive?.avatar,
            role:responsive?.role,
        }
        const isPassCorrect = responsive && bcrypt.compareSync(password,responsive?.password);
        const token = isPassCorrect && jwt.sign(jwtUser,process.env.SECRET_JWT,{expiresIn:'2d'})

       relsove({
            code: token ? 0 : 1,
            message: token ? "Đăng nhập thành công" : responsive ? "Mật khẩu không chính xác!" : "Tài khoản không tồn tại",
            access_token: token || null 
        })
    } catch (error) {
        return reject(error);
    }
})

const usersService = () =>  new Promise(async(relsove,reject)=>{
    try {
        const responsive = await db.User.findAll({
            attributes:{
                exclude:"password"
            }
        });
        relsove({
            code: responsive ? 0 : 1,
            message : responsive ? "OK!" : "Lỗi hệ thống",
            users:responsive 
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports = {
    loginService,
    registerService,
    usersService
}