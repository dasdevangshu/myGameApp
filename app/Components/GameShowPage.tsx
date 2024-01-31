import GameBox from "./GameBox";

export default function GameShowPage(props: any) {
    const gameData: GameForGamebox[] = props.gameData;
    //console.log(gameData)
    const gameBoxes : JSX.Element[] = gameData.map((item) => {
        return <GameBox gameData={item} key={item.id}/>
    })

    return (
        <div className="justify-center w-3/5 max-w-5xl h-auto flex flex-wrap gap-2 mt-2">
            {gameBoxes}
        </div>
    )
}