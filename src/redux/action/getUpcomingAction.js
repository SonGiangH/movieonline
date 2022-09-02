import { movieService } from "../../services/MovieService"


export const getUpcomingAction = () => {
    return async (dispatch) => {
        const response = await movieService.getUpcomingMovie();

        dispatch({
            type: 'GET_UPCOMING',
            upcoming: response.data.results
        })
    }
}