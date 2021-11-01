import React, { useState, useEffect } from "react";

/* export default function Formularios() {

    const [name, setName] = useState("");
    const [sabor, setSabor] = useState("");
    const [lenguaje, setLenguaje] = useState("");
    const [terms, setTerms] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Sended Form");
    }

    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
               input de tipo text 
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' id='name' value={name}
                    onChange={(e) => setName(e.target.value)} />

               /* Opciones con Radio Button 
                <p>Select a Option</p>
                Opción Fresa 
                <input type="radio" name="sabor" id="fresa" value="fresa"
                    onChange={(e) => setSabor(e.target.value)} defaultChecked />
                <label htmlFor="fresa">Fresa</label>

                 Opción Mora 
                <input type="radio" name="sabor" id="mora" value="mora"
                    onChange={(e) => setSabor(e.target.value)} />
                <label htmlFor="mora">Mora</label>

                 Opción Piña 
                <input type="radio" name="sabor" id="pina" value="pina"
                    onChange={(e) => setSabor(e.target.value)} />
                <label htmlFor="pina">Piña</label>

                Opción Uva 
                <input type="radio" name="sabor" id="uva" value="uva"
                    onChange={(e) => setSabor(e.target.value)} />
                <label htmlFor="uva">Uva</label>

                Opciones con Selects. 
                <p>Select you program lenguaje</p>
                <select name="lenguaje" id="lenguaje" onChange={(e) => setLenguaje(e.target.value)}>
                    <option value="js">JavaScript</option>
                    <option value="java">Java</option>
                    <option value="c">C++</option>
                    <option value="ruby">Ruby</option>
                    <option value="python">Python</option>
                </select>
                <br/>
                 Checkbox 
                <label htmlFor="terms">Acepta Terminos & Condiciones</label>
                <input type="checkbox" name="terms" id="terms"
                    onChange={(e) => setTerms(e.target.checked)} />
                <br/>
                <input type="submit"/>
            </form>
        </>
    );
} */

export default function Formularios() {

    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleChecked = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        });
    };

    return (
        <>
            <h2>Formularios</h2>
            <form>
                {/* input de tipo text */}
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' id='name' value={form.name}
                    onChange={handleChange} />

                { /* Opciones con Radio Button */}
                <p>Select a Option</p>
                { /* Opción Fresa */}
                <input type="radio" name="sabor" id="fresa" value="fresa"
                    onChange={handleChange} defaultChecked />
                <label htmlFor="fresa">Fresa</label>

                { /* Opción Mora */}
                <input type="radio" name="sabor" id="mora" value="mora"
                    onChange={handleChange} />
                <label htmlFor="mora">Mora</label>

                { /* Opción Piña */}
                <input type="radio" name="sabor" id="pina" value="pina"
                    onChange={handleChange} />
                <label htmlFor="pina">Piña</label>

                { /* Opción Uva */}
                <input type="radio" name="sabor" id="uva" value="uva"
                    onChange={handleChange} />
                <label htmlFor="uva">Uva</label>

                { /* Opciones con Selects. */}
                <p>Select you program lenguaje</p>
                <select name="lenguaje" id="lenguaje"
                    onChange={handleChange}>
                    <option value="js">JavaScript</option>
                    <option value="java">Java</option>
                    <option value="c">C++</option>
                    <option value="ruby">Ruby</option>
                    <option value="python">Python</option>
                </select>
                <br />
                { /* Checkbox */}
                <label htmlFor="terms">Acepta Terminos & Condiciones</label>
                <input type="checkbox" name="terms" id="terms"
                    onChange={handleChecked} />
                <br />
                <input type="submit" />
            </form>
        </>
    );
}