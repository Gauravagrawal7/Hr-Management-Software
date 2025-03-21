import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Home from "./pages/Dashboard/Home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 overflow-x-hidden">
        {" "}
        {/* Added overflow-x-hidden */}
        <Header />
        <Tabs />
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
