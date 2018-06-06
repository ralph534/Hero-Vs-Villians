import React from 'react';
import {render} from 'react-dom';
import '../Header.css';



class Header extends React.Component {


  render() {
    return(
      <div className='header'>
        <div className='imagine'>
          <img src="https://st3.depositphotos.com/1995365/17660/v/1600/depositphotos_176602734-stock-illustration-bitcoin-logo-in-3d-view.jpg"/>
        </div>
       <div className="icons">
         <ul>
           <a href="#"><li><i className="fa fa-home"></i></li></a>
           <a href="#"><li><i className="fa fa-btc" aria-hidden="true"></i></li></a>
           <a href="#"><li><i className="fa fa-money" aria-hidden="true"></i></li></a>
         </ul>
       </div>
      </div>
    )
  }
}

export default Header;
