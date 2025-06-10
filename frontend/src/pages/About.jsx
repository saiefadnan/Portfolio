import Heroimg1 from "../components/Heroimg1";
import about from '../assets/About.png'
import AboutCont from "../components/AboutCont";
const About = () => {
    return ( 
        <div>
            <Heroimg1 heading='ABOUT' text= "What are my technical expertise?" image={about}/>;
            <AboutCont/>
        </div>  )
}
 
export default About;