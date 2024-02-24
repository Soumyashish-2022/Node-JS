class UserMiddleware{

    registrationValidator(req,res,next){
        const errArray = {name:"",email:"",password:""}
        if(!req.body.name){
            errArray.name = "Name can not be blank"
        }
        if(!req.body.email){
            errArray.email = "Email can not be blank"
        }

        if(!req.body.password){
            errArray.password = "Password can not be blank"
        }

        return res.status(400).json({
            success: false,
            message: errArray,
            data: {},
        })

        next();
    }
}

module.exports = UserMiddleware