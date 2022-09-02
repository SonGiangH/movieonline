
// redux-thunk - middleware that allows you to write action creators that
//  return a function instead of an action. 
// The thunk can be used to delay the dispatch of an action.

import { movieService } from "../../services/MovieService"

// or to dispatch only if a certain condition is met. 
// Used mainly for async calls to api, that dispatch another action on success / failure
export const getTrendingMoviesAction = () => {

    return async (dispatch) => {
        const result = await movieService.getAllTrendingMovies();

        //dispatch to store
        dispatch({
            type: 'GET_TRENDING_MOVIE',
            movies: result.data.results
        })
    }
}