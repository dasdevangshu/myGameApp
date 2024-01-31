type keys = {
    'Client-ID': string,
    'Authorization': string,
}

type AuthenObj = {
    'access_token': string,
    'expires_in': number,
    'token_type': string,
}

type Game = GamesObj | GameForCarousel | GameForGamebox

type GamesObj = {
    'id': number,
    'aggregated_rating': number,
    'aggregated_rating_count': number,
    'cover'?: {
        'id': number,
        'image_id': string,
    },
    'dlcs'?: {
        'id':   number,
        'slug': string,
        'cover'?: {
            'id': number,
            'image_id': string,
        }
        'name': string
    }[],
    'expansions'?: {
        'id':   number,
        'slug': string,
        'cover'?: {
            'id': number,
            'image_id': string,
        }
        'name': string
    }[],
    'genres': {
        'id': number,
        'name': string,
        'slug': string
    }[],
    'involved_companies'?: {
        'id':      number,
        'company': {
            'id':   number,
            'name': string
        }
    }[],
    'name': string,
    'platforms': {
        'id':   number,
        'name': string
    }[],
    'rating': number,
    'rating_count': number,
    'release_dates'?: {
        'id': number,
        'human'?: string
    }[],
    'screenshots'?: {
        'id': number,
        'image_id': string,
    }[],
    'similar_games'?: {
        'id':   number,
        'slug': string,
        'cover'?: {
            'id': number,
            'image_id': string,
        }
        'name': string
    }[],
    'slug': string,
    'storyline'?: string,
    'summary'?: string,
    'url': number,
    'videos'?: {
        'id': number;
        'video_id': string;     
    }[]
}

type Screenshots = {
        'id': number,
        'image_id': string,
}[]

type GameForCarousel = {
    'id': number,
    'name': string,
    'screenshots': {
        'id': number,
        'image_id': string,
    }[],
    'slug': string
}

type GameForGamebox = {
    'id': number,
    'name': string,
    'slug': string,
    'cover'?: {
        'id': number,
        'image_id': string,
    }
}

type GameForSearch = {
    'id': number,
    'name': string,
    'slug': string,
    'cover'?: {
        'id': number,
        'image_id': string,
    },
    'summary'?: string,
    'release_dates'?: {
        'id': number,
        'y'?: string
    }[],
    'involved_companies'?: {
        'id':      number,
        'company': {
            'id':   number,
            'name': string
        }
    }[],
    'genres': {
        'id': number,
        'name': string,
        'slug': string
    }[],
}

type GameSlugs = {
    'id': number,
    'slug': string
}

type Count = {
    'id': number,
    'name': string,
    'count': number
}[]

type Genre = {
    'id': number,
    'name': string,
    'slug': string
}

type Platform = {
    'id': number,
    'name': string,
    'slug': string
}

type GamesObjLess = Omit<GamesObj, "screenshots" | "url" | "videos" | "summary">

