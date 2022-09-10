//Movie
import React from 'react'
import Hot from '../../../components/Hot/Hot'
import MovieList from '../../../components/MovieList/MovieList'
import Popular from '../../../components/Popular/Popular'
import TopRate from '../../../components/TopRate/TopRate'
import Upcoming from '../../../components/Upcoming/Upcoming'
import 'tw-elements';

//TV
import TVBanner from '../../../components/TV/TVBanner/TVBanner'

//custom css
import './MainContent.css'
import { useDispatch, useSelector } from 'react-redux'
import { setMovieStatusAction } from '../../../redux/action/setMovieStatusAction'
import { setTVStatusAction } from '../../../redux/action/setTVStatusAction'
import PopularTV from '../../../components/TV/PopularTV/PopularTV'
import TopRateTV from '../../../components/TV/TopRateTV/TopRateTV'
import HotTv from '../../../components/TV/HotTv/HotTv'
import UpcomingTv from '../../../components/TV/UpcomingTv/UpcomingTv'




export default function MainContent() {
    const { categoryStatus } = useSelector(state => state.MoviesReducer)

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
                        <a href="#tabs-tv" className="
                            nav-link block font-medium text-lg leading-tight border-x-0 border-t-0 border-b-2 border-transparent text-gray-400
                            px-6 py-3 my-2 hover:border-transparent hover:text-white focus:border-transparent
                                " id="tabs-tv-tab" data-bs-toggle="pill" data-bs-target="#tabs-tv" role="tab" aria-controls="tabs-tv" aria-selected="false"
                            onClick={() => { dispatch(setTVStatusAction()) }}    >TV Show</a>
                    </li>
                </ul>
                <div className="tab-content" id="tabs-tabContent">
                    <div className="tab-pane fade show text-white active" id="tabs-movie" role="tabpanel" aria-labelledby="tabs-movie-tab">
                        <MovieList />
                        {categoryStatus ? <Popular /> : <PopularTV />}
                        {categoryStatus ? <TopRate /> : <TopRateTV />}
                        {categoryStatus ? <Hot /> : <HotTv />}
                        {categoryStatus ? <Upcoming /> : <UpcomingTv />}
                    </div>
                    <div className="tab-pane fade text-white" id="tabs-tv" role="tabpanel" aria-labelledby="tabs-tv-tab">
                        <TVBanner />
                        {categoryStatus ? <Popular /> : <PopularTV />}
                        {categoryStatus ? <TopRate /> : <TopRateTV />}
                        {categoryStatus ? <Hot /> : <HotTv />}
                        {categoryStatus ? <Upcoming /> : <UpcomingTv />}
                    </div>
                </div>
            </div>
        </div>
    )
}
