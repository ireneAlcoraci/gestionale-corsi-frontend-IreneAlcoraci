import {ContactForm} from '../../components/contactForm/ContactForm'
import { useEffect } from 'react';


export function Contacts(){
    useEffect(() => {
        document.title = "Contacts";
    }, []);

    return (
        <div>
            <ContactForm/>
        </div>
    );
}