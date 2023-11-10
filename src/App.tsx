import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Login } from './pages/UserLogin'


export default function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}
