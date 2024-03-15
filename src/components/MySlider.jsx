import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testi1 from '../assets/img/testimonials/testimonials-1.jpg'
import testi2 from '../assets/img/testimonials/testimonials-2.jpg'
import testi3 from '../assets/img/testimonials/testimonials-3.jpg'
import testi4 from '../assets/img/testimonials/testimonials-4.jpg'
import testi5 from '../assets/img/testimonials/testimonials-5.jpg'


export default function MySlider() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,        // Enable autoplay
      autoplaySpeed: 2000
    };
    return (
        <div className="slider-container" style={{width : '100%', marginBottom : '2rem'}}>
            <Slider {...settings} >
                    <div className=''>
                        <div>
                            <img className='img-Size' src={testi1}></img>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <img className='img-Size' src={testi2}></img>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <img className='img-Size' src={testi3}></img>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <img className='img-Size' src={testi4}></img>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <img className='img-Size' src={testi5}></img>
                        </div>
                    </div>
            </Slider>
        </div>
    );
  }