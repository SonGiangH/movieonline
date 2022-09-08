import React from 'react'
import Header from '../components/Header'

import CategorySection from './Layout/CategorySection/CategorySection'
import MainContent from './Layout/MainContent/MainContent'


export default function HomePage() {
    return (
        <div className="min-h-screen max-w-full flex" style={{ backgroundColor: "rgb(28 28 30/1)" }}>
            <div className="w-[12%] mr-auto">
                <Header />
            </div>
            <MainContent />
            <CategorySection />
        </div>
    )
}
