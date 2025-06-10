import { FaDownload, FaEye } from 'react-icons/fa';
import '../styles/About.css';
import project2 from '../assets/project2.png'
import project1 from '../assets/project1.png'
const AboutCont = () => {
    return ( 
    <div className='about'>
        <div className="left">
            <h1>Who am I?</h1>
            <p>I'm a friendly full stack web & mobile app developer.</p>
            <a href="https://drive.google.com/file/d/1tGYnj-sym6AIWTf9XtBL03On-43Izc2j/view?usp=sharing" download="CV.pdf" target='_blank' rel='noopner noreferer'>
                <button className='btn' style={{display: 'flex', alignItems: 'center'}}><FaEye size={20} style={{marginRight:'1rem'}}/>View my CV</button>
            </a>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={project1} alt="image" />
                </div>
                <div className="img-stack bottom">
                    <img src={project2} alt="image" />
                </div>
            </div>
        </div>
    </div> );
}
 
export default AboutCont;