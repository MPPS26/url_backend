const mongoose = require('mongoose');
mongoose.set('strictQuery', false); 

//conection to mongoDB Atlas
const MongoDBA = process.env.MDBA_URI;
mongoose.connect(MongoDBA, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDBA'))
    .catch(error => console.log('Error MongoDBA:', error));


    //useNewUrlParser y useUnifiedTopology indicaciones de Mongoose