const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalUrl:{
        type: String,
        required: true,
        trim: true
    },

    modifiedUrl: {
        type: String,
        unique: true
    },

    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model ('Url', urlSchema);

//el uid es para hacer referencia a qué usuario crea cada url ("relacionar" ambas colecciones de cierto modo, aunque mongoDB es una BDNR)