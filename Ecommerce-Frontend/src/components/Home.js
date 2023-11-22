// Home.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HomeCover from './HomeCover';
import Slider from './Slider';


// Functional component representing the Home page
const Home = () => {
  return (
    <div>
      <Header />
      <HomeCover />
      <Slider />
     <Footer /> 
    </div>
  );
};

export default Home;
