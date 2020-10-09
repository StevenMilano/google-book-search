import React from 'react'
import Book from './Book';

export default function BookList({showBooks}) {
    return (
        
        <div>
            <Book showBooks={showBooks}/>
        </div>
    )
}
