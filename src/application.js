const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors');
const userRoute = require('./routes/user.routes')


const PORT = process.env.PORT || 8000

class Application{

    constructor(){
        this.app = express();
    }

    #useMiddlewares(){
        this.app.use(cors())
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: true}))
        this.app.use('/users',userRoute)
    }

    #init(){
        this.app.listen(PORT,()=>{
            console.log(`App is running in PORT ${PORT}`)
        });
    }

    main(){
        this.#useMiddlewares();
        this.#init();
    }
    
}

module.exports = Application