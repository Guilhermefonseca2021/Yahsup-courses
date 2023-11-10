import ReactPlayer from "react-player";

// Render a YouTube video player
export default function VideoPlayer() {
  return (
    <div>
      <ReactPlayer
        light={true}
        controls={true}
        progressInterval={1000}
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
      />
    </div>
  );
}