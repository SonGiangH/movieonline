import { BaseService } from "./BaseService";

class TvService extends BaseService {
    //get All Tv
    getAllTrendingTV = () => {
        return this.get('/trending/tv/day');
    }

    // get Genre TV
    getGenresTv = () => {
        return this.get('/genre/tv/list');
    }

    // get Popular TV
    getPopularTV = () => {
        return this.get('/tv/popular');
    }

    // get Top Rate TV
    getTopRateTV = () => {
        return this.get('/tv/top_rated')
    }

    // get Hot TV
    getHotTV = () => {
        return this.getWithPage('/trending/tv/day', 2)
    }

    // get Upcoming TV
    getUpcomingTV = () => {
        return this.get('/tv/on_the_air')
    }
    // get TV Detail
    getDetailsTV = (id) => {
        return this.get(`/tv/${id}`)
    }
    // get TV Credit
    getTVCredit = (id) => {
        return this.get(`/tv/${id}/credits`)
    }
    // get Review 
    getReview = (id) => {
        return this.get(`/tv/${id}/reviews`)
    }
    // get Videos
    getVideoTV = (id) => {
        return this.get(`/tv/${id}/videos`)
    }
    // get similar Movie
    getSimilarTV = (id) => {
        return this.get(`/tv/${id}/similar`)
    }
}

export const tvService = new TvService();