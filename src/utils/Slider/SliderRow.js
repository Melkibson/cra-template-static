import styled from "styled-components";
import Content from "./Content";

import {Row} from "../CommonStyles";
import {useEffect, useMemo} from "react";

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

const SliderRow = ({rows}) => {
    const sliderRows = useMemo(() => { return []}, [])
    useEffect(() => {


        for (let i = 0 ; i < rows; i++){
            sliderRows.push(
                <Container key={i} height={'100%'} width={'100%'} justify={'center'} align={'center'}>
                    <Content id={i}/>
                </Container>
            )
        }
    }, [rows, sliderRows])

    return(
        sliderRows
    )
}

export default SliderRow
