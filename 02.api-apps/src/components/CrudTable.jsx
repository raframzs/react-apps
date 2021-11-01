import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
    return (
        <div>
            <table className="table table-hover mb-5">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Constelación</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((e) => <CrudTableRow key={e.id} item={e}
                            setDataToEdit={setDataToEdit} deleteData={deleteData} />)
                    ) : (
                        <tr><td colSpan='3'>Sin Datos</td></tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable
