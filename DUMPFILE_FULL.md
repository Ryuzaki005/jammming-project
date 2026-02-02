# Dumpfile complet — Jammming Project

Date: 2026-02-02

Résumé: Export complet de l'arborescence et du contenu de chaque fichier présent dans le workspace.

---

Arborescence

```
jammming-project/
├── DUMPFILE_FULL.md
├── DUMPFILE.md
├── package.json
├── .gitignore
├── public/
│   └── index.html
└── src/
    ├── index.css
    ├── index.js
    ├── mockupData.js
    ├── API/
    │   └── Deezer.js
    └── Components/
        ├── App.js
        ├── DisplaySongs.js
        ├── Playlist.js
        └── SearchBar.js
```

---

Contenu des fichiers

---

## package.json

```json
{
  "name": "jammming",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

---

## .gitignore

```
node_modules/
```

---

## public/index.html

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#121212" />
    <meta
      name="description"
      content="Jammming - Create and save playlists on Spotify"
    />
    <title>Jammming</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

---

## src/index.css

```css
/* ===== RESET & GENERAL ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  min-height: 100vh;
  color: #fff;
}

#root {
  max-width: 1200px;
  margin: 0 auto;
}

/* ===== HEADER / TITLE ===== */
h1 {
  color: #fff;
  margin-bottom: 30px;
  margin-top: 50px;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
}

.jammming{
  padding-top: 70px;
  color: #1ad65c;
}

/* Ajouter au CSS */
.playlist-title-input {
    background: transparent;
    border: none;
    color: #00ff59;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    width: 100%;
    align-items: center;
    margin-bottom: 12px;
}

.playlist-title-input:focus {
    outline: none;
}

h1.result-title{
  margin-top: 10px;
}


/* ===== SEARCH FORM ===== */
form {
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
  justify-content: center;
  flex-wrap: wrap;
}

input {
  padding: 14px 18px;
  border: 2px solid #1db954;
  border-radius: 8px;
  font-size: 16px;
  width: 350px;
  background-color: rgba(255, 255, 255, 0.95);
  color: #1a1a2e;
}

input::placeholder {
  color: #999;
}

input:focus {
  outline: none;
  border-color: #1ed760;
  box-shadow: 0 0 20px rgba(29, 185, 84, 0.6);
}

/* ===== BUTTONS ===== */
button {
  padding: 14px 32px;
  margin-left: 8px;
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  transition: all 0.3s ease;
}

button:hover {
  margin-left: 8px;
  background-color: #1ed760;
  transform: translateY(-2px);
}

/* ===== RESULTS SECTION ===== */
.results-container {
  flex: 1;
  margin-top: 30px;
  /* margin-right: 20px; */
}

/* ===== twoTabsContainer ===== */
.twoTabsContainer{
    display: flex;
    width: 100%;
    gap: 100px;
    justify-content: space-around;
}

/* ===== SONG LIST ===== */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* ===== SONG ITEM ===== */
.song-item {
  background: linear-gradient(135deg, rgba(29, 185, 84, 0.15) 0%, rgba(29, 185, 84, 0.05) 100%);
  padding: 15px 15px;
  border-radius: 10px;
  width: 110%;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(29, 185, 84, 0.3);
  transition: all 0.3s ease;
}

.song-item:hover {
  background: linear-gradient(135deg, rgba(29, 185, 84, 0.25) 0%, rgba(29, 185, 84, 0.1) 100%);
  transform: translateX(5px);
}

/* ===== SONG INFO ===== */
.song-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.song-title {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}

