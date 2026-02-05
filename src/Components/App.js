import React, { useEffect, useRef, useState } from "react";
import DisplaySongs from "./DisplaySongs";
import SearchBar from "./SearchBar";
import PlayList from "./Playlist";
import Deezer from "../API/Deezer";

function App(){

    const [songs, setSongs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [playlist, setPlaylist] = useState([]);
    const [playlistName, setPlaylistName] = useState("Ma Playlist");
    const [isLoading, setIsLoading] = useState(false);

    const [isCurrentlyPlaying, setIsCurrentlyPlaying] = useState(null);

    const audioRef = useRef(null);

    function playPreview(trackId, previewUrl){



        if(isCurrentlyPlaying === trackId){
            audioRef.current.pause();
            setIsCurrentlyPlaying(null);
            return;
        }
        
        if(audioRef.current){
            audioRef.current.pause();
        }


        audioRef.current = new Audio(previewUrl);
        audioRef.current.play();
        setIsCurrentlyPlaying(trackId);

        audioRef.current.onended = () => {
            setIsCurrentlyPlaying(null);
        };

    }

    useEffect(() => {
        const savedPlaylistInLocalStorage = localStorage.getItem('jammming-playlist');
        const nameOfTheSavedPlaylistInLocalStorage = localStorage.getItem('jammming-playlist-name');

        if(savedPlaylistInLocalStorage){
            setPlaylist(JSON.parse(savedPlaylistInLocalStorage));
        }

        if(nameOfTheSavedPlaylistInLocalStorage){
            setPlaylistName(JSON.parse(nameOfTheSavedPlaylistInLocalStorage));

        }

    },[])

    function savePlaylist(){
        localStorage.setItem("jammming-playlist", JSON.stringify(playlist));
        localStorage.setItem('jammming-playlist-name', JSON.stringify(playlistName));
    }

    function clearPlaylist(){
        setPlaylist([]);
        setPlaylistName("Ma playlist");
        localStorage.removeItem('jammming-playlist');
        localStorage.removeItem('jammming-playlist-name');
    }

    function inputChangeHandler({ target }){
        setSearchTerm(target.value);
    }


    async function searchHandler() {        
        setIsLoading(true);

        try {
            const songToDisplayAfterSearch = await Deezer.search(searchTerm);
            

            setSongs(songToDisplayAfterSearch);
        } catch (error) {
            console.error("Erreur de recherche:", error);
            setSongs([]);
        }


        setIsLoading(false);
    }
 
    function submitHandler(event){
        event.preventDefault();
        searchHandler();
        setSearchTerm('');
    }

    function addToPlaylist(song){
        const alreadyInTheList = playlist.find(item => item.trackId === song.trackId);
        if(!alreadyInTheList){
            return setPlaylist(prev => [...prev, song])
        }
    }

    function removeFromPlaylist(songIdClickedOn){
        return setPlaylist(prev => prev.filter(item => item.trackId !== songIdClickedOn));
    }

    return (
        <>
            {/* SearchBar */}
            <SearchBar searchTerm={searchTerm} inputChangeHandler={inputChangeHandler} submitHandler={submitHandler}/>
            <div className="twoTabsContainer">
                {/* Results */}
                <DisplaySongs songs={songs.filter(song => !playlist.find(p => p.trackId === song.trackId))} isLoading={isLoading} addToPlaylist={addToPlaylist} playPreview={playPreview} currentlyPlaying={isCurrentlyPlaying} />
                {/* PlayList */}
                <PlayList playlist={playlist} playlistName={playlistName} setPlaylistName={setPlaylistName} removeFromPlaylist={removeFromPlaylist} savePlaylist={savePlaylist} clearPlaylist={clearPlaylist} />
            </div>
        </>
    );
}

export default App;