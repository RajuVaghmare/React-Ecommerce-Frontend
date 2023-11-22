import React from 'react';
import homeImg from '../Images/homebg.jpg';
import  homelogo from '../Images/homelogo.png';
import './Styles/Home.css'; // Import styles

// Functional component representing the cover section of the Home page
const HomeCover = () => {
    

  return (
    
    <div className="home-cover">
      <div className="background-image" style={{ backgroundImage: `url(${homeImg})` }}>
        <img src={homelogo} alt="logo of website" id="logohomepage" />
        <p className="text-center" id="brandmoto">Clothes that talk on behalf of you. Something for every occasion.</p>
      </div>
    </div>



  );
};

export default HomeCover;


