import React, { useState, useEffect } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';
import { utilHttp } from './util/utilHttp';

const CrudApi = () => {
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let URL = 'http://localhost:5000/santos';
    let api = utilHttp();
    useEffect(() => {
        setLoading(true);
        api.GET(URL).then((res) => {
            //console.log(res);
            if (!res.err) {
                setError(null);
                setDb(res);
            } else {
                setError(res);
                setDb(null);
            }
            setLoading(false);
        });
    }, [URL])

    const createData = (data) => {
        data.id = Date.now();
        let options = {
            body: data,
            headers: {
                'content-type': 'application/json'
            }
        };
        api.POST(URL, options).then((res) => {
            if (!res.err)
                setDb([...db, res]);
            else
                setError(res);

        });
    }
    const updateData = (data) => {
        let endpoint = `${URL}/${data.id}`;
        let options = {
            body: data,
            headers: {
                'content-type': 'application/json'
            }
        };
        api.PUT(endpoint, options).then((res) => {
            if (!res.err) {
                let newData = db.map((el) => el.id === data.id ? data : el);
                setDb(newData);
            }
            else
                setError(res);

        });

    }


    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Desea eliminar este registro ${id}?`);
        if (isDelete) {
            let endpoint = `${URL}/${id}`;
            let options = {
                headers: {
                    'content-type': 'application/json'
                }
            }
            api.DELETE(endpoint, options).then((res) => {
                if (!res.err) {
                    let newData = db.filter(el => el.id !== id);
                    setDb(newData)
                }
                else
                    setError(res);
            });
        } else return;

    }

    return (
        <div className='mt-5'>
            <h2 className='display-4'>CRUD JSON Server</h2>
            <hr />
            <div className="row">
                <div className="col">
                    <CrudForm createData={createData} updateData={updateData}
                        dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
                </div>
                {loading &&
                    <div className="col">
                        <Loader />
                    </div>
                }
                {error &&
                    <div className="col">
                        <Message msg={error} />
                    </div>
                }
                {db &&
                    <div className="col">
                        <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
                    </div>
                }
            </div>
        </div>
    )
}

export default CrudApi
