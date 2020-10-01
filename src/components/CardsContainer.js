import React from "react"
import styled from "styled-components"

import Card from "./Card"

import { SPACING } from "../constants"

const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: ${SPACING.L} -${SPACING.S};
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
