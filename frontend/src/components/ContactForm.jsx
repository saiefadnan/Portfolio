import { useState } from 'react';
import '../styles/ContactForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [info, setInfo] = useState({
        name:'',
        email:'',
        subject:'',
        message:''
    });

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async()=>{
        if(info.name.trim()=='' || info.email.trim()=='' || info.subject.trim()=='' || info.message.trim()=='') {
            toast.error('You must fill all the fields');
            return;
        }
        if(!isValidEmail(info.email)){
            toast.error('Please enter a valid email');
            return;
        }
        try{
            const respose = await fetch('/api/sendEmail',{ //serverless function setup for vercel
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: info.name,
                    email: info.email,
                    subject: info.subject,
                    text: info.message
                }),
            });
            const data = await respose.json();
            // console.log(data.success);
            if(data.success){
                toast.success('Message sent!');
                setInfo({name:'',email:'',subject:'',message:''});
            }else{
                toast.error('Unexpected error occured');
            }
            
        }catch(err){
            console.error(err.message);
        }
        
    };
    return ( <div className="contact-form">
        <form>
            <label>Your name</label>
            <input type="text" onChange={(e)=>{setInfo({...info, name:e.target.value})}}/>
            <label>Email</label>
            <input type="email" onChange={(e)=>{setInfo({...info, email:e.target.value})}}/>
            <label>Subject</label>
            <input type="text" onChange={(e)=>{setInfo({...info, subject:e.target.value})}}/>
            <label>Message</label>
            <textarea rows="10" placeholder="Type your message here" onChange={(e)=>{setInfo({...info, message:e.target.value})}}/>
            <button className="btn" type='submit' onClick={(e)=>{
                e.preventDefault();
                handleSubmit();
            }}>Submit</button>
        </form>
        <ToastContainer/>
    </div> );
}
 
export default ContactForm;