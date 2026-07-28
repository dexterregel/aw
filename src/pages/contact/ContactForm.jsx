import './contact.css';

export default function ContactForm() {

  async function submitForm(formData) {
    const { email, message } = Object.fromEntries(formData);
    const url = 'https://idpregonp2.execute-api.us-east-1.amazonaws.com/v1/contact';
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ email, message })
      });
      
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      };

      const data = res.json();

    } catch (error) {
      return <h1>{error}</h1>;
    };
  };

  return (
    <form className='contact-form' action={submitForm}>
      <p>Interested in doing business with us? Send a message!</p>

      <div className='form-field'>
        <label htmlFor='name'>Your name:</label>
        <input
          id='name'
          name='name'
          type='text'
          autoComplete='off'
          placeholder='Name...'
          required />
      </div>

      <div className='form-field'>
        <label htmlFor='email'>Your email:</label>
        <input
          id='email'
          name='email'
          type='email'
          autoComplete='off'
          placeholder='Email...'
          required />
      </div>

      <div className='form-field'>
        <label htmlFor='message'>Message:</label>
        <textarea
          id='message'
          name='message'
          autoComplete='off'
          required>
        </textarea>
      </div>

      <button type='submit' className='submit'>Submit</button>
    </form>
  );
};