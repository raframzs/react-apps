import React from 'react'

const SongArtist = ({ bio }) => {
    const artist = bio.artists[0];
    return (
        <div className="card" style={{'width': '30rem'}}>
            <img className="card-img-top" src={artist.strArtistThumb} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{artist.strArtist}</h5>
                <p className="card-text">{artist.strBiographyES}</p>
                <a href='{artist.strWebSite}' className="btn btn-primary">Pagina Oficial</a>
            </div>
        </div>
    );
}

export default SongArtist
