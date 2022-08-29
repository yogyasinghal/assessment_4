const express=require('express')
const app=express()
const bp=require('body-parser')
const cors=require('cors')
app.use(cors({origin:'http://localhost:3000',credentials:true}))
app.use(bp.json())
const cookie=require('cookie-parser')
app.use(cookie())
const usermodel=require('./models/UserModel')
const signup=require('./controllers/SignupControllers')
const signin=require('./controllers/SignInControllers')
const protected=require('./controllers/UpdateRoute')
const getUser = require('./controllers/Getusers')
app.use('/',signup)
app.use('/',signin)
app.use('/',protected)
app.use('/',getUser)
app.listen(3001,()=>console.log('server started'))