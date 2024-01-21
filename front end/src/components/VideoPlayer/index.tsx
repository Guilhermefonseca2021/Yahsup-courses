import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { VideoProps } from "../../types/video";

export default function VideoPlayer({id, url}: VideoProps) {
  const idVideo = useParams()
  console.log(idVideo)

  return (
    <div key={id}>
      <ReactPlayer
        light={true}
        controls={true}
        progressInterval={1000}
        url={url || "https://www.youtube.com/watch?v=LXb3EKWsInQ"}
      />
    </div>
  );
}