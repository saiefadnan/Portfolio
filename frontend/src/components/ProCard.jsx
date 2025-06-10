import { NavLink } from "react-router-dom";

const ProCard = ({props}) => {
    return ( 
    <div className="project-card">
        <div className="pro-details">
            <img src={props.imgsrc} alt="image" />
            <h2 className='project-title'>{props.title}</h2>
            <p>{props.text}</p>
        </div>
        <div className="pro-btns">
            <NavLink to={props.view} className='btn'>View</NavLink>
            <NavLink to={props.source} className='btn'>Source</NavLink>
        </div>
    </div> 
);
}
 
export default ProCard;