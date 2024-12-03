const express=require('express')
const router=express.Router()
const usermodel=require('../models/UserModel')
const jwt=require('jsonwebtoken')
const cookie=require('cookie-parser')
router.get('/getUser',(req,res)=>{
    console.log("inside get");
   usermodel.find({})
   .then((val)=>{
    console.log("res get",val);
    // res.send("kkkkk");
    res.send(val);
    // res.send({"data":val})
   })
   .catch((err)=> {
    console.log("................");
    res.send("err")
    // res.status(500).json({error : err});
});
})
module.exports=router
