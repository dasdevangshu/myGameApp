'use client'
import { Inter, Rubik } from 'next/font/google'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const rubik = Rubik({ subsets: ['latin'] })

export default function Searchbar() {

    const [query, setQuery] = useState('')
    const condition = query !== ''? '' : 'pointer-events-none'
    const router = useRouter()

    return (
        <div className='flex gap-2 items-center justify-center'>
            <input 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            className= {rubik.className + ' rounded-md appearance-none pl-4 bg-slate-800 text-slate-100'} 
            placeholder="Search"
            onKeyDown={(e) => {if (e.key === 'Enter') {e.preventDefault(); if(query!==''){router.push('/search?query=' + query);}}}}
            />
            
            <Link className={condition} href={'/search?query=' + query}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </Link>
        </div>
    )
}