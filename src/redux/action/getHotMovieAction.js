import { movieService } from "../../services/MovieService"


export const getHotMovieAction = () => {
    return async (dispatch) => {
        const response = await movieService.getHotMovie();

        dispatch({
            type: 'GET_HOT',
            hotMovies: response.data.results
        })
    }
}