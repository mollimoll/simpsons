import React from "react"
import styled, { css } from "styled-components"

import { BORDER, COLOR, CONTENT_WIDTH, RADIUS, SPACING } from "../constants"

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLOR.WHITE};
  border-radius: ${BORDER.RADIUS.M};
  border: 1px solid ${COLOR.GREY.LIGHT};
  width: 400px;
  box-shadow: ${BORDER.SHADOW.M};
  margin: ${SPACING.S};
  padding: ${SPACING.S};

  ${(props) =>
    props.direction === "Right" &&
    css`
      flex-direction: row;
    `}
  ${(props) =>
    props.direction === "Left" &&
    css`
      flex-direction: row-reverse;
    `};
`

const StyledImage = styled.img`
  max-height: 200px;
`

const StyledQuote = styled.div``

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
