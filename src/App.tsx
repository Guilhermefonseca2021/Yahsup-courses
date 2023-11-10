import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PlayerView from './pages/PlayerView'


export default function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<PlayerView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
