import React from "react";
import { render } from '@testing-library/react';
import BookCard from '../BookCard';
import { IBook } from "../ListContainer";

const testBook: IBook = {
  title: 'Test Title',
  author_name: 'Test Author',
}

describe('BookCard', () => {
  test('renders title', () => {
    const { getByText } = render(<BookCard book={testBook} />)
    expect(
      getByText('Title: Test Title')
    ).toBeInTheDocument()
  })
})
