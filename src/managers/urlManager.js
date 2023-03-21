const { id } = require("@hapi/joi/lib/base");
const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");
const  Url = require("../models/Ulr");
const validateToken = require ('../middlewares/validateToken');
const { error } = require("@hapi/joi/lib/annotate");



class UrlManager {

    static createUrl = async (url, uid) => {
        const shortenUrl = new Url({originalUrl: url, modifiedUrl: nanoid(6), uid: uid}) //uid que viene del validateToken
        console.log(url); 
        const dbShortenUrl= await shortenUrl.save(); 
        return dbShortenUrl; 
    };

   static getAllUrls = async (uid) => {
        const dbAllUrls = await Url.find({uid:uid});
        return dbAllUrls;
    };

   static getUrl = async (urlObject) => {
        const dbUrl = await Url.findById(urlObject.id);
        return dbUrl;
    };

     static deleteUrl= async (id) => {
        const dbUrl = await Url.findById(id);
        const dbUrlDel = await dbUrl.deleteOne();
        return dbUrlDel
     }

     static redirect = async (modifiedUrl)=>{
        const redirectUrl = await Url.findOne({modifiedUrl})
        return redirectUrl
     }

};
    
module.exports = UrlManager;