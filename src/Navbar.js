import React, { Component }  from 'react';
import {Link,NavLink,Route,Routes} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
// import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie'
const NavBar=()=>{
    const cookies = new Cookies();
    // const items = useSelector((state)=>state.cart);
    const navigate=useNavigate()
    const Logout = () =>{
        localStorage.removeItem('accesstoken')
        localStorage.setItem('login',false)
        // cookies.set('accesstoken','',{sameSite:'strict',path:'/',maxAge:30})
        navigate('/')
    }
    return(
        <>
        
    <nav 
        className="navbar navbar-expand-lg navbar-light bg-light"
        style = {{padding:"20px"}}
    >
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" 
    id="navbarSupportedContent"
    style={{
        backgroundColor:"aquamarine",
        width: "100%",
        justifyContent: "space-between"

    }}
      >
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <NavLink to='/'>
        {
            ({isActive})=>(
                <button className={isActive?'btn btn-none border-0 text-primary':'btn btn-none border-0'}>Home</button>
            )
        }
      </NavLink>
           
        </li>
       
        <li className="nav-item">
        <NavLink to='/login'>
        {
            ({isActive})=>(
                <button className={isActive?'btn btn-none border-0 text-primary':'btn btn-none border-0'}>Login</button>
            )
        }
      </NavLink>
      <NavLink to='/signup'>
        {
            ({isActive})=>(
                <button className={isActive?'btn btn-none border-0 text-primary':'btn btn-none border-0'}>Signup</button>
            )
        }
      </NavLink>
      <NavLink to='/dashboard'>
        {
            ({isActive})=>(
                <button className={isActive?'btn btn-none border-0 text-primary':'btn btn-none border-0'}>dashboard</button>
            )
        }
      </NavLink>
     
        <button className='btn btn-none border-0' onClick={Logout}>Logout</button>
          
           
        </li>
        <li className="nav-item">
        





       
        </li>
        
        </ul>
        <form className="form-inline my-2 my-lg-0"
        style={{
            display: "flex",
            width: "40%",
            marginRight: "1%"
        }}
        >
       
        </form>
    </div>
    </nav>
        </>
    )
}
export default NavBar;