// import LoginCookies from './Components/LoginCookies'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './Components/Dashboard'

import NavBar from './Navbar';
import Login from './validations/Login';
import Signup from './validations/Signup';

function App()
{
    return(
       <div>
        <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
           
            <Route path = '/login' element = {<Login></Login>}></Route>
            <Route path = '/Signup' element = {<Signup></Signup>}></Route>
           
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        </Routes>
        </BrowserRouter>
       </div>
    )
}
export default App