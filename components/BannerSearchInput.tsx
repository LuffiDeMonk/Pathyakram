'use client'
import React, { useState, useRef } from 'react'
import useSWR from 'swr'
import Error from './Warning';
import Image from 'next/image';
import Link from 'next/link';
import { universities } from '@/constant';

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

  // const { data }: { data: UniversityData[] } = useSWR(`/`, fetcher)


  // let filteredList: UniversityData[] = useMemo(() => {
  //   return data?.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  // }, [data, search])

  let filteredList = universities.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))


  //closes the suggestion popup when the user clicks away from the input box
  const handleInputBlur = () => {
    popupRef.current?.classList.add('hidden')

  }

  //opens the suggestion popup when the user clicks the input and type on it
  const handleInputFocus = () => {
    popupRef.current?.classList.remove('hidden')

  }

  return (
    <div className='flex flex-col gap-3'>
      <input type='text' className='w-full sm:w-80 md:w-[40rem] rounded-full py-3 px-6 outline-none focus:outline-none'
        placeholder='Enter your university name'
        onChange={e => setSearch(e.target.value)}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
      />

      {/* suggestion popup, this will only show when the user starts typing on the input */}

      {search.length !== 0 &&
        <div ref={popupRef} className="absolute left-1/2 -translate-x-1/2 top-32 w-80 md:w-[40rem] rounded-lg bg-white max-h-52 overflow-y-auto p-4">
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
        </div>}

    </div>
  )
}
