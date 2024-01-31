import React from 'react'
import { Inter } from 'next/font/google'
import Searchbar from './Searchbar'
import Link from 'next/link'
import { allGenres } from '../layout'
import { genreNames } from '../layout'

export default function Navbar() {



  return (
    <nav className='bg-slate-900 px-4 py-2 drop-shadow-md z-50 flex sm:flex-row sm:justify-evenly flex-col'>
      <ul className='flex items-center gap-4 justify-center'>
        <li>
          <Link href={`/`}>
            <h1 className='text-slate-100 text-xl font-bold select-none'>myGameApp</h1>
          </Link>
        </li>
        <li>
          <Link href={`/igdb`}>
            <h1 className='text-slate-400 hover:text-slate-100 text-xl font-bold select-none'>IGDB</h1>
          </Link>
        </li>
        <li className='group'>
          <h1 className='text-slate-400 font-bold hover:text-slate-100 select-none'>Genres</h1>
          <div className='group-hover:block absolute hidden bg-slate-900 p-2 rounded-md text-slate-400 font-bold'>
            <Link href={'/' + allGenres[0]}><h1 className='hover:text-slate-100'>{genreNames[allGenres[0]]}</h1></Link>
            <Link href={'/' + allGenres[1]}><h1 className='hover:text-slate-100'>{genreNames[allGenres[1]]}</h1></Link>
            <Link href={'/' + allGenres[2]}><h1 className='hover:text-slate-100'>{genreNames[allGenres[2]]}</h1></Link>
            <Link href='/genres'><h1 className='hover:text-slate-100'>Show All</h1></Link>
          </div>
        </li>

        {/* <li>
          <h1 className='text-slate-400 font-bold hover:text-slate-100 select-none'>Platforms</h1>
        </li> */}
      </ul>
      <Searchbar />
    </nav>
  )
}
