import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url) => {
            try {
                let answ = await fetch(url);
                if (!answ.ok) {
                    throw {
                        err: true,
                        status: answ.status,
                        statusText: !answ.statusText ? 'Ocurrio un error' : answ.statusText
                    }
                }
                let data = await answ.json();
                setIsPending(false);
                setData(data);
                setError({ err: false });
            } catch (err) {
                setIsPending(true);
                setError({ err: true });
            }
        }
        getData(url);
    }, [url])

    return {
        data, isPending, error
    }

}