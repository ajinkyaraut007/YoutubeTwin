import { useEffect, useState } from "react";
import { Youtube_vdo_api } from "../Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    getYoutubeVideosFromAPI();
  }, []);

  async function getYoutubeVideosFromAPI() {
    const data = await fetch(Youtube_vdo_api);
    const json = await data.json();

    setVideos(json.items);
  }

  return (
    <div className="flex flex-wrap ">
      {videos &&
        videos.map((vdo) => {
          return (
            <Link to={"/watch?v=" + vdo.id}>
              <VideoCard key={vdo.id} videos={vdo} />
            </Link>
          );
        })}
    </div>
  );
}

export default VideoContainer;
