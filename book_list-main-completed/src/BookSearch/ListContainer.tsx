import React, { useState } from 'react';
import styled from 'styled-components';
import BookSearchForm, { IAddBookFormData } from './AddBookForm';
import BookCard from './BookCard';
import Pagination from './Pagination';
import axios from 'axios';
import BookSearch from '../Search/booksearch';

const ListContainerStyle = styled.div`
  border: 1px solid black;
  border-bottom: 0px;
  max-width: 90vw;
  margin: auto;
`;

interface IBook {
  title: string
  author_name: string
}

const bookSearch = async (title: string) => {
  try {
    const result = await axios.get(
      'http://openlibrary.org/search.json',
      {
        params: {
          title,
          page: 1,
        }
      }
    )
    return result
  } catch (e) {
    console.log('error in bookSearch', e);
  }
};

const ListContainer = () => {
  const [bookDetails, setBookDetails] = useState<IBook[]>([])
  const [numberOfPages, setNumberOfPages] = useState<number>(0)

  const addToList = async (arg: IAddBookFormData ) => {
    try {
      const result = await bookSearch(arg.title);
      const {
        docs,
        numFound
      } = result?.data
      setNumberOfPages(Math.ceil(numFound/100))
      setBookDetails(docs)
    } catch (e) {
      console.error('addToList encountered an error: ', e)
    }
  }

  console.log(bookDetails);

  return(
    <ListContainerStyle>
      <BookSearchForm addToList={addToList}/>
      { bookDetails.length > 0 && 
            <BookSearch bookDetails={bookDetails} /> 
      }
      {/* { bookDetails.length > 0 &&
        bookDetails.map((book: IBook, idx: number) => (
          <BookCard key={book.title + idx} book={book} />
        ))
      }
      { numberOfPages > 0 &&
        <Pagination numberOfPages={numberOfPages} />
      } */}
    </ListContainerStyle>
  );
}

export default ListContainer
export type {
  IBook
}
