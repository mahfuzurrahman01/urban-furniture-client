import React from 'react';
import Slider from 'react-slick';
import slider1 from '../assets/slider/slider1.jpg';
import slider2 from '../assets/slider/slider2.jpg';
import slider3 from '../assets/slider/slider3.jpg';
import slider4 from '../assets/slider/slider4.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    document.title = "Home";
    const settings = {
        infinite: true,
        speed: 1500,
        fade: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='lg:w-11/12 md:w-11/12 w-full mx-auto'>
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={slider3} alt="" />
                    </div>
                    <div>
                        <img src={slider2} alt="" />
                    </div>
                    <div>
                        <img src={slider1} alt="" />
                    </div>
                    <div>
                        <img src={slider4} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Home;