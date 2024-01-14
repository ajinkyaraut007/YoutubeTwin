import { useSearchParams } from "react-router-dom";

function VideoCard({ videos }) {
  const { snippet, statistics } = videos;

  return (
    <div className="w-96 m-4">
      <img
        alt="videoComponent"
        className="w-full"
        src={snippet.thumbnails.high.url}
      />
      <h1 className="font-bold pt-2 text-lg flex flex-wrap">{snippet.title}</h1>
      <h1>{snippet.channelTitle}</h1>
      <p className="">{statistics.viewCount} views</p>
    </div>
  );
}

export default VideoCard;
