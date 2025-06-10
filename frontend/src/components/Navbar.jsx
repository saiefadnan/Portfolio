import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from "react";
import logo from '../assets/Logo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [color,setColor] = useState(false);
  const handleOpen = ()=>{ 
    if(window.innerWidth>600) return;
    document.body.style.overflow = open?'auto':'hidden';
    setOpen(!open);
  }
  const handleColor = ()=>{setColor(window.scrollY>100);} 

  useEffect(()=>{
    window.addEventListener("scroll",handleColor);
    return(()=>{
      window.removeEventListener("scroll",handleColor);
    })
  },[])
  return ( 
  <div className={color? `header header-bg`:`header`}>
      <Link to='/portfolio'>
        <div className="logo-container">
          <img src={logo} alt='logo' style={{height: '40px',width: '40px'}}></img>
          <h1>Portfolio</h1>
        </div>
      </Link>
      <ul className={open?"nav-menu active":"nav-menu"}>
        <li>
          <Link to='/' onClick={handleOpen}>Home</Link>
        </li>
        <li>
          <Link to='/project' onClick={handleOpen}>Project</Link>
        </li>
        <li>
          <Link to='/about' onClick={handleOpen}>About</Link>
        </li>
        <li>
          <Link to='/contact' onClick={handleOpen}>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleOpen}>
        {open?<FaTimes size={20}/>:<FaBars size={20} />}
      </div>
  </div> 
  );
}
 
export default Navbar;