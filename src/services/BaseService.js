import { ACESS_TOKEN, BASE_URL } from '../utils/cofigVariables';


export class BaseService {
    //get
    get = (url) => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: `${BASE_URL}${url}?api_key=${ACESS_TOKEN}`,
        };

        return axios(config)
            .then(function (response) {
                return response
            })
            .catch(function (error) {
                return error
            });
    }

    // get with Page Number
    getWithPage = (url, pageNumber) => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: `${BASE_URL}${url}?api_key=${ACESS_TOKEN}&page=${pageNumber}`,
            headers: {}
        };

        return axios(config)
            .then(function (response) {
                return response
            })
            .catch(function (error) {
                return error
            });
    }
}
