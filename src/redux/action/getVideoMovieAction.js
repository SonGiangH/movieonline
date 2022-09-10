import { movieService } from "../../services/MovieService"

export const getVideoMovieAction = (id) => {
    return async (dispatch) => {
        const response = await movieService.getVideoMovie(id)
        console.log(response)
        dispatch({
            type: 'GET_VIDEOS_MV',
            videos: response.data.results
        })
    }
}