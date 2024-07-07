import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from "../components/Services";
import Footer from "../components/Footer"
import "../styles/mainpage.css";
const MainPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default MainPage;
