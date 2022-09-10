import { tvService } from "../../services/TvService"


export const getTopRateTVAction = () => {
    return async (dispatch) => {
        const response = await tvService.getTopRateTV()
        dispatch({
            type: 'GET_TOP_RATED',
            topRateTV: response.data.results
        })
    }
}