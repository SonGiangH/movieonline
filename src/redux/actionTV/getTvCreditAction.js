import { tvService } from "../../services/TvService";

export const getTvCreditAction = (id) => {
    return async (dispatch) => {
        const resp = await tvService.getTVCredit(id);
        dispatch({
            type: 'GET_TV_CREDIT',
            credits: resp.data
        })
    }
}