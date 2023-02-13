import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BooksSlice';

const EditBook = () => {
  const location = useLocation();
  // const { id, title, author } = location.state.book;
  // console.log(id, title, author);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState(location.state.book.id);
  const [title, setTitle] = useState(location.state.book.title);
  const [author, setAuthor] = useState(location.state.book.author);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }))
    navigate("/show-books");
  }
  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-field">
          <label htmlFor="title">Author: </label>
          <input type="text" name="autor" id="autor" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div className="form-field">
          <button className='add_book_btn' type='submit'>Update Book</button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;