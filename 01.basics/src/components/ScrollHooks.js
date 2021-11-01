import React, { useState, useEffect } from "react";

export default function ScrollHooks(){

    const [ScrollY, setScrollY] = useState(0)

    // fase de escucha continua, incluye segundo parametro
    useEffect(() => {
        const detectScroll = ()=> setScrollY(window.pageYOffset);
        window.addEventListener("scroll", detectScroll);
        return()=>{
            // Fase de Desmontaje
            window.removeEventListener("scroll", detectScroll);
        }
    }, [ScrollY]);

    // fase de Montaje
    useEffect(() => {
    }, []);

    // fase de Actualización
    useEffect(()=>{});

    return(
        <>
            <h2>Hooks - Ciclo Vida</h2>
            <p>Scroll Y Navegador {ScrollY}px</p>
        </>
    );
}