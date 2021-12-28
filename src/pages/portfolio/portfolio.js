import React, {useState, Suspense, lazy}  from 'react';
import Dropdown from '../../components/dropdown/dropdown';
import Navbar from '../../components/nav/navbar';
import Footer from '../../components/footer/index';
import LightGallery  from 'lightgallery/react';
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
import Fade from 'react-reveal/Fade';

//const LightGallery = lazy(() => import('lightgallery/react'));
//const Footer = lazy(() => import('../../components/footer/index'));

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }



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
        <Fade> <Navbar toggle={ toggle } /> </Fade>
        
        <PortfolioContainer>
          <Fade>
            <PortfolioHeader> 
              <text><h1>Portfolio</h1></text>
            </PortfolioHeader>
          </Fade>
          
          
          <AlbumContainer>
            <h1> Beauty and Editorial </h1>
            
            <LightGalleryContainer>
                <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                  {
                   
                    imageItems.map((item) => {
                    return (
                      <Fade bottom>
                        <a  key={item.id} className="gallery-item" href={item.src} data-lg-size={item.size} data-sub-html={item.subHtml} >
                          <img className="img-responsive" src={item.thumb} alt={""} /> 
                        </a>  
                      </Fade>         
                    )})   
                  }    
                </LightGallery>
            </LightGalleryContainer>
            
          </AlbumContainer>

          <Fade bottom>
            <AlbumContainer>
              <Fade bottom> <h1> SFX Makeup </h1> </Fade>
              <Fade bottom> 
                <LightGalleryContainer> 
                  <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                    
                      {imageItems2.map((item) => {
                      return (
                        <Fade bottom>
                          <a  key={item.id} className="gallery-item" href={item.src} data-sub-html={item.subHtml} >
                            <img className="img-responsive" src={item.thumb} alt={""} /> 
                          </a>     
                        </Fade>      
                      )})
                      }
                    
                  </LightGallery>
                </LightGalleryContainer>
              </Fade>
            </AlbumContainer>
          </Fade>
          
          <Fade bottom>
            <AlbumContainer>
            <Fade bottom>  <h1> Body Paint </h1> </Fade>   
              <LightGalleryContainer>
                
                  <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                    {imageItems3.map((item) => {
                      return (
                        <Fade bottom> 
                          <a  key={item.id} className="gallery-item" href={item.src} data-sub-html={item.subHtml} >
                            <img className="img-responsive" src={item.thumb} alt={""} /> 
                          </a>  
                        </Fade>            
                      )})
                      }
                  </LightGallery>
              </LightGalleryContainer>
            </AlbumContainer>
          </Fade>
          
          <Fade bottom>
          <AlbumContainer>
                 <Fade bottom>  <h1> Theatrical </h1> </Fade>   
            <LightGalleryContainer>
              
                <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                  {imageItems4.map((item) => {
                    return (
                      <Fade bottom> 
                        <a  key={item.id} className="gallery-item" href={item.src} data-sub-html={item.subHtml} >
                          <img className="img-responsive" src={item.thumb} alt={""} /> 
                        </a>    
                      </Fade>          
                    )})
                    }
                </LightGallery>
            </LightGalleryContainer>
          </AlbumContainer>
          </Fade>

          <Fade bottom>
          <AlbumContainer>
                  <Fade bottom> <h1> Wedding </h1> </Fade> 
            <LightGalleryContainer>
              
                <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                  {imageItems5.map((item) => {
                    return (
                      <Fade bottom> 
                        <a  key={item.id} className="gallery-item" href={item.src} data-sub-html={item.subHtml} >
                          <img className="img-responsive" src={item.thumb} alt={""} /> 
                        </a>    
                      </Fade>        
                    )})
                    }
                </LightGallery>
            </LightGalleryContainer>
          </AlbumContainer>
          </Fade>

          <AlbumContainer>
                 <Fade bottom>  <h1> Period </h1> </Fade>   
            <LightGalleryContainer>
              
                <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                  {imageItems6.map((item) => {
                    return (
                      <Fade bottom> 
                        <a  key={item.id} className="gallery-item" href={item.src} data-sub-html={item.subHtml} >
                          <img className="img-responsive" src={item.thumb} alt={""} /> 
                        </a> 
                      </Fade>             
                    )})
                    }
                </LightGallery>
            </LightGalleryContainer>
          </AlbumContainer>

          <Fade bottom>
          <AlbumContainer>
                  <Fade bottom> <h1> On Site / Working </h1> </Fade>   
            <LightGalleryContainer>
              
                <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                  {imageItems7.map((item) => {
                    return (
                      <Fade bottom> 
                        <a  key={item.id} className="gallery-item" href={item.src} data-sub-html={item.subHtml} >
                          <img className="img-responsive" src={item.thumb} alt={""} /> 
                        </a> 
                      </Fade>      
                    )})
                    }
                </LightGallery>
            </LightGalleryContainer>
          </AlbumContainer>
          </Fade>

          <Fade bottom>
            <AlbumContainer>
            <Fade bottom>   <h1> Nails </h1>  </Fade>
              <LightGalleryContainer>
                
                  <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                  {imageItems8.map((item) => {
                      return (
                        <Fade bottom> 
                          <a  key={item.id} className="gallery-item" href={item.src} data-sub-html={item.subHtml} >
                            <img className="img-responsive" src={item.thumb} alt={""} /> 
                          </a> 
                        </Fade>
                                  
                      )})
                      }
                  </LightGallery>
              </LightGalleryContainer>
            </AlbumContainer>
          </Fade>

          <Fade bottom>
            <AlbumContainer>
                    <Fade bottom> <h1> Camouflage </h1>  </Fade>
              <LightGalleryContainer>
                
                  <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom, lgRotate ]} mode="lg-slide" elementClassNames="animated-thumbnails-gallery">
                    {imageItems9.map((item) => {
                      return (
                        <Fade bottom> 
                          <a  key={item.id} className="gallery-item" href={item.src} data-sub-html={item.subHtml} >
                            <img className="img-responsive" src={item.thumb} alt={""} /> 
                          </a>      
                        </Fade>     
                      )})
                      }
                  </LightGallery>
              </LightGalleryContainer>
            </AlbumContainer>
          </Fade>

        </PortfolioContainer>
        
        <Fade >
          <Footer />
        </Fade>
        

        
      </>
  );
};

export default Portfolio;

