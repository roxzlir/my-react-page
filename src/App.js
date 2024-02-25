import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cv from "./pages/Cv";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <Router>
            <div className="site-container">
                <header className="site-header">
                    <Menu />
                </header>
                <main className="site-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Cv" element={<Cv />} />
                        <Route path="/Projects" element={<Projects />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </Router>
    );
}
