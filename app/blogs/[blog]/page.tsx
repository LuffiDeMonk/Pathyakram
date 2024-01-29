import CalenderIcon from '@/components/icons/CalenderIcon'
import UserIcon from '@/components/icons/UserIcon'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className='max-w-screen-lg mx-auto px-4 lg:px-0 mt-7 mb-12'>
            <h1 className='text-2xl lg:text-4xl font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing.</h1>
            {/* blog date and author */}
            <div className="my-2 lg:my-5 flex items-center gap-2">
                <div className="flex items-center gap-2 text-gray-300">
                    <CalenderIcon />
                    <p className='text-sm'>02 June, 2023</p>
                </div>
                <div className="text-sm text-gray-300">|</div>
                <div className="flex items-center gap-2 text-gray-300">
                    <UserIcon />
                    <p className='text-sm'>Jane Doe</p>
                </div>
            </div>
            {/* blog image */}
            <div className="relative w-full h-96 overflow-hidden mb-5">
                <Image fill={true} src='/Banner.jpg' alt='Blog image' className='object-cover md:object-contain' />
            </div>
            {/* blog content */}
            <p className='text-md text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eius quod deserunt quae consequuntur repudiandae enim nesciunt laboriosam odit, doloremque perspiciatis officiis sapiente omnis magni nobis sed? Placeat inventore sequi fugiat obcaecati tempore ipsam quas excepturi maiores ipsum harum?</p>
            <p className='text-md text-justify my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eius quod deserunt quae consequuntur repudiandae enim nesciunt laboriosam odit, doloremque perspiciatis officiis sapiente omnis magni nobis sed? Placeat inventore sequi fugiat obcaecati tempore ipsam quas excepturi maiores ipsum harum?</p>
            <p className='text-md text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eius quod deserunt quae consequuntur repudiandae enim nesciunt laboriosam odit, doloremque perspiciatis officiis sapiente omnis magni nobis sed? Placeat inventore sequi fugiat obcaecati tempore ipsam quas excepturi maiores ipsum harum?</p>
        </div>
    )
}
