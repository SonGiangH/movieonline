import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getGenresTVAction } from '../../redux/action/getGenresTVAction';

export default function CategoryTV() {
    const { genresTV } = useSelector(state => state.MoviesReducer)

    const dispatch = useDispatch();

    // load data after rendering component
    useEffect(() => {
        dispatch(getGenresTVAction())
    }, [dispatch])

    // render Category
    const renderCategoryTV = () => {
        return genresTV.map((genre, index) => {
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
                {renderCategoryTV()}
            </ul>
        </div>
    )
}
