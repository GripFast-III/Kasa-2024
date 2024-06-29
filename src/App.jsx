import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import "./Styles/main.scss";
import Loader from "./Components/Loader";
import Header from "./Components/Header";
import Footer from "./Components/Footer/index";
import Home from "./Pages/Home";
import Gallery from "./Components/Gallery";
import About from "./Pages/About";
import Housing from "./Pages/Housing";
import Error from "./Pages/Error";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  useEffect(() => {
    if (!hasLoadedOnce) {
      // Display loader only the first time
      const timer = setTimeout(() => {
        setLoading(false);
        setHasLoadedOnce(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasLoadedOnce]);

  if (loading && !hasLoadedOnce) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:housingId" element={<Housing />} />
        <Route path="*" element={<Error />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
