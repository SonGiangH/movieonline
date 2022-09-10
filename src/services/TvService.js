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

    // get Popular Movie
    getPopularTV = () => {
        return this.get('/tv/popular');
    }

    // get Top Rate Movie
    getTopRateTV = () => {
        return this.get('/tv/top_rated')
    }

    // get Hot Movie
    getHotTV = () => {
        return this.getWithPage('/trending/tv/day', 2)
    }

    // get Upcoming Movie
    getUpcomingTV = () => {
        return this.get('/tv/on_the_air')
    }
    // get Movie Detail
    getDetailsTV = (id) => {
        return this.get(`/tv/${id}`)
    }
    // get Movie Credit
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