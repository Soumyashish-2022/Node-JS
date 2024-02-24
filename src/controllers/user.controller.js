const UserService = require('../services/user.service')
const userServ = new UserService();

class UserController{

    async registerUser(req,res){
        try {
            const response = await userServ.create({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password
            });
            return res.status(201).json({
                data: response,
                success: true,
                message: 'Successfully Registered',
                err: {}
            });
        } catch (error) {
            return res.status(400).json({
                data: {},
                success: false,
                message: "User Not Registered",
                err: error
            });
        }
    }

}

/*const registerUser = async (req,res)=>{
    try {
        const response = userServ.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        });
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Successfully Registered',
            err: {}
        });
    } catch (error) {
        return res.status(400).json({
            data: {},
            success: false,
            message: "User Not Registered",
            err: error
        });
    }
}*/


module.exports = UserController