import React from "react"
import styled, { css } from "styled-components"

const StyledCard = styled.div`
  display: flex;
  width: 300px;

  ${(props) =>
    props.direction === "Left" &&
    css`
      flex-direction: row;
    `}

  ${(props) =>
    props.direction === "Right" &&
    css`
      flex-direction: row-reverse;
    `}
`

const StyledImage = styled.img`
  max-height: 200px;
`

const StyledQuote = styled.div`
  max-width: 150px;
`

// {
//     quote: string;
//     character: string;
//     image: string;
//     characterDirection: string;
// }

const Card = ({ data }) => {
  const { quote, character, image, characterDirection } = data
  return (
    <StyledCard direction={characterDirection}>
      <StyledQuote>{quote}</StyledQuote>
      <StyledImage src={image} alt={character} />
    </StyledCard>
  )
}

export default Card
