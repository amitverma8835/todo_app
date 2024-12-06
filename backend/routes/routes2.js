const express = require(express);
const Schema = require('../models/Schema2')

const router = express.Router()

router.post('/create',async(req,res)=>{
        const{title,description} = req.body

        try {
                const user =  await UsersSchema.create({
                        title,
                        description,
                })
                
                        res.status(201).json({
                                user:{email:user.email}
                        })
        } catch (err) {
                console.log(err)
                res.status(500).json({message:'not saved your task', error:err.message})
        }
})