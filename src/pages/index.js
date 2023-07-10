import React, { useState } from "react";
import Dropdown from "../components/dropdown/Dropdown";
import Navbar from "../components/navHomepage/Navbar";
import HeroSection from "../components/heroSection/HeroSection";
import InfoSection from "../components/infoSection/InfoSection";
import { aboutObjOne } from "../components/infoSection/data";
import Slider from "../components/slider/Slider";
import ImageSection from "../components/imageSection/ImageSection";

const Home = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<InfoSection {...aboutObjOne}> </InfoSection>
			<Slider />
			<ImageSection />
		</>
	);
};

export default Home;
