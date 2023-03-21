const urlManager = require ('../managers/urlManager');

getAllUrlsDB = async (req, res) => {
    try{
    const shortenUrls = await urlManager.getAllUrls(req.user);
    res.status(200).json({data: shortenUrls});
    }catch(error){
    console.log(error)
    return res.status(500).json({error:'server error'})
    }
}
module.exports= getAllUrlsDB