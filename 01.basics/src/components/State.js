import React, {Component} from "react";

function SonState(props){
    return(
        <div>
            <h3>{props.sonCounter}</h3>
        </div>
    );
}

export default class State extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            counter : 0,
        };

        /*setInterval(()=>{
            this.setState({
                counter: this.state.counter + 1
            });
        }, 1000);*/

    }

    render(){
        return(
            <div>
                <h2>The State</h2>
                <p>{this.state.counter}</p>
                <SonState sonCounter={this.state.counter}/>
            </div>
        );
    }
}