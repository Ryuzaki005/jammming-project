exports.handler = async (event) => {
    const searchTerm = event.queryStringParameters.q;

    if (!searchTerm) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Paramètre 'q' manquant" })
        };
    }

    try {
        const response = await fetch(
            `https://api.deezer.com/search?q=${encodeURIComponent(searchTerm)}&limit=25`
        );
        const data = await response.json();

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Erreur serveur" })
        };
    }
};
