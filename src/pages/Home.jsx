import React from 'react';
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import Limited from './Limited';
import Services from './Services';
import Calculator from './Calculator';
import Recipes from './Recipes';
import Contact from './Contact';
import Testimonials from "../components/childComp/testimonials";
import Faq from "../components/Faq";
import Price from "../pages/Prices";
import Gallery from "../pages/Gallery"
import Footer from "../pages/Footer"

const Home = () => {
  return (
 <>
    <Navbar/>
    <Hero/>
    <Limited/>
    <Services/>
    <Calculator/>
    <Recipes/>
    <Gallery/>
    <Contact/>
    <Testimonials/>
    <Price/>
    <Faq/>
    <Footer/>
 </>
  )
}

export default Home