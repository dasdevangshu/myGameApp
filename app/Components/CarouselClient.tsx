'use client'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'


export default function CarouselClient(props: any) {
  const data: GameForCarousel[] = props.tenGamesData

  const [ind, changeInd] = useState(0)

  function nextInd() {
    changeInd((curInd) => {
      return (curInd+1)%data.length;
    })
  }

  useEffect(() => {
    setTimeout(nextInd, 5000)
  }, [ind]);
  
  return (
    
    
    <div className='w-3/5 max-w-5xl flex-none relative hover:outline drop-shadow-md hover:outline-blue-500 hover:outline-2 ease-in-out duration-300 rounded-lg overflow-hidden mt-2'>
        <Link href={`/games/${data[ind].slug}`}>
        <img 
          src={'https://images.igdb.com/igdb/image/upload/t_1080p/' + data[ind].screenshots[0].image_id + '.png'} 
        />
        <h1 className='bottom-0 absolute text-slate-100 font-bold drop-shadow-md w-full px-4 py-4 bg-gradient-to-t from-black'>{data[ind].name}</h1>
        
        <div className='h-full w-full absolute top-0 left-0 border-white flex items-center justify-between'>
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white absolute z-50 right-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg> */}
        </div> 
        </Link>
    </div>
    
  )
}


// <div>
//         <img 
//           src={'https://images.igdb.com/igdb/image/upload/t_1080p/' + data[ind].screenshots[0].image_id + '.jpg'} 
//           className='rounded-lg hover:outline hover:outline-blue-500 hover:outline-2 ease-in-out duration-300'
//           />
//         <h1 className='text-slate-100 font-bold relative -top-10 drop-shadow-md w-full px-4 py-4'>{data[ind].name}</h1>
//         {/* <button onClick={() => {nextInd()}} className='bg-red-500'>Next</button> */}
        
//     </div>

//<div className={'bg-no-repeat w-3/5 h-3/6 min-w-fit min-h-fit rounded-lg overflow-hidden hover:outline hover:outline-blue-500 hover:outline-2 ease-in-out duration-300'}
   // style={{'backgroundImage': imgUrlTW, 'backgroundSize': '100% 100%'}}
    //>
     //   {/* <img 
      //    src={'https://images.igdb.com/igdb/image/upload/t_1080p/' + data[ind].screenshots[0].image_id + '.jpg'} 
      //    className='h-fit w-fit'
       //   /> */}
      //  <h1 className='text-slate-100 font-bold relative drop-shadow-md w-full px-4 py-4'>{data[ind].name}</h1>
      //  {/* <button onClick={() => {nextInd()}} className='bg-red-500'>Next</button> */}
        
 //   </div>