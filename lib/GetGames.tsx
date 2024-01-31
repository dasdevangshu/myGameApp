
export default async function GetTenGames(props : any): Promise<any> {
    
    //const apiUrl = 'https://api.igdb.com/v4/genres/'
    const apiUrl = 'https://api.igdb.com/v4/' + props.endpoint + '/'
    const query = props.field + props.filter + props.sort + props.limit + props.offset
    //console.log(query)
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
  
    const data: any = await response.json()
    //console.log(data)
    return data;
  }