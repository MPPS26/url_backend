const JoiValidate = require('@hapi/joi');
const User = require ('../models/User')


const loginValidation = async (req, res, next) => {
//comprobación de los datos que van a ingresar al formulario para inicio de sesión
    const schemaLogin = JoiValidate.object({
        email: JoiValidate.string().min(6).max(50).required().email(),
        password: JoiValidate.string().min(6).max(50).required()
})

    const {error} = schemaLogin.validate(req.body)
        if(error) {
        return res.status(400).json (
            {error: error.details[0].message}
        )}
        next();
}

module.exports= loginValidation;