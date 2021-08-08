import {Fragment, useState, useEffect, useRef} from 'react'
import styled from "styled-components";
import Navigation from './Navigation'
import {
    ImgRes,
    Row,
} from "../CommonStyles";
const SliderContainer = styled(Row)`
  width: 100%;
  height: 100%;
  transition: all 0.75s ease-in;
    position: relative;
  // transform: translateX(-${props => props.translate}px);
  //overflow-x: hidden;
`
const SliderRow = styled(Row)`
  min-width: 100%;
  background: blue;
  &:last-child{
    background: aquamarine;
  }
  &:nth-child(2){
  background: crimson;
  }
`

const Slider = () => {
    const ref = useRef('');
    const prevRef = useRef('')
    const nextRef = useRef('')
    let index = 0
    let indexLength = 1

    useEffect(() => {
        const slider = ref.current;
        const prev = prevRef.current;
        const next = nextRef.current
        const slide = slider.offsetWidth
        const sliderChild = slider.children
        const childCount = sliderChild.length

        next.addEventListener('click', () => {
            console.log(index)

            if (indexLength === childCount && index === 0){
               indexLength = 1
            }
            if(indexLength < childCount) {
                index += slide;
                indexLength++
            }
            slider.style.transform = `translateX(-${index}px)`;

        })
        prev.addEventListener('click', () => {
            if (indexLength === childCount && index === 0){
                indexLength = 1
            }
            if(indexLength <= childCount && index > 0) {
                index -= slide;
                indexLength--
                slider.style.transform = `translateX(-${index}px)`;
            }
        })
    }, [ref, prevRef, nextRef, indexLength, index])
    return (
        <Fragment>
            <SliderContainer ref={ref}>
                <SliderRow  height={'100%'} width={'100%'} justify={'center'} align={'center'}>
                    <div>1</div>
                </SliderRow>
                <SliderRow  height={'100%'} width={'100%'} justify={'center'} align={'center'}>
                    <div>1</div>
                </SliderRow>
                <SliderRow  height={'100%'} width={'100%'} justify={'center'} align={'center'}>
                    <div>1</div>
                </SliderRow>
            </SliderContainer>
            <Navigation navPrev={prevRef} navNext={nextRef}/>
        </Fragment>


    )
}

export default Slider
