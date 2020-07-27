const mogoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = mongoose.connect(process.env.DB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
            userFindAndModify:false
        })
        console.log(`Mongo is connected:${conn.connection.host}`);
    }
    catch(error){
        console.log(error);
        process.exit(1);

    }
}

module.exports = connectDB;

