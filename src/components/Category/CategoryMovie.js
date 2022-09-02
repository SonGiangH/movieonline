import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenresMovieAction } from '../../redux/action/getGenresMovieAction';

export default function CategoryMovie() {
    const { genresMovie } = useSelector(state => state.MoviesReducer)
    console.log(genresMovie)
    const dispatch = useDispatch();

    useEffect(() => {
        const action = getGenresMovieAction();
        dispatch(action)
    }, [dispatch])

    // render Category
    const renderCategoryMovie = () => {
        return genresMovie.map((genre, index) => {
            return (
                <li className='mb-2' key={index}>
                    <a className="px-4 py-2 rounded-full hover:brightness-75 transition duration-300 text-gray-500"
                        href={`/explore?genre=${genre.id}`} style={{ backgroundColor: "rgb(51 51 53/1)" }}>{genre.name}
                    </a>
                </li>
            )
        })
    }
    return (
        <div className='mt-28'>
            <ul className="flex flex-wrap gap-3">
                {renderCategoryMovie()}
            </ul>
        </div>
    )
}
