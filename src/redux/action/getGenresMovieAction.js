import { movieService } from "../../services/MovieService"


export const getGenresMovieAction = () => {
    return async (dispatch) => {
        const response = await movieService.getGenresMovie();

        dispatch({
            type: 'GET_GENRES_MOVIE',
            genresMovie: response.data.genres
        })
    }
}