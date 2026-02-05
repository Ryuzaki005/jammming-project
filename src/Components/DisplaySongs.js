
function DisplaySongs({ isLoading, songs, addToPlaylist, playPreview, currentlyPlaying}){
    
    return (
    <>
        {
                isLoading 
                ? <p>Chargement en cours</p> 
                : (
                <div className="results-container">
                    <h1 className="result-title">Résultats de votre recherche</h1>
                    <ul>
                        {songs.map((song) => (
                            <li key={song.trackId} className="song-item">
                                <button 
                                    className="preview-button"
                                    onClick={() => playPreview(song.trackId, song.preview)}
                                >
                                {currentlyPlaying === song.trackId ? "⏸️" : "▶️"}
                            </button>
                                <div className="song-info">
                                    <span className="song-title">{song.trackName}</span>
                                    <div className="song-details">
                                        <span>Artist: </span>{song.artistName} • 
                                        <span> Album: </span>{song.collectionName}
                                    </div>
                                    
                                </div>
                                <button className="add-button" onClick={() =>  addToPlaylist(song)}>+</button>
                            </li>
                        ))}
                    </ul>
                </div>
                )
                }
    </>)
}


export default DisplaySongs;