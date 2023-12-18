import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar=()=>{

    return(
        <div className='navbar'>
            <div className='navContainer'>
                <h1 className='logo'>Anime-<span style={{color:'white'}}>Reservation</span></h1>
               
                
                    <div className='navItems'>
                        <button className='navButton'><Link to="/register">Register</Link></button>

                        <button className='navButton'><Link to='/login'>Loging</Link></button>
                    </div>

            </div>
        </div>
    )
}

export default Navbar