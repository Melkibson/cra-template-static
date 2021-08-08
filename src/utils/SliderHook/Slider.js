import {Fragment, useState, useEffect, useRef} from 'react'
import styled from "styled-components";
import Navigation from './Navigation'
import {
    ImgRes,
    Row,
} from "../CommonStyles";

const SliderRow = styled(Row)`
  position: relative;
`

const Slider = () => {
    const [slide, setSlide]= useState(0);
    const ref = useRef('');
    useEffect(() => {
        const slider = ref.current;
        slider.style.transform = `translateX(-${slide}%)`;
        let index = 1;
        let indexLength = 1;
        setSlide(slider.offsetWidth)
        let sliderChild = slider.children
        let sliderWidth = sliderChild.length
    //
    // next.addEventListener('click', () => {
    //     if (indexLength === sliderWidth && index === 1){
    //         indexLength = 1
    //     }
    //     if(indexLength < sliderWidth) {
    //         indexLength++;
    //         index += (slide - 1);
    //         slider.style.transform = `translateX(-${index}px)`;
    //     }
    // })
    //
    // prev.addEventListener('click', () => {
    //     if (indexLength === sliderWidth && index === 1){
    //         indexLength = 1
    //     }
    //     if(indexLength <= sliderWidth && index > 1) {
    //         indexLength--;
    //         index -= (slide - 1);
    //         slider.style.transform = `translateX(-${index}px)`;
    //     }
    // })


    }, [slide, ref])
    return (
        <Fragment>
            <SliderRow ref={ref} height={'500px'}>
                
            </SliderRow>
            <Navigation/>
        </Fragment>


    )
}

export default Slider
