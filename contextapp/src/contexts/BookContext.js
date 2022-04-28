import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Harry Potter and Order of Phoenix", id: 1 },
    { title: "Hobbit", id: 2 },
    { title: "Shantaram", id: 3 },
    { title: "Lord of The Rings", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;
