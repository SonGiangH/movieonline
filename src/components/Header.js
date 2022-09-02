import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png'


export default function Header() {
    return (
        <div className="fixed top-0 left-0 bottom-0 min-h-screen flex flex-col w-[12%] rgb(28 28 30/1) overflow-hidden"
            style={{ borderRight: "1px solid rgb(229 231 235/0.15)" }}>
            <div className="flex items-center justify-center h-20 shadow-md">
                <img src={logo} alt="logo" className="w-[80px] h-[80px]" />
            </div>
            <ul className="flex flex-col py-4">
                <li>
                    <NavLink to="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home" /></span>
                        <span className="text-sm font-medium">Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-compass" /></span>
                        <span className="text-sm font-medium">Explore</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-search" /></span>
                        <span className="text-sm font-medium">Search</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bookmark" /></span>
                        <span className="text-sm font-medium">Bookmark</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-history" /></span>
                        <span className="text-sm font-medium">History</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user" /></span>
                        <span className="text-sm font-medium">Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell" /></span>
                        <span className="text-sm font-medium">Notifications</span>
                        <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-400 hover:text-white">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out" /></span>
                        <span className="text-sm font-medium">Logout</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
