import React from "react"
import styled, { css } from "styled-components"

import { BORDER, COLOR, DEVICE, FONT, SPACING } from "../constants"

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLOR.WHITE};
  border-radius: ${BORDER.RADIUS.M};
  border: 1px solid ${COLOR.GREY.LIGHT};
  width: 442px;
  box-sizing: border-box;
  box-shadow: ${BORDER.SHADOW.M};
  margin: ${SPACING.XS};
  font-size: ${FONT.SIZE.M};

  @media (max-width: ${DEVICE.TABLET}) {
    width: 100%;
    flex-direction: column-reverse;
  }

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
  max-height: 150px;
  margin: ${SPACING.M};
`

const StyledQuote = styled.div`
  margin: ${SPACING.M};

  @media (max-width: ${DEVICE.TABLET}) {
    margin-top: ${SPACING.XS};
    text-align: center;
  }
`

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
