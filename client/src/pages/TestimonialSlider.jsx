 import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import  { useEffect, useState } from 'react'

import { Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const TestimonialSlider=()=> {


    const [activeButton, setActiveButton] = useState('button1');

    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };  

  
  return (
   <div>
      <button
        className={activeButton === 'button1' ? 'active' : ''}
        onClick={() => handleButtonClick('button1')}
      >
        Button 1
      </button>
      <button
        className={activeButton === 'button2' ? 'active' : ''}
        onClick={() => handleButtonClick('button2')}
      >
        Button 2
      </button>
    </div>
  
  );


}
export default TestimonialSlider


