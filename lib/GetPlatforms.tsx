
export default async function GetPlatforms(): Promise<Platform[]> {
    //console.log('From Carousel: Got 10 games')
  
    const apiUrl = 'https://api.igdb.com/v4/platforms/'
  
    const request = {
      method: 'POST',
      url: apiUrl,
      body: 'fields name, slug; limit 500; sort name asc;',
      cache: 'no-cache'
    };
  
    const response = await fetch('https://my-game-app-proxy.vercel.app/api/proxy', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
  
    const data: Platform[] = await response.json()
    return data;
  }