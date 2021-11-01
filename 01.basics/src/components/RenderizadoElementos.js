import React, { Component } from "react";
import data from '../helpers/data.json';

function ListItem(props){
    return(
        <li>
            <a href={props.item.web} target='_blank' rel="noreferrer">
                {props.item.name}
            </a>
        </li>
    );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Winter", "Spring", "Summer"],
    };
  }

  render() {
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <ol>
        {this.state.seasons.map((item, index)=>(
            <li key={index}>{item}</li>
        ))}
        </ol>
        <h3>Frameworks FrontEnd</h3>
        <ul>
            {
                data.frameworks.map((dataItem)=>(
                    <ListItem key={dataItem.id} item={dataItem} />
                ))
            }
        </ul>
      </div>
    );
  }
}
