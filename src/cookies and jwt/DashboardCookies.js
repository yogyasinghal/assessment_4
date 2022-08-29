import axios from 'axios'
import { log } from 'joi-browser';
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
axios.defaults.withCredentials=true 
function DashBoardCookies(){
    const navigate=useNavigate()
    const [users,setUsers]=useState({});
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [status,setStatus]=useState(false)
    const [phone,setPhone] = useState('');
    const [checkEmail,setCheckEmail] = useState('');
    const [checkPhone,setCheckPhone] = useState('');
    const [checkName,setCheckName] = useState('');
    const [checkPass,setCheckPass] = useState('');
    const [flag,setFlag] = useState(false);
    const[showcreate,setShowcreate] = useState(false);
    const [showUser,setShowUser] = useState(false)
    const [loginStatus,setLogin] = useState(false);
    // const updateMethod=()=>{
    //     axios.post('http://localhost:3001/createadmin',{
    //         "fname":"peter",
    //         "email":"peter@gmail.com",
    //         "phone":9283928388000,
    //         "password":"peter@1234"
    //     },{withCredentials:true}).then((Res)=>console.log(Res)).catch((e)=>console.log(e))
    // }

    const createAdmin = ()=>{
        axios.post('http://localhost:3001/adminsignup',
        {fname:name,email:email,password:pass,phone:phone})
        .then((res)=>{
       console.log("successfully created admin")})
        .catch((e)=>console.log(e))
    }
    const getUser = ()=>{
        console.log("inside get");
        axios.get('http://localhost:3001/getUser')
        .then((res)=>{
            console.log("res getuser",res.data);
            setUsers(res.data)
            setShowUser(true)
        })
        .catch((err)=>{
            console.log("get error",err);
        })
    }
    const logoutMethod=()=>{
       localStorage.removeItem('accesstoken')
       navigate('/')
    }
    useEffect(()=>{
        if(email&&name&&pass&&phone){
            setFlag(true);
        }
        // if(localStorage.getItem('login')){
        //     setLogin(true);
        // }
    })
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
    const WarningPhone = ()=>{
        // console.log("required");
        if(pass)
        setCheckPhone('');
        else
        setCheckPhone("Enter valid Phone")
    }
    return(
       
        <div>
            {localStorage.getItem('role')==='admin'?
            <div>
                <form className="d-grid justify-content-center g-2 align-items-center">
            <div className="form-group m-1">
                
                <input onBlur={WarningName} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder="Name"></input>
                <p className="text-danger" >{checkName}</p>
            </div>
            <div className="form-group m-1">
                
                <input type="number" onBlur={WarningPhone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Phone no"></input>
                <p className="text-danger" >{checkPhone}</p>
            </div>
           
            <div className="form-group m-1">
               
                <input onBlur={WarningEmail} onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="validationServer03" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <p className="text-danger">{checkEmail}</p>
            <div className="form-group m-1">
                
                <input onBlur={WarningPass} onChange={(e)=>setPass(e.target.value)}  type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <p className="text-danger">
                {checkPass}
            </p>
            <button className='btn btn-primary' onClick={createAdmin}>create admin</button>          
         
        </form>
                
              
                
            
             
           
            </div>
            :<div className='d-flex justify-content-center'>
            <h1>User Dashboard</h1>    
                </div>}
            {/* common */}
            <div className='d-flex justify-content-center'>
            <button className='m-2 btn btn-primary' onClick={getUser}>get users</button>   
            </div>    
                {showUser?
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 p-4 mx-3 justify-content-evenly ">
            {
            users.map((item)=>(
            <div className="col">
            <div className="card bg-light  p-1" id="cm1">
               
                <div className="card-body">
                  <h5 className="card-productName">{item.fname}</h5>
                  <h6 className="card-productName">{item.email}</h6>
                  <p className="card-text">{item.phone}</p>
                 
                </div>
            </div>
            </div>
            ))}
            </div>  
            :<div></div>}    
        </div>

        // :<div>Not LoggedIn</div>}
        // </div>

    )
}
export default DashBoardCookies