import "./styles.css";
import CardVideo from "../../components/CardVideo";
import Slider from "../../components/Carroussel";
import { useEffect, useState } from "react";
import { VideoProps } from "../../types/video";
import { api } from "../../utils/api";

export default function Home() {
  const [videos, setVideos] = useState<VideoProps[]>([]);

  useEffect(() => {
    const response = api.get(`/`).then((response) => setVideos(response.data));
    console.log(response);
  }, []);

  return (
    <div className="container">
      <div className="carousel">
        <Slider />
      </div>
      <div className="trending">
        <h2>Top trending</h2>
      </div>
      <div className="content-box">
        {videos.map((video) => {
          return (
            <CardVideo
              id={video.id}
              url={video.url}
              image={video.image}
              description={video.description}
            />
          );
        })}
      </div>
    </div>
  );
}
