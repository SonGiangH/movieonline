import { movieService } from "../../services/MovieService"


export const getPopularMvAction = () => {
    return async (dispatch) => {
        const result = await movieService.getPopularMovie();
        dispatch({
            type: 'GET_POPULAR',
            popularMovies: result.data.results
        })
    }
}