import React from 'react';
import HeroComponent from './HeroComponent';
import Header from './Header'
import '../Header.css';


var btnStyle ={
  marginTop: '30px',
  marginRight: '5px',
  height: '25px'
};

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      catLikesCount: 0,
      dogLikesCount: 0
    }
    this.handleLikeBtn = this.handleLikeBtn.bind(this);
    this.handleDislikeBtn = this.handleDislikeBtn.bind(this);
    this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this)
    this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this)
  }

  handleLikeBtn(event) {
    var heroName = event.target.value;
    if (heroName === 'Cat') {
      this.setState(function(prevState){
        return {
          catLikesCount: prevState.catLikesCount + 1,
          dogLikesCount: prevState.dogLikesCount
        }
      })
    } else if (heroName === 'Dog') {
      this.setState(function(prevState){
        return {
          catLikesCount: prevState.catLikesCount,
          dogLikesCount: prevState.dogLikesCount + 1
        }
      })
    }
  }


  handleDislikeBtn(event) {
    var heroName = event.target.value;
    if (heroName === 'Cat') {
      this.setState(function(prevState){
        return {
          catLikesCount : prevState.catLikesCount - 1,
          dogLikesCount : prevState.dogLikesCount
        }
      })
    } else if (heroName === 'Dog') {
      this.setState(function(prevState){
        return {
          catLikesCount : prevState.catLikesCount,
          dogLikesCount : prevState.dogLikesCount - 1
        }
      })
    }
    }

  handleShowWinnerBtnClick(){
    var catLikesCount = this.state.catLikesCount;
    var dogLikesCount = this.state.dogLikesCount;


   if (catLikesCount > dogLikesCount) {
     console.log('Cat is the winner');
   }else if (catLikesCount < dogLikesCount) {
     console.log('Dog is the winner');
   }else {
     console.log('Its a Tie');
   }
 }


  handleStartOverBtnClick(){

  }



  render() {
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
           <HeroComponent
              heroName="Cat"
              likesCount={this.state.catLikesCount}
              heroImageUrl="https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/596c2e2d440243ae7ec9e0cb/1500261938535/?format=750w"
              onLikeBtnClick = {this.handleLikeBtn}
              onDisLikeBtnClick = {this.handleDislikeBtn}
           />
         <HeroComponent
              heroName="Dog"
              likesCount={this.state.dogLikesCount}
              heroImageUrl="https://www.sideshowtoy.com/wp-content/uploads/2018/04/marvel-avengers-infinity-war-thanos-sixth-scale-figure-hot-toys-feature-903429-1.jpg"
              onLikeBtnClick = {this.handleLikeBtn}
              onDisLikeBtnClick = {this.handleDislikeBtn}
            />
         </div>
         <div style={{textAlign: 'center'}}>
           <button style={btnStyle} onClick={this.handleShowWinnerBtnClick}>Show Winner!!</button>
           <button style={btnStyle} onClick={this.handleStartOverBtnClick}>Start Over!!</button>
         </div>
      </div>
    );
  }
};

export default HomePage;
