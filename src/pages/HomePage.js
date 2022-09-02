import React from 'react'
import AddTrending from '../components/AddtitionalTrending/AddTrending'
import CategoryMovie from '../components/Category/CategoryMovie'
import Header from '../components/Header'
import Hot from '../components/Hot/Hot'
import MovieList from '../components/MovieList/MovieList'
import Popular from '../components/Popular/Popular'
import Search from '../components/Search/Search'
import TopRate from '../components/TopRate/TopRate'
import Upcoming from '../components/Upcoming/Upcoming'


export default function HomePage() {
    return (
        <div className="min-h-screen max-w-full flex" style={{ backgroundColor: "rgb(28 28 30/1)" }}>
            <div className="w-[12%] mr-auto">
                <Header />
            </div>
            <div className="w-[1261px] mx-auto">
                <MovieList />
                <Popular />
                <TopRate />
                <Hot />
                <Upcoming />
            </div>
            <div className="w-[15%] px-3 relative" style={{ borderLeft: "1px solid rgb(229 231 235/0.15)" }}>
                <Search />
                <CategoryMovie />
                <AddTrending />
            </div>
        </div>
    )
}
