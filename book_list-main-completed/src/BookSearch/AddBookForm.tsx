import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form'


const BookSearchFormStyle = styled.form`
  border-bottom: 2px solid black;
  padding-bottom: 10px;
`;

interface IBookSearchFormData {
  title: string
}

interface IBookSearchForm {
  addToList: (arg: IBookSearchFormData) => void
}

const BookSearchForm = ({ addToList }: IBookSearchForm) => {
  const methods = useForm<IBookSearchFormData>({
    defaultValues: {
      title: ''
    }
  });
  return(
    <BookSearchFormStyle
    onSubmit={ methods.handleSubmit((val: IBookSearchFormData) => {
      // methods.reset({ title: '' })
      addToList(val)
    })}
    >
      <p>Search by Title</p>
      <input placeholder='title...' type='text' {...methods.register('title')} />
      <input type='submit' value='Find Books'/>
    </BookSearchFormStyle>
  );
}

export default BookSearchForm
export type {
  IBookSearchFormData as IAddBookFormData
}
