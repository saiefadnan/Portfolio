import '../styles/Heroimg.css'
import introimg from '../assets/project.jpg'
import { Link } from 'react-router-dom';
const Heroimg = () => {
    return ( 
    <div className="hero">
        <div className="mask">
            <img className='intro-img' src={introimg} alt='Intro-img'/>
        </div>
        <div className='content'>
            <p>Hi! I'am a software Engineer</p>
            <h1>WEB & APP DEVELOPER</h1>
        <div className='button-container'>
            <Link to='/project' className='btn'> 
                PROJECTS
            </Link>
            <Link to='/contact' className='btn-light'>
                CONTACT
            </Link>
        </div>
       </div>
    </div> );
}
 
export default Heroimg;