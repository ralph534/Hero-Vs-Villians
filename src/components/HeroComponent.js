import React from 'react';


var comstyle = {
  display: 'inline-block',
  marginLeft: '10px',
  // marginRight: 'auto'
};

var btnCatstyle = {
  height: '25px',
  width: '70px',
  marginTop: '10px',
  marginLeft: '5px',
  marginRight: '5px',
  borderRadius: '20px',
}

class HeroComponent extends React.Component {

  constructor(props) {   ///   OR I can use the constructor
    super(props);

    // this.handleLikeBtn = this.handleLikeBtn.bind(this);
    // this.handleDislikeBtn = this.handleDislikeBtn.bind(this);
  }



  // handleLikeBtn() {
    // console.log('before setState1: ' + this.state.likesCount)
    // this.setState(function(prevState) {
    //   let newState = {        /////// Creating newState //////
    //   return {
    //     likesCount: prevState.likesCount + 1
    //   }
    //
    //   })
    //   console.log('after setSTate1:' + newState.likesCount)  //// console new setState /////
    //   return newState;
    // }


    // console.log('another after:' + this.state.likesCount)


  // handleDislikeBtn() {
    // console.log('before setState2: ' + this.state.likesCount)
    // this.setState(function(prevState) {
    //   let newState = {
    //   return {
    //     likesCount: prevState.likesCount - 1
    //   }
    //   })
    //   console.log('after setSTate2:' + newState.likesCount)
    //   return newState;
    // }

  render() {

    return (
      <div style={comstyle}>
        <h3>{this.props.heroName} Likes: {this.props.likesCount}</h3>
        <img style={{height:'500px', width:'500px'}} src={this.props.heroImageUrl} alt={"doggy" + this.props.heroName}/>
        <br />
        <button style={btnCatstyle} value={this.props.heroName} onClick={this.props.onLikeBtnClick}>Like</button>
        <button style={btnCatstyle} value={this.props.heroName} onClick={this.props.onDisLikeBtnClick}>Dislike</button>
      </div>
    )
  }
}


export default HeroComponent;
