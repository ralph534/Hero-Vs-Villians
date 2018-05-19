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
      dogLikesCount: 0,
      catResult: '',
      dogResult: ''
    }

    this.handleLikeBtn = this.handleLikeBtn.bind(this)
    this.handleDisLikeBtn = this.handleDisLikeBtn.bind(this)
    this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this)
    this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this)
  }

  handleLikeBtn(event){
    let heroName = event.target.value;

    if (heroName === "Cat"){
      this.setState(function(prevState){
        return{
          catLikesCount: prevState.catLikesCount + 1,
        }
      })
    } else if (heroName === "Dog"){
      this.setState(function(prevState){
        return{
          dogLikesCount: prevState.dogLikesCount + 1
        }
      })
    }

  }


  handleDisLikeBtn(event) {
    let heroName = event.target.value;

    if (heroName === "Cat"){
      this.setState(function(prevState){
        return{
          catLikesCount: prevState.catLikesCount - 1,
        }
      })
    } else if (heroName === "Dog"){
      this.setState(function(prevState){
        return{
          dogLikesCount: prevState.dogLikesCount - 1
        }
      })
    }
    }

  handleShowWinnerBtnClick(){
    var catLikesCount = this.state.catLikesCount;
    var dogLikesCount = this.state.dogLikesCount;
    var catResult = 'TIE';
    var dogResult = 'TIE';


    if(catLikesCount > dogLikesCount){
      catResult = 'WINNER';
      dogResult = 'LOSER';
    }else if(catLikesCount < dogLikesCount){
      catResult = 'LOSER';
      dogResult = 'WINNER';
    }
    this.setState({
      catResult: catResult,
      dogResult: dogResult
    })


 }


  handleStartOverBtnClick(){
    this.setState({
        catLikesCount: 0,
        dogLikesCount: 0,
        catResult: '',
        dogResult: ''
    })
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
              heroImageUrl="https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/596c2e2d440243ae7ec9e0cb/1500261938535/?format=750w"
              likesCount={this.state.catLikesCount}
              result={this.state.catResult}
              onLikeBtnClick={this.handleLikeBtn}
              onDisLikeBtnClick={this.handleDisLikeBtn}
              />

         <HeroComponent
              heroName="Dog"
              heroImageUrl="https://www.sideshowtoy.com/wp-content/uploads/2018/04/marvel-avengers-infinity-war-thanos-sixth-scale-figure-hot-toys-feature-903429-1.jpg"
              likesCount={this.state.dogLikesCount}
              result={this.state.dogResult}
              onLikeBtnClick={this.handleLikeBtn}
              onDisLikeBtnClick={this.handleDisLikeBtn}
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
