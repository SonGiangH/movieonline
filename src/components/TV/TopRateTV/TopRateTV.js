import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import { IMG_URL } from '../../../utils/cofigVariables';
import { getTopRateTVAction } from '../../../redux/actionTV/getTopRateTVAction'

export default function TopRateTV() {
    const { topRateTVs } = useSelector(state => state.TVReducer)

    const dispatch = useDispatch();

    // render once after loading component
    useEffect(() => {
        // create action
        const action = getTopRateTVAction();
        dispatch(action);
    }, [dispatch])


    // slick setting
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    // Render Movie Card
    const renderTopRatedCard = () => {
        return (topRateTVs?.map((item, index) => {
            return (
                <NavLink to={`/tv/${item.id}`} key={index}>
                    <div className="relative bg-black rounded-xl text-white border-2 border-black w-[167px] h-[280px] overflow-hidden
                    hover:scale-105 hover:brightness-110 transition duration-300">
                        <img src={`${IMG_URL}w342${item.poster_path}`} alt="poster film"
                            className="self-center rounded-lg h-[250px] object-cover mx-auto" />
                        <p className="text-center p-1">{item.name}</p>
                        <div className="absolute top-3 right-2 card__rating"   >
                            {item.vote_average}<i className="bx bx-star ml-[5px]" />
                        </div>
                    </div>
                </NavLink>
            )
        })
        )
    }


    return (
        <div className="w-[1310px] mt-5">
            <div className="text-xl text-white font-medium tracking-wider mb-3 text-left">
                Top Rated
            </div>
            <Slider {...settings}>
                {renderTopRatedCard()}
            </Slider>
        </div>
    )
}
