import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function LoginComponent(){
    const navigate=useNavigate()
    const [useremail,setEmail]=useState('')
    const [userpassword,setPassword]=useState('')
    const [status,setStatus]=useState(false)
    const handleChange=(e,key)=>{
        if(key==='email'){
            setEmail(e.target.value)
        }
        if(key==='password'){
            setPassword(e.target.value)
        }
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/signin',{email:useremail,password:userpassword})
        .then((res)=>{
        setStatus(res.data.status)}).catch((e)=>console.log(e))
    }
    return(
        <div>
            {
                    status?navigate('/dashboard'):<form>
                
                    Email:<input type='text' onChange={(e)=>handleChange(e,'email')}></input>
                    Password:<input type='text' onChange={(e)=>handleChange(e,'password')}></input>
                    <button onClick={(e)=>handleLogin(e)}>login</button>
                </form>
                }
            
        </div>
    )
}
export default LoginComponent