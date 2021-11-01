import React, { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

export default function HooksPersonalizados() {
    let URL = "https://pokeapi.co/api/v2/pokemon/";
    let { data, isPending, error } = useFetch(URL);
    return (
        <>
            <h2>Hooks Personalizados</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>
                <mark>{JSON.stringify(error)}</mark>
            </h3>
            <p>
                <pre>
                    <code>{JSON.stringify(data)}</code>
                </pre>
            </p>
        </>
    );
}