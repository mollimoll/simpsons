import React, { useState } from "react"
import styled from "styled-components"

import Button from "./Button"
import CardsContainer from "./CardsContainer"
import Header from "./Header"

import fetchQuotes from "../fetchQuotes"
import { CONTENT_WIDTH, SPACING } from "../constants"

const StyledContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${CONTENT_WIDTH};
  padding: ${SPACING.L};
`

const App = () => {
  const [loading, setLoading] = useState(false)
  const [quotes, setQuotes] = useState()
  const [error, setError] = useState()

  const handleClick = async () => {
    setQuotes()
    setLoading(true)
    try {
      const { data } = await fetchQuotes()
      setQuotes(data)
    } catch (e) {
      setError(e)
    }
    setLoading(false)
  }

  return (
    <>
      <Header />

      <StyledContentWrapper>
        <Button onClick={handleClick}>Load quotes</Button>
        {loading && <p>loading</p>}
        {quotes && <CardsContainer quotes={quotes} />}
      </StyledContentWrapper>
    </>
  )
}

export default App
