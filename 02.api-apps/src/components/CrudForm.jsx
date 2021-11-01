import React, { useState, useEffect } from 'react';
{/* initial form value */ }
const initialForm = {
    name: '',
    constellation: '',
    id: null
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {

    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if(dataToEdit)
            setForm(dataToEdit);
        else
            setForm(initialForm);
    }, [dataToEdit])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.constellation) {
            alert('Datos incompletos');
            return;
        }

        if (form.id === null)
            createData(form);
        else
            updateData(form);

        handleClear();

    };

    const handleClear = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    };

    return (
        <div className='mb-3'>
            {dataToEdit ? (
                <h3 className="text-warning">Editando</h3>
            ) : (
                <h3 className="text-success">Agregando</h3>
            )}
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <input type="text" className='form-control mb-3' name="name" placeholder='Nombre'
                            value={form.name} onChange={handleChange} />
                    </div>
                    <div className="col">
                        <input type="text" className='form-control mb-3' name="constellation" placeholder='Constelación'
                            value={form.constellation} onChange={handleChange} />
                    </div>
                </div>
                <input type="submit" className='form-control mb-3 btn btn-success' value='Enviar' />
                <input type="reset" className='form-control mb-3 btn btn-dark' value="Limpiar" onClick={handleClear} />
            </form>
        </div>
    )
}

export default CrudForm
