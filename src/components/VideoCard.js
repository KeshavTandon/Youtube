import React, { memo } from 'react'

const VideoCard =memo(({ info }) => {
    const {channelTitle,title,thumbnails}=info?.snippet || {};
    const {statistics}=info;
  return (
    <div className='p-2 m-2 w-60 shadow-lg cursor-pointer hover:bg-slate-100'>
        <img className="rounded-lg" alt="thumbnail" src={thumbnails?.medium?.url}/>
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewCount} views</li>
        </ul>
    </div>
  )
})

export default VideoCard;