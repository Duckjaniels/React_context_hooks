import React, { Component } from "react";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>Harry Potter</li>
          <li>Hobbit</li>
          <li>Shantaram</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
