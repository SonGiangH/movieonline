import React, { useEffect } from 'react'
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux'

import { IMG_URL } from '../../utils/cofigVariables';
// import css react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getHotMovieAction } from '../../redux/action/getHotMovieAction';


export default function Hot() {
    const { hotMovies } = useSelector(state => state.MoviesReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const action = getHotMovieAction();
        dispatch(action)
    }, [dispatch])

    // slick setting
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    // render Hot Movies
    const renderHotMovie = () => {
        return hotMovies.map((movie, index) => {
            return (
                <div key={index}>
                    <div className="relative bg-black rounded-xl text-white border-2 border-black w-[167px] h-[280px] overflow-hidden
                    hover:scale-105 hover:brightness-110 transition duration-300">
                        <img src={`${IMG_URL}w342${movie.poster_path}`} alt="poster film"
                            className="self-center rounded-lg h-[250px] object-cover mx-auto" />
                        <p className="text-center p-1">{movie.title}</p>
                        <div className="absolute top-3 right-2 card__rating"   >
                            {Number(movie.vote_average).toFixed(1)}<i className="bx bx-star ml-[5px]" />
                        </div>
                    </div>
                </div >
            )
        })
    }

    return (
        <div className="w-[1310px] mt-5">
            <div className="text-xl text-white font-medium tracking-wider mb-3 text-left">
                Hot
            </div>
            <Slider {...settings}>
                {renderHotMovie()}
            </Slider>
        </div>
    )
}
