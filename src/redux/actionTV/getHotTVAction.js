import { tvService } from "../../services/TvService"


export const getHotTVAction = () => {
    return async (dispatch) => {
        const response = await tvService.getHotTV();
        dispatch({
            type: 'GET_HOT',
            hotTV: response.data.results
        })
    }
}