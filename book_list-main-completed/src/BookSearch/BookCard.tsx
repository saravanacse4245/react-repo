import React from 'react';
import { IBook } from './ListContainer';

interface IBookCard {
  book: IBook
}

const BookCard = ({ book }: IBookCard) => (
  <>
    <p>Title: {book.title}</p>
    <p>Author: {book.author_name}</p>
    <hr />
  </>
);

export default BookCard;
