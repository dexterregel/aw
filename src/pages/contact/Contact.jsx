import ContactForm from './ContactForm.jsx';
import Address from './Address.jsx';
import './contact.css';

export default function Contact() {
  return (
    <main className='contact'>
      <h1 className='page-title'>Contact us</h1>
      <ContactForm />
      <Address />
    </main>
  );
};