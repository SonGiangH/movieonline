import { movieService } from "../../services/MovieService"


export const getDetailsMvAction = (id) => {
    return async (dispatch) => {
        const response = await movieService.getDetailsMovie(id)

        dispatch({
            type: 'GET_DETAIL_MOVIE',
            movie: response.data
        })
    }
}