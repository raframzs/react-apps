import React, { useState, useEffect } from 'react'
import Loader from './Loader';
import SongDetail from './SongDetail';
import SongForm from './SongForm';
import { utilHttp } from './util/utilHttp';

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyrics, setLyrics] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = (data) => {
        setSearch(data);
    }

    useEffect(() => {
        if (search === null) return;

        const fetchData = async () => {
            const { artist, song } = search;
            let URL_ARTIST = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
            let URL_LYRICS = `https://api.lyrics.ovh/v1/${artist}/${song}`;

            //console.log(URL_ARTIST, URL_LYRICS);
            setLoading(true);

            const [resArtist, resSong] = await Promise.all([
                utilHttp().GET(URL_ARTIST),
                utilHttp().GET(URL_LYRICS),
            ]);

            setBio(resArtist);
            setLyrics(resSong);
            setLoading(false);
        };

        fetchData();

    }, [search])

    return (
        <div>
            <h2>SongSearch</h2>
            {loading && <Loader />}
            <SongForm handleSearch={handleSearch} />
            <hr />
            { (bio && lyrics) && <SongDetail search={search} lyrics={lyrics} bio={bio} />}
        </div>
    )
}

export default SongSearch
