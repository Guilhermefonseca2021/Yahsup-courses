import Carroussel from "../../components/Carroussel";
import Header from "../../components/Header";
import Video from "../../components/Video";
import "./styles.css";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="carousel">
        <Carroussel />
      </div>
      <div className="content-box">
        <Video />
      </div>
    </div>
  );
}
