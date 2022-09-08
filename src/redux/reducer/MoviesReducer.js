const stateDefault = {
    arrMovieTrend: [{}],
    genres: [{}],
    genresMovie: [{}],
    genresTV: [{}],
    popularMovies: [{}],
    topRateMovies: [{}],
    hotMovies: [{}],
    upcomingMovies: [{}],
    categoryStatus: [{}],
    movie: [{}],
    movieCredit: [{}],
    reviews: [{}]
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
        case 'SET_MOVIE_STATUS': {
            state.categoryStatus = action.movie
            return { ...state }
        }
        case 'GET_GENRES_TV': {
            state.genresTV = action.genresTV
            return { ...state }
        }
        case 'GET_DETAIL_MOVIE': {
            state.movie = action.movie
            return { ...state }
        }
        case 'GET_MOVIE_CREDIT': {
            state.movieCredit = action.credits
            return { ...state }
        }
        case 'GET_REVIEWS': {
            state.reviews = action.reviews
            return { ...state }
        }
        default: return { ...state }
    }
})