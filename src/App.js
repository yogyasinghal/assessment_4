import LoginCookies from './cookies and jwt/LoginCookies'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import DashboardCookies from './cookies and jwt/DashboardCookies'
import LoginComponent from './cookies and jwt/LoginComponent'
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
            {/* <Route path = '/' element = {<LoginCookies></LoginCookies>}></Route> */}
            <Route path = '/login' element = {<Login></Login>}></Route>
            <Route path = '/Signup' element = {<Signup></Signup>}></Route>
            {/* <Route path='/' element={<LoginComponent></LoginComponent>}></Route> */}
            <Route path='/dashboard' element={<DashboardCookies></DashboardCookies>}></Route>
        </Routes>
        </BrowserRouter>
       </div>
    )
}
export default App