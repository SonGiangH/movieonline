import { tvService } from "../../services/TvService"

export const getVideoTvAction = (id) => {
    return async (dispatch) => {
        const response = await tvService.getVideoTV(id)
        dispatch({
            type: 'GET_VIDEOS_MV',
            videos: response.data.results
        })
    }
}