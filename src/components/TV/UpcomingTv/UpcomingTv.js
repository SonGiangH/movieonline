import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { IMG_URL } from '../../../utils/cofigVariables';
import { getUpcomingTvAction } from '../../../redux/actionTV/getUpcomingTvAction'

export default function UpcomingTv() {
    const { upcomingTVs } = useSelector(state => state.TVReducer);

    const dispatch = useDispatch();

    // render list once after loading component
    useEffect(() => {
        const action = getUpcomingTvAction();
        dispatch(action)
    }, [dispatch])

    // render Upcoming 
    const renderUpcoming = () => {
        return upcomingTVs?.map((tv, index) => {
            return (
                <Link to={`/tv/${tv.id}`} key={index}>
                    <div className="relative bg-black rounded-xl text-white border-2 border-black w-[167px] h-[280px] overflow-hidden
                    hover:scale-105 hover:brightness-110 transition duration-300">
                        <img src={`${IMG_URL}w342${tv.poster_path}`} alt="poster film"
                            className="self-center rounded-lg h-[250px] object-cover mx-auto" />
                        <p className="text-center p-1">{tv.name}</p>
                        <div className="absolute top-3 right-2 card__rating"   >
                            {tv.vote_average}<i className="bx bx-star ml-[5px]" />
                        </div>
                    </div>
                </Link >
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
                On the air
            </div>
            <Slider {...settings}>
                {renderUpcoming()}
            </Slider>
        </div>
    )
}
