import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDB = [
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegaso",
    },
    {
        id: 2,
        name: "Shiryu",
        constellation: "Dragón",
    },
    {
        id: 3,
        name: "Hyoga",
        constellation: "Cisne",
    },
    {
        id: 4,
        name: "Shun",
        constellation: "Andrómeda",
    },
    {
        id: 5,
        name: "Ikki",
        constellation: "Fénix",
    }
];

const CrudApp = () => {
    const [db, setDb] = useState(initialDB);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        setDb([...db, data]);
    }
    const updateData = (data) => {
        let newData = db.map((el) => el.id === data.id ? data : el);
        setDb(newData);
    }
    const deleteData = (id) => {
        let isDelete = window.confirm('¿Desea eliminar este registro?');
        if (isDelete) {
            let newData = db.filter(el => el.id !== id);
            setDb(newData)
        } else return;

    }

    return (
        <div className='mt-5'>
            <h2 className='display-4'>CRUD Array Object</h2>
            <hr />
            <div className="row">
                <div className="col">
                    <CrudForm createData={createData} updateData={updateData}
                        dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
                </div>
                <div className="col">
                    <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
                </div>
            </div>
        </div>
    )
}

export default CrudApp
