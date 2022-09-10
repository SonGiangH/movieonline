import React, { Fragment, useState } from 'react'
import { IMG_URL } from '../../../utils/cofigVariables';
import avatar from '../../../assets/img/avatar.png'
import style from './TvInfo.module.css'

export default function TvInfo(props) {
    const tv = props.tv
    const tvCredit = props.credit
    const reviews = props.reviews

    const [isReadingMore, setIsReadingMore] = useState(false);

    //function create tabs
    let tabs = document.querySelectorAll(".tab")
    let indicator = document.querySelector(".indicator")
    let panels = document.querySelectorAll(".tab-panel")

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            let tabTarget = tab.getAttribute("aria-controls")

            indicator.style.width = tab.getBoundingClientRect().width + 'px'
            indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px'

            panels.forEach(panel => {
                let panelId = panel.getAttribute("id")
                if (tabTarget === panelId) {
                    panel.classList.remove("invisible", "opacity-0")
                    panel.classList.add("visible", "opacity-100")
                } else {
                    panel.classList.add("invisible", "opacity-0")
                }
            })
        })
    })

    return (
        <Fragment>
            <div role="tablist" aria-label="tabs" className="relative w-max mx-[50%] h-12 grid grid-cols-3 items-center px-[3px] bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition">
                <div className={`${style['indicator']} indicator`} />
                <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" tabIndex={0} className="relative block h-10 px-6 tab">
                    <span className="text-gray-100">Overall</span>
                </button>
                <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabIndex={-1} className="relative block h-10 px-6 tab ">
                    <span className="text-gray-100">Cast</span>
                </button>
                <button role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3" tabIndex={-1} className="relative block h-10 px-6 tab ">
                    <span className="text-gray-100">Reviews</span>
                </button>
            </div>
            <div className="mt-6 relative">
                {/* Overall */}
                <div role="tabpanel" id="panel-1" className="tab-panel p-6 transition duration-300 ml-14">
                    <h2 className="text-2xl italic text-center text-white">{tv.tagline}</h2>
                    <div className="story__section mb-8">
                        <h1 className="uppercase mb-3 font-medium text-white">Story</h1>
                        <p className="mt-4 text-gray-400">{tv.overview}</p>
                    </div>
                    <div className="details__section">
                        <h3 className="uppercase mb-3 text-white font-medium">Details</h3>
                        <p className="mt-4 text-gray-400"><span>Status: </span>{tv.status}</p>
                        <p className="mt-4 text-gray-400"><span>Release date: </span>{tv.release_date}</p>
                        <p className="mt-4 text-gray-400"><span>Spoken Language:</span>{tv.spoken_languages?.map((item, index) => {
                            return (
                                <Fragment key={index}> {item.name} </Fragment>
                            )
                        })}
                        </p>
                    </div>
                </div>
                {/* Cast */}
                <div role="tabpanel" id="panel-2" className="absolute top-0 left-10 invisible opacity-0 tab-panel p-6 transition duration-300">
                    <div className="grid grid-cols-2 gap-x-60 gap-y-8">
                        {tvCredit.cast?.filter((item, index) => index < 8).map((actor, index) => {
                            return (
                                <div className='flex items-center gap-3' key={index}>
                                    <div>
                                        <img src={`${IMG_URL}w185${actor.profile_path}`} className="w-[65px] h-[65px] rounded-full overflow-hidden object-cover" alt="" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium" style={{ color: 'rgb(81, 121, 255,1)' }} key={index}>{actor.name}</p>
                                        <p className="text-white"><span className="italic">as </span>{actor.character}</p>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
                {/* Reviews */}
                <div role="tabpanel" id="panel-3" className="absolute top-0 left-10 invisible opacity-0 tab-panel p-6 transition duration-300 w-[98%]">
                    <div className="flex flex-col max-h-[400px] overflow-y-auto pr-4">
                        {reviews?.map((author, index) => {
                            return (
                                <div className="flex justify-between mb-10" key={index}>
                                    <div className="img__container w-[60px] h-[60px] rounded-full overflow-hidden">
                                        <img src={avatar} alt="avatar" />
                                    </div>
                                    <div className="review__details w-[90%] ml-8">
                                        <p className="text-white font-medium text-xl">{author.author}</p>
                                        <div className="text-gray-400">
                                            {isReadingMore && <div>{author.content}
                                                <button className="italic hover:text-white" onClick={() => setIsReadingMore((prev) => !prev)}>
                                                    &nbsp; Show less
                                                </button>
                                            </div>}
                                            {!isReadingMore && <div>{author?.content.substring(0, 150)}...
                                                <button className="italic hover:text-white" onClick={() => setIsReadingMore((prev) => !prev)}>
                                                    See more
                                                </button>
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
