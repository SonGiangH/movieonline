import { movieService } from "../../services/MovieService"


export const getGenresAction = () => {
    return async (dispatch) => {
        // get data from api
        const result1 = await movieService.getGenresMovie();
        const result2 = await movieService.getGenresTv();

        //remove duplicate items
        function arrayUnique(array) {
            var a = array.concat();
            for (var i = 0; i < a.length; ++i) {
                for (var j = i + 1; j < a.length; ++j) {
                    if (a[i].id === a[j].id)
                        a.splice(j--, 1);
                }
            }
            return a;
        }
        // merge 2 array and remove duplicate items
        const result = arrayUnique(result1.data.genres.concat(result2.data.genres))

        //dispatch to store
        dispatch({
            type: 'GET_GENRES',
            genresList: result
        })
    }
}