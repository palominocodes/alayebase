const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clDetailsSchema = new Schema({
    spouseName:{
        type: String,
        required: true
    },
    spouseAge: {
        type:Number, 
        required: true
    },
    Rank:{
        type:String,
        required: true
    },
    relationship:{
        type:String,
        // required: true
    },
    clName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    clAge: {
        type:Number, 
        required: true
    },
    occupation:{
        type:String,
        required: true
    },
    frontLicense:{
        type:Buffer,
        // required: true
    },
    backLicense:{
        type: Buffer,
        // required: true
    },
    nationalId:{
        type:Buffer
    }, 
    ssn:{
        type: Number,
        required: true
    },
    phoneNo:{
        type: Number,
        required:true
    }

}, {timeStamps:true })

module.exports = mongoose.model('details', clDetailsSchema)