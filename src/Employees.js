import logo from './Assets/Group 46@2x.png';
import moptro_logo from './Assets/moptro logo@2x.png';
import home_icon from './Assets/home-icon.svg';
import profile_icon from './Assets/profile-icon.svg';
import './App.css';
import { Link } from 'react-router-dom';
export default function Dashboard(){
    return(
        <div className="dashboard-container">
            
            <img src={logo} width="40" height="40" alt="Logo" className='support-icon' />
            <figure className='dash-logo-div'>
                <figcaption className='fig-caption'>4</figcaption>
                <img src={moptro_logo} width="71" height="70" alt="moptro_logoo" className='dash-logo' />
            </figure>
                <input className='search' type='text' placeholder='Search with name' />
            <div className='cards-container'>
                <article className='card'>
                <p className='card-no'>1</p>
                <p className='row'>
                    <span>EMP ID</span>
                    <span>:</span>
                    <span className='white bold'>1</span>
                </p>
                <p className='row'>
                    <span>Name</span>
                    <span>:</span>
                    <span className='white bold'>Arjun</span>
                </p>
                <p className='row'>
                    <span>DOB</span>
                    <span>:</span>
                    <span className='orange bold'>16-11-2000</span>
                </p>
                <p className='row'>
                    <span>Role</span>
                    <span>:</span>
                    <span className='green bold'>Software Engineer</span>
                </p>
                </article>
                <article className='card'>
                <p className='card-no'>2</p>
                <p className='row'>
                    <span>EMP ID</span>
                    <span>:</span>
                    <span className='white bold'>2</span>
                </p>
                <p className='row'>
                    <span>Name</span>
                    <span>:</span>
                    <span className='white bold'>Mahesh</span>
                </p>
                <p className='row'>
                    <span>DOB</span>
                    <span>:</span>
                    <span className='orange bold'>15-01-2000</span>
                </p>
                <p className='row'>
                    <span>Role</span>
                    <span>:</span>
                    <span className='green bold'>Web Developer</span>
                </p>
                </article>
                <article className='card'>
                <p className='card-no'>3</p>
                <p className='row'>
                    <span>EMP ID</span>
                    <span>:</span>
                    <span className='white bold'>3</span>
                </p>
                <p className='row'>
                    <span>Name</span>
                    <span>:</span>
                    <span className='white bold'>Mahesh</span>
                </p>
                <p className='row'>
                    <span>DOB</span>
                    <span>:</span>
                    <span className='orange bold'>15-01-2000</span>
                </p>
                <p className='row'>
                    <span>Role</span>
                    <span>:</span>
                    <span className='green bold'>Web Developer</span>
                </p>
                </article>
            </div>
            <div className='bottom-nav-container'>
                <Link to='/dashboard' className='home--icon-div'>
                    <img src={home_icon} width="20" height="20" alt="Logo" className='support-icon' />
                </Link>
                <Link to='/employees' className='profile-icon-div active'>
                    <img src={profile_icon} width="20" height="20" alt="Logo" className='support-icon' />
                </Link>
            </div>
        </div>
    );
}