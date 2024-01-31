import GameBox from "./GameBox"
import GetOneGame from "@/lib/GetOneGameBySlug"

export default async function GameList(props: any) {

    const data: GameForGamebox[] = props.GamesData

    //console.log(data)
    const name: string = props.name

    const GameBoxes : JSX.Element[] = data.map((item) => {
        return <GameBox gameData={item} key={item.id}/>
    })
    

    return (
        <div className="bg-slate-950 bg-opacity-60 flex-none text-slate-400 font-bold text-xl w-3/5 max-w-5xl h-auto">
            <h1 className="ml-2">{name}</h1>
            <div className="flex gap-x-2 w-full overflow-x-auto h-auto p-2">
                {GameBoxes}
            </div>
        </div>
    )
}


// const dataProm : Promise<GamesObj>[] = slugs.map((item) => {
//     return GetOneGame(item.slug)
// })

// const dataProm2 = Promise.all(dataProm)

// const data = await dataProm2

// const GameBoxes : JSX.Element[] = data.map((item) => {
//     return <GameBox gameData={item} key={item.id}/>
// })

// const name = props.name