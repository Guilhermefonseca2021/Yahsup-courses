import Carroussel from "../../components/Carroussel";
import Header from "../../components/Header";
import "./styles.css";
import CardVideo from "../../components/CardVideo";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="carousel">
        <Carroussel />
      </div>
      <div className="trending">
        <h2>Top trending</h2>
      </div>
      <div className="content-box">
        <CardVideo />
      </div>
    </div>
  );
}
