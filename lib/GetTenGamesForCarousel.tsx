/**
 * Gets 10 highly rated games released after 2022 to display in a carousel.
 * Makes a POST request to the IGDB API via a proxy to get game data. 
 * Returns a Promise resolving to an array of GameForCarousel objects.
*/
export default async function GetTenGames(): Promise<GameForCarousel[]> {
  //console.log('From Carousel: Got 10 games')

  const apiUrl = 'https://api.igdb.com/v4/games/'

  const request = {
    method: 'POST',
    url: apiUrl,
    body: 'fields name, slug, screenshots.image_id; sort total_rating desc;where aggregated_rating!= null & rating!=null & screenshots!= null & release_dates.y > 2022  & total_rating_count>20;limit 10;',
    cache: 'no-cache'
  };

  const response = await fetch('http://localhost:3001/api/proxy', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  })

  const data: GameForCarousel[] = await response.json()

  return data;
}