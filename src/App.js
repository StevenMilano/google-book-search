import React, { useState, useEffect } from "react";
import Header from './Components/Header/Header';
import BookList from './Components/Books/BookList';

const url = "https://www.googleapis.com/books/v1/volumes?q=";
const Auth = '&key=AIzaSyB16IIO6OgeLL_E4Zt8WbrWyxy0d3jS15I';
let freeEbook = '&filter=free-ebooks';
let paidEbook = '&filter=paid-ebooks';
let allEbook =  '&filter=ebooks';
let book =  '&bookType=books';

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [books, setBooks] = useState({});
  const [searchTerm, setSearch] = useState({
    title: ''
  });

  function fetchData() { 
    fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter') 
      .then(res => res.json())
      .then(data => setBooks(data.items))
      .catch(err => setErrors(err));
}

useEffect(() => {
  fetchData();
}, []);

  return (
    <main className='App'>
      <Header 
      searchTerm = {searchTerm}
      setSearch = {setSearch} />
      <BookList />
    </main>
  );
}

export default App;