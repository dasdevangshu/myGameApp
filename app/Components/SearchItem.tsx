import Image from "next/image";
import Link from "next/link";
import NoCover from '@/public/No_Cover.png'

export default function SearchItem(props: any) {

    const data: GameForSearch = props.gameData;
    const gameUrl = '/games/' + data.slug;

    const imgCover = data.cover === undefined ? NoCover : 'https://images.igdb.com/igdb/image/upload/t_cover_big/' + data.cover.image_id + '.webp'

    const genres = data.genres !== undefined ? data.genres.map((item, index) => {
        return <Link key={index} href={'/' + item.slug}><h5 className="text-slate-400 hover:text-blue-500 mr-2">{item.name}</h5></Link>
    }) : undefined

    //console.log('Here', data.release_dates)
    return (

        <div className=" w-36 md:w-full flex flex-col items-center md:items-start md:flex-row rounded-md gap-2 bg-slate-900 hover:outline drop-shadow-md hover:outline-blue-500 hover:outline-2 ease-in-out duration-300">
            <Link href={gameUrl}>
                <div className="h-48 w-36 relative flex-none overflow-hidden md:rounded-tl-md md:rounded-bl-md md:rounded-none rounded-tl-md rounded-tr-md">
                    <Image unoptimized={true} alt='cover image' fill={true} src={imgCover} className="flex-none" />
                </div>
            </Link>
            <div className="flex flex-col grow w-full p-1">
                <div className="flex flex-wrap items-center gap-1">
                    <Link href={gameUrl}>
                        <h1 className="text-slate-400 font-bold text-lg line-clamp-1 hover:text-slate-100">{data.name}</h1>
                    </Link>
                    {data.release_dates !== undefined && data.release_dates[0].y !== undefined && <p className="text-slate-500 md:block hidden">{'(' + data.release_dates[0].y + ')'}</p>}
                </div>
                {data.involved_companies !== undefined && <h1 className="text-slate-500 font-bold italic hidden md:block">{data.involved_companies[0].company.name}</h1>}
                {/* <p className="text-slate-400 border line-clamp-3">{data.summary !==undefined ? data.summary: 'No Description'}</p> */}
                <div className="md:flex flex-wrap hidden">{genres}</div>
                <p className="text-slate-500 md:line-clamp-3 hidden">{data.summary !== undefined ? data.summary : 'No Description'}</p>
            </div>

        </div>

    )
}