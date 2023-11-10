import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import PlayerView from './pages/PlayerView'
import SearchResults from './pages/SearchResults'


export default function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<PlayerView />} />
          <Route path="/search/:value" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
