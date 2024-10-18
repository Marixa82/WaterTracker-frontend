// import React from 'react';

interface Book {
  id: string;
  name: string;
}
interface BookListProps {
  books: Book[];
}

const BookListPage: React.FC<BookListProps> = ({ books }) => {
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookListPage;
