import React from "react";
import { Button } from "../../pages/buttonElement";
import {
	InfoContainer,
	InfoWrap,
	InfoRow,
	Column1,
	Column2,
	TextWrap,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img,
} from "./infoElements";
import EmmaPic from "../../assets/images/em2.jpg";

const InfoSection = ({
	lightBg,
	lightText,
	imgStart,
	topLine,
	headline,
	darkText,
	description,
	buttonLabel,
	alt,
	id,
}) => {
	return (
		<InfoContainer lightBg={lightBg} id={id}>
			<InfoWrap>
				<InfoRow imgStart={imgStart}>
					<Column1>
						<TextWrap>
							<TopLine> {topLine} </TopLine>
							<Heading lightText={lightText}> {headline} </Heading>
							<Subtitle darkText={darkText}> {description} </Subtitle>
						</TextWrap>
						<BtnWrap>
							<Button to="/portfolio" primary="true" dark="true">
								{buttonLabel}
							</Button>
						</BtnWrap>
					</Column1>
					<Column2>
						<ImgWrap>
							<Img src={EmmaPic} alt={alt} className="infoSectionImg" />
						</ImgWrap>
					</Column2>
				</InfoRow>
			</InfoWrap>
		</InfoContainer>
	);
};

export default InfoSection;
