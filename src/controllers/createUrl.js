const urlManager = require ('../managers/urlManager');
const Url = require ('../models/Ulr')
const { nanoid } = require("nanoid");

createShortUrl = async (req, res) => {
    const originalUrl = req.body.originalUrl
    const uid= req.user //uid que viene del validateToken
    try{
    const shortenUrl = await urlManager.createUrl (originalUrl, uid);
    res.status(201).json({data: shortenUrl});
    }catch(error){
        return res.status(500).json({error:'server error'})
    }
}

module.exports= createShortUrl



    
