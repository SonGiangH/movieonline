const stateDefault = {
    arrMovieTrend: [
        {
            // "adult": false,
            // "backdrop_path": "/Aa9TLpNpBMyRkD8sPJ7ACKLjt0l.jpg",
            // "id": 94997,
            // "name": "House of the Dragon",
            // "original_language": "en",
            // "original_name": "House of the Dragon",
            // "overview": "The prequel series finds the Targaryen dynasty at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires—real and imagined—crumble from such heights. In the case of the Targaryens, their slow fall begins almost 193 years before the events of Game of Thrones, when King Viserys Targaryen breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
            // "poster_path": "/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
            // "media_type": "tv",
            // "genre_ids": [
            //     18,
            //     10759,
            //     10765
            // ],
            // "popularity": 10948.093,
            // "first_air_date": "2022-08-21",
            // "vote_average": 8.822,
            // "vote_count": 657,
            // "origin_country": [
            //     "US"
            // ]
        }
    ],
    genres: [
        {
            // "id": 28,
            // "name": "Action"
        }
    ],
    genresMovie: [
        {}
    ],
    popularMovies: [
        {
            // "adult": false,
            // "backdrop_path": "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
            // "genre_ids": [
            //     16,
            //     878,
            //     28
            // ],
            // "id": 610150,
            // "original_language": "ja",
            // "original_title": "ドラゴンボール超 スーパーヒーロー",
            // "overview": "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
            // "popularity": 7294.015,
            // "poster_path": "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
            // "release_date": "2022-06-11",
            // "title": "Dragon Ball Super: Super Hero",
            // "video": false,
            // "vote_average": 7.1,
            // "vote_count": 230
        }
    ],
    topRateMovies: [
        {
            // "adult": false,
            // "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
            // "genre_ids": [
            //     18,
            //     80
            // ],
            // "id": 278,
            // "original_language": "en",
            // "original_title": "The Shawshank Redemption",
            // "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
            // "popularity": 89.39,
            // "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
            // "release_date": "1994-09-23",
            // "title": "The Shawshank Redemption",
            // "video": false,
            // "vote_average": 8.7,
            // "vote_count": 22108
        }
    ],
    hotMovies: [
        {}
    ],
    upcomingMovies: [
        {}
    ]
}

//funtion
export const MoviesReducer = ((state = stateDefault, action) => {
    switch (action.type) {
        case 'GET_TRENDING_MOVIE': {
            state.arrMovieTrend = action.movies
            return { ...state }
        }
        case 'GET_GENRES': {
            state.genres = action.genresList
            return { ...state }
        }
        case 'GET_POPULAR': {
            state.popularMovies = action.popularMovies
            return { ...state }
        }
        case 'GET_TOP_RATED': {
            state.topRateMovies = action.topRateMovies
            return { ...state }
        }
        case 'GET_HOT': {
            state.hotMovies = action.hotMovies
            return { ...state }
        }
        case 'GET_UPCOMING': {
            state.upcomingMovies = action.upcoming
            return { ...state }
        }
        case 'GET_GENRES_MOVIE': {
            state.genresMovie = action.genresMovie
            return { ...state }
        }
        default: return { ...state }
    }
})