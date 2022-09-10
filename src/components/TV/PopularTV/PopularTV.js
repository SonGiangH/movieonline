import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getPopularTVAction } from '../../../redux/actionTV/getPopularTVAction';
import { IMG_URL } from '../../../utils/cofigVariables';
import './PopularTV.css'

export default function PopularTV() {
    // hook
    const { popularTV } = useSelector(state => state.TVReducer)

    const dispatch = useDispatch();

    // render component and reload data only once
    useEffect(() => {
        const action = getPopularTVAction();

        dispatch(action)
    }, [dispatch])

    // renderMovie Card
    const renderTVCard = () => {
        return (popularTV?.map((item, index) => {
            return (
                <Link to={`/movie/${item.id}`} key={index}>
                    <div className="relative bg-black rounded-xl text-white border-2 border-black w-[167px] h-[280px] overflow-hidden
                    hover:scale-105 hover:brightness-110 transition duration-300">
                        <img src={`${IMG_URL}w342${item.poster_path}`} alt="poster film"
                            className="self-center rounded-lg h-[250px] object-cover mx-auto" />
                        <p className="text-center p-1">{item.name}</p>
                        <div className="absolute top-3 right-2 card__rating"   >
                            {item.vote_average}<i className="bx bx-star ml-[5px]" />
                        </div>
                    </div>
                </Link>
            )
        })
        )
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
                Popular
            </div>
            <Slider {...settings}>
                {renderTVCard()}
            </Slider>
        </div>
    )
}
