import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.sum = this.sum.bind(this);
    this.abs = this.abs.bind(this);
  }

  sum(e) {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  abs(e) {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>EventosES6</h2>
        <div>
          <button onClick={this.sum}>+</button>
          <button onClick={this.abs}>-</button>
        </div>
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
}

// Properties initializer
export class EventosES7 extends Component {
  state = {
    counter: 0,
  };

  sum = (e) => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  abs = (e) => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>EventosES7</h2>
        <div>
          <button onClick={this.sum}>+</button>
          <button onClick={this.abs}>-</button>
        </div>
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
}

export class MasSobreEventos extends Component {
  handleClick = (e, msg) => {
    console.log(msg);
  };

  render() {
    return (
      <div>
        <h2>Mas Sobre Eventos</h2>
        <button
          onClick={(e) => this.handleClick(e, "message in the bottle")}
        >S A L U D A R</button>
        {/* Customized event */}
        <Button myOnClick={(e) => this.handleClick(e, "message in the bottle")}/>
      </div>
    );
  }
}

/* function Button(props){
  return(<button onClick={props.myOnClick}>Button from component</button>);
} */

/* const Button = (props) => (
  <button onClick={props.myOnClick}>Button from component</button>
); */

const Button = ({myOnClick}) => (
  <button onClick={myOnClick}>Button from component</button>
);