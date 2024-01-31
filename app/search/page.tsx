import GetGames from "@/lib/GetGames"
import SearchItem from "../Components/SearchItem"


export default async function Search({searchParams}: {searchParams: {query: string}}) {
    
    const query = searchParams.query ?? ''
    
    const propObj = {
        endpoint: 'games',
        field: 'fields name, slug, summary, cover.image_id, release_dates.y, involved_companies.company.name, genres.slug, genres.name;',
        filter: 'search "' + query + '";',
        sort: '',
        limit: 'limit 500;',
        offset: ''
    }

    
    

    const searchProm: Promise<GameForSearch[]> = GetGames(propObj)
    const searchObj = await searchProm
    const totalItems = searchObj.length
    //console.log(searchObj)

    const topText = totalItems === 0 ? 'No results found...' : 'Showing '+ totalItems +' results...'

    const searchResult = searchObj.map((item: any, index: number) => <SearchItem key={index} gameData={item}/>)
    //console.log(searchResult)



    return (
        <div className="w-full flex flex-col items-center ">
            <h1 className=" text-slate-400 font-bold text-2xl ml-4 mt-4">{topText}</h1>
            <div className="w-3/5 max-w-5xl flex flex-wrap md:flex-col justify-center gap-2 mt-4">
                {searchResult}
            </div>
        </div>
    )
}