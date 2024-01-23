import './header1.component.css'
import { useState } from 'react';
import logo from '../assets/images/logo.svg'

export function Header1Component() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div>
                <nav className='nav3-nav'>
                    {/* <div className="title">
                        Website
                    </div> */}
                    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                        <img src={logo} alt='logo' className='logo' ></img>
                    </div>
                    <ul className={menuOpen ? "open" : ""}>

                        <li className='nav3-li'>Tutors</li>
                        <li className='nav3-li'>Plumbers</li>
                        <li className='nav3-li'>Electricians</li>
                        <li className='nav3-li'>Carpenters</li>
                        <li className='nav3-li'>Inetrior Designers</li>
                        <li className='nav3-li'>EventPlanner</li>
                        <li className='nav3-li'>Yoga Trainer</li>
                    </ul>
                </nav>

            </div>
        </>
    )
}