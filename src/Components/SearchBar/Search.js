import React from 'react'

export default function Search({setSearch, searchTerm}) {

    function handleSubmit(event) {
        console.log(searchTerm);
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search Book:</label>
                <input type="text" defaultValue={searchTerm.title} onChange={ (e) => {setSearch({...searchTerm, title: e.target.value})}}/>
                <button type="submit" value="submit">Search</button>
            </form>
        </div>
    )
}
