import IGDB from '@/public/IGDB_logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Igdb() {
    return (

        <div className="w-full flex flex-col items-center mt-1">
            <Link className='w-1/5 h-1/5 mt-4' href='https://api-docs.igdb.com'>
                <div className=''>
                    <Image unoptimized={true} src={IGDB} alt="IGDB Logo" className='text-white' />
                </div>
            </Link>
            <Link className='w-1/5 h-1/5 mt-4' href='https://api-docs.igdb.com'>
                <h1 className="text-center mt-4 text-slate-400 hover:text-blue-500 font-bold">All the data for this website is collected from the IGDB api</h1>
            </Link>
        </div>
    )
}