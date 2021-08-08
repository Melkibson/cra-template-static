import styled from "styled-components";
import Slider from "./utils/SliderHook/Slider";
import {GlobalStyle, Section} from "./utils/CommonStyles";

const Container = styled(Section)`
  flex-direction: column;
`
function App() {
  return (
      <main>
          <GlobalStyle/>
          <Container width={'100%'} height={'500px'}>
              <Slider />
          </Container>
      </main>

  );
}

export default App;
