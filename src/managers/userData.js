const User = require('../models/User');


//prueba Dashboard usuario
class UserManager {
static userData = async (req, res) => {
    try{
        const dataUser = await User.findOne(body);
        return res.json({data: {
                title: 'ruta protegida',
                user: dataUser 
            }});
    }catch (error){
        return error
    };
}
}
module.exports = UserManager;