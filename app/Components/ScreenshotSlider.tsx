'use client'
import ImageOverlay from "./ImageOverlay"
import { useState } from "react"

export default function ScreenshotSlider(props: any) {

    const [isVisible, setIsVisible] = useState(false)
    const [sendUrl, setSendUrl] = useState('')

    const data: Screenshots = props.screenshots
    const images = data.map((item) => {return <img className="hover:cursor-pointer drop-shadow-md" key={item.id} onClick={() => {setSendUrl('https://images.igdb.com/igdb/image/upload/t_1080p/' + item.image_id + '.png');setIsVisible(true)}} src={'https://images.igdb.com/igdb/image/upload/t_1080p/' + item.image_id + '.png'}/>})
    
    return (
        <div className="w-full flex-none h-1/3 max-h-72 text-slate-100 font-bold text-3xl flex flex-col items-center ">
            {isVisible && <ImageOverlay funcReset={setSendUrl} funcClose={setIsVisible} imageUrl={sendUrl}/>}
            <h1 className="w-3/5 max-w-5xl px-4 py-2 bg-slate-950 bg-opacity-60">Screenshots</h1>
            <div className="w-full h-full flex flex-row overflow-x-auto gap-2">
                {images}
            </div>
        </div>  
    )
}