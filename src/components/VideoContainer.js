import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "./constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import WatchPage from "./WatchPage";
import Head from "./Head";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      getVideos();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap cursor-pointer">
      {videos.map((video) => (
        <Link key={video?.id} to={"/watch?v=" + video?.id}>
          <VideoCard info={video || {}} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
