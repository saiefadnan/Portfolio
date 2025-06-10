import '../styles/ProjectCards.css'
import image from '../assets/Adevan.png'
import { NavLink } from 'react-router-dom';
import ProjectData from './ProjectData';
import ProCard from './ProCard';
const ProjectCards = () => {
    return ( 
        <div className='work-container'>
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
            {ProjectData?.map((data,key)=>(<ProCard key={key} props={data}/>))}
            </div>
        </div>
     );
}
 
export default ProjectCards;