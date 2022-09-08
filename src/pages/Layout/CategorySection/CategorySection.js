import React from 'react'
import { useSelector } from 'react-redux'
import AddTrending from '../../../components/AddtitionalTrending/AddTrending'
import CategoryMovie from '../../../components/Category/CategoryMovie'
import CategoryTV from '../../../components/Category/CategoryTV'
import Search from '../../../components/Search/Search'

export default function CategorySection() {
    const { categoryStatus } = useSelector(state => state.MoviesReducer)
    console.log(categoryStatus)
    return (
        <div className="w-[15%] px-3 relative" style={{ borderLeft: "1px solid rgb(229 231 235/0.15)" }}>
            <Search />
            {categoryStatus ? <CategoryMovie /> : <CategoryTV />}
            <AddTrending />
        </div>
    )
}
