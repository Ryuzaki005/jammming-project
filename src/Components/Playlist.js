import React from "react";

function PlayList({ playlist, playlistName, setPlaylistName, removeFromPlaylist, savePlaylist, clearPlaylist }){
    return(<>
        <div className="results-container">
                    {/* <h1>Titre de la playlist</h1> */}
                    <input 
                        type="text"
                        className="playlist-title-input"
                        value={playlistName}
                        onChange={(e) => setPlaylistName(e.target.value)}
                    />
                    <ul>
                        {playlist.map((song) => (
                            <li key={song.trackId} className="song-item">
                                <div className="song-info">
                                    <span className="song-title">{song.trackName}</span>
                                    <div className="song-details">
                                        <span>Artist: </span>{song.artistName} •  
                                        <span> Album: </span>{song.collectionName}
                                    </div>
                                </div>
                                <button className="remove-button" onClick={() =>  removeFromPlaylist(song.trackId)}>-</button>
                            </li>

                        ))}
                    </ul>
                    {/* Boutons de sauvegarde */}
                    {
                    (playlist.length === 0)
                    ? <div></div>
                    : (
                        <>
                            <div className="playlist-buttons">
                                <button className="save-button" onClick={savePlaylist}>
                                    Sauvegarder
                                </button>
                                <button className="clear-button" onClick={clearPlaylist}>
                                    Effacer
                                </button>
                            </div>
                        </>
                    )
                    }
                    </div>
    </>);
}

export default PlayList;