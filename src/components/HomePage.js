import React from 'react';
import PetComponent from './PetComponent';
import Header from './Header'
import '../Header.css';




var HomePage = function(){



  return (
    <div>
       <Header />
       <h1 className="logo"><span><img src="bitcoin-cryptocurrency-big-icon.png" alt="bitcoin"></img></span>
       <span>I</span>
       <span>T</span>
       <span>C</span>
       <span>A</span>
       <span>S</span>
       <span>I</span>
       <span>N</span>
       <span>O</span></h1>
       <div style={{marginTop: '10px',textAlign: 'center'}}>
         <PetComponent
            petName="Cat"
            petImageUrl="https://henricohumane.org/wp-content/uploads/2016/03/shutterstock_352176329-1024x769.jpg"
         />
         <PetComponent
            petName="Dog"
            petImageUrl="https://www.cheatsheet.com/wp-content/uploads/2017/10/chow-chow-puppy.jpg"
          />
       </div>
    </div>
  );
};

export default HomePage;
