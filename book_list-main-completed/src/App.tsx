import React from 'react';
import styled from 'styled-components';

import ListContainer from './BookSearch/ListContainer'

const AppContainer = styled.div`
  text-align: center;
`;

const Header = styled.div`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  return (
    <AppContainer>
      <Header>
        <h2>
          Book Search
        </h2>
      </Header>
      <ListContainer />
    </AppContainer>
  );
}

export default App;
