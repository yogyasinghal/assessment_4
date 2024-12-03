const express=require('express')
const app=express()
const data=require('./data/contacts')
const cors=require('cors')
const bp=require('body-parser')
app.use(cors())
app.use(bp.json())

app.get('/contact',(req,res)=>{
    res.send('duplicate')
})

app.get('/contact',(req,res)=>{
res.send(JSON.stringify(data))
})


app.get('/user',(req,res)=>{
    res.send('user data')
})
//params
app.get('/getuser/:username/:country',(req,res)=>{
    console.log(req)
    const input=req.params
    const result=data.filter((item)=>item.fname===input.username)
    console.log(result)
    res.send(JSON.stringify(result))
})



//query data
// sample input - http://localhost:3001/getDetails?username=john
app.get('/getDetails',(req,res)=>{
    console.log(req)
    const input=req.query
    const result=data.filter((item)=>item.fname===input.username)
    console.log(result)
    res.send(JSON.stringify(result))
})

//route mismatch
app.get('/users/IND',(req,res)=>{
    res.send('route one')
})

app.get('/users/:country',(req,res)=>{
    res.send('route two ')
})

//POST
app.post('/signin',(req,res)=>{
    const input=req.body
    if(input.email==='admin'&&input.password==='admin'){
        res.send({"msg":"you are authenticated","status":true})
    }
    else{
        res.send({"msg":"you are not authenticated","status":false})
    }
})

app.post('/create',(req,res)=>{
    const input=req.body
    if(input.email==='admin'&&input.password==='admin'){
        res.send({"msg":"you are authenticated","status":true})
    }
    else{
        res.send({"msg":"you are not authenticated","status":false})
    }
})



app.listen(3001,()=>console.log('server has started at port no 3001'))

