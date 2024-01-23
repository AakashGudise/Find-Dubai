import './header2.component.css'
import logo from '../assets/images/logo.svg'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Header2Component(){
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
         <div>
            <nav className='h3-nav'>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
                {/* <ul className='h3-ul'>
                <NavLink to="/Tutors"><li className='h3-li'>Tutors</li></NavLink>
                <NavLink to="/Plumbers"><li className='h3-li'>Plumbers</li></NavLink>
                <NavLink to="/Electricians"><li className='h3-li'>Electricians</li></NavLink>
                <NavLink to="/Carpenters"><li className='h3-li'>Carpenters</li></NavLink>
                <NavLink to="/Interior-Designers"><li className='h3-li'>Interior Designers</li></NavLink>
                <NavLink to="/Event-Organizers"><li className='h3-li'>Event Organizers</li></NavLink>
                <NavLink to="/Yoga-Trainers"><li className='h3-li'>Yoga Trainers</li></NavLink>   
                </ul> */}
                <ul>
                <li className='h3-li'>
                            <NavLink to="/about">Tutors</NavLink>
                        </li>
                        <li className='h3-li'>
                            <NavLink to="/services">Plumbers</NavLink>
                        </li>
                        <li className='h3-li'>
                            <NavLink to="/contact">Electricians</NavLink>
                        </li>
                        <li className='h3-li'>
                            <NavLink to="/Carpenters">Carpenters</NavLink>
                        </li>
                        <li className='h3-li'>
                            <NavLink to="/Interior Designers">Interior Designers</NavLink>
                        </li>
                        <li className='h3-li'>
                            <NavLink to="/Event Organizers">Event Organizers</NavLink>
                        </li> 
                        <li className='h3-li'>
                            <NavLink to="/Yoga Trainers">Yoga Trainers</NavLink>
                        </li>
                        <li className='h3-li'>
                            <NavLink to="/Estate Agents">Estate Agents</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/Beauty Speacilist">Beauty Speacilist</NavLink>
                        </li> */}
                        
            </ul>
            </nav>
         </div>
        </>
    )
}