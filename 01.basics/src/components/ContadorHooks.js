import React, { useState } from "react";

export default function ContadorHooks(props){

    const [contador, setContador] = useState(0);

    const add = () => setContador(contador + 1);
    const substract = () => setContador(contador - 1);

    return(
        <>
            <h2>Hooks - useState</h2>
            <nav>
                <button onClick={add}>+</button>
                <button onClick={substract}>-</button>
            </nav>
            <p>Contador de {props.titulo}</p>
            <h3>{contador}</h3>
        </>
    );
}

ContadorHooks.defaultProps = {
 titulo:"Clicks",
}