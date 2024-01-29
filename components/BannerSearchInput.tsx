'use client'
import React, { useState, useRef, useMemo, useEffect, } from 'react'
import useSWR from 'swr'
import Error from './Warning';
import Image from 'next/image';
import Link from 'next/link';
import { universities, streams } from '@/constant';

type UniversityData = {
  name: string;
  location: string;
  established_year: number;
  affiliation: string;
  id: string;
}

// const fetcher = async () => {
//   const response = await fetch(`http://localhost:8000/universities`)
//   if (!response.ok) {
//     console.log('Error while fetching data')
//   }
//   return response.json()
// }



export default function BannerSearchInput() {
  const [search, setSearch] = useState('')
  const popupRef = useRef<HTMLDivElement>(null)
  const mainSection = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (!mainSection.current?.contains(e.target as Node)) {
        popupRef.current?.classList.add('hidden')
      }
    })
  }, [])


  let filteredList = useMemo(() => universities.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())), [search])

  let filteredStream = useMemo(() => streams.map(item => {
    let selectedStream = item.streams.filter(item => item.toLowerCase().includes(search.toLowerCase()))
    return selectedStream.map(x => (
      {
        university: item.universityName,
        stream: x
      }
    ))
  }).flat(), [search])

  return (
    <div className='flex flex-col gap-3' ref={mainSection}>
      <input type='text' className='w-full sm:w-80 md:w-[40rem] rounded-full py-3 px-6 outline-none focus:outline-none'
        placeholder='Enter your university name'
        onChange={e => setSearch(e.target.value)}
        onFocus={() => popupRef.current?.classList.remove('hidden')} //to open the popup when the user clicks inside the input search 
      />

      {/* suggestion popup, this will only show when the user starts typing on the input */}

      {search.length !== 0 &&
        <div ref={popupRef} className={`absolute left-1/2 -translate-x-1/2 top-48 w-80 md:w-[40rem] rounded-lg bg-white max-h-80 shadow-lg overflow-y-auto p-4 no-scrollbar`}>
          <h1 className='text-xs text-gray-300'>University</h1>
          {filteredList?.map(item => (
            <React.Fragment key={item.location}>
              <Link href={`/university/${item.name}`} className='flex items-center gap-2'>
                <Image src='/TUlogo.svg' width={50} height={50} alt="Logo" />
                <div className='flex flex-col'>
                  <h1 className='text-md font-semibold text-green-600'>{item.name}</h1>
                  <p className='text-sm text-green-600'>{item.location}</p>
                </div>
              </Link>
              <div className="w-full h-[2px] mt-3 bg-gray-100" />
            </React.Fragment>
          ))}
          {search.length !== 0 && filteredList?.length === 0 && <Error height='h-24' />}
          <h1 className='text-xs text-gray-300'>Courses</h1>
          {
            filteredStream.map((item, idx) => (
              <React.Fragment key={idx}>
                <Link href={`/university/${item.university}/${item.stream}`} className='space-y-1 py-1'>
                  <h1 className='text-lg font-semibold text-green-600'>{item.stream}</h1>
                  <p className='text-sm text-green-600'>{item.university}</p>
                </Link>
                <div className="h-0.5 bg-gray-100"></div>
              </React.Fragment>
            ))
          }
          {search.length !== 0 && filteredStream.length === 0 && <Error height='h-24' />}
        </div>
      }

    </div>
  )
}
