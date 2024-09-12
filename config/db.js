const mongoose = require('mongoose')
require('dotenv').config();
console.log("uridb",process.env.URIDB)
const URIDB = process.env.URIDB
const connectDB = async() =>{
    options = {
        // keepAlive : true,
        // useNewUrlParser : true,
        // useUnifiedTopology : true,
        family:4 //en caso de no funcionar en local
    }
    try{
        await mongoose.connect(URIDB, options)
        console.log("conexion satisfactoria")
    }catch(err){
        console.log("Error de Conexion", err)
    }
}
module.exports = connectDB