import React from 'react'
import SearchBar from '../SearchBar/SearchBar';

export default function Header({searchTerm, setSearch}) {
    return (
        <div>
            <h1>Google Book Search</h1>
            <SearchBar
            searchTerm = {searchTerm}
            setSearch = {setSearch}/>
        </div>
    )
}
