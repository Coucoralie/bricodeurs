import React, {useState} from 'react';
import { CarouselData } from './CarouselData';
import {IoIosArrowDroprightCircle, IoIosArrowDropleftCircle} from 'react-icons/io';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current +1)
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1);
  };
  console.log(current);

  if(!Array.isArray(slides) || slides.length <=0) {
    return null
  }


  return <div>
            <section className='slider'>
              <IoIosArrowDropleftCircle className='left-arrow' onClick={prevSlide} />
              <IoIosArrowDroprightCircle className='right-arrow' onClick={nextSlide}/>
              {CarouselData.map((slide, index) => {
                return (
                  <div className={index === current ? "slide-active" : "slide"} key={index}
                  >
                  {index === current && (
                  <img src={slide.image} alt='house' className='image'/>
                  )}
                  </div>
                )
              })}
            </section>
         </div>;

};

export default Carousel;
