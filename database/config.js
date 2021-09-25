const mongoose = require('mongoose');

const dbConnection = async()=>{
    try {
        await mongoose.connect( process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true, // this options are not soported for mongoose
            //useFindAndModify: false
        });
        console.log('Online database');
    } catch (error) {
        console.log(error);
        console.log('========')
        throw new Error('Error at init the data base');
    }
}

module.exports = {
    dbConnection
}