import React, { useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import Navbar from "../../components/nav/Navbar";
import emailjs from "emailjs-com";
import Lottie from "react-lottie";
import confettiData from "../../assets/lotties/confetti2.json";
import "./contact.css";
import { Box, Stack } from "@mui/material";

const Confetti = (lottieResult) => {
	const defaultOptions = {
		loop: false,
		autoplay: true,
		animationData: confettiData,
	};
	return (
		<div className={`lottie-bg ${lottieResult ? "active" : ""}`}>
			<Lottie options={defaultOptions} width={"100%"} />
		</div>
	);
};

const MsgDetail = () => {
	return (
		<>
			<p className="sentMsg">
				Your message has successfully been sent! We will contact you soon.{" "}
			</p>
		</>
	);
};

const Contact = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

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

			<Box className="contactBody">
				<Box className="contactOverlay">
					<Box className="titleBox" mb={8}>
						<div className="titleMsgText">
							<h1> Message me! </h1>
						</div>
					</Box>

					<Box className="form-container">
						<form action="" onSubmit={customSubmit}>
							<Stack
								direction="row"
								justifyContent={"space-between"}
								spacing={3}
								sx={{ width: "100%" }}
							>
								<Stack direction="column" sx={{ width: "50%" }}>
									<Stack direction="column">
										<label className="form-label"> Name / Company </label>
										<input
											type="text"
											placeholder="Name/Company"
											name="name"
											value="test"
											required
											className="form-input"
										/>
									</Stack>
									<Stack direction="column">
										<label className="form-label"> Email</label>
										<input
											type="email"
											placeholder="Email Address"
											name="email"
											value="test@test.com"
											required
											className="form-input"
										/>
									</Stack>
									<Stack direction="column">
										<label className="form-label"> Subject </label>
										<input
											type="text"
											placeholder="Subject"
											name="subject"
											value="subject"
											required
											className="form-input"
										/>
									</Stack>
								</Stack>

								<Stack direction="column" sx={{ width: "50%" }}>
									<Stack direction="column" className="form-input-field">
										<label className="form-label"> Message</label>
										<textarea
											placeholder="Your message"
											name="message"
											value="msg"
											required
											className="form-textarea"
										></textarea>
									</Stack>
								</Stack>
							</Stack>

							<div className="form-row form-btn">
								<button> Send Message </button>
							</div>
							<div className="submittedForm">
								{result && lottieResult ? (
									<>
										<MsgDetail />
										<Confetti lottieResult={lottieResult} />
									</>
								) : null}
							</div>
						</form>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Contact;
