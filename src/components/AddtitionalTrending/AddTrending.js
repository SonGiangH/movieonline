import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingMoviesAction } from '../../redux/action/getTrendingMovieAction';
import { IMG_URL } from '../../utils/cofigVariables';

export default function AddTrending() {
    const { arrMovieTrend } = useSelector(state => state.MoviesReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        const action = getTrendingMoviesAction();
        dispatch(action)
    }, [dispatch])

    //render Movie Card
    const renderMovieTrending = () => {
        return arrMovieTrend?.filter((movie, index) => index < 3).map((movie, index) => {
            return (
                <li key={index} className="mb-5">
                    <a className="flex gap-5 items-center hover:brightness-75 transiton duration-300" href={`/${movie.media_type}/${movie.id}`}>
                        <div className="max-w-[100px] w-full">
                            <span style={{ color: 'transparent', display: 'inline-block' }}>
                                <img src={`${IMG_URL}w154${movie.poster_path}`} className="w-full h-full object-cover rounded-md" alt="poster" />
                            </span>
                        </div>
                        <div>
                            <p className="text-white mb-3 text-lg truncate w-28">{movie.name} {movie.title}</p>
                            <p className="text-white mb-8">{movie.first_air_date}{movie.release_date}</p>
                            <div className="inline-flex gap-2 items-center px-3 py-[2px] rounded-full border text-sm font-semibold"
                                style={{ color: 'rgb(81, 121, 255)', border: '1px solid rgb(81, 121, 255)' }}>
                                <span>{Number(movie.vote_average).toFixed(1)}</span>
                                <i className="bx bx-star"></i>
                            </div>
                        </div>
                    </a>
                </li>
            )
        })
    }

    return (
        <div className="mt-8">
            <div className="text-xl text-white font-medium tracking-wider mb-3 flex justify-between items-center">
                Trending
                <i className="bx bx-dots-vertical-rounded" style={{ fontSize: '25px' }}></i>
            </div>
            <ul>
                {renderMovieTrending()}
            </ul>
            <button className="py-2 w-full rounded-full mt-7 hover:brightness-75 transition duration-300 text-gray-400"
                style={{ backgroundColor: "rgb(51 51 53/1)" }}>
                See more
            </button>
        </div>
    )
}
