import React, { Component } from "react";

export default class Father extends Component {

  state = {
      counter:0,
  };

  plussCounter = (e) =>{
    this.setState({
        counter:this.state.counter + 1
    })
  };

  render() {
    return (
      <>
        <h2>Comunication between components</h2>
        <Son updateCounter={this.plussCounter} msg="Son #1" />
      </>
    );
  }
}

function Son(props) {
  return(
      <>
      <h3>{props.msg}</h3>
      <button onClick={props.updateCounter}>[ + ]</button>
      </>
  );
}
