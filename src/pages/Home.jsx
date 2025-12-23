import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Services from '../components/Themes';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <Categories />
      <Services />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;