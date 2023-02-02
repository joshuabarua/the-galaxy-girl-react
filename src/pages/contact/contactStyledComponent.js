import React, { useState, useRef } from "react";
import Dropdown from "../../components/dropdown/dropdown";
import Navbar from "../../components/nav/navbar";
import emailjs from "emailjs-com";
import Lottie from "react-lottie";
import confettiData from "../../assets/lotties/confetti2.json";
import Fade from "react-reveal/Fade";
import {
  BodyContainer,
  ContentOverlayContainer,
  Form,
  FormBtn,
  FormContainer,
  FormTextAreaInput,
  FormTextInput,
  LottieBg,
  SentMsg,
  SubmittedForm,
  TitleMsgTextContainer,
} from "./contactElements";

const Confetti = (lottieResult) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: confettiData,
  };
  return (
    <LottieBg className={`lottie-bg ${lottieResult ? "active" : ""}`}>
      <Lottie options={defaultOptions} width={"100%"} />
    </LottieBg>
  );
};

const MsgDetail = () => {
  return (
    <>
      <Fade>
        <SentMsg>
        <p className="sentMsg">
          Your message has successfully been sent! We will contact you soon.{" "}
        </p>
        </SentMsg>
      </Fade>
    </>
  );
};

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const form = useRef();

  const [result, showResult] = useState(false);
  const [lottieResult, showLottieResult] = useState(false);

  const customSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    sendEmail(e);
    playConfetti(e);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "//service_2npcj2s",
        "my-first-templat",
        e.target,
        "user_sA3tlOdalK12Wt9JkvHaZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    showResult(true);
  };

  const playConfetti = (e) => {
    e.preventDefault();
    showLottieResult(true);
  };

  return (
    <>
      <Dropdown isOpen={isOpen} toggle={toggle} />

      <Navbar toggle={toggle} />

      <BodyContainer>
        <Fade>
          <ContentOverlayContainer>
            <div className="titleBox">
              <TitleMsgTextContainer>
                <h1> Message me! </h1>
              </TitleMsgTextContainer>
            </div>
            <FormContainer>
              <Form>
                <form action="" onSubmit={customSubmit}>
                  <FormTextInput>
                    <span> Name / Company </span>
                    <input
                      type="text"
                      placeholder="Name/Company"
                      name="name"
                      value="test"
                      required
                    />
                    <span> Email</span>
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value="test@test.com"
                      required
                    />
                    <span> Subject </span>
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value="subject"
                      required
                    />
                  </FormTextInput>

                  <FormTextAreaInput>
                    <span> Message</span>
                    <textarea
                      placeholder="Your message"
                      name="message"
                      value="msg"
                      required
                    ></textarea>
                  </FormTextAreaInput>
                  <FormBtn>
                    <button> Send Message </button>
                  </FormBtn>
                </form>
                <SubmittedForm>
                  {result && lottieResult ? (
                    <>
                      <MsgDetail />
                      <Confetti lottieResult={lottieResult} />
                    </>
                  ) : null}
                </SubmittedForm>
              </Form>
            </FormContainer>
          </ContentOverlayContainer>
        </Fade>
      </BodyContainer>
    </>
  );
};

export default Contact;
