import React, {useState, useRef}  from 'react';
import Dropdown from '../../components/dropdown/dropdown';
import Navbar from '../../components/nav/navbar';
import Footer from '../../components/footer/index';
import emailjs from 'emailjs-com';
import Lottie from 'react-lottie';
import confettiData from "../../assets/lotties/confetti2.json"
import Fade from 'react-reveal/Fade'


import './contact.css';

const Confetti = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: confettiData,
}
  return (
    <div className='lottie-bg'>
      <Lottie options={defaultOptions} width={'80%'} />
    </div>
  );
};

const MsgDetail = () => {
  return (
    <>
      <Fade><p className="sentMsg">Your message has successfully been sent! We will contact you soon. </p></Fade>
    </>
  );
};


const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const form = useRef();

  const [result, showResult] = useState(false);
  const [lottieResult, showLottieResult] = useState(false);

  const customSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    sendEmail(e);
    playConfetti(e);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('//service_2npcj2s', 'my-first-templat', e.target, 'user_sA3tlOdalK12Wt9JkvHaZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      e.target.reset();
      showResult(true);  
  };

  const playConfetti = (e) => {
    e.preventDefault();

    showLottieResult(true);
  }

  return (
    <>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      
     <Navbar toggle={ toggle } />

      <div className="body">
        <Fade>
          <div className="contactOverlay">
          { lottieResult && <Confetti/> }  
            <div className="title"> 
            <text><h1> Message me! </h1></text>
            </div>

            <div className="container">
          
              <div className="form">
              

                <form action="" onSubmit={customSubmit} >

                  <div className="formWord">
                    <span> Name / Company </span>
                    <input type="text" placeholder="Name/Company" name="name" value="test"required />
                    <span> Email</span>
                    <input type="email" placeholder="Email Address" name="email" value="test@test.com" required  />
                    <span> Subject </span>
                    <input type="text" placeholder="Subject" name="subject" value="subject"required/>
                  </div>

                  <div className="formWord2">
                    <span> Message</span>
                    <textarea placeholder="Your message" name="message" value="msg" required></textarea>
                    
                  </div>

                  <div className='form-btn'>
                    <button> Send Message </button>
                  </div>
                  
                    <div className="submittedForm">
                     { result ? <MsgDetail/>  : null }                    
                    </div>
                  
                </form>

                

              </div>
            </div>
          </div>
          </Fade>
      </div>
      <Footer />
    </>
  ) 
};

export default Contact;