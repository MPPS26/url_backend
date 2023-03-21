const bcrypt = require("bcrypt");
const User = require("../models/User");

class SigUpManager {
  static signUp = async (body) => {
    const user = new User(body); 
    const saltosPsw = await bcrypt.genSalt(10); 
    const passwordBC = await bcrypt.hash(user.password, saltosPsw); 
    user.password = passwordBC; 
    await user.save(); 
    return user; 
    }

        }
    

module.exports = SigUpManager;