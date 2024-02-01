import Image from "next/image"
import GetGames from "@/lib/GetGames"
import { genreNames } from "../layout"

export default async function BeegCover(props: any) {

    const extraFilter = props.genre === 'games'? '' : '& genres.slug="' + props.genre +'"'
    const filter = 'where aggregated_rating!= null & rating!=null & screenshots!= null & release_dates.y > 2016 & total_rating_count>10' + extraFilter +';'

    const propObj = {
        endpoint: 'games',
        field: 'fields name, screenshots.image_id;',
        filter: filter,
        sort: '',
        limit: 'limit 1;',
        offset: ''
    }

    const gamesProm: Promise<any> = GetGames(propObj)
    const game = await gamesProm

    const imageUrl = 'https://images.igdb.com/igdb/image/upload/t_1080p/' + game[0].screenshots[0].image_id + '.webp'

    return (
        <div className="w-full flex justify-center mt-2">
            <div className="w-3/5 max-w-5xl max-h-56 relative rounded-lg overflow-hidden drop-shadow-md">
                <img src={imageUrl} className="object-cover"/>
                
                {/* <Image src={imageUrl} alt="cover" fill={true} objectFit={'contain'}/> */}
                <h1 className="text-3xl bottom-0 absolute text-slate-100 font-bold drop-shadow-md w-full px-4 py-4 bg-gradient-to-t from-black">{genreNames[props.genre]}</h1>
            </div>
        </div>
    )
}