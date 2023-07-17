import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom';
import blogLogo from '../Assets/logo.png';
import { AuthContext } from '../Context/authContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from "react-router-dom";

const Navbar = () => {
const navRef=useRef();
  const {logout , currentUser} = useContext(AuthContext);
const showNavbar=() =>{
  navRef.current.classList.toggle('responssive_nav')
}
const location = useLocation();
const { pathname } = location;
const splitLocation = pathname.split("/");
  return (

    <header>
            <Link to='/'><img alt='' src={blogLogo}/></Link>
            <nav className='links' ref={navRef}>
              <Link  to='/services'><h4 className={splitLocation[1] === "services" ? "active" : ""}>Services</h4></Link>
              <Link to='/about'>            <h4 className={splitLocation[1] === "about" ? "active" : ""} >About</h4></Link>
              <Link  to='/careers'><h4 className={splitLocation[1] === "careers" ? "active" : ""}>Careers</h4></Link>
              <Link  to='/contact'><h4 className={splitLocation[1] === "contact" ? "active" : ""}>Contact</h4></Link>
              <span>{currentUser?.username }</span>
             {currentUser ? 
             (
             <span onClick={logout}><h4>Logout</h4></span> 
             ) : (
             <Link className='link' to='/login'><h4>Admin</h4></Link>
             )}

           <button className='nav-btn nav-close-btn' onClick={showNavbar}><FaTimes/></button>
          </nav>

             <button className='nav-btn' onClick={showNavbar}><FaBars/></button>
    </header>




    // <div className='navbar'>
    //   <div className='container' ref={navRef}>
    //       <div className='logo'>
    //         <Link to='/'><img alt='' src={blogLogo}/></Link>
    //   </div>
    //         <div className='links' ref={navRef}>
    //           <Link className='link nav-link' to='/?cat=services'><h4>Services</h4></Link>
    //           <Link className='link nav-link' to='/?cat=technology'><h4>About Us</h4></Link>
    //           <Link className='link nav-link' to='/?cat=cinema'><h4>Careers</h4></Link>
    //           <Link className='link nav-link' to='/?cat=science'><h4>Contact Us</h4></Link>
    //           <span>{currentUser?.username }</span>
    //          {currentUser ? 
    //          (
    //          <span onClick={logout}>Logout</span> 
    //          ) : (
    //          <Link className='link' to='/login'><h4>Admin</h4></Link>
    //          )}
    //        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
    //          <FaTimes/>
    //          </button>
    //       </div>

    //          <button className='nav-btn' onClick={showNavbar}>
    //          <FaBars />
    //       </button>
    //   </div>
      

    // </div>
  );
}

export default Navbar