import React from 'react';

interface Book {
  id: string;
  name: string;
}
interface BookListProps {
  books: Book[];
}

const BookList = ({ books }: BookListProps)=>(
    <ul>
      <h1>BookList</h1>
      {books.map(book => (
        <li key={book.id}> {book.name}</li>
      ))}
    </ul>
  );


export default BookList;
