import React from "react";
import styled from "styled-components";

import Button from "./Button";
import Header from "./Header";
import { CONTENT_WIDTH, SPACING } from "../constants";

const StyledContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${CONTENT_WIDTH};
  padding: ${SPACING.L};
`;

const App = () => {
  return (
    <>
      <Header />

      <StyledContentWrapper>
        <Button>Load quotes</Button>
      </StyledContentWrapper>
    </>
  );
};

export default App;
