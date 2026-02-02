import React from "react";

function SearchBar({inputChangeHandler, submitHandler, searchTerm}){
    return(<>
        <h1 className="jammming">Jammming</h1>
            <form onSubmit={submitHandler}> 
                <input 
                    type="text" 
                    placeholder="Entrez le nom de l'artiste ou de la chanson"
                    onChange={inputChangeHandler}
                    value={searchTerm}
                />
                <button type="submit">Rechercher</button>
            </form>
    </>);
}

export default SearchBar;