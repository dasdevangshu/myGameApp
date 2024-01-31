import SlidingWindows from "../Components/SlidingWindows"
import { allGenres } from "../layout"
import { genreNames } from "../layout"

export default function Genres() {
    //console.log(allGenres)

    const SlidingWindowsList : JSX.Element[] = allGenres.map((item, index) => {
        return <SlidingWindows genre={item} key={index}/>
    })

    SlidingWindowsList.unshift(<SlidingWindows genre='games' key={allGenres.length}/>)


    return (
        <div className="flex flex-col items-center mt-1">
            {SlidingWindowsList}
        </div>
    )
}