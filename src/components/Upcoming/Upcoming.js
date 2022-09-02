import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from "react-slick";

import { IMG_URL } from '../../utils/cofigVariables';
// import css react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getUpcomingAction } from '../../redux/action/getUpcomingAction';

export default function Upcoming() {
    // connect store
    const { upcomingMovies } = useSelector(state => state.MoviesReducer);

    const dispatch = useDispatch();

    // render list once after loading component
    useEffect(() => {
        const action = getUpcomingAction();
        dispatch(action)
    }, [dispatch])

    // render Upcoming 
    const renderUpcoming = () => {
        return upcomingMovies?.map((movie, index) => {
            return (
                <div key={index}>
                    <div className="relative bg-black rounded-xl text-white border-2 border-black w-[167px] h-[280px] overflow-hidden
                    hover:scale-105 hover:brightness-110 transition duration-300">
                        <img src={`${IMG_URL}w342${movie.poster_path}`} alt="poster film"
                            className="self-center rounded-lg h-[250px] object-cover mx-auto" />
                        <p className="text-center p-1">{movie.title}</p>
                        <div className="absolute top-3 right-2 card__rating"   >
                            {movie.vote_average}<i className="bx bx-star ml-[5px]" />
                        </div>
                    </div>
                </div >
            )
        })
    }

    // slick setting
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    return (
        <div className="w-[1310px] mt-5">
            <div className="text-xl text-white font-medium tracking-wider mb-3 text-left">
                Upcoming
            </div>
            <Slider {...settings}>
                {renderUpcoming()}
            </Slider>
        </div>
    )
}