import react, { Component } from "react";

class Reloj extends Component{
  constructor(props){
    super(props);
  }

  componentWillUnmount(){
    //console.log(3, 'El componente ha sido eliminado del DOM');
  }

  render(){
    return(<h3>{this.props.time}</h3>)
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super();
    //console.log(0, 'Componente inicializado, aún no esta en el DOM');

    this.state = {
        time: new Date().toLocaleTimeString(),
        visible: false,
    }

    this.temp = null;

  }

  componentDidMount(){
    //console.log(1, 'El componente ya se encuentra en el DOM');
  }

  componentDidUpdate(){
    //console.log(2, 'El estado (props) del componente han cambiado');
  }

  tictac = ()=>{
    this.temp = setInterval(()=>{
      this.setState({
        time: new Date().toLocaleTimeString(),
      })
    }, 1000);
  };

  start =()=>{
    this.tictac();
    this.setState({
      visible: true,
    });
  };

  stop =()=>{
    clearInterval(this.temp);
    this.setState({
      visible: false,
    });
  };

  render() {
      //console.log(4, 'El componente se dibuja o redibuja.')
    return (
      <>
        <h2>Ciclo de Vida de los Componentes</h2>
        {this.state.visible && <Reloj time={this.state.time}/>}
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </>
    );
  }
}
