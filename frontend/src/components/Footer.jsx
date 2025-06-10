import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
    return ( 
    <div className="footer">
        <div className="footer-container">
            <div className="left"> 
                <div className="location">
                    <FaHome size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                    <div>
                        <p style={{color: '#fff'}}>464/3/3 Ulon Road, West Rampura, Dhaka-1219.</p>
                        <p style={{color: '#fff'}}>Bangladesh.</p>
                    </div>
                </div>
                <div className="phone">
                    <FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                    <h4><p style={{color: '#fff'}}>01308050934</p></h4>
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                    <h4><p style={{color: '#fff'}}>saiefadnan078@gmail.com</p></h4>
                </div>
            </div>
            <div className="right"> 
                <h4><p>About our company</p></h4>
                <p>This is Saief Md. Hossain Adnan. A CSE graduate from MIST.
                I love to build websites & apps for my clients.</p>
                <div className="social">
                    <a href="https://www.facebook.com/saiefadnan078/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} style={{color: '#fff', marginRight: '2rem', cursor: 'pointer'}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/saief-md-adnan-48293523a/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} style={{color: '#fff', marginRight: '2rem', cursor: 'pointer'}}/>
                    </a>
                    <a href="https://github.com/saiefadnan" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} style={{color: '#fff', marginRight: '2rem', cursor: 'pointer'}}/>
                    </a>
                </div>
            </div>
        </div>
    </div> );
}
 
export default Footer;