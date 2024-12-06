const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const userRouter = require('./routes/userRoutes')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())



app.listen(config.port ,()=>{
        console.log(`Server is Running on port ${config.port}`)
})

app.use('/api',userRouter)
mongoose
.connect(config.dbConnectionString)
.then(()=>{console.log('connected to database')})
.catch((err)=>{console.log(`Error ${err}`)})