import React, { useState } from "react"
import styled from "styled-components"

import Button from "./Button"
import CardsContainer from "./CardsContainer"
import Header from "./Header"

import fetchQuotes from "../fetchQuotes"
import { COLOR, CONTENT_WIDTH, FONT, SPACING } from "../constants"

const StyledContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${CONTENT_WIDTH};
  padding: ${SPACING.L};
`

const StyledBody = styled.section`
  background-color: ${COLOR.BACKGROUND};
  font-family: ${FONT.FAMILY.BODY};
  height: 100vh;
`

const App = () => {
  const [loading, setLoading] = useState(false)
  const [quotes, setQuotes] = useState()

  const handleClick = async () => {
    setQuotes()
    setLoading(true)
    try {
      const { data } = await fetchQuotes()
      setQuotes(data)
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

  return (
    <>
      <Header />
      <StyledBody>
        <StyledContentWrapper>
          <Button loading={loading} onClick={handleClick}>
            {loading ? "Loading..." : "Load quotes"}
          </Button>
          {quotes && <CardsContainer quotes={quotes} />}
        </StyledContentWrapper>
      </StyledBody>
    </>
  )
}

export default App
