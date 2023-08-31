import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../images/carusel/n1.jpg";
import img2 from "../images/carusel/n2.jpg";
import img3 from "../images/carusel/n3.jpg";
import img4 from "../images/carusel/n4.jpg";
import img5 from "../images/carusel/n5.jpg";
import img6 from "../images/carusel/n6.jpg";

const MyCarousel = ()=>{
      
    return (
      <div className="carouselStyle">
          <Carousel>
            <div>
                <img src={img1} alt="Slide 1" />
            </div>
            <div>
                <img src={img2} alt="Slide 2"  />
            </div>
            <div>
                <img src={img3} alt="Slide 3"  />
            </div>
            <div>
                <img src={img4} alt="Slide 4"  />
            </div>
            <div>
                <img src={img5} alt="Slide 5"  />
            </div>
            <div>
                <img src={img6} alt="Slide 6" />
            </div>
        </Carousel>
      </div>
    );
}

export default MyCarousel;
