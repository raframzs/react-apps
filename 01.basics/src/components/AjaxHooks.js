import React, { useState, useEffect } from 'react';

function Pokemon({ avatar, name }) {
    return (
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default function AjaxHooks() {

    const [pokemons, setPokemons] = useState([]);

    /*     useEffect(() => {
            let URL = "https://pokeapi.co/api/v2/pokemon/";
            fetch(URL)
                .then((res) => res.json())
                .then((json) => {
                    // Fetch the pokemons
                    // Fetch de las imagenes.
                    json.results.forEach((element) => {
                        fetch(element.url)
                            .then((res) => res.json())
                            .then((json) => {
                                let pokemon = {
                                    id: json.id,
                                    name: json.name,
                                    avatar: json.sprites.front_default,
                                };
                                setPokemons((pokemons)=>[...pokemons, pokemon]);
                            });
                    });
                });
            return () => {
            }
        }, []); */

    useEffect(() => {
        const getPokemons = async (url) => {
            let answ = await fetch(url),
                json = await answ.json();
            json.results.forEach(async (element) => {
                let answ = await fetch(element.url);
                json = await answ.json();
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                };
                setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        }
        getPokemons("https://pokeapi.co/api/v2/pokemon/");
    }, []);

    return (
        <>
            <h2>Peticiones Asincronas en Componentes de clase</h2>
            {pokemons.length === 0 ? <h3>Loading</h3>
                : (
                    pokemons.map((el) => (
                        <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                    ))
                )}
        </>
    );
}