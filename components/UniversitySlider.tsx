'use client'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from './Slide';

import { universities } from '@/constant';






export default function UniversitySlider() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 609,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    };
    return (
        <div className='max-w-screen-lg mx-auto px-3 lg:px-0'>
            <h1 className="text-xl font-semibold text-green-500 mb-4">Featured Universities</h1>
            <Slider {...settings}>
                {
                    universities.map((slide) => (
                        <div key={slide.established_year} className="pr-4">
                            <Slide slide={slide} />
                        </div>
                    ))
                }
            </Slider>

        </div>
    )
}
