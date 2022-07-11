require('dotenv').config()
const express = require('express')
const clDetailsRoutes = require('./Routes/routes')
const mongoose = require('mongoose')
const path = require('path')


const app = express();

app.use(express.json())
app.use(express.urlencoded());


app.use('/api/routes', clDetailsRoutes) 

// serve frontend if in production

    app.use(express.static(path.resolve('client/build')))

    app.get('*', (req,res) => {
        res.sendFile(__dirname, 'client/build', 'index.html')
    })



mongoose.connect(process.env.MONG_URI).then(() => { 
    console.log("connected to db")

    app.listen(process.env.PORT, () => {
        console.log(`server now running on port ${process.env.PORT}`)
       })
}

).catch((err) => {
    console.log(err) 
}

)
