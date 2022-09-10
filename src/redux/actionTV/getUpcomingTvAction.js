import { tvService } from "../../services/TvService"


export const getUpcomingTvAction = () => {
    return async (dispatch) => {
        const response = await tvService.getUpcomingTV();
        dispatch({
            type: 'GET_UPCOMING',
            upcoming: response.data.results
        })
    }
}