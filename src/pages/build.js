import React from "react"
import Crossword from "@jaredreisinger/react-crossword"
import styled from "styled-components"

const clue = ""

const data = {
  across: {
    1: { clue: "This", answer: "CHASIUBAO", row: 0, col: 0 },
    7: { clue: "not", answer: "CHASIUBAO", row: 1, col: 0 },
    8: { clue: "a", answer: "XXXX", row: 1, col: 4 },
    10: { clue: "real", answer: "CHASIUBAO", row: 2, col: 0 },
    11: { clue: "crossword,", answer: "XX", row: 2, col: 3 },
    12: { clue: "it", answer: "XX", row: 2, col: 6 },
    13: { clue: "is", answer: "CHASIUBAO", row: 3, col: 0 },
    16: { clue: "only", answer: "CHASIUBAO", row: 4, col: 0 },
    19: { clue: "showing", answer: "CHASIUBAO", row: 5, col: 0 },
    21: { clue: "the", answer: "XX", row: 5, col: 3 },
    22: { clue: "kind", answer: "XX", row: 5, col: 6 },
    23: { clue: "of", answer: "CHASIUBAO", row: 6, col: 0 },
    25: { clue: "thing", answer: "XXX", row: 6, col: 5 },
    26: { clue: "you", answer: "CHASIUBAO", row: 7, col: 0 },
    27: { clue: "can", answer: "CHASIUBAO", row: 8, col: 0 },
  },
  down: {
    1: { clue: "create.", answer: "CREMEBRULEE", row: 0, col: 0 },
    2: { clue: "All", answer: "XXXX", row: 0, col: 1 },
    3: { clue: "of", answer: "XX", row: 0, col: 2 },
    4: { clue: "the", answer: "XXXXXX", row: 0, col: 4 },
    5: { clue: "answers", answer: "XX", row: 0, col: 5 },
    6: { clue: "are", answer: "BOBA", row: 0, col: 6 },
    9: { clue: '"X"', answer: "XX", row: 1, col: 7 },
    11: { clue, answer: "XXXXXX", row: 2, col: 3 },
    14: { clue, answer: "XX", row: 3, col: 2 },
    15: { clue, answer: "XX", row: 3, col: 5 },
    17: { clue, answer: "XXXX", row: 4, col: 6 },
    19: { clue, answer: "XX", row: 5, col: 0 },
    20: { clue, answer: "XXX", row: 5, col: 1 },
    24: { clue, answer: "XX", row: 6, col: 2 },
    25: { clue, answer: "XX", row: 6, col: 5 },
  },
}

const Page = styled.div`
  padding: 2em;
`

const Header = styled.h1`
  margin-bottom: 3em;
`

const Wrapper = styled.div`
  max-width: 50em;
`

function App() {
  return (
    <Page>
      <Header>GraphQL Crossword</Header>
      <Wrapper>
        <div style={{ width: "100%" }}>
          <Crossword data={data} useStorage={false} />
        </div>
      </Wrapper>
      <p>@jaredreisinger/react-crossword</p>
    </Page>
  )
}

export default App
