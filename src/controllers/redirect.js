const UrlManager = require("../managers/urlManager")

getRedirection = async (req, res) => {
    const {modifiedUrl} = req.params;
    try{
        const newUrl= await UrlManager.redirect(modifiedUrl);
        res.status(200).json(newUrl.originalUrl)
    }catch (error){
        res.status(400).json({error: 'wrong url'})
    }
}
module.exports= getRedirection;