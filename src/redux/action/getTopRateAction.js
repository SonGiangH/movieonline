import { movieService } from "../../services/MovieService"

export const getTopRateAction = () => {
    return async (dispatch) => {
        const response = await movieService.getTopRateMovie();

        dispatch({
            type: 'GET_TOP_RATED',
            topRateMovies: response.data.results
        })
    }
}