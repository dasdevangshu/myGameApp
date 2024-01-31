import GameBox from "./GameBox"
import Link from 'next/link'

export default function SlidingWindows(props: any) {

    const data: GameForGamebox[] = props.tenGamesData
    const GameBoxes : JSX.Element[] = data.map((item) => {
        return <GameBox gameData={item} key={item.id}/>
    })

    const url = '/' + props.slug

    return (
        <div className=" flex-none text-slate-400 font-bold text-xl w-3/5 max-w-5xl h-auto">
            <div className="flex flex-row justify-between">
                <h1 className="ml-2">Top {props.genreName}</h1>
                <Link href={url}><h1 className="hover:text-slate-100">Show more</h1></Link>
            </div>
            <div className="flex gap-x-2 w-full overflow-x-auto h-auto p-2">
                {GameBoxes}
            </div>
        </div>
    )
}