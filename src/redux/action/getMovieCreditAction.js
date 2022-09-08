import { movieService } from "../../services/MovieService"

export const getMovieCreditAction = (id) => {
    return async (dispatch) => {
        const resp = await movieService.getMovieCredit(id);

        dispatch({
            type: 'GET_MOVIE_CREDIT',
            credits: resp.data
        })
    }
}