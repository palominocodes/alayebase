const express = require('express');
const {postDetails} = require('../controller/detailsControl')

const router = express.Router()

router.get('/', (req, res) => {
    res.json("all iz welll")
 })

 router.post('/', postDetails)

module.exports = router