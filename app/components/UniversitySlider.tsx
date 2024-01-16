'use client'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from './Slide';

const SliderContent = [
    {
        id: 1,
        universityName: 'Tribhuwan University',
        location: 'Kathmandu, Nepal',
        logo: '/TUlogo.svg'
    },
    {
        id: 2,
        universityName: 'Kathmandu University',
        location: 'Kathmandu, Nepal',
        logo: '/KUlogo.png'
    },
    {
        id: 3,
        universityName: 'Purwanchal University',
        location: 'Biratnagar, Nepal',
        logo: '/PUlogo.png'
    },
    {
        id: 4,
        universityName: 'Agriculture and Forest University',
        location: 'Biratnagar, Nepal',
        logo: '/PUlogo.png'
    },
]

type UniversityData = {
    name: string;
    location: string;
    established_year: number;
    affiliation: string;
    id: string;
}



export default function UniversitySlider({ data }: { data: UniversityData[] }) {
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
            <h1 className="text-xl font-semibold mb-4">Featured Universities</h1>
            <Slider {...settings}>
                {
                    data.map((slide) => (
                        <div key={slide.id} className="pr-4">
                            <Slide slide={slide} />
                        </div>
                    ))
                }
            </Slider>

        </div>
    )
}
