import React from 'react'
import { IMG_URL } from '../../../utils/cofigVariables';

export default function SimilarMovie(props) {
    const similarMovies = props.similarMovie

    //render Movie Card
    const renderSimilarMovie = () => {
        return similarMovies?.slice(0, 4).map((movie, index) => {
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
        <div className="mt-28 ml-6">
            <div className="text-xl text-white font-medium tracking-wider mb-3 flex justify-between items-center">
                Similar
                <i className="bx bx-dots-vertical-rounded" style={{ fontSize: '25px' }}></i>
            </div>
            <ul>
                {renderSimilarMovie()}
            </ul>
            <button className="py-2 w-full rounded-full mt-7 hover:brightness-75 transition duration-300 text-gray-400"
                style={{ backgroundColor: "rgb(51 51 53/1)" }}>
                See more
            </button>
        </div>
    )
}
