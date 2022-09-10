import React from 'react'

export default function TvMedia(props) {
    const videos = props.videos
    return (
        <div className="mt-16">
            <h2 className="text-white text-xl font-semibold uppercase">Media</h2>
            {videos?.slice(0, 2).map((video, index) => {
                return (
                    <div key={index} className="my-6">
                        <div className="relative h-0 pb-[56.25%]">
                            <iframe frameBorder={0} allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="Video trailer" width="100%" height="100%"
                                src={`https://www.youtube.com/embed/${video.key}`} className="absolute top-0 left-0 w-[100%] h-[100%]" />
                        </div>
                        <p className="mt-3 text-lg whitespace-nowrap overflow-hidden text-ellipsis text-gray-400">
                            {video.name}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}