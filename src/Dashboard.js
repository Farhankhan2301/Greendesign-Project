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
            <div className='dashboard-content-container'>
                <label className='dash-head-text'>Employee Productivity Dashboard</label>  
                <div className='dash-progress-container'>
                    <div className='dash-progress'>
                        <div className='progress-units-div'>
                            <label className='progress-units-head'>Productivity on Monday</label>
                            <label className='progress-units-percentage'>4%</label>
                        </div>
                        <div className='progress-div'>
                            <div style={{width:'4%',backgroundColor:'#36A54680',height:'15px',borderRadius:'50px',border:'1px solid #36A546'}}></div>
                        </div>
                    </div>

                    <div className='dash-progress' style={{paddingTop:'30px'}}>
                        <div className='progress-units-div'>
                            <label className='progress-units-head'>Productivity on Tuesday</label>
                            <label className='progress-units-percentage'>92%</label>
                        </div>
                        <div className='progress-div'>
                            <div style={{width:'52%',backgroundColor:'#36A54680',height:'15px',borderRadius:'50px',border:'1px solid #36A546'}}></div>
                        </div>
                    </div>

                    <div className='dash-progress' style={{paddingTop:'30px'}}>
                        <div className='progress-units-div'>
                            <label className='progress-units-head'>Productivity on Wednesday</label>
                            <label className='progress-units-percentage'>112%</label>
                        </div>
                        <div className='progress-div'>
                            <div style={{width:'82%',backgroundColor:'#36A54680',height:'15px',borderRadius:'50px',border:'1px solid #36A546'}}></div>
                        </div>
                    </div>

                    <div className='dash-progress' style={{paddingTop:'30px'}}>
                        <div className='progress-units-div'>
                            <label className='progress-units-head'>Productivity on Thursday</label>
                            <label className='progress-units-percentage'>93%</label>
                        </div>
                        <div className='progress-div'>
                            <div style={{width:'53%',backgroundColor:'#36A54680',height:'15px',borderRadius:'50px',border:'1px solid #36A546'}}></div>
                        </div>
                    </div>

                    <div className='dash-progress' style={{paddingTop:'30px'}}>
                        <div className='progress-units-div'>
                            <label className='progress-units-head'>Productivity on Friday</label>
                            <label className='progress-units-percentage'>89%</label>
                        </div>
                        <div className='progress-div'>
                            <div style={{width:'49%',backgroundColor:'#36A54680',height:'15px',borderRadius:'50px',border:'1px solid #36A546'}}></div>
                        </div>
                    </div>

                    <div className='dash-progress' style={{paddingTop:'30px'}}>
                        <div className='progress-units-div'>
                            <label className='progress-units-head'>Productivity on Saturday</label>
                            <label className='progress-units-percentage'>98%</label>
                        </div>
                        <div className='progress-div'>
                            <div style={{width:'58%',backgroundColor:'#36A54680',height:'15px',borderRadius:'50px',border:'1px solid #36A546'}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-nav-container'>
                <Link to='/dashboard' className='home--icon-div active'>
                    <img src={home_icon} width="20" height="20" alt="Logo" className='support-icon' />
                </Link>
                <Link to='/employees' className='profile-icon-div'>
                    <img src={profile_icon} width="20" height="20" alt="Logo" className='support-icon' />
                </Link>
            </div>
        </div>
    );
}