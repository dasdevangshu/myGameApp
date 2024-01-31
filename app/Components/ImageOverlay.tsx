'use client'
import Image from "next/image"


export default function ImageOverlay(props: any) {

  const imageUrl = props.imageUrl
  const funcClose = props.funcClose
  const funcReset = props.funcReset

  return (
    <div onClick={() => {funcReset('');funcClose(false)}} className="p-12 z-20 w-screen h-screen flex flex-col items-center justify-center fixed top-0 left-0 bg-black bg-opacity-70 drop-shadow-md">
      
      <img src={imageUrl} onClick={(e) => {e.stopPropagation()}} className="max-w-3/5 max-h-full"/>

    </div>
  )
}