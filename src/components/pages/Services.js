import React from 'react';
import './Services.css';
import Footer from '../Footer';
import ImageSlider from '../ImageSlider';
import {SliderData} from '../SliderData';
import ServicesSection from '../../ServicesSection';
import CardFlip from '../../CardFlip';

const body1 = [`An attractive and inviting sign on the front of your shop will ensure that your business gets noticed. With our skills and expertise, we will work with you to create unique signage to promote your brand. Whether you are looking for window signs, vinyl lettering or promotional posters and A-boards, you can rely on us for all of your bespoke promotional pieces.`];

const body2 =[`We have years of experience in creating eye-catching marketing materials for our customers and our previous work speaks for itself. We are grateful to be supported by loyal customers who have provided us with excellent reviews on our Yell.com and Google profiles after we have worked with them from design to installation to create new materials for their company.`]

const body3= [`WHY CHOOSE US?`,`Our friendly and reliable team offer a speedy and professional service to all of our domestic and commercial customers, ensuring your products are designed and created to a high standard at competitive prices. We are not a one size fits all company and understand how important it is for your business to stand out, which is why we offer a personalised service to create something unique for you.`]

const img1 = `/images/sign14.jpg`;
const img2 = `/images/sign15.jpg`;

const sec1 = 2000;
const sec2 = 4500;
const sec3 = 5500;

const title1 = `Grab the Attention of Potential Customers`
const title2 = `A Talented Team With a Stellar Reputation`
 function Services() {
  return (
    <>
    <ServicesSection/>
    
    <div className='back1'>
    <div className='container'>
    <img src="/images/sign13.jpg" alt="Image" />
    </div>
    <div className='container3'>
    <div class="text">
    <div className='title'>
    <h1>WHAT WE OFFER</h1>
    </div>
    <div className="text2">
    
    <div className='first'>
    <ul>
    <li>Vinyl signs</li>
    <li>Shop signs</li>
    <li>Window signs</li>
    <li>Magnetic signs</li>
    <li>LED and Neon signs</li>
    <li>Posters</li>
    <li>Menus</li>
    <li>Flyers</li>
    <li>Leaflets</li>
		</ul>
    </div>
    <div className='middle'>
    <ul>
    <li>A-boards</li>
    <li>Packaging</li>
    <li>Business Cards</li>
    <li>Banners</li>
    <li>Graphics</li>
    <li>Health and Safety signs</li>
    <li>Fast delivery and installation</li>
    
  </ul>
  </div>
  </div>
</div>
		</div>
    </div>
     <div className='SCards'>
     
     <CardFlip body={body1} img={img1} sec={sec1} title={title1}/>
     <CardFlip body={body2} img={img2} sec={sec1} title={title2}/>
     </div>
 
     <ImageSlider slides={SliderData} />
     
     <Footer />
     
     </>
  )
}

export default Services;