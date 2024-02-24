const UserRepository = require('../repository/user.repository');

class UserService{

    constructor(){
        this.userRepo = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepo.create(data);
            return user;
        } catch (error) {
            console.log('user.serv-',error);
        }
    }

}

module.exports = UserService