import React, { useState, useEffect } from 'react'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'

const SongDetail = ({ search, lyrics, bio }) => {
    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col">
                    <SongArtist bio={bio} />
                </div>
                <div className="col">
                    <SongLyric lyrics={lyrics}/>
                </div>
            </div>
        </div>
    )
}

export default SongDetail
