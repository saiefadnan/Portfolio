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
        <a href={props.view} target="_blank" rel="noopener noreferrer" className="btn">View</a>
        <a href={props.source} target="_blank" rel="noopener noreferrer" className="btn">Source</a>
        </div>
    </div> 
);
}
 
export default ProCard;