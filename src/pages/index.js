import React, {useState} from 'react';
import Dropdown from '../components/dropdown/dropdown';
import Navbar from '../components/navHomepage/navbar';
import HeroSection from '../components/heroSection/index';
import InfoSection from '../components/infoSection/index';
import { aboutObjOne } from '../components/infoSection/data';
import Slider from '../components/slider/slider';
import ImageSection from '../components/imageSection/imageSection';
import Footer from '../components/footer/index';
import Fade from 'react-reveal/Fade';
  
const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  

  return (
    <>
      
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={ toggle } />
        <HeroSection />
        <Fade > 
          <InfoSection {...aboutObjOne}> </InfoSection>
        </Fade>
        <Fade> 
          <Slider />
        </Fade>
        <Fade>
          <ImageSection />
        </Fade>
        <Fade>
          <Footer />
        </Fade>
    </>
  );
};

export default Home;