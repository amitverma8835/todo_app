const express = require('express')
const UsersSchema = require('../models/UsersSchema')
const Schema2 = require('../models/Schema2')

const router = express.Router()

router.post('/signin' , async (req,res)=>{
        const{name,email,contact,password} = req.body;

        try {
                const user =  await UsersSchema.create({
                        name,
                        email,
                        contact,
                        password
                })
                
                        res.status(201).json({
                                user:{email:user.email}
                        })
        } catch (err) {
                console.log(err)
                res.status(500).json({message:'user already exists', error:err.message})
        }
})


router.post('/login',async(req,res)=>{
        const {email,password} = req.body

        try {
                const user = await UsersSchema.findOne({email})
                if (!user) {
                        res.status(400).json({message:'user not registerd'})
                        console.log('user not found')
                }
                if (password!==user.password) {
                        return res.status(400).json({message:'Incorrect Password'})
                }

                res.json({user:{email:user.email}})
        } catch (err) {
                console.log(err)
                res.status(500).json({message:"server error ",error:err.message})
        }
})


router.post('/create',async(req,res)=>{
        const{title,description} = req.body

        try {
                const user =  await Schema2.create({
                        title,
                        description
                })
                
                        res.status(201).json({
                                user:{email:user.email}
                        })
        } catch (err) {
                console.log(err)
                res.status(500).json({message:'not saved your task', error:err.message})
        }
})


module.exports = router