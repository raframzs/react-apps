import React, { useState } from 'react'

/* Estado inicial */
const initalForm = {
    artist: '',
    song: ''
}

const SongForm = ({ handleSearch }) => {
    /* Variable formulario */
    const [form, setForm] = useState(initalForm);

    /* Control de Cambios */
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    /* Enviar formulario */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.artist || !form.song) {
            alert('Datos Incompletos');
            return;
        }

        handleSearch(form);
        setForm(initalForm);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" name='artist' placeholder="Grupo o Artista"
                            onChange={handleChange} value={form.artist} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" name='song' placeholder="Canción"
                            onChange={handleChange} value={form.song} />
                    </div>
                    <div className="col">
                        <button className="btn btn-primary"> Buscar </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SongForm
