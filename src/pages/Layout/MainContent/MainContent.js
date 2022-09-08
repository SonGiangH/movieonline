import React from 'react'
import Hot from '../../../components/Hot/Hot'
import MovieList from '../../../components/MovieList/MovieList'
import Popular from '../../../components/Popular/Popular'
import TopRate from '../../../components/TopRate/TopRate'
import Upcoming from '../../../components/Upcoming/Upcoming'
import 'tw-elements';

//custom css
import './MainContent.css'
import { useDispatch } from 'react-redux'
import { setMovieStatusAction } from '../../../redux/action/setMovieStatusAction'
import { setTVStatusAction } from '../../../redux/action/setTVStatusAction'



export default function MainContent() {
    const dispatch = useDispatch()

    return (
        <div className="w-[1261px] mx-auto">
            <div>
                <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a href="#tabs-movie" className="
                            nav-link block font-medium text-lg leading-tight
                            border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2
                            hover:border-transparent hover:text-white focus:border-transparent text-gray-400
                            active
                            " id="tabs-movie-tab" data-bs-toggle="pill" data-bs-target="#tabs-movie" role="tab" aria-controls="tabs-movie" aria-selected="true"
                            onClick={() => { dispatch(setMovieStatusAction()) }}>Movie</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a href="#tabs-profile" className="
                            nav-link block font-medium text-lg leading-tight border-x-0 border-t-0 border-b-2 border-transparent text-gray-400
                            px-6 py-3 my-2 hover:border-transparent hover:text-white focus:border-transparent
                                " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab" aria-controls="tabs-profile" aria-selected="false"
                            onClick={() => { dispatch(setTVStatusAction()) }}    >TV Show</a>
                    </li>
                </ul>
                <div className="tab-content" id="tabs-tabContent">
                    <div className="tab-pane fade show text-white active" id="tabs-movie" role="tabpanel" aria-labelledby="tabs-movie-tab">
                        <MovieList />
                        <Popular />
                        <TopRate />
                        <Hot />
                        <Upcoming />
                    </div>
                    <div className="tab-pane fade text-white" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                        Tab 2 content
                    </div>
                </div>
            </div>
        </div>
    )
}
