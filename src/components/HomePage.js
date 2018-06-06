import React from 'react';
import axios from 'axios';
import HeroComponent from './HeroComponent';
import Header from './Header'
import '../Header.css';
import path from 'path';
import {random} from 'lodash';



let heros = [path.resolve('./heros/hero(1).jpg'), path.resolve('./heros/hero(2).jpg'), path.resolve('./heros/hero(3).png'), path.resolve('./heros/hero(4).jpg')];
let villains = [path.resolve('./heros/hero(1).jpg'), path.resolve('./heros/hero(2).jpg'), path.resolve('./heros/hero(3).jpg'), path.resolve('./heros/hero(4).jpg')];


var btnStyle ={
  marginTop: '30px',
  marginRight: '5px',
  height: '25px'
};

// var API_KEY = '123456789';
//
// var CAT_URL = 'http://localhost:63000/cat/?api_key=' + API_KEY;
// var DOG_URL = 'http://localhost:63000/dog/?api_key=' + API_KEY;

class HomePage extends React.Component{

  constructor(props){
    // const images = importAll(require.context('../public/heros', false, /\.(png|jpe?g|svg)$/));
    super(props);
    this.state = {
      cat: {likesCount: 0 , result: '', imageUrl: villains[random(0,3)]},
      dog: {likesCount: 0 , result: '', imageUrl: heros[random(0,3)]},
      images: {heros: heros, villains: villains}
    }


    this.handleLikeBtn = this.handleLikeBtn.bind(this)
    this.handleDisLikeBtn = this.handleDisLikeBtn.bind(this)
    this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this)
    this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this)
  }


  // componentDidMount(){
  //   this.fetchImages();
  // }
  //
  // fetchCatImage(){
  //   axios.get(CAT_URL)
  //        .then(function(resp){
  //       var imageUrl = resp.data.imageUrl;
  //
  //         this.setState(function(prevState){
  //           return{
  //             cat: {likesCount: prevState.cat.likesCount, result: prevState.cat.result, imageUrl: imageUrl}
  //           }
  //         })
  //       }.bind(this))
  // }
  //
  // fetchDogImage(){
  //   axios.get(DOG_URL)
  //        .then(function(resp){
  //       var imageUrl = resp.data.imageUrl;
  //
  //         this.setState(function(prevState){
  //           return{
  //             dog: {likesCount: prevState.dog.likesCount, result: prevState.dog.result, imageUrl: imageUrl}
  //           }
  //         })
  //       }.bind(this))
  // }
  // fetchImages(){
  //   this.fetchCatImage();
  //   this.fetchDogImage();
  // }

  handleLikeBtn(event){
    // this.setState(function(prevState) {
    //   return {
    //     dog: {likesCount: prevState.dog.likesCount + 1, result: prevState.dog.result, imageUrl: this.state.images.heros[random(0,3)]}
    //   }
    // })
    // function importAll(r) {
    // return r.keys().map(r);

  // const images = importAll(require.context('../public/heros', false, /\.(png|jpe?g|svg)$/));



    let heroName = event.target.value;
    if (heroName === "Cat") {
      this.setState(function(prevState){
        return{
          cat: {likesCount: prevState.cat.likesCount + 1, result: prevState.cat.result, imageUrl: this.state.images.villains[random(0,3)]}

        }
      })
    }else if (heroName === "Dog"){
      this.setState(function(prevState){
        return{
          dog: {likesCount: prevState.dog.likesCount + 1, result: prevState.dog.result, imageUrl: this.state.images.heros[random(0,3)]}
        }
            })
    }

  }


  handleDisLikeBtn(event) {
    // this.fetchImages();
    let heroName = event.target.value;

    if (heroName === "Cat") {
      this.setState(function(prevState){
        return{
          cat: {likesCount: prevState.cat.likesCount - 1, result: prevState.cat.result, imageUrl: this.state.images.villains[random(0,3)]}
        }
      })
    }else if (heroName === "Dog"){
      this.setState(function(prevState){
        return{
          dog: {likesCount: prevState.dog.likesCount - 1, result: prevState.dog.result, imageUrl: this.state.images.heros[random(0,3)]}

        }
            })
    }
    }

  handleShowWinnerBtnClick(){
    // this.fetchImages();
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
        cat: {likesCount: prevState.cat.likesCount, result: catResult, imageUrl: prevState.cat.imageUrl},
        dog: {likesCount: prevState.dog.likesCount, result: dogResult, imageUrl: prevState.dog.imageUrl}
      }
    })
  }


  handleStartOverBtnClick(){
    this.setState({
      cat: {likesCount: 0 , result: '', imageUrl: villains[random(0,3)]},
      dog: {likesCount: 0 , result: '', imageUrl: heros[random(0,3)]},
      images: {heros: heros, villains: villains}
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
              heroImageUrl={this.state.cat.imageUrl}
              likesCount={this.state.cat.likesCount}
              result={this.state.cat.result}
              onLikeBtnClick={this.handleLikeBtn}
              onDisLikeBtnClick={this.handleDisLikeBtn}
              />

         <HeroComponent
              heroName="Dog"
              heroImageUrl={this.state.dog.imageUrl}
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
