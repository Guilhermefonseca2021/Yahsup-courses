import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PlayerView from "./pages/PlayerView";
import SearchResults from "./pages/SearchResults";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<PlayerView />} />
        <Route path="/search/:value" element={<SearchResults />} />
      </Routes>
    </>
  );
}
