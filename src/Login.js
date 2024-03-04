import { Link, useNavigate } from 'react-router-dom';
import logo from './Assets/Group 3@2x.png';
import './App.css';
export default function Login(){
    const navigate = useNavigate();
    return(
        <div className="App">
            <form>
                <div className="FormLogodiv">
                <img src={logo} width="90" height="90" alt="Logo" /></div>
                <h1>#We are Electric</h1>
                <input type="text" placeholder='Email' className='email'/>
                <input type="password" placeholder='Password' className='password'/>
                <button onClick={()=>navigate("/dashboard")} className='login'>Login</button>
                <Link to='/'>Forgot Password?</Link>
            </form>
        </div>
    );
}