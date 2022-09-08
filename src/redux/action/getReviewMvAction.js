import { movieService } from "../../services/MovieService"


export const getReviewMvAction = (id) => {
    return async (dispatch) => {
        const response = await movieService.getReview(id);

        dispatch({
            type: 'GET_REVIEWS',
            reviews: response.data.results
        })
    }
}