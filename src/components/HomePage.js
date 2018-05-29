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
      cat: {likesCount: 0 , result: ''},
      dog: {likesCount: 0 , result: ''}
    }


    this.handleLikeBtn = this.handleLikeBtn.bind(this)
    this.handleDisLikeBtn = this.handleDisLikeBtn.bind(this)
    this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this)
    this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this)
  }

  handleLikeBtn(event){
    let heroName = event.target.value;

    if (heroName === "Cat") {
      this.setState(function(prevState){
        return{
          cat: {likesCount: prevState.cat.likesCount + 1, result: prevState.cat.result},
        }
      })
    }else if (heroName === "Dog"){
      this.setState(function(prevState){
        return{
          dog: {likesCount: prevState.dog.likesCount + 1, result: prevState.dog.result}
        }
            })
    }

  }


  handleDisLikeBtn(event) {
    let heroName = event.target.value;

    if (heroName === "Cat") {
      this.setState(function(prevState){
        return{
          cat: {likesCount: prevState.cat.likesCount - 1, result: prevState.cat.result},
        }
      })
    }else if (heroName === "Dog"){
      this.setState(function(prevState){
        return{
          dog: {likesCount: prevState.dog.likesCount - 1, result: prevState.dog.result},

        }
            })
    }
    }

  handleShowWinnerBtnClick(){
    var catLikesCount = this.state.cat.likesCount;
    var dogLikesCount = this.state.dog.likesCount;
    var catResult = 'TIE';
    var dogResult = 'TIE';


    if(catLikesCount > dogLikesCount){
      catResult = 'WINNER';
      dogResult = 'LOSER';
    }else if(catLikesCount < dogLikesCount){
      catResult = 'LOSER';
      dogResult = 'WINNER';
    }
    this.setState(function(prevState){
      return{
        cat: {likesCount: prevState.cat.likesCount, result: catResult},
        dog: {likesCount: prevState.dog.likesCount, result: dogResult}
      }
    })
  }


  handleStartOverBtnClick(){
    this.setState({
        cat: {likesCount: 0, result: ''},
        dog: {likesCount: 0, result: ''}
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
              likesCount={this.state.cat.likesCount}
              result={this.state.cat.result}
              onLikeBtnClick={this.handleLikeBtn}
              onDisLikeBtnClick={this.handleDisLikeBtn}
              />

         <HeroComponent
              heroName="Dog"
              heroImageUrl="https://www.sideshowtoy.com/wp-content/uploads/2018/04/marvel-avengers-infinity-war-thanos-sixth-scale-figure-hot-toys-feature-903429-1.jpg"
              likesCount={this.state.dog.likesCount}
              result={this.state.dog.result}
              onLikeBtnClick={this.handleLikeBtn}
              onDisLikeBtnClick={this.handleDisLikeBtn}
              />
          </div>
         <div style={{textAlign: 'center'}}>
           {!this.state.cat.result &&
             <button style={btnStyle} onClick={this.handleShowWinnerBtnClick}>Show Winner!!</button>}
           <button style={btnStyle} onClick={this.handleStartOverBtnClick}>Start Over!!</button>
         </div>
      </div>
    );
  }
};

export default HomePage;
