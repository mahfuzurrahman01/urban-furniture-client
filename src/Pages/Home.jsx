import React from 'react';
import Slider from 'react-slick';
import slider1 from '../assets/slider/slider1.jpg';
import slider2 from '../assets/slider/slider2.jpg';
import slider3 from '../assets/slider/slider3.jpg';
import slider4 from '../assets/slider/slider4.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../Shared/Spinner';
import CategoryCard from '../Shared/CategoryCard';

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
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'], queryFn: async () => {
            const res = await fetch('http://localhost:5000/products')
            const data = await res.json()
            return data;
        }
    })
    console.log(categories)
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
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
                    <button className='bg-primary text-md bg-gradient-to-r from-secondary py-2 px-5 rounded text-white'>Get Started</button>
                </div>
            </div>
            <div className='grid grid-cols-3 w-11/12 mx-auto space-x-5 my-5'>
                {
                    categories.map(category => <CategoryCard key={category.categoryId} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Home;