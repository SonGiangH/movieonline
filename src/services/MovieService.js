import { BaseService } from "./BaseService";

class MovieService extends BaseService {
    //get All Movies
    getAllTrendingMovies = () => {
        return this.get('/trending/all/day');
    }

    // get Genre Movie
    getGenresMovie = () => {
        return this.get('/genre/movie/list');
    }

    // get Genre TV
    getGenresTv = () => {
        return this.get('/genre/tv/list');
    }

    // get Popular Movie
    getPopularMovie = () => {
        return this.get('/movie/popular');
    }

    // get Top Rate Movie
    getTopRateMovie = () => {
        return this.get('/movie/top_rated')
    }

    // get Hot Movie
    getHotMovie = () => {
        return this.getWithPage('/trending/movie/day', 2)
    }

    // get Upcoming Movie
    getUpcomingMovie = () => {
        return this.get('/movie/upcoming')
    }
}

export const movieService = new MovieService();