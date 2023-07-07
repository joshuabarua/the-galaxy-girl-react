import { Icon } from "@iconify/react";
import React, { useState } from "react";
import "./sliderStyles.css";
import perfect10 from "../../assets/images/logos-filmtitles/Perfect10film.jpeg";
import Amw from "../../assets/images/logos-filmtitles/auroraMediaWorldwide.jpg";
import Itv from "../../assets/images/logos-filmtitles/itv-logo.png";
import Baerclaw from "../../assets/images/logos-filmtitles/baerclawproductions.png";
import Goodwood from "../../assets/images/logos-filmtitles/goodwood.png";
import Underglass from "../../assets/images/logos-filmtitles/underglass.png";
import Jacobsminis from "../../assets/images/logos-filmtitles/jacobsminis.png";

const Slider = () => {
	return (
		<>
			<h2 className="sliderTitle"> Companies I've Worked With </h2>
			<div className="sliderContainer">
				<div className="slider">
					<ul>
						<li>
							<div className="logosImg4">
								{" "}
								<img src={Underglass} alt="" />{" "}
							</div>
						</li>
						<li>
							<div className="logosImg3">
								{" "}
								<img src={Jacobsminis} alt="" />{" "}
							</div>
						</li>
						<li>
							<div className="logosImg">
								{" "}
								<Icon
									icon="logos:netflix"
									style={{ fontSize: "50px" }}
								/>{" "}
							</div>
						</li>
						<li>
							<div className="logosImg2">
								{" "}
								<img src={Goodwood} alt="" />{" "}
							</div>
						</li>

						<li>
							<div className="logosImg2">
								{" "}
								<Icon
									icon="fa-brands:imdb"
									style={{ fontSize: "100px" }}
								/>{" "}
							</div>
						</li>
						<li>
							<div className="logosImg2">
								{" "}
								<img src={perfect10} alt="" />{" "}
							</div>
						</li>
						<li>
							<div className="logosImg2">
								{" "}
								<Icon icon="logos:aws" style={{ fontSize: "100px" }} />{" "}
							</div>
						</li>
						<li>
							<div className="logosImg2">
								{" "}
								<img src={Amw} alt="" />{" "}
							</div>
						</li>

						<li>
							<div className="logosImg2">
								{" "}
								<img src={Baerclaw} alt="" />{" "}
							</div>
						</li>

						<li>
							<div className="logosImg3">
								{" "}
								<img src={Itv} alt="" />{" "}
							</div>
						</li>

						<li>
							<div className="logosImg4">
								{" "}
								<img src={Underglass} alt="" />{" "}
							</div>
						</li>
						<li>
							<div className="logosImg3">
								{" "}
								<img src={Jacobsminis} alt="" />{" "}
							</div>
						</li>
						<li>
							<div className="logosImg">
								{" "}
								<Icon
									icon="logos:netflix"
									style={{ fontSize: "50px" }}
								/>{" "}
							</div>
						</li>
						<li>
							<div className="logosImg2">
								{" "}
								<img src={Goodwood} alt="" />{" "}
							</div>
						</li>

						<li>
							<div className="logosImg2">
								{" "}
								<Icon
									icon="fa-brands:imdb"
									style={{ fontSize: "100px" }}
								/>{" "}
							</div>
						</li>
						<li>
							<div className="logosImg2">
								{" "}
								<img src={perfect10} alt="" />{" "}
							</div>
						</li>
						<li>
							<div className="logosImg2">
								{" "}
								<Icon icon="logos:aws" style={{ fontSize: "100px" }} />{" "}
							</div>{" "}
						</li>
						<li>
							<div className="logosImg2">
								{" "}
								<img src={Amw} alt="" />{" "}
							</div>
						</li>

						<li>
							<div className="logosImg2">
								{" "}
								<img src={Baerclaw} alt="" />{" "}
							</div>
						</li>

						<li>
							<div className="logosImg3">
								{" "}
								<img src={Itv} alt="" />{" "}
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Slider;
