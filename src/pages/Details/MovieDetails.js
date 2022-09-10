import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { getDetailsMvAction } from '../../redux/action/getDetailsMvAction'
import logo from '../../assets/img/logo.png'
import { IMG_URL } from '../../utils/cofigVariables'
import './MovieDetails.css'
import 'tw-elements'
import MovieInfo from './MovieInfo/MovieInfo'
import { getMovieCreditAction } from '../../redux/action/getMovieCreditAction'
import { getReviewMvAction } from '../../redux/action/getReviewMvAction'
import { getVideoMovieAction } from '../../redux/action/getVideoMovieAction'
import MovieRating from './MovieRating/MovieRating'
import MovieMedia from './Media/MovieMedia'
import Search from '../../components/Search/Search'
import SimilarMovie from './SimilarMovie/SimilarMovie'
import { getSimilarMovieAction } from '../../redux/action/getSimilarMovieAction'


export default function MovieDetails() {
    const movieId = useParams()
    const { movie, movieCredit, reviews, movieVideos, similarMovie } = useSelector(state => state.MoviesReducer)

    const dispatch = useDispatch()

    // render data afer loading component once
    useEffect(() => {
        const action = getDetailsMvAction(movieId.id);
        dispatch(action)

        const action2 = getMovieCreditAction(movieId.id);
        dispatch(action2)

        const action3 = getReviewMvAction(movieId.id);
        dispatch(action3)

        const action4 = getVideoMovieAction(movieId.id)
        dispatch(action4)

        const action5 = getSimilarMovieAction(movieId.id)
        dispatch(action5)
    }, [dispatch, movieId])

    // render Movie detail
    const renderMovieDetail = () => {
        return (
            <div className="flex-grow min-h-screen">
                <div className=" relative ml-[90px]">
                    <div className="w-[1520px] h-[400px] rounded-3xl"
                        style={{
                            backgroundImage: `url(${IMG_URL}w1280${movie.backdrop_path})`, backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                        }}>
                    </div>
                    <div className='overlay-background absolute top-0 left-0 w-[1520px] h-[400px] rounded-3xl' style={{ background: 'linear-gradient(to bottom right, transparent, rgba(0,0,0,.7)' }}></div>
                    <div className="movie__poster w-[1264px] absolute left-64 top-48 flex justify-between rounded-xl overflow-hidden">
                        {/* Poster- Title-Genre */}
                        <div className="flex">
                            <div className='w-[185px]'>
                                <img src={`${IMG_URL}w342${movie.poster_path}`} alt="poster film" />
                            </div>
                            <div className="ml-12 mt-10">
                                <h2 className="text-5xl font-bold text-white mb-10">{movie.title}</h2>
                                <div className='movie__tags'>
                                    {movie.genres?.map((genre, i) => {
                                        return (
                                            <div className="btn-genre uppercase font-semibold hover:brightness-75 transition duration-300 mr-3" key={i}>{genre.name}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* Watch button */}
                        <a className="flex gap-6 items-center pl-6 pr-12 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300 mt-[116px] mb-32 mr-[5%] " href="/movie/361743/watch">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                            </svg><span className="text-lg font-medium">WATCH</span>
                        </a>
                    </div>
                    {/* Icon like-share-action */}
                    <div className="flex gap-3 absolute top-[2%] right-[15%]">
                        <button className="tw-flex-center h-12 w-12 rounded-full border-[3px] border-white shadow-lg hover:border-primary transition duration-300 group false">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-white group-hover:text-primary transition duration-300 false" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path>
                            </svg>
                        </button>
                        <button className="tw-flex-center h-12 w-12 rounded-full border-[3px] border-white shadow-lg hover:border-primary transition duration-300 group">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-white group-hover:text-primary transition duration-300" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"></path>
                            </svg>
                        </button>
                        <button className="tw-flex-center h-12 w-12 rounded-full border-[3px] border-white shadow-lg hover:border-primary transition duration-300 group">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-white group-hover:text-primary transition duration-300" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Main Content */}
                <div className="w-[1520px] flex ml-20">
                    {/* Rating section */}
                    <div className="movie__rating flex flex-col shrink-0 md:max-w-[150px] relative">
                        {/* Border Right div */}
                        <div className="absolute top-[15%] bottom-0 w-full" style={{ borderRight: "1px solid rgb(229 231 235/0.15)" }}></div>
                        <div className="flex flex-col gap-8 items-center w-full my-40">
                            <p className="text-white uppercase text-xl font-semibold">RATING</p>
                            <div className="w-[50%]">
                                <MovieRating movie={movie} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 text-center">
                            <p className="text-white uppercase text-xl font-semibold">RUNTIME</p>
                            <p className="text-gray-400 text-xl">{movie.runtime} min</p>
                        </div>
                    </div>
                    {/* Overall-Cast-Review section */}
                    <div className="movie__details w-[1064px] flex-grow relative">
                        <div className="absolute top-0 bottom-0 w-full" style={{ borderRight: "1px solid rgb(229 231 235/0.15)" }}></div>
                        <MovieInfo movie={movie} credit={movieCredit} reviews={reviews} />
                    </div>
                    {/* Meida trailer */}
                    <div className="movie__media w-[304px] pl-10">
                        <MovieMedia videos={movieVideos} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen max-w-full flex flex-col md:flex-row" style={{ backgroundColor: "rgb(28 28 30/1)" }}>
            {/* Side bar */}
            <div className="fixed top-0 left-0 bottom-0 min-h-screen flex flex-col pl-5 shrink-0 w-full overflow-hidden">
                <div className="flex items-center justify-center h-20 w-14 mb-[220px]">
                    <img src={logo} alt="logo" className="w-10 h-10" />
                </div>
                <ul className="flex flex-col py-4">
                    <li>
                        <NavLink to="/home" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400"><i className="bx bx-home" /></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/explore" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400"><i className="bx bx-compass" /></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400"><i className="bx bx-search" /></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/bookmark" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400"><i className="bx bx-bookmark" /></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/history" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400"><i className="bx bx-history" /></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/profile" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400"><i className="bx bx-user" /></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/notification" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400"><i className="bx bx-bell" /></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/logout" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-3xl text-gray-400"><i className="bx bx-log-out" /></span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            {renderMovieDetail()}
            <div className="relative md:max-w-[310px] w-full shrink-0 flex flex-col">
                <Search />
                <SimilarMovie similarMovie={similarMovie} />
            </div>
        </div>
    )
}
