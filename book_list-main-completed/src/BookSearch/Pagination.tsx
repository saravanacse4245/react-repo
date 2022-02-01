import React from 'react';

import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  border-bottom: 1px solid black;
`;

const StyledPage = styled.span`
  color: blue;
  margin: 2px;
`;

interface IPagination {
  numberOfPages: number
}

const Pagination = ({ numberOfPages }: IPagination) => {
  const pageNumbers = [];

  for(let i = 1; i < numberOfPages; i += 1) {
    pageNumbers.push(<StyledPage key={i}>{i}</StyledPage>)
  }

  return (
    <PaginationContainer>
      { pageNumbers }
    </PaginationContainer>
  );
}

export default Pagination;
