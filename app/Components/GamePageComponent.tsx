import ScreenshotSlider from "./ScreenshotSlider"
import GameList from "./GameList"
import Link from "next/link"
import Image from "next/image"

import NoCover from '@/public/No_Cover.png'
import NoBG from '@/public/No_BG.png'

export default function GamePage(props : any) {
    const data: GamesObj = props.GameData

    const imgBG = data.screenshots === undefined ? NoBG.src : '"https://images.igdb.com/igdb/image/upload/t_1080p/' + data.screenshots[0].image_id + '.webp"'
    const imgCover = data.cover === undefined ? NoCover.src : 'https://images.igdb.com/igdb/image/upload/t_cover_big/' + data.cover.image_id + '.webp'


    const genres = data.genres!== undefined? data.genres.map((item, index) => {
        return <Link key={index} href={'/' + item.slug}><h2 className="text-slate-400 hover:text-blue-500 mr-2">{item.name}</h2></Link>
    }): undefined 

    const platforms = data.platforms!== undefined? data.platforms.map((item, index) => {
        return <h2 key={index} className="text-slate-400 mr-2">{item.name}</h2>
    }): undefined 

    return (
        <div className="h-full flex flex-col items-center">
            <div className="w-full bg-no-repeat bg-cover flex justify-center" style={{
            backgroundImage: `url(${imgBG})`
            }}>
                <div className=" pt-12 pb-12 w-3/5 max-w-5xl flex flex-col md:flex-row md:pt-40 gap-4 bg-slate-900 backdrop-filter backdrop-blur-md bg-opacity-20 px-4">
                    <img
                        className="rounded-md flex-nones"
                        src={imgCover}
                    />
                    {/* <div>
                        <Image width={264} height={362} alt='cover image' src={imgCover}/>
                    </div> */}
                    <div className="flex flex-col min-w-0">
                        <h1 className="text-slate-100 font-bold drop-shadow-md text-4xl truncate min-w-0">{data.name}</h1>
                        {data.release_dates!== undefined && data.release_dates[0].human!== undefined &&  <h1 className="text-slate-100 drop-shadow-md">{data.release_dates[0].human}</h1>}
                        {data.involved_companies !==undefined && <h1 className="text-slate-100 drop-shadow-md text-2xl font-bold italic mt-4">{data.involved_companies[0].company.name}</h1>}
                        {data.rating && <h1 className="text-slate-100"><strong>User Rating: </strong>{Math.round(data.rating * 100) / 100}</h1>}
                        {data.aggregated_rating && <h1 className="text-slate-100"><strong>Critic Rating: </strong>{Math.round(data.aggregated_rating * 100) / 100}</h1>}
                    </div>
                </div>
            </div>

            <div className="w-3/5 max-w-5xl px-4 pt-2 bg-slate-950 bg-opacity-60">
                <div className="flex flex-wrap ">
                    <h2 className="text-slate-100 mr-2"><strong>Genres: </strong></h2>
                    <div className="flex flex-wrap">{genres}</div>
                </div>
                {/* <h2 className="text-slate-100"><strong>Genre: </strong>{genres}</h2> */}
                <div className="flex flex-wrap ">
                    <h2 className="text-slate-100 mr-2"><strong>Platforms: </strong></h2>
                    <div className="flex flex-wrap">{platforms}</div>
                </div>
                {/* <h2 className="text-slate-100"><strong>Platforms: </strong>{platforms}</h2> */}
                <p className="text-slate-100">{data.summary !==undefined ? data.summary: 'No Description'}</p>
            </div>

            {data.screenshots !== undefined && <ScreenshotSlider screenshots = {data.screenshots}/>}

            {data.dlcs!==undefined && <GameList GamesData={data.dlcs} name='DLCs'/>}

            {data.expansions!==undefined && <GameList GamesData={data.expansions} name='Expansions'/>}

            {data.similar_games!==undefined && <GameList GamesData={data.similar_games} name='Similar Games'/>}
        </div>
    )
}

{/* <div className='w-full max-h-96 flex flex-col items-center rounded-lg'>
                <div className="relative w-full max-h-96">
                    <img
                    className="w-full max-h-96"
                    src={'https://images.igdb.com/igdb/image/upload/t_1080p/' + data.screenshots[0].image_id + '.jpg'}
                    alt={data.name}
                    />
                    <h1 className="text-white absolute bottom-0">{data.name}</h1>
                </div>
                <div className=" w-3/5 max-w-5xl relative -top-40 flex flex-col rounded-lg border border-white">
                    <div className="flex col">
                        <img
                        className="rounded-md"
                        src={'https://images.igdb.com/igdb/image/upload/t_cover_big/' + data.cover.image_id + '.jpg'}
                        />
                        
                    </div>
                    <h1 className="text-white">Hello</h1>
                    <h1 className="text-white">Hello Hello</h1>
                </div>
                
                
            </div> */}