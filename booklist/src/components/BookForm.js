import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookFrom = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [handleSubmit] = useState();
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="author title"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="add book" />
    </form>
  );
};
export default NewBookFrom;
