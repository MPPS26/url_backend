const bcrypt = require('bcrypt');
const { login } = require('../managers/signUpManager');
const loginManager = require("../managers/signUpManager");
const User = require("../models/User");
const jwt = require('jsonwebtoken');


loginController = async (req, res) => {
    // Una vez que los datos ingresados pasan el filtro, verificamos que ese email sí está registrado, es decir que ese usuario si existe en la bd(2º validación)
    const user = await User.findOne({email: req.body.email})
    if(!user) 
    return res.status(400).json( {mensaje: 'user not found'})
  
    //verificamos que la password que ingresa el usuario coincide con la que se encuentra en la BD
    const validatePassword = await bcrypt.compare(req.body.password, user.password)
    if(!validatePassword) 
    return res.status(400).json( {mensaje: 'user not found'})
  
    
    const token = jwt.sign({uid: user._id}, process.env.SECRET)
    res.header('authorization', token).json({token})
  
    }
  
    module.exports= loginController



