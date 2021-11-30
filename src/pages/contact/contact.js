import React, {useState, useRef}  from 'react';
import Dropdown from '../../components/dropdown/dropdown';
import Navbar from '../../components/nav/navbar';
import Footer from '../../components/footer/index';
import emailjs from 'emailjs-com';
import Lottie from 'react-lottie';
import confettiData from "../../assets/lotties/confetti2.json"

import './contact.css';

const Result = () => {

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: confettiData,
  };
  
  return (
    <>
      <Lottie options={defaultOptions}  />
      <p className="sentMsg">Your message has successfully been sent! We will contact you soon. </p>
      
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

  return (
    <>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={ toggle } />

      <div className="body">
        <div className="contactMe">
          <div className="contactOverlay">
            <div className="container">
              <div className="form">

                <form action="" onSubmit={sendEmail}>
                  <div className="formWord">
                    <span> Name / Company </span>
                    <input type="text" placeholder="Name/Company" name="name" value="test"required />
                    <span> Email</span>
                    <input type="email" placeholder="Email Address" name="email" value="test@test.com" required  />
                    <span> Subject </span>
                    <input type="text" placeholder="Subject" name="subject" value="subject"required/>
                  </div>
                  <div className="formWord">
                    <span> Message</span>
                    <textarea placeholder="Your message" name="message" value="msg" required></textarea>
                    <button> Send Message </button>
                    

                    <div className="submittedForm">
                      { result ? <Result/>  : null }
                     
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  ) 
};

export default Contact;