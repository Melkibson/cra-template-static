import styled from "styled-components";
import Slider from "./utils/Slider/Slider";
import {GlobalStyle, Section} from "./utils/CommonStyles";
import {Fragment} from "react";

const Container = styled(Section)`
  flex-direction: column;
`

function App() {
  return (
      <Fragment>
          <GlobalStyle/>
          <Container width={'100%'} height={'500px'}>
              <Slider  />
          </Container>
      </Fragment>

  );
}

export default App;
