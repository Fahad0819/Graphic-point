import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import ImageSlider from '../ImageSlider';
import {SliderData} from '../SliderData';
import InfoSection from '../../InfoSection';
import CardFlip from '../../CardFlip';


export default function Products() {
  const body1 = [`At Graphic Point & Sign we are focused on meeting and exceeding the expectations of each and every customer. Whether the job that you would like us to do is big or small, we have a proven track record of innovative designs and attention to detail that will leave you with a finished product that you will be proud to showcase.`,`
  We offer a complete service for all of your signage needs. From our very first design consultation, we will work with you and provide an excellent customer journey right up to fitting your new signs and the aftercare that follows.`,
  `Our team specialise in bespoke graphic designs, shop signs, window signs, vinyl signs, LED signs, A-boards and flat cut letters, providing our customers in Greater Manchester with products to help promote their businesses in the best way.
  Whether you need a small domestic job doing, or you’re looking to hire us for a larger commercial project, we will always carry out our work to the highest standards at competitive prices.`];
  
  const body2 =[`Using our state-of-the-art machinery, we offer our customers across Greater Manchester a wide range of products, including bespoke signage and marketing materials for domestic and commercial use.`,` Contact us today to find out what we can do for you.`]

  const body3= [`Our friendly and reliable team offer a speedy and professional service to all of our domestic and commercial customers, ensuring your products are designed and created to a high standard at competitive prices. We are not a one size fits all company and understand how important it is for your business to stand out, which is why we offer a personalised service to create something unique for you.`]
  
  const img1 = `/images/sign6.jpg`;
  const img2 = `/images/sign7.jpg`;
  const img3 = `/images/sign11.jpg`;

  const sec1 = 3000;
  const sec2 = 4500;
  const sec3 = 5500;

  const title1= `EXPERIENCED SIGNAGE MANUFACTURES`;
  const title2= `WHAT WE OFFER`;
  const title3= `WHY CHOOSE US?`;
  return (
    <>
   <InfoSection/>
   
   
   
   <div className='back'>
<div className='block'>

   <div className='picture'>
   <img src='/images/infoi.jpeg' />
   </div>
   <div className='redblock'>
    <h1></h1>
   </div>
   </div>
   <div className='redblock'>

   </div>
   <CardFlip body={body1} img={img1} sec={sec1} title={title1}/>
   <div className='infocard'>
   <CardFlip body={body2} img={img2} sec={sec2} title={title2}/>
   <CardFlip body={body3} img={img3} sec={sec3} title={title3}/>
    </div>
    

    <ImageSlider slides={SliderData} />
    </div>
    <Footer />
    
    </>
  )
}
