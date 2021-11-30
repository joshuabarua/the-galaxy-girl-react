import React, {useState} from 'react'
import Image from '../../assets/images/makeupBrush.jpg';
import './imageSection.css'

const ImageSection = () => {
    const [hover, setHover ] = useState(false);
    
    const onHover = () => {
        setHover(!hover);
    };

    return (
        <>
            <div className="containerImg"> 

            </div>
        
        </>
    );
};

export default ImageSection;