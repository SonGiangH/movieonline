import React from 'react'

export default function Search() {
    return (
        <div className="absolute z-30 shadow-md left-3 right-3 top-7 rounded-full" style={{ backgroundColor: "rgb(51 51 53/1)" }}>
            <form className="relative">
                <button className="text-2xl text-gray-400 absolute top-1/2 -translate-y-1/2 left-5"><i className="bx bx-search"></i></button>
                <input type="text" placeholder='Search'
                    className="w-full pl-14 pr-7 outline-none bg-transparent py-3 placeholder-gray-500 text-white" />
            </form>
        </div>
    )
}
