import React from "react"
import styled from "styled-components"

import Card from "./Card"

const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const CardsContainer = ({ quotes }) => {
  return (
    <StyledCardsContainer>
      {quotes.map((quote, i) => (
        <Card key={i} data={quote} />
      ))}
    </StyledCardsContainer>
  )
}

export default CardsContainer
