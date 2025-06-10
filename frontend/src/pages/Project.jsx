import Heroimg1 from "../components/Heroimg1";
import project from "../projectAssets/project.jpg";
import PricingCards from "../components/PricingCards";
import ProjectCards from "../components/ProjectCards";

const Project = () => {
    return ( 
        <div>
            <Heroimg1 heading='PROJECTS' text= 'Some of my works' image={project}/>
            <ProjectCards/>
            <PricingCards/>
        </div>
            
       
     );
}
 
export default Project;