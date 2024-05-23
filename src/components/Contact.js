import '../styles/Contact.css'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import instagram from '../images/insta.webp'

const Contact = () => {
  return (
    <div>
      <div >
        <h2 className='contact-title' id='contact'>
          Contact Me
        </h2>
        <div className='contact-container'>
          <p style={{fontFamily:'cursive', fontSize:'18px'}}>
            To get in touch with me fill out this form:
          </p>
          <form style={{marginTop:'0px'}}>
            <input
              
              type="text"
              placeholder="Your Name"
            />
            <input
            
              type="email"
              placeholder="Your Email"
            />
            <input
              
              type="text"
              placeholder="Your Message"
            />

            <button
              className='button'
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className='media-container'>
          <p style={{fontFamily:'cursive', fontSize:'18px'}}>
            Or access my social media: 
          </p>
          <a style={{marginLeft:'2%'}} href='https://www.linkedin.com/in/maria-afteni-4104aa28a/'><img src={linkedin} alt='linkedin' className='media' /></a>
          <a style={{marginLeft:'2%'}} href='https://github.com/maria-afteni'><img src={github} alt='github' className='media'/></a>
          <a style={{marginLeft:'2%'}} href='https://www.instagram.com/aftenimariana/'><img src={instagram} alt='instagram' className='media'/></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;