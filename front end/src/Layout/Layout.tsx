import Header from "../components/Header";
import Router from "../routes";
import './layout.css'

export default function Layout() {
  return (
    <div className="layout">
        <Header />
        <Router />
    </div>
  )
}
