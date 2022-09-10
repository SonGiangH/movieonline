const stateDefault = {
    arrTVTrend: [],
    genres: [],
    genresTV: [],
    popularTV: [],
    topRateTVs: [],
    hotTVs: [],
    upcomingTVs: [],
    categoryStatus: [],
    TV: [],
    TVCredit: [],
    reviews: [],
    TVVideos: [],
    similarTV: []
}

//funtion
export const TVReducer = ((state = stateDefault, action) => {
    switch (action.type) {
        case 'GET_TRENDING_TV': {
            state.arrTVTrend = action.tv
            return { ...state }
        }
        case 'GET_GENRES': {
            state.genres = action.genresList
            return { ...state }
        }
        case 'GET_POPULAR': {
            state.popularTV = action.popularTV
            return { ...state }
        }
        case 'GET_TOP_RATED': {
            state.topRateTVs = action.topRateTV
            return { ...state }
        }
        case 'GET_HOT': {
            state.hotTVs = action.hotTV
            return { ...state }
        }
        case 'GET_UPCOMING': {
            state.upcomingTVs = action.upcoming
            return { ...state }
        }
        case 'GET_GENRES_TV': {
            state.genresTV = action.genresTV
            return { ...state }
        }
        case 'SET_TV_STATUS': {
            state.categoryStatus = action.TV
            return { ...state }
        }
        case 'GET_DETAIL_TV': {
            state.TV = action.TV
            return { ...state }
        }
        case 'GET_TV_CREDIT': {
            state.TVCredit = action.credits
            return { ...state }
        }
        case 'GET_REVIEWS': {
            state.reviews = action.reviews
            return { ...state }
        }
        case 'GET_VIDEOS_MV': {
            state.TVVideos = action.videos
            return { ...state }
        }
        case 'GET_SIMILAR_TV': {
            state.similarTV = action.similarTV
            return { ...state }
        }
        default: return { ...state }
    }
})