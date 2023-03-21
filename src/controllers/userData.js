const router = require("express").Router();
const UserManager = require("../managers/userData");
const User = require ('../models/User')


//lo que quiere decir esta ruta es que si el req.user (del validatetoken) que es requerido aquí no existe este dashboard no va a existirs
   const userDataResp = async (req, res) => {
    try{
        const dataUser = await UserManager.userData(req.params);
        res.status(200).json({
            data: {
                title: 'mi ruta protegida',
                user: req.user //este es el user creado en el archivo de validaToken en verify
            }})
    }catch (error){
        res.status(400).json(error)
    }
   }

module.exports = userDataResp