.song-details {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

.song-details span {
  color: #1ed760;
  font-weight: 500;
}

/* ===== ADD BUTTON ===== */
.add-button {
  padding: 10px 20px;
  font-size: 18px;
  min-width: 50px;
  border-radius: 6px;
}

  .remove-button{
    padding: 10px 20px;
    margin-left: 8px;
    font-size: 18px;
    min-width: 50px;
    border-radius: 6px;
    background-color: #bc160a;
  }

  .remove-button:hover{
    padding: 10px 20px;
    font-size: 18px;
    min-width: 50px;
    border-radius: 6px;
    background-color: #bc160aba;
  }

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  input {
    width: 100%;
    max-width: 300px;
  }

  .song-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .add-button {
    align-self: flex-end;
  }

  .remove-button{
    padding: 10px 20px;
    font-size: 18px;
    min-width: 50px;
    border-radius: 6px;
    background-color: #bc160a;
  }
  
  .remove-button:hover{
    padding: 10px 20px;
    font-size: 18px;
    min-width: 50px;
    border-radius: 6px;
    background-color: #bc160aba;
  }
}
```

---

## src/index.js

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <App />
);
```

---

## src/mockupData.js

```javascript
// Mock data for Jammming App - Songs Library
export const mockSongs = [
  {
    id: "1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    uri: "spotify:track:0VjIjW4GlUZAMYd2vXMwbk",
    image: "https://via.placeholder.com/200?text=Blinding+Lights"
  },
  {
    id: "2",
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷",
    uri: "spotify:track:7qiZfU4dY1lkzVrIPV4h9k",
    image: "https://via.placeholder.com/200?text=Shape+of+You"
  },
  {
    id: "3",
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    uri: "spotify:track:3EwBUWd5C5C2bVMVjKk2KT",
    image: "https://via.placeholder.com/200?text=Levitating"
  },
  {
    id: "4",
    title: "As It Was",
    artist: "Harry Styles",
    album: "Harry's House",
    uri: "spotify:track:0VjIjW4GlUZAMYd2vXMwbe",
    image: "https://via.placeholder.com/200?text=As+It+Was"
  },
  {
    id: "5",
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    uri: "spotify:track:5b88tifMJWcsKlf1IeS8aH",
    image: "https://via.placeholder.com/200?text=Good+4+U"
  },
  {
    id: "6",
    title: "Anti-Hero",
    artist: "Taylor Swift",
    album: "Midnights",
    uri: "spotify:track:6OqZb0HKe9cE7s6BjKF7NV",
    image: "https://via.placeholder.com/200?text=Anti-Hero"
  },
  {
    id: "7",
    title: "Sunroof",
    artist: "Nicky Youre",
    album: "Single",
    uri: "spotify:track:12QZ6tFWc3O0CEEDxI8Ydq",
    image: "https://via.placeholder.com/200?text=Sunroof"
  },
  {
    id: "8",
    title: "Flowers",
    artist: "Miley Cyrus",
    album: "Endless Summer Vacation",
    uri: "spotify:track:4mKuwC4dSzqEvNxJ8nreXv",
    image: "https://via.placeholder.com/200?text=Flowers"
  },
  {
    id: "9",
    title: "Heat Waves",
    artist: "Glass Animals",
    album: "Dreamland",
    uri: "spotify:track:02HL2lVcSRvmJ3XZ5ON7W2",
    image: "https://via.placeholder.com/200?text=Heat+Waves"
  },
  {
    id: "10",
+    title: "Watermelon Sugar",
+    artist: "Harry Styles",
+    album: "Fine Line",
+    uri: "spotify:track:6UelLqGlWMcVH1E5c4xXqY",
+    image: "https://via.placeholder.com/200?text=Watermelon+Sugar"
+  },
+  {
+    id: "11",
+    title: "Peaches",
+    artist: "Justin Bieber",
+    album: "Justice",
+    uri: "spotify:track:4cOdK2wGLETKBW3PvgPWqV",
+    image: "https://via.placeholder.com/200?text=Peaches"
+  },
+  {
+    id: "12",
+    title: "Midnight City",
+    artist: "M83",
+    album: "Hurry Up, We're Dreaming",
+    uri: "spotify:track:3wvzRy1shJuVhVJW5qN5qD",
+    image: "https://via.placeholder.com/200?text=Midnight+City"
+  },
+  {
+    id: "13",
+    title: "Someone You Loved",
+    artist: "Lewis Capaldi",
+    album: "Divinely Uninspired to a Hellish Extent",
+    uri: "spotify:track:3t4fJ924SE8LFVQ3G5jqLQ",
+    image: "https://via.placeholder.com/200?text=Someone+You+Loved"
+  },
+  {
+    id: "14",
+    title: "Uptown Funk",
+    artist: "Mark Ronson",
+    album: "Uptown Special",
+    uri: "spotify:track:3h8YmXrNcjsBMXyMUMEPlp",
+    image: "https://via.placeholder.com/200?text=Uptown+Funk"
+  },
+  {
+    id: "15",
+    title: "Don't Start Now",
+    artist: "Dua Lipa",
+    album: "Future Nostalgia",
+    uri: "spotify:track:7gkjg2sVVFDaSTxTIAg5Ib",
+    image: "https://via.placeholder.com/200?text=Dont+Start+Now"
+  },
+  {
+    id: "16",
+    title: "Cruel Summer",
+    artist: "Taylor Swift",
+    album: "Lover",
+    uri: "spotify:track:01iyCAXm8ynBFc40YVBLAC",
+    image: "https://via.placeholder.com/200?text=Cruel+Summer"
+  },
+  {
+    id: "17",
+    title: "Counting Stars",
+    artist: "OneRepublic",
+    album: "Native",
+    uri: "spotify:track:0DiWzAIiOXrFxguxTwTNvV",
+    image: "https://via.placeholder.com/200?text=Counting+Stars"
+  },
+  {
+    id: "18",
+    title: "Sweater Weather",
+    artist: "The Neighbourhood",
+    album: "I Love You",
+    uri: "spotify:track:53VcDry3jJ0j63KYTLX2xc",
+    image: "https://via.placeholder.com/200?text=Sweater+Weather"
+  },
+  {
+    id: "19",
+    title: "Radioactive",
+    artist: "Imagine Dragons",
+    album: "Night Visions",
+    uri: "spotify:track:7qiZfU4dY1lkzVrIPV4h9a",
+    image: "https://via.placeholder.com/200?text=Radioactive"
+  },
+  {
+    id: "20",
+    title: "Die With A Smile",
+    artist: "Lady Gaga",
+    album: "Die With A Smile",
+    uri: "spotify:track:1301WleyT98MSxVHnAlFAC",
+    image: "https://via.placeholder.com/200?text=Die+With+A+Smile"
+  },
+  {
+    id: "21",
+    title: "Stay",
+    artist: "The Kid LAROI",
+    album: "F*ck Love",
+    uri: "spotify:track:5HtUhtWcVI340nX60Zv76x",
+    image: "https://via.placeholder.com/200?text=Stay"
+  },
+  {
+    id: "22",
+    title: "Billionaire",
+    artist: "Travie McCoy",
+    album: "Lazily Loaded",
+    uri: "spotify:track:7JJmb5SVw13ZaKxWUIx59G",
+    image: "https://via.placeholder.com/200?text=Billionaire"
+  },
+  {
+    id: "23",
+    title: "Shake It Off",
+    artist: "Taylor Swift",
+    album: "1989",
+    uri: "spotify:track:7qiZfU4dY1lkzVrIPV4h9z",
+    image: "https://via.placeholder.com/200?text=Shake+It+Off"
+  },
+  {
+    id: "24",
+    title: "Lithium",
+    artist: "Nirvana",
+    album: "Nevermind",
+    uri: "spotify:track:4cOdK2wGLETKBW3PvgPWqL",
+    image: "https://via.placeholder.com/200?text=Lithium"
+  },
+  {
+    id: "25",
+    title: "Bohemian Rhapsody",
+    artist: "Queen",
+    album: "A Night at the Opera",
+    uri: "spotify:track:3z8h0TU7RvxVCo7lg4OeLy",
+    image: "https://via.placeholder.com/200?text=Bohemian+Rhapsody"
+  }
+];
+
+// Default empty playlist
+export const defaultPlaylist = {
+  name: "Ma Playlist",
+  songs: []
+};
+```
+
+---
+
+## src/API/Deezer.js
+
+```javascript
+const Deezer = {
+    async search(searchTerm) {
+    
+    const proxyUrl = 'https://corsproxy.io/?';
+    const deezerUrl = `https://api.deezer.com/search?q=${encodeURIComponent(searchTerm)}&limit=25`;
+
+    const response = await fetch(proxyUrl + deezerUrl);
+    const data = await response.json();
+
+    if(!data.data){
+        return [];
+    }    
+
+    const transformedData = data.data.map(song => ({
+        trackId: song.id,
+        trackName: song.title,
+        artistName: song.artist.name,
+        collectionName: song.album.title
+    }));
+
+
+    return transformedData;
+    }
+};
+
+export default Deezer;
+```
+
+---
+
+## src/Components/App.js
+
+```javascript
+import React, { useEffect, useState } from "react";
+import DisplaySongs from "./DisplaySongs";
+import SearchBar from "./SearchBar";
+import PlayList from "./Playlist";
+import Deezer from "../API/Deezer";
+
+function App(){
+
+    const [songs, setSongs] = useState([]);
+    const [searchTerm, setSearchTerm] = useState("");
+    const [playlist, setPlaylist] = useState([]);
+    // Ajouter un nouveau state
+    const [playlistName, setPlaylistName] = useState("Ma Playlist");
+    const [isLoading, setIsLoading] = useState(false);
+
+    useEffect(() => {
+        const savedPlaylistInLocalStorage = localStorage.getItem('jammming-playlist');
+        const nameOfTheSavedPlaylistInLocalStorage = localStorage.getItem('jammming-playlist-name');
+
+        if(savedPlaylistInLocalStorage){
+            setPlaylist(JSON.parse(savedPlaylistInLocalStorage));
+        }
+
+        if(nameOfTheSavedPlaylistInLocalStorage){
+            setPlaylistName(JSON.parse(nameOfTheSavedPlaylistInLocalStorage));
+
+        }
+
+    },[])
+
+    function savePlaylist(){
+        localStorage.setItem("jammming-playlist", JSON.stringify(playlist));
+        localStorage.setItem('jammming-playlist-name', JSON.stringify(playlistName));
+    }
+
+    function clearPlaylist(){
+        setPlaylist([]);
+        setPlaylistName("Ma playlist");
+        localStorage.removeItem('jammming-playlist');
+        localStorage.removeItem('jammming-playlist-name');
+    }
+
+    function inputChangeHandler({ target }){
+        setSearchTerm(target.value);
+    }
+
+
+    async function searchHandler() {        
+        setIsLoading(true);
+
+        try {
+            const songToDisplayAfterSearch = await Deezer.search(searchTerm);
+            
+
+            setSongs(songToDisplayAfterSearch);
+        } catch (error) {
+            console.error("Erreur de recherche:", error);
+            setSongs([]);
+        }
+
+
+        setIsLoading(false);
+    }
+ 
+    function submitHandler(event){
+        event.preventDefault();
+        searchHandler();
+        setSearchTerm('');
+    }
+
+    function addToPlaylist(song){
+        const alreadyInTheList = playlist.find(item => item.trackId === song.trackId);
+        if(!alreadyInTheList){
+            return setPlaylist(prev => [...prev, song])
+        }
+    }
+
+    function removeFromPlaylist(songIdClickedOn){
+        return setPlaylist(prev => prev.filter(item => item.trackId !== songIdClickedOn));
+    }
+
+    return (
+        <>
+            {/* SearchBar */}
+            <SearchBar searchTerm={searchTerm} inputChangeHandler={inputChangeHandler} submitHandler={submitHandler}/>
+            <div className="twoTabsContainer">
+                {/* Results */}
+                <DisplaySongs songs={songs} isLoading={isLoading} addToPlaylist={addToPlaylist}/>
+                {/* PlayList */}
+                <PlayList playlist={playlist} playlistName={playlistName} setPlaylistName={setPlaylistName} removeFromPlaylist={removeFromPlaylist} savePlaylist={savePlaylist} clearPlaylist={clearPlaylist} />
+            </div>
+        </>
+    );
+}
+
+export default App;
+```
+
+---
+
+## src/Components/DisplaySongs.js
+
+```javascript
+
+function DisplaySongs({ isLoading, songs, addToPlaylist}){
+    
+    return (
+    <>
+        {
+                isLoading 
+                ? <p>Chargement en cours</p> 
+                : (
+                <div className="results-container">
+                    <h1 className="result-title">Résultats de votre recherche</h1>
+                    <ul>
+                        {songs.map((song) => (
+                            <li key={song.trackId} className="song-item">
+                                <div className="song-info">
+                                    <span className="song-title">{song.trackName}</span>
+                                    <div className="song-details">
+                                        <span>Artist: </span>{song.artistName} • 
+                                        <span> Album: </span>{song.collectionName}
+                                    </div>
+                                </div>
+                                <button className="add-button" onClick={() =>  addToPlaylist(song)}>+</button>
+                            </li>
+                        ))}
+                    </ul>
+                </div>
+                )
+                }
+    </>)
+}
+
+export default DisplaySongs;
+```
+
+---
+
+## src/Components/Playlist.js
+
+```javascript
+import React from "react";
+
+function PlayList({ playlist, playlistName, setPlaylistName, removeFromPlaylist, savePlaylist, clearPlaylist }){
+    return(<>
+        <div className="results-container">
+                    {/* <h1>Titre de la playlist</h1> */}
+                    <input 
+                        type="text"
+                        className="playlist-title-input"
+                        value={playlistName}
+                        onChange={(e) => setPlaylistName(e.target.value)}
+                    />
+                    <ul>
+                        {playlist.map((song) => (
+                            <li key={song.trackId} className="song-item">
+                                <div className="song-info">
+                                    <span className="song-title">{song.trackName}</span>
+                                    <div className="song-details">
+                                        <span>Artist: </span>{song.artistName} •  
+                                        <span> Album: </span>{song.collectionName}
+                                    </div>
+                                </div>
+                                <button className="remove-button" onClick={() =>  removeFromPlaylist(song.trackId)}>-</button>
+                            </li>
+
+                        ))}
+                    </ul>
+                    {/* Boutons de sauvegarde */}
+                    {
+                    (playlist.length === 0)
+                    ? <div></div>
+                    : (
+                        <>
+                            <div className="playlist-buttons">
+                                <button className="save-button" onClick={savePlaylist}>
+                                    Sauvegarder
+                                </button>
+                                <button className="clear-button" onClick={clearPlaylist}>
+                                    Effacer
+                                </button>
+                            </div>
+                        </>
+                    )
+                    }
+                    </div>
+    </>);
+}
+
+export default PlayList;
+```
+
+---
+
+## src/Components/SearchBar.js
+
+```javascript
+import React from "react";
+
+function SearchBar({inputChangeHandler, submitHandler, searchTerm}){
+    return(<>
+        <h1 className="jammming">Jammming</h1>
+            <form onSubmit={submitHandler}> 
+                <input 
+                    type="text" 
+                    placeholder="Entrez le nom de l'artiste ou de la chanson"
+                    onChange={inputChangeHandler}
+                    value={searchTerm}
+                />
+                <button type="submit">Rechercher</button>
+            </form>
+    </>);
+}
+
+export default SearchBar;
+```
+
+---
+
+FIN
+