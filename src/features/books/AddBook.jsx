import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BooksSlice';
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title, author };
    dispatch(addBook(book));
    navigate('/show-books')
  }
  return (
    <div>
      <h2>Add Book</h2>
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
          <button className='add_book_btn' type='submit'>Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;