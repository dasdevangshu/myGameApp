/**
 * Fetches 10 games from the IGDB API matching the given genre.
 * 
 * @param props - Object containing the genre to filter by.
 * @returns Promise resolving to array of game objects.
 */
export default async function GetTenGames(props: any): Promise<GameForGamebox[]> {
  //console.log('From Carousel: Got 10 games')

  const apiUrl = 'https://api.igdb.com/v4/games/'
  //console.log(props.genre)
  const extra = props.genre === 'games'? '' : ' & genres.slug = "' + props.genre + '"'
  //const extra = props.gerne === 'games'? '' : ''

  const request = {
    method: 'POST',
    url: apiUrl,
    body: 'fields name, slug, cover.image_id; limit 10; sort total_rating desc;where aggregated_rating!= null & rating!=null & release_dates.y > 2016 & total_rating_count>5' + extra + ';',
    cache: 'no-cache'
  };

  const response = await fetch('http://localhost:3001/api/proxy', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  })

  const data: GameForGamebox[] = await response.json()
  //console.log(data)
  return data;
}