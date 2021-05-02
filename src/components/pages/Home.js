import React from 'react';
import Cards from '../../components/Cards';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards/>
      <Footer/>
    </>
  );
}

export default Home;