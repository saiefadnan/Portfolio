import '../styles/Heroimg.css'
const Heroimg1 = ({heading, text,image}) => {
    return ( 
    <div className="hero">
        <div className="mask">
            <img className='intro-img' src={image} alt='Intro-img'/>
        </div>
        <div className='content'>
            <h1>{heading}</h1>
            <p>{text}</p>
       </div>
    </div> );
}
 
export default Heroimg1;