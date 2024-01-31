
export default async function GetHundredGames(props: any): Promise<GameForGamebox[]> {
    //console.log('From Carousel: Got 10 games')

    const filter = props.filter;
    const page = props.page;

    const query = 'fields name, slug, cover.image_id ; limit 100; sort first_release_date desc;' + filter + ' offset'+ (page - 1) * 100 + ';';
  
    const apiUrl = 'https://api.igdb.com/v4/games/'
  
    const request = {
      method: 'POST',
      url: apiUrl,
      body: query,
      cache: 'no-cache'
    };
  
    const response = await fetch('https://my-game-app-proxy.vercel.app/api/proxy', {
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