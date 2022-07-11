const Details = require('../model/clDetailsmodel')

// const mongoose = require('mongoose')

const postDetails = async (req, res) => {
    const {
        spouseName, spouseAge, Rank,  relationship, clName, email, clAge, occupation,
        frontLicense, backLicense, nationalId, ssn, phoneNo
    } = req.body
    try{
        const details = await Details.create({
            spouseName, spouseAge, Rank,  relationship, clName, email, clAge, occupation,
            frontLicense, backLicense, nationalId, ssn, phoneNo
    });
    res.status(200).json(details)
    }catch(err){
        res.status(400).json(console.log({err: err.message}))
    }
}

module.exports = {
    postDetails 
}