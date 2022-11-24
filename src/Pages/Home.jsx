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
        <div className='lg:w-11/12 md:w-11/12 w-full mx-auto relative'>
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
            <div className='absolute top-1/4 left-52 flex flex-col items-center justify-center space-y-2 bg-gray-300 bg-opacity-50 p-10 rounded-lg'>
                <h1 className='text-6xl font-semibold text-slate-100 text-center'>Decor the dreams with wood beauty</h1>
                <p className='text-3xl font-normal text-slate-600 text-center'>Don't go for new one, Just exchange your old one! <br /> One site where you can exchange,buy,resale</p>
                <button className='bg-primary bg-gradient-to-r from-secondary py-2 px-4 rounded text-white'>Get Started</button>
            </div>
        </div>
    );
};

export default Home;