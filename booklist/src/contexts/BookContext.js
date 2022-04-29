import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {
      title: "Harry Potter and Philosophers' stone",
      author: "J.K. Rowling",
      id: 1,
    },
    { title: "Lord of The Rings", author: "Tolkien", id: 2 },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;
