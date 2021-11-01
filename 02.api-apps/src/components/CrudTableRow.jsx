import React from 'react'

const CrudTableRow = ({ item, setDataToEdit, deleteData }) => {
    let { id, name, constellation } = item;
    return (
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                <button className="btn btn-warning"
                    onClick={() => setDataToEdit(item)}>Editar</button>
                <button className="btn btn-danger"
                    onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr >
    )
}

export default CrudTableRow
