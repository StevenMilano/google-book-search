import React from 'react';
import Search from './Search';
import FilterBar from './FilterBar';

export default function SearchBar({searchTerm, setSearch}) {
    return (
        <div>
           <Search
           setSearch = {setSearch}
           searchTerm = {searchTerm} />
            <FilterBar />
        </div>
    )
}
