import React, {Component} from 'react';


function Componente(props){
    return <h2>{props.msg}</h2>;
}

/* 
Componente expresado
const Componente = (props) => <h2>{props.msg}</h2>
*/

/* 
Componente tipo clase
class Componente extends Component{

    render(){
        return <h2>{this.props.msg}</h2>;
    }

} */

export default Componente;