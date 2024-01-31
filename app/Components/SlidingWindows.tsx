import SlidingWindowsClient from "./SlidingWindowsClient"
import GetTenGames from "@/lib/GetTenGamesForSlidingWindows"
import { genreNames } from "../layout"

export default async function SlidingWindows(props: any) {
    const tenGames: Promise<GameForGamebox[]> = GetTenGames(props)
    const tenGamesData = await tenGames
    return (
        <>
            <SlidingWindowsClient tenGamesData={tenGamesData} genreName={genreNames[props.genre]} slug={props.genre}/>
        </>
    )
}