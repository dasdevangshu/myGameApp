
export default async function GetTenGames(): Promise<Genre[]> {
    //console.log('From Carousel: Got 10 games')
  
    const apiUrl = 'https://api.igdb.com/v4/genres/'
  
    const request = {
      method: 'POST',
      url: apiUrl,
      body: 'fields name, slug; limit 500; sort name asc;',
      cache: 'no-cache'
    };
  
    const response = await fetch('http://localhost:3001/api/proxy', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
  
    const data: Genre[] = await response.json()
    return data;
  }