import React from 'react';
import Crossword from '@jaredreisinger/react-crossword';
import styled from 'styled-components';

const data = {
  across: {
    1: {
      clue: 'one plus one',
      answer: 'TWO',
      row: 0,
      col: 0,
    },
  },
  down: {
    2: {
      clue: 'three minus two',
      answer: 'ONE',
      row: 0,
      col: 2,
    },
    3: {
        clue: '5+5',
        answer: 'ONE',
        row: 3,
        col: 3,
    }
  },
};

const Page = styled.div`
  padding: 2em;
`;

const Header = styled.h1`
  margin-bottom: 3em;
`;

const Wrapper = styled.div`
  max-width: 50em;
`;

function App() {
  return (
    <Page>
      <Header>@jaredreisinger/react-crossword example app</Header>
      <Wrapper>
        <Crossword data={data} />
      </Wrapper>
    </Page>
  );
}

export default App;