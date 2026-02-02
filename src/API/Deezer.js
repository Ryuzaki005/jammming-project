
const Deezer = {
    async search(searchTerm) {


// Détecter si on est en local ou en production
        const isDev = window.location.hostname === 'localhost';
        
        let url;
        if (isDev) {
            // En local → corsproxy.io (comme avant)
            const proxyUrl = 'https://corsproxy.io/?';
            url = proxyUrl + `https://api.deezer.com/search?q=${encodeURIComponent(searchTerm)}&limit=25`;
        } else {
            // En production → Netlify Function
            url = `/.netlify/functions/deezer?q=${encodeURIComponent(searchTerm)}`;
        }

    const response = await fetch(url);
    const data = await response.json();

    if(!data.data){
        return [];
    }    

    const transformedData = data.data.map(song => ({
        trackId: song.id,
        trackName: song.title,
        artistName: song.artist.name,
        collectionName: song.album.title
    }));


    return transformedData;
    }
};

export default Deezer;