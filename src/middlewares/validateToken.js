const jwt= require('jsonwebtoken');

const validateToken = (req, res, next) =>{
    const token = req.header('authorization')
    if(!token) return res.status(401).json({ error: 'Access denied'}) //No está mandando el token por tanto no puede seguir
    try{
        const {uid}= jwt.verify(token, process.env.SECRET); //Aquí sí envía token, y verificamos si el token enviado contiene el secreto que compone el token
        req.user = uid //importante porque es el uid que usaremos en los endpoints
        next()
    }catch(error){
        res.status(400).json({error: 'Wrong token'})
    }
}

module.exports = validateToken

