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


var HeroComponent = function(props) {
  var result = null;
  var disabled = false;

  if (props.result !== ''){
  var resultStyle = null;
    if (props.result === 'LOSER'){
      resultStyle = { color: 'red'};
    }else {
      resultStyle = { color: 'green'}
    }
    result = <h2 style={resultStyle}>{props.result}</h2>
    disabled = true;
  }
  return (
    <div style={comstyle}>
      {result}
      <h3>{props.heroName} Likes: {props.likesCount}</h3>
      <img style={{height:'500px', width:'500px'}} src={props.heroImageUrl} alt={"doggy" + props.heroName}/>
      <br />
      <button style={btnCatstyle} value={props.heroName} disabled={disabled} onClick={props.onLikeBtnClick}>Like</button>
      <button style={btnCatstyle} value={props.heroName} disabled={disabled} onClick={props.onDisLikeBtnClick}>Dislike</button>
    </div>
  )
}



export default HeroComponent;
