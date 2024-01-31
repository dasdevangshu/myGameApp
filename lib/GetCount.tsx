
export default async function GetCount(props : any): Promise<Count> {
  
    const apiUrl = 'https://api.igdb.com/v4/multiquery/'

    const bodyQuery = 'query games/count "Count of Games" {' + props.filter +'};'
    //console.log(bodyQuery)

    const request = {
      method: 'POST',
      url: apiUrl,
      body: bodyQuery,
      cache: 'no-cache'
    };
  
    const response = await fetch('https://my-game-app-proxy.vercel.app/api/proxy', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
  
    const data: Count = await response.json()
  
    return data;
  }