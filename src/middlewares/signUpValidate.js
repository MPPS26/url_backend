const JoiValidate = require('@hapi/joi');
const User = require ('../models/User')


const signUpValidation = async (req,res, next) => {
//validación de los datos que van a ingresar a la BD (primera validación)
    const schemaSignUp = JoiValidate.object({
        name: JoiValidate.string().min(3).max(25).required(),
        email: JoiValidate.string().min(6).max(50).required().email(),
        password: JoiValidate.string().min(6).max(50).required()
})

    const {error} = schemaSignUp.validate(req.body)
        if(error) {
        return res.status(400).json (
            {error: error.details[0].message}
        )}

// Una vez que los datos ingresados pasan LA 1º validación, la "segunda" validación es verificar que ese email no está registrado ya.

    const verifyEmail = await User.findOne({ email: req.body.email });
        if (verifyEmail) {
        return res.status(400).json({ message: 'This email is already registered'})
        }
    next();

}

module.exports= signUpValidation;