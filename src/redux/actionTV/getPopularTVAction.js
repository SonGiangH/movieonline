import { tvService } from '../../services/TvService'


export const getPopularTVAction = () => {
    return async (dispatch) => {
        const result = await tvService.getPopularTV()

        dispatch({
            type: 'GET_POPULAR',
            popularTV: result.data.results
        })
    }
}