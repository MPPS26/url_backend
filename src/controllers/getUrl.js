const urlManager = require ('../managers/urlManager');

getNewUrl = async (req, res) => {
    try{
    const dbUrl = await urlManager.getUrl(req.params);
    if (!dbUrl.uid.equals(req.uid))
    return res.status(200).json({data: dbUrl});
    }catch(error) {
    console.log(error)
        if (error.kind === "ObjectId") return res.status(404).json({ error: `This url doesn't exist in your collection DB` });
        return res.status(500).json({ error: 'server error'});
}
}

module.exports= getNewUrl

//En los errores puede pasar que el usuario intente acceder a una url que no es suya si no se cumple el equals 
//debería lanzarle wrong token, si el problema es que esa url esta mal escrita (Erro.kind ObjectId) debería lanzarle url doesn`t exist y their BD