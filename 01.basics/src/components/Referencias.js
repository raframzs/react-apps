import React, {createRef, useRef} from "react";

export default function Referencias() {

    let refMenu = useRef(), 
    refMenuBtn = useRef();

    const handleToggleMenu = (e) =>{
    /*     const $menu = document.getElementById("menu");
        if(e.target.textContent === 'Menu'){
            e.target.textContent = 'Cerrar';
            $menu.style.display = 'block';
        }else{
            e.target.textContent = 'Menu';
            $menu.style.display = 'none';
        } */


        if(refMenuBtn.current.textContent === 'Menu'){
            refMenuBtn.current.textContent = 'Cerrar';
            refMenu.current.style.display = 'block';
        }else{
            refMenuBtn.current.textContent = 'Menu';
            refMenu.current.style.display = 'none';
        }
    };

    return (
        <>
            <h2></h2>
            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
            <nav id="menu" ref={refMenu} style={{display:'none'}}>
                <a href="#">Sección 1</a><br/>
                <a href="#">Sección 2</a><br/>
                <a href="#">Sección 3</a><br/>
                <a href="#">Sección 4</a><br/>
                <a href="#">Sección 5</a><br/>
                <br />
            </nav>
        </>
    );
}
