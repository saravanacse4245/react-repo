import React from "react";
import { render } from '@testing-library/react';
import BookSearch from '../booksearch';

const bookDetails = 
[{
  title: 'Test Title',
  author_name: ['Test Author'],
  publisher: ['AA','BB'],
  publish_year: [2001],
  title_suggest: 'Test Title Suggest',
  edition_count: 2,
} , {
    title: 'Test Title1',
    author_name: ['Test Author1'],
    publisher: ['AA1','BB1'],
    publish_year: [20011],
    title_suggest: 'Test Title Suggest1',
    edition_count: 21,
  } 
]

describe('BookCard', () => {
  test('renders title', () => {
    const { getByText } = render(<BookSearch bookDetails={bookDetails} />)
    expect(
      getByText('Title: Test Title')
    ).toBeInTheDocument()
  })

  test('renders uthor', () => {
    const { getByText } = render(<BookSearch bookDetails={bookDetails} />)
    expect(
      getByText('Author: Test Author')
    ).toBeInTheDocument()
  })

  test('renders publisher', () => {
    const { getByText } = render(<BookSearch bookDetails={bookDetails} />)
    expect(
      getByText('Publisher: AA BB')
    ).toBeInTheDocument()
  })
})


