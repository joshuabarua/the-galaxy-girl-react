import React, {useState}  from 'react';
import Dropdown from '../../components/dropdown/dropdown';
import Navbar from '../../components/nav/navbar';
import Footer from '../../components/footer/index';
import LightGallery from 'lightgallery/react';
import {galleryImgDataGroup1, galleryImgDataGroup2, galleryImgDataGroup3, galleryImgDataGroup4, galleryImgDataGroup5, galleryImgDataGroup6, galleryImgDataGroup7, galleryImgDataGroup8, galleryImgDataGroup9 } from './galleryImgData';
import {LightGalleryContainer, PortfolioContainer, PortfolioHeader, AlbumContainer} from './portfolioElements';
//import InfiniteLoading from 'react-simple-infinite-loading' REMOVE THIS FROM YARN/DEPENDENCIES
import './portfolioStyles.css';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgRotate  from 'lightgallery/plugins/rotate';

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

 let ImageItemsFunc = (imageItemData) => {
    const [imageItems3, setimageItems3] = useState(`${imageItemData}`)
  };

  const [imageItems, setImageItems] = useState(galleryImgDataGroup1);
  const [imageItems2, setImageItems2] = useState(galleryImgDataGroup2);
  const [imageItems3, setImageItems3] = useState(galleryImgDataGroup3);
  const [imageItems4, setImageItems4] = useState(galleryImgDataGroup4);
  const [imageItems5, setImageItems5] = useState(galleryImgDataGroup5);
  const [imageItems6, setImageItems6] = useState(galleryImgDataGroup6);
  const [imageItems7, setImageItems7] = useState(galleryImgDataGroup7);
  const [imageItems8, setImageItems8] = useState(galleryImgDataGroup8);
  const [imageItems9, setImageItems9] = useState(galleryImgDataGroup9);

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
      
  return (
      <>
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={ toggle } />
        <PortfolioContainer>
          <PortfolioHeader> 
            <h1>Portfolio</h1>
          </PortfolioHeader>
          
          <AlbumContainer>
            <h1> Beauty and Editorial </h1>
            <LightGalleryContainer>
              
                <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                  {
                      imageItems.map((item) => {
                      return (
                          <a  key={item.id} className="gallery-item" href={item.src} data-lg-size={item.size} data-sub-html={item.subHtml} >
                            <img className="img-responsive" src={item.thumb} alt={""} /> 
                          </a>           
                      )})
                  };
                    
                </LightGallery>
            </LightGalleryContainer>
          </AlbumContainer>
          
          <AlbumContainer>
            <h1> SFX Makeup </h1>
            <LightGalleryContainer>
              
                <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                  {imageItems2.map((item) => {
                    return (
                        <a  key={item.id} className="gallery-item" href={item.src} data-sub-html={item.subHtml} >
                          <img className="img-responsive" src={item.thumb} alt={""} /> 
                        </a>           
                    )})
                    }
                </LightGallery>
            </LightGalleryContainer>
          </AlbumContainer>

          <AlbumContainer>
            <h1> Body Paint </h1>
            <LightGalleryContainer>
              
                <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                  {imageItems3.map((item) => {
                    return (
                        <a  key={item.id} className="gallery-item" href={item.src} data-sub-html={item.subHtml} >
                          <img className="img-responsive" src={item.thumb} alt={""} /> 
                        </a>           
                    )})
                    }
                </LightGallery>
            </LightGalleryContainer>
          </AlbumContainer>

          <AlbumContainer>
            <h1> Theatrical </h1>
            <LightGalleryContainer>
              
                <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                  {imageItems4.map((item) => {
                    return (
                        <a  key={item.id} className="gallery-item" href={item.src} data-sub-html={item.subHtml} >
                          <img className="img-responsive" src={item.thumb} alt={""} /> 
                        </a>           
                    )})
                    }
                </LightGallery>
            </LightGalleryContainer>
          </AlbumContainer>

          <AlbumContainer>
            <h1> Wedding </h1>
            <LightGalleryContainer>
              
                <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                  {imageItems5.map((item) => {
                    return (
                        <a  key={item.id} className="gallery-item" href={item.src} data-sub-html={item.subHtml} >
                          <img className="img-responsive" src={item.thumb} alt={""} /> 
                        </a>           
                    )})
                    }
                </LightGallery>
            </LightGalleryContainer>
          </AlbumContainer>

          <AlbumContainer>
            <h1> Period </h1>
            <LightGalleryContainer>
              
                <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                  {imageItems6.map((item) => {
                    return (
                        <a  key={item.id} className="gallery-item" href={item.src} data-sub-html={item.subHtml} >
                          <img className="img-responsive" src={item.thumb} alt={""} /> 
                        </a>           
                    )})
                    }
                </LightGallery>
            </LightGalleryContainer>
          </AlbumContainer>

          <AlbumContainer>
            <h1> On Site / Working </h1>
            <LightGalleryContainer>
              
                <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                  {imageItems7.map((item) => {
                    return (
                        <a  key={item.id} className="gallery-item" href={item.src} data-sub-html={item.subHtml} >
                          <img className="img-responsive" src={item.thumb} alt={""} /> 
                        </a>           
                    )})
                    }
                </LightGallery>
            </LightGalleryContainer>
          </AlbumContainer>

          <AlbumContainer>
            <h1> Nails </h1>
            <LightGalleryContainer>
              
                <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                  {imageItems8.map((item) => {
                    return (
                        <a  key={item.id} className="gallery-item" href={item.src} data-sub-html={item.subHtml} >
                          <img className="img-responsive" src={item.thumb} alt={""} /> 
                        </a>           
                    )})
                    }
                </LightGallery>
            </LightGalleryContainer>
          </AlbumContainer>

          <AlbumContainer>
            <h1> Camouflage </h1>
            <LightGalleryContainer>
              
                <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                  {imageItems9.map((item) => {
                    return (
                        <a  key={item.id} className="gallery-item" href={item.src} data-sub-html={item.subHtml} >
                          <img className="img-responsive" src={item.thumb} alt={""} /> 
                        </a>           
                    )})
                    }
                </LightGallery>
            </LightGalleryContainer>
          </AlbumContainer>

        </PortfolioContainer>
        <Footer />
      </>
  );
};

export default Portfolio;

