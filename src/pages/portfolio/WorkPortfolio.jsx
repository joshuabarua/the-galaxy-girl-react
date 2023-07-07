import React, { useState, useEffect, lazy, Suspense } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import Navbar from "../../components/nav/Navbar";
import { PortfolioContainer, PortfolioHeader } from "./portfolioElements";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Fade from "react-reveal/Fade";
import { gallery } from "./galleryImgData";
import GalleryGroup from "./GalleryGroup";

const {
	galleryImgDataGroup1,
	galleryImgDataGroup2,
	galleryImgDataGroup3,
	galleryImgDataGroup4,
	galleryImgDataGroup5,
	galleryImgDataGroup6,
	galleryImgDataGroup7,
	galleryImgDataGroup8,
	galleryImgDataGroup9,
} = gallery;

const WorkPortfolio = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	console.log(gallery);
	const [imageItems, setImageItems] = useState({});

	useEffect(() => {
		setImageItems(gallery);
	}, []);
	//TODO: Fix object.entries function to autogenerate component
	return (
		<>
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Fade>
				<Navbar toggle={toggle} />
			</Fade>

			<PortfolioContainer>
				<Fade>
					<PortfolioHeader>
						<h1>Portfolio</h1>
					</PortfolioHeader>
				</Fade>
				{Object.entries(imageItems).map((imageGroup) => (
					<GalleryGroup props={{ imageGroup }} key={Math.random()} />
				))}
			</PortfolioContainer>
		</>
	);
};

export default WorkPortfolio;
