import { useEffect, useState } from "react";
import CardVideo from "../../components/CardVideo";
import VideoPlayer from "../../components/VideoPlayer";
import "./styles.css";
import { VideoProps } from "../../types/video";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";

export default function PlayerView() {
  const [video, setVideo] = useState<VideoProps>();
  const id = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/watch/${id}`);
        setVideo(response.data);
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };
    
    fetchData();
  }, [id]);

  return (
    <div id="main">
      <div className="container">
        <div className="video-player">
          <VideoPlayer />
          <div className="subtitle">
            {video?.description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla, pariatur molestias quidem maiores."}
          </div>
        </div>

        <div className="player-list">
          <CardVideo />
          <CardVideo />
          <CardVideo />
          <CardVideo />
          <CardVideo />
        </div>
      </div>
    </div>
  );
}
