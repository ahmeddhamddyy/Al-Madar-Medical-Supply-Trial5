import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

// Pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        {/* Header always visible */}
        <Header />

        {/* Main content */}
        <main className="flex-grow-1 pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add more routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
