import { movieService } from "../../services/MovieService"


export const getSimilarMovieAction = (id) => {
    return async (dispatch) => {
        const response = await movieService.getSimilarMovie(id);
        dispatch({
            type: 'GET_SIMILAR_MOVIE',
            similarMovie: response.data.results
        })
    }
}