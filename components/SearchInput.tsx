import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { useDebouncedCallback } from 'use-debounce'

export default function SearchInput() {
    const path = usePathname()
    const { replace } = useRouter()
    const searchParams = useSearchParams()
    const handleSearch = useDebouncedCallback((search: string) => {
        let params = new URLSearchParams(searchParams)
        if (search) {
            params.set('q', search)
        } else {
            params.delete('q')
        }
        replace(`${path}?${params.toString()}`)
    }, 500)
    return (
        <input onChange={e => handleSearch(e.target.value)} type="text" defaultValue={searchParams.get('q')?.toString()} placeholder='Search for available courses' className='px-5 py-2 rounded-full w-full md:w-80 border-2 border-gray-300 outline-none focus:outline-none' />
    )
}
