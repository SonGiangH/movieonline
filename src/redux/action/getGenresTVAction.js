import { movieService } from '../../services/MovieService'

export const getGenresTVAction = () => {
    return async (dispatch) => {
        const response = await movieService.getGenresTv()
        dispatch({
            type: 'GET_GENRES_TV',
            genresTV: response.data.genres
        })
    }
}