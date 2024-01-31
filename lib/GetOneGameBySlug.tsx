/**
 * Retrieves a single game by slug from the IGDB API.
 * 
 * @param {string} props - The slug of the game to retrieve.
 * @returns {Promise<GamesObj>} A promise resolving to the game object.
 */
export default async function GetTenGames(props: any): Promise<GamesObj> {
  const apiUrl = 'https://api.igdb.com/v4/games/'

  const request = {
    method: 'POST',
    url: apiUrl,
    body: `fields name, url, aggregated_rating, aggregated_rating_count, cover.image_id, dlcs.slug, dlcs.name, dlcs.cover.image_id, expansions.slug, expansions.name, expansions.cover.image_id ,genres.slug, genres.name, involved_companies.company.name, platforms.name, summary, rating, rating_count, release_dates.human, similar_games.slug, similar_games.name, similar_games.cover.image_id, storyline, videos.video_id, screenshots.image_id, slug; where slug="` + props + `";`,
    cache: 'no-cache'
  };

  const response = await fetch('http://localhost:3001/api/proxy', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  })

  const tempdata: GamesObj[] = await response.json()
  const data = tempdata[0]

  return data;
}