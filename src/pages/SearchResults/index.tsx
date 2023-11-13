import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import './styles.css'

export default function SearchResults() {
  const params = useParams();

  return (
    <>
      <Header />
      <div className="search-container">
        <p>Resultados para: <b>{params.value}</b> </p>
        <div className="search-results">
            
        </div> 
      </div>
    </>
  );
}
