'use client'
import React from 'react'
import Link from 'next/link';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from './Slide';

import { universities } from '@/constant';
import ArrowRight from './icons/ArrowRight';

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
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold text-green-500">Featured Universities</h1>
                <Link href='/university' className="px-3 py-1.5 bg-green-500 hidden md:flex items-center gap-1 text-white rounded-full">
                    <p className='text-sm font-semibold'>View More</p>
                    <ArrowRight />
                </Link>
            </div>
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
