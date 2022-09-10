import { tvService } from "../../services/TvService";


export const getReviewTvAction = (id) => {
    return async (dispatch) => {
        const response = await tvService.getReview(id);
        dispatch({
            type: 'GET_REVIEWS',
            reviews: response.data.results
        })
    }
}