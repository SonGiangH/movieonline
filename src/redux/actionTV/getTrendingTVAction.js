import { tvService } from "../../services/TvService"


export const getTrendingTVAction = () => {
    return async (dispatch) => {
        const response = await tvService.getAllTrendingTV();
        dispatch({
            type: 'GET_TRENDING_TV',
            tv: response.data.results
        })
    }
}