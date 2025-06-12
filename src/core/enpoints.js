const API_KEY = import.meta.env.VITE_API_KEY

export const ENDPOINTS = Object.freeze({
    SHOW_BY_TITLE: (title) => `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${title}`,
    SHOW_BY_ID: (ID) => `https://api.themoviedb.org/3/tv/${ID}&?api_key=${API_KEY}&append_to_response=credits`,
    RECOMMENDATION_BY_SHOW_ID: (ID) => `https://api.themoviedb.org/3/tv/${ID}/recommendations?api_key=${API_KEY}`,
    POPULAR_SHOWS: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`,
    IMAGE:{
        BIG:(link) => `https://image.tmdb.org/t/p/original${link}`,
        SMALL:(link) => `https://image.tmdb.org/t/p/w300${link}`,
    }
})