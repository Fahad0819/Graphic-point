import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import ImageSlider from '../ImageSlider';
import {SliderData} from '../SliderData';
import CardItem from '../CardItem';

export default function Products() {
  return (
    
    <div className='background'>
    <video src='/videos/video-1.mp4' autoPlay loop muted />



    <h1>Bespoke Graphics and Signage </h1>
    <h1>in Greater Manchester</h1>
   
    <>
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="/images/sign1.jpg" alt="Avatar" />
    </div>
    <div className="flip-card-back">
      <h1></h1> 
      <p>Architect & Engineer</p> 
      <p>At Graphic Point & Sign we are focused on meeting and exceeding the expectations of each and every customer. Whether the job that you would like us to do is big or small, we have a proven track record of innovative designs and attention to detail that will leave you with a finished product that you will be proud to showcase.
        We offer a complete service for all of your signage needs. From our very first design consultation, we will work with you and provide an excellent customer journey right up to fitting your new signs and the aftercare that follows.
        Our team specialise in bespoke graphic designs, shop signs, window signs, vinyl signs, LED signs, A-boards and flat cut letters, providing our customers in Greater Manchester with products to help promote their businesses in the best way.
        Whether you need a small domestic job doing, or you’re looking to hire us for a larger commercial project, we will always carry out our work to the highest standards at competitive prices.</p>
    </div>
  </div>
</div>
</>
    
    
    

<ImageSlider slides={SliderData} />
    <Footer />
    </div>
  )
}
