import React, { useState, Suspense, lazy } from "react";
import { LightGalleryContainer, AlbumContainer } from "./portfolioElements";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgRotate from "lightgallery/plugins/rotate";

const LazyLightGallery = lazy(() => import("lightgallery/react"));
export default function GalleryGroup(props) {
	const { name, images } = props.imageData;

	//TODO: fix display of data
	console.log(images);
	return (
		<>
			<AlbumContainer>
				<h1>{name}</h1>

				<LightGalleryContainer>
					<Suspense fallback={<div>Loading...</div>}>
						<LazyLightGallery
							plugins={[lgThumbnail, lgZoom, lgRotate]}
							mode="lg-slide"
							elementClassNames="animated-thumbnails-gallery"
						>
							{props.images &&
								images.map((image) => (
									<a
										key={image.id}
										className="gallery-item"
										href={image.src}
										data-lg-size={image.size}
										data-sub-html={image.subHtml}
									>
										<img
											className="img-responsive"
											src={image.thumb}
											alt={""}
										/>
									</a>
								))}
						</LazyLightGallery>
					</Suspense>
				</LightGalleryContainer>
			</AlbumContainer>
		</>
	);
}
