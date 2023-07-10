import React, { useState, useEffect } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import Navbar from "../../components/nav/Navbar";
import { PortfolioContainer, PortfolioHeader } from "./portfolioElements";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { gallery } from "./galleryImgData";
import GalleryGroup from "./GalleryGroup";

const WorkPortfolio = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	const [imageItems, setImageItems] = useState({});
	useEffect(() => {
		setImageItems(gallery);

		return console.log("cleanup");
	}, [imageItems]);

	return (
		<>
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />

			<PortfolioContainer>
				<PortfolioHeader>
					<h1>Portfolio</h1>
				</PortfolioHeader>
				{Object.entries(imageItems).map(([key, val]) => (
					<React.Fragment key={key}>
						<GalleryGroup imageData={val} />
					</React.Fragment>
				))}
			</PortfolioContainer>
		</>
	);
};

export default WorkPortfolio;
