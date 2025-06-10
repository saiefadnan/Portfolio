import Heroimg1 from "../components/Heroimg1";
import contact from '../assets/contact.jpg';
import ContactForm from "../components/ContactForm";
const Contact = () => {
    return ( 
    <div >
        <Heroimg1 heading="CONTACT" text="Let's have a chat" image={contact}/>
        <ContactForm/>
    </div> );
}
 
export default Contact;<>Contact</>