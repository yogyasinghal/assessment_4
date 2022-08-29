const express=require('express')
const router=express.Router()

const usermodel=require('../models/UserModel')

router.post('/adminsignup',(req,res)=>{
    const data=req.body
    console.log("data signco admin",data);
    const obj=new usermodel({
        fname:data.fname,
        email:data.email,
        password:data.password,
        phone:data.phone,
        role:'admin'  
    })
    obj.save().then((result)=>res.send({'msg':'signup succeeded',"status":true}))
    .catch((e)=>res.send({"msg":'some error occured try again',"status":false}))
})

router.post('/usersignup',(req,res)=>{
    const data=req.body
    console.log("data signco",data);
    const obj=new usermodel({
        fname:data.fname,
        email:data.email,
        password:data.password,
        phone:data.phone,
    })
    obj.save().then((result)=>res.send({'msg':'signup succeeded',"status":true})).catch((e)=>{
        console.log(e)
        res.send({"msg":'some error occured try again',"status":false})})
})

module.exports=router