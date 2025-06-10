import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Project from "./pages/Project"
import Heroimg from "./components/Heroimg"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <BrowserRouter>
      <main>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </main>
    </BrowserRouter>
  )
}

export default App
