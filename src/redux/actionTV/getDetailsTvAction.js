import { tvService } from "../../services/TvService"


export const getDetailsTvAction = (id) => {
    return async (dispatch) => {
        const response = await tvService.getDetailsTV(id)
        dispatch({
            type: 'GET_DETAIL_TV',
            TvDetails: response.data
        })
    }
}