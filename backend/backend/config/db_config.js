const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        
        let conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`DATABASE CONNECTION SUCCESS : ${conn,mongoose.connection.name}`.bgGreen.white)
    } catch (error) {
        console.log(`ERROR IN DB CONNECTION : ${error.message}`.bgRed.white)
    }
}

module.exports = connectDB;