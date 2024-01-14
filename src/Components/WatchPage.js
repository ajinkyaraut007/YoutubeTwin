import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeHamMenu } from "../utils/hamburgerSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

function WatchPage() {
  const [params] = useSearchParams();

  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(closeHamMenu());
  }, []);
  return (
    <div className="p-8">
      <div className="flex">
        <iframe
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + params.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullscreen
        ></iframe>

        <LiveChat />
      </div>

      <Comments />
    </div>
  );
}

export default WatchPage;
