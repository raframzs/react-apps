import React, { useState, useEffect } from "react";

function Reloj({hour}){
    return <h2>{hour}</h2>;
}

export default function RelojHooks(props){
    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        let timer;
        if(visible){
            timer = setInterval(() => {
                setHour(new Date().toLocaleTimeString());
            }, 1000);
        }else{
            clearInterval(timer);
        }
        return () => {
           //console.log('Unmounting');
           clearInterval(timer); 
        }
    }, [visible])


    return(
        <>
            <h2>Reloj Hook</h2>
            {visible && <Reloj hour={hour}/>}
            <button onClick={()=> setVisible(true) }>Start Clock</button>
            <button onClick={()=> setVisible(false) }>Stop Clock</button>
        </>
    );
}