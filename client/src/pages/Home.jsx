import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { getPosts } from '../services/getPosts';
import TestimonialSlider from "./TestimonialSlider";
import nurse from '../Assets/nurse.jpg';
import Carousel from 'react-bootstrap/Carousel';
import star from '../Assets/star.png';
import down from '../Assets/expand.svg';
import right from '../Assets/right.svg';
import Accordion from 'react-bootstrap/Accordion';
const Home = () => {

const myStyle={
  
  backgroundImage:`url(${nurse})`,
  Width:'100%',
  Height:'100%',
  position:'relative',
   backgroundSize:'cover',
  //  backgroundPosition:'center',
  // padding:'10%',
  marginTop:'0',
}

  
 const [activeButton, setActiveButton] = useState(['button1','button2','button3','button4','button5','button6','button7','button8']);

 const handleButtonClick = (buttonName) => {
   setActiveButton(buttonName);
 };  

  return (

    

    <div className='home'>
 {/* <div> <img src={nurse} alt="" /></div>  */}
 <div className= 'container' style={myStyle}> 
 <div className='spacer'> </div>
<div className='slogan'><h5>Empowering Health at Home</h5>
<div> <p> Donec eget ex consequat, commodo urna et, fringilla tellus. Sed sagittis bibendum lobortis. Integer a eros leo. Donec finibus dolor nec arcu posuere rhoncus.</p></div>

<a href="/contact">
<button>Get Started</button>
</a>
</div>
<div className='page2'><h5>We offer semper posuere laoreet</h5>
<div> <p> Proin at nulla at ante tristique sodales et sit amet justo. Nunc semper posuere laoreet. In hac habitasse platea dictumst. Integer quis neque sit amet mauris tempus sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed lacus metus. Etiam nec elit consequat orci varius iaculis eget sit amet massa. Integer sed nibh nibh.
  </p></div>
  <a href="/services">
<button>See our Services</button>
</a>
</div>
<div className='page3'>
<div><h5>Testimonials</h5></div>

<Carousel>
  <Carousel.Item interval={1000}>
    <div className="d-block w-100"> 
    <div className='stars'> 
<div className="star"><img src={star} alt="star" /></div>
<div className="star"><img src={star} alt="star" /></div>
<div className="star"><img src={star} alt="star" /></div>
<div className="star"><img src={star} alt="star" /></div>
<div className="star"><img src={star} alt="star" /></div>
    </div>
    <h5>Amazing people, Caring,Honest </h5>
    <p>   " Fusce vestibulum pulvinar nunc, hendrerit porttitor tellus tempus quis.
     Maecenas magna lorem, varius et fringilla sit amet, facilisis in risus. Mauris ultrices tellus cursus auctor gravida. Sed ut purus iaculis,
     imperdiet dolor nec, tempus ante. Nullam elementum elementum pretium".</p>
     <p>Blah Blah</p>
    </div>
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <div className="d-block w-100"> 
    <div className='stars'> 
<div className="star"><img src={star} alt="star" /></div>
<div className="star"><img src={star} alt="star" /></div>
<div className="star"><img src={star} alt="star" /></div>
<div className="star"><img src={star} alt="star" /></div>
<div className="star"><img src={star} alt="star" /></div>
    </div>
    <h5>Best Quality </h5>
    <p> " Fusce vestibulum pulvinar nunc, hendrerit porttitor tellus tempus quis.
     Maecenas magna lorem, varius et fringilla sit amet, facilisis in risus. Mauris ultrices tellus cursus auctor gravida. Sed ut purus iaculis,
     imperdiet dolor nec, tempus ante. Nullam elementum elementum pretium."</p>
     <p>Lorem Jordan</p>
    </div>

  </Carousel.Item>

  <Carousel.Item>
    <div className="d-block w-100"> 
    <div className='stars'> 
<div className="star"><img src={star} alt="star" /></div>
<div className="star"><img src={star} alt="star" /></div>
<div className="star"><img src={star} alt="star" /></div>
<div className="star"><img src={star} alt="star" /></div>
<div className="star"><img src={star} alt="star" /></div>
    </div>
    <h5>Professional, Caring,Honest </h5>
    <p>"Fusce vestibulum pulvinar nunc, hendrerit porttitor tellus tempus quis.
     Maecenas magna lorem, varius et fringilla sit amet, facilisis in risus. Mauris ultrices tellus cursus auctor gravida. Sed ut purus iaculis,
     imperdiet dolor nec, tempus ante. Nullam elementum elementum pretium."</p>
     <p>Spider Man</p>
    </div>
  </Carousel.Item>

</Carousel>
</div>

{/* Starts Here */}
<div className="page4">
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        <div className='question'>
          <p>Who pays for home health?</p>
        <img id='right' className={activeButton === 'button1' ? 'active' : 'notActive'}
        onClick={() => handleButtonClick('button1')} src={right} alt="" />
        <img id='down' className={activeButton === 'button2' ? 'active' : 'notActive'}
        onClick={() => handleButtonClick('button2')} src={down} alt="" />
        </div>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body> 
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>        
<div className='question'>
  <p >How much does home health cost? </p> 
  <img id='right' className={activeButton === 'button3' ? 'active' : 'notActive'}
        onClick={() => handleButtonClick('button3')} src={right} alt=""  />
   <img id='down' className={activeButton === 'button4' ? 'active' : 'notActive'}
        onClick={() => handleButtonClick('button4')} src={down} alt="" />
</div>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
   


    <Accordion.Item eventKey="2">
        <Accordion.Header>        
<div className='question'>
  <p>How are caregivers selected? </p> 
  <img id='right' className={activeButton === 'button5' ? 'active' : ''}
        onClick={() => handleButtonClick('button5')} src={right} alt=""  />
   <img id='down' className={activeButton === 'button6' ? 'active' : 'notActive'}
        onClick={() => handleButtonClick('button6')} src={down} alt="" />
</div>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="3">
        <Accordion.Header>        
<div className='question'>
  <p >How quickly can I arrange for service? </p> 
  <img id='right' className={activeButton === 'button7' ? 'active' : 'notActive'}
        onClick={() => handleButtonClick('button7')} src={right} alt=""  />
   <img id='down' className={activeButton === 'button8' ? 'active' : 'notActive'}
        onClick={() => handleButtonClick('button8')} src={down} alt="" />
</div>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>

    </div>
{/* Ends HEre */}
 </div>

    </div>
  )
}

export default Home