import Image from 'next/image'
import React from 'react'

export default function NewsCard() {
    return (
        <div className="border border-gray-200 w-full h-96 rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <Image src='/Banner.jpg' width={500} height={100} className='object-cover w-full h-52' alt='news_image' />
            <div className="p-2.5 flex flex-col gap-2">
                <h2 className='text-2xl font-bold line-clamp-1'>News heading</h2>
                <p className='text-sm line-clamp-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ratione, ea ad enim, voluptatum maxime quam debitis voluptas repellat officia nostrum quibusdam recusandae rem esse nesciunt explicabo autem vitae non.</p>
                {/* link to read full news */}
                <p className='text-green-400 font-semibold text-sm mt-2'>Read more</p>
            </div>
        </div>
    )
}
