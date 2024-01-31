import Link from 'next/link'
import Image from 'next/image'
import NoCover from '@/public/No_Cover.png'

export default function GameBox(props: any) {

    const gameData: GameForGamebox = props.gameData
    const imgCover = gameData.cover === undefined ? NoCover : 'https://images.igdb.com/igdb/image/upload/t_cover_big/' + gameData.cover.image_id + '.png'

    return (
        <Link href={`/games/${gameData.slug}`}>
        <div className='justify-between drop-shadow-md flex-none h-56 w-36 rounded-md overflow-hidden bg-slate-900 flex flex-col hover:outline hover:outline-blue-500 hover:outline-2 ease-in-out duration-300'>
            {/* <img className='h-48 w-36'
            src={coverUrl}
            /> */}
            <Image alt='cover image' width={144} height={192} src={imgCover}/>
            <h1 className='mx-2 mb-1 text-slate-400 font-bold text-sm truncate'>{gameData.name}</h1>
        </div>
        </Link>
    )
}