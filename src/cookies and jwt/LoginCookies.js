import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Cookies from 'universal-cookie'
function LoginCookies(){
    const navigate=useNavigate()
    const cookies = new Cookies();
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [status,setStatus]=useState(false)
    const handleChange=(e,key)=>{
        if(key==='email'){
            setEmail(e.target.value)
        }
        if(key==='password'){
            setPass(e.target.value)
        }
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/signin',
        {email:email,password:pass})
        .then((res)=>{
        cookies.set('accesstoken',res.data.accesstoken,{sameSite:'strict',path:'/',maxAge:30})
        setStatus(res.data.status)})
        .catch((e)=>console.log(e))
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
export default LoginCookies