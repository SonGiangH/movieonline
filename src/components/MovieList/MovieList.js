import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './MovieList.css'
// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import loading__spinner from '../../assets/img/loading__spinner.gif'
import { getTrendingMoviesAction } from '../../redux/action/getTrendingMovieAction'
import { IMG_URL } from '../../utils/cofigVariables';
import { getGenresAction } from '../../redux/action/getGenresAction';


export default function MovieList() {
    // use hook, useState to delcare State
    const { arrMovieTrend, genres } = useSelector(state => state.MoviesReducer)

    const dispatch = useDispatch();

    //render list Movie after loading component
    useEffect(() => {
        // getting data from API by action , and dispatch action to store
        const action1 = getTrendingMoviesAction();
        dispatch(action1)

        const action2 = getGenresAction();
        dispatch(action2)
    }, [dispatch])


    const renderMovieList = () => {
        return (
            arrMovieTrend?.map((item, index) => {
                return (
                    <SwiperSlide className="flex items-center justify-center" key={index}>
                        <a className="card__movie" href={`/movie/${item.id}`}>
                            <img src={`${IMG_URL}w1280${item.backdrop_path}`} style={{ width: 1261, height: 709 }} alt="poster" />
                            <div className="overlay-background" />
                            <div className="movie__body">
                                <h5 className="movie__title">{item.title} {item.name}</h5>
                                <p className="movie__title-vietnamese">Vietnamese Title</p>
                                <p className="movie__detail">{item.release_date}</p>
                                <div className="movie__tags">
                                    {item.genre_ids?.map((id, i) => {
                                        return (
                                            <div className="button" key={i}>{genres.filter(genre => genre.id === id).map(genre => genre.name)}</div>
                                        )
                                    })}
                                </div>
                                <div className="card-description">
                                    {item.overview}
                                </div>
                            </div>
                            <div className="movie__rating absolute top-[5%] right-[3%] rounded-full px-3 py-1 gap-1 text-xl text-white">
                                {item.vote_average.toFixed(1)}
                                <i className="bx bx-star ml-2" />
                            </div>
                        </a>
                    </SwiperSlide>
                )
            })
        )
    }

    if (arrMovieTrend === [{}] || !arrMovieTrend || arrMovieTrend.length === 1) {
        return (<div className='w-[70%] ml-auto mr-auto flex items-center justify-center'>
            <img src={loading__spinner} alt="loading" width="200px" height="200px" />
        </div>);
    }
    else
        return (
            <div className="flex flex-wrap mt-10 w-[100%]">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                // pagination={{ clickable: true }}
                >
                    {renderMovieList()}
                </Swiper>
            </div>
        )
}
