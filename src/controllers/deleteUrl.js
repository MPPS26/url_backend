const UrlManager = require('../managers/urlManager');

DeleteUrlBD = async (req, res) => {
    try{
        const deleteUrlBD = await UrlManager.deleteUrl(req.params.id)
        res.status(200).json({message: 'Deleted', deleteUrlBD});
        }catch(error) {
        console.log(error)
        if (error.kind === "ObjectId") return res.status(404).json({ error: `This url doesn't exist in your collection DB` });
        return res.status(500).json({ error: 'server error' });
        }
}

module.exports= DeleteUrlBD