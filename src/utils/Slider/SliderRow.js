import styled from "styled-components";

import {Row} from "../CommonStyles";

const Container = styled(Row)`
  min-width: 100%;
  background: blue;
  &:last-child{
    background: aquamarine;
  }
  &:nth-child(2){
  background: crimson;
  }
`

const SliderRow = ({el ,rows}) => {
    const sliderRows = []
    for (let i = 0 ; i < rows; i++){
        sliderRows.push(
            <Container key={i} height={'100%'} width={'100%'} justify={'center'} align={'center'}>
                {el}
            </Container>
        )
    }
    return(
        sliderRows
    )
}

export default SliderRow
