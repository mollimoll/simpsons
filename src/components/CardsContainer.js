import React from "react"
import styled from "styled-components"

const StyledCardsContainer = styled.div`
  display: flex;
`

const CardsContainer = ({ quotes }) => {
  return (
    <StyledCardsContainer>
      {quotes.map((obj, i) => (
        <div>{i}</div>
      ))}
    </StyledCardsContainer>
  )
}

export default CardsContainer
