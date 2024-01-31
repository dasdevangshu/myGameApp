import { redirect } from 'next/navigation';
import GetCount from "@/lib/GetCount"
import { allGenres } from "../layout";
import GetHundredGames from "@/lib/GetHundredGames";
import GameShowPage from "../Components/GameShowPage";
import BeegCover from "../Components/BeegCover";
import { genreNames } from "../layout";
import NextPrev from "../Components/NextPrev";

export default async function GamePage({ params, searchParams }: { params: { genre: string }, searchParams: {page: string}}) {
    const temp = params.genre === 'games'? 'All' : allGenres.includes(params.genre)? params.genre : 'None';
    if (temp === 'None') {
        redirect('/search?query=' + params.genre);
    }
    const filter = temp === 'All'? '': 'where genres.slug = "' + temp + '";'

    const totalProm = GetCount( {filter: filter})
    const total = await totalProm;
    const totalPages = (Math.ceil(total[0].count / 100)).toString()

    const page = searchParams.page ?? '1'
    //const curPage = parseInt(page) <= parseInt(totalPages)? page : totalPages;
    const curPage = parseInt(page) <= parseInt(totalPages)? parseInt(page) < 1? '1': page : totalPages;

    const navProp = {
        page: page,
        curPage: curPage,
        totalPages: totalPages,
        totalGames: total[0].count,
        genre: params.genre
    }
    //console.log(page, curPage)

    const hundredGamesProm = GetHundredGames({filter: filter, page: curPage})
    const gameData = await hundredGamesProm
    //console.log(gameData)
    
    return (
        <div className="flex flex-col items-center">
            <BeegCover genre={params.genre}/>
            {/* <h1 className="mt-4 text-slate-400 font-bold text-xl w-full text-center">{genreNames[temp]} {total[0].count} {page} {curPage}</h1> */}
            <GameShowPage gameData = {gameData}/>
            <NextPrev navProp={navProp}/>
        </div>
    )
}