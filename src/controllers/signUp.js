const SignUpManager = require("../managers/signUpManager");
const jwt = require('jsonwebtoken');


createUser = async (req, res) => {  
    const user = await SignUpManager.signUp(req.body)
        const token = jwt.sign({ uid: user._id}, process.env.SECRET) //payload que hay en el token + el secreto
    res.header('authorization', token)
    res.status(201).json({ token: token })
}

module.exports = createUser;