// admin and admin username and pass
// events -> onblur etc
import { useEffect, useState } from "react";
// import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Cookies from 'universal-cookie'

function Login(){

    const navigate=useNavigate()
    const cookies = new Cookies();
    const handleSubmit =(e)=>{
        // e.preventDefault();
        const data = {
            name:name,
            password:pass
        }
        console.log("link clicked",name,pass);
        // dispatch(login(data))
    }
    const [status,setStatus]=useState(false);
    const [count,setCount] = useState(0);
    const handleLogin=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/signin',
        {email:email,password:pass})
        .then(
            (res)=>{
        cookies.set('accesstoken',res.data.accesstoken,{sameSite:'strict',path:'/',maxAge:30})
        setStatus(res.data.status)
        localStorage.setItem('role',res.data.role)
        localStorage.setItem('login',true)
        })
        .catch((e)=>{
            console.log(e)
            localStorage.setItem('login',false)
        })
        setCount(count + 1);
    }
    useEffect(()=>{
        if(count===3){
            alert('locked');
            navigate('/')
        }
    },[count])
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [checkEmail,setCheckEmail] = useState('');
    const [checkName,setCheckName] = useState('');
    const [checkPass,setCheckPass] = useState('');
    const [flag,setFlag] = useState(false);
    useEffect(()=>{
        if(email&&name&&pass){
            setFlag(true);
        }
    },[email,name,pass])
    console.log("flag",flag);
    const WarningEmail = ()=>{
        console.log("required");
        if(email)
        setCheckEmail("")
        else
        setCheckEmail("Enter valid email address")
    }
    const WarningName = ()=>{
        console.log("required");
        if(name)
        setCheckName('')
        else
        setCheckName("Enter valid Name")
    }
    const WarningPass = ()=>{
        // console.log("required");
        if(pass)
        setCheckPass('');
        else
        setCheckPass("Enter valid Password")
    }
    return(
        <div>
            {status?navigate('/dashboard'):
        <div> 
        <h1 className="text-primary d-flex justify-content-center m-4">Login</h1>

        <form className="d-grid justify-content-center g-2 align-items-center">
            <div className="form-group m-1">
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input onBlur={WarningName} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder="Name"></input>
                <p className="text-danger" >{checkName}</p>
            </div>
           
            <div className="form-group m-1">
                {/* <label for="exampleInputEmail1">Email address</label> */}
                <input onBlur={WarningEmail} onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="validationServer03" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <p className="text-danger">{checkEmail}</p>
            <div className="form-group m-1">
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input onBlur={WarningPass} onChange={(e)=>setPass(e.target.value)}  type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <p className="text-danger">
                {checkPass}
            </p>
            <button onClick={(e)=>handleLogin(e)}>login</button>            
            {/* <Link onClick={(e)=>handleSubmit(e)} className={flag?'btn btn-primary':'btn btn-primary disabled'} to= '/movies'> Submit</Link> */}
        </form>



        </div>
        }
        </div>
    )
}
export default Login;