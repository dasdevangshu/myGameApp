import { redirect } from 'next/navigation';
import GetOneGame from '../../../lib/GetOneGameBySlug'
import GamePageComponent from '../../Components/GamePageComponent'


export default async function GamePage({ params }: { params: { slug: string }}) {


    const gameObj: Promise<GamesObj> = GetOneGame(params.slug)
    const gameData = await gameObj
    if (gameData === undefined) {
        redirect('/search?query=' + params.slug);
    }
    //console.log(params.games)
    return (
        <>
            {gameData!== undefined && <GamePageComponent GameData = {gameData}/>}
            {gameData=== undefined && <h1 className='mt-48 text-slate-400 font-bold text-xl w-full text-center'>No such game found.</h1>}
        </>
    )
}