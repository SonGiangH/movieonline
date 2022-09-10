import { tvService } from "../../services/TvService";

export const getSimilarTvAction = (id) => {
    return async (dispatch) => {
        const response = await tvService.getSimilarTV(id)
        dispatch({
            type: 'GET_SIMILAR_TV',
            similarTV: response.data.results
        })
    }
}