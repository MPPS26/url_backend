/*const JoiValidate = require('@hapi/joi');
const Url = require ('../models/ulr')



const urlValidation = async (req, res, next) => {

    const urlSchema = JoiValidate.object({
        originalUrl: JoiValidate.string().required().min(5).trim().uri('https')

    })
    const { error } = urlSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })
    next()
}

module.exports = urlValidation;*/