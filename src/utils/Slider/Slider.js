import {Fragment, useCallback, useState, } from 'react'
import styled from "styled-components";
import Navigation from './Navigation'
import SliderRow from "./SliderRow";
import {
    Row,
} from "../CommonStyles";


const SliderContainer = styled(Row)`
  width: 100%;
  height: 100%;
  transition: all 0.75s ease-in;
  position: relative;
`
const Slider = () => {
    const [element, setElement] = useState('')
    const ref = useCallback((node) => {
        if(node !== null){
            setElement(node)
        }
    }, [])

    return (
        <Fragment>
            <SliderContainer ref={ref}>
                <SliderRow rows={3}/>
            </SliderContainer>
            <Navigation element={element}/>
        </Fragment>


    )
}

export default Slider
