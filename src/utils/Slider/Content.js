import styled from "styled-components";
import {Fragment} from 'react'

const Element = styled.div`

`
const Content = (props) => {
    const text = {
        0: 'text',
        1: 'text2',
        2: 'text3',
    }
    return (
       <Fragment>
           <Element key={props.id}>{text[props.id]}</Element>
       </Fragment>


    )
}

export default Content
