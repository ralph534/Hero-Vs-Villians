import React from 'react';


var comstyle = {
  display: 'inline-block',
  marginLeft: 'auto',
  marginRight: 'auto'
};

var btnCatstyle = {
  height: '25px',
  width: '70px',
  marginTop: '10px',
  marginLeft: '5px',
  marginRight: '5px',
  borderRadius: '20px',
}

class PetComponent extends React.Component {

  constructor(props) {   ///   OR I can use the constructor
    super(props);
    this.state = {
      likesCount: 0
    }

    this.handleLikeBtn = this.handleLikeBtn.bind(this);
    this.handleDislikeBtn = this.handleDislikeBtn.bind(this);
  }



  handleLikeBtn() {
    this.setState({
      likesCount: this.state.likesCount + 1
  });
}

  handleDislikeBtn() {
      this.setState({
        likesCount: this.state.likesCount - 1
      })
    };

  render() {

    return (
      <div style={comstyle}>
         <h3>{this.props.petName} Likes: {this.state.likesCount}</h3>
         <img style={{height:'500px', width:'500px'}} src={this.props.petImageUrl} alt={"doggy" + this.props.petName}/>
         <br />
         <button style={btnCatstyle} onClick={this.handleLikeBtn}>Like</button>
         <button style={btnCatstyle} onClick={this.handleDislikeBtn}>Dislike</button>
      </div>
    )
  }
}


export default PetComponent;
