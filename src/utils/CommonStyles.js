import styled from 'styled-components'
import {createGlobalStyle, css} from 'styled-components'

/*=================================
=            COLORS            =
=================================*/

export const colors = {
    black: '#121212',
    white: '#FFFFFF',
}

/*=====  End of COLORS  ======*/
export const GlobalStyle = createGlobalStyle`
    
    @font-face {
      font-family: '';
      src:url(${''});
    }
    
    body, html, *
    
    {
      padding: 0px;
      margin: 0px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    body, html {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }
    body::-webkit-scrollbar, main::-webkit-scrollbar {
      width: 0px;
      background: transparent; 
    }
    * {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      
    }
    iframe {
      border: 0;
    }
    
    h1, h2, h3, h4, h5, h6, i
    {
      font-weight: normal;
      font-style: normal;
      line-height: 125%;
          }

    body.block
    {
      overflow:hidden;
    }
    body {
      background-color: ${colors.white};
    }

    body::-webkit-scrollbar {
      display: none;
    }
    img {
        vertical-align: middle;
        border: 0;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit; /* 1 */
      font-size: 100%; /* 1 */
      line-height: 1.15; /* 1 */
      margin: 0; /* 2 */
    }
    
    /**
     * Show the overflow in IE.
     * 1. Show the overflow in Edge.
     */
    
    button,
    input { /* 1 */
      overflow: visible;
    }
    
    /**
     * Remove the inheritance of text transform in Edge, Firefox, and IE.
     * 1. Remove the inheritance of text transform in Firefox.
     */
    
    button,
    select { /* 1 */
      text-transform: none;
    }
    
    /**
     * Correct the inability to style clickable types in iOS and Safari.
     */
    
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
      -webkit-appearance: button;
    }
        `

/*=================================
=            FONTS            =
=================================*/

export const FontSerif_900 = css`
  font-family: '', serif;
`
export const FontSerif_800 = css`
  font-family: '', serif;
`
export const FontSerif_700 = css`
  font-family: '', serif;
`
export const FontSerif_600 = css`
  font-family: '', serif;
`
export const FontSerif_500 = css`
  font-family: '', serif;
`
export const FontSerif_400 = css`
  font-family: '', serif;
`
export const FontSerif_300 = css`
  font-family: '', serif;
`
export const Font_900 = css`
  font-family: '', sans-serif;
`
export const Font_800 = css`
  font-family: '', sans-serif;
`
export const Font_700 = css`
  font-family: '', sans-serif;
`
export const Font_600 = css`
  font-family: '', sans-serif;
`
export const Font_500 = css`
  font-family: '', sans-serif;
`
export const Font_400 = css`
  font-family: '', sans-serif;
`
export const Font_300 = css`
  font-family: '', sans-serif;
`

/*=================================
=            TEXT SIZE            =
=================================*/

export const textSize = {
    desktop: {
        h1: '',
        h2: '',
        h3: '',
        h4: '',
        pgBig: '',
        pgMedium:'',
        pgRegular: '',
        pgSmall: '',
        pgTiny: '',
    },
    tablet: {
        h1: '',
        h2: '',
        h3: '',
        h4: '',
        pgBig: '',
        pgMedium:'',
        pgRegular: '',
        pgSmall: '',
        pgTiny: '',
    }
    ,
    mobile: {
        h1: '',
        h2: '',
        h3: '',
        h4: '',
        pgBig: '',
        pgMedium:'',
        pgRegular: '',
        pgSmall: '',
        pgTiny: '',
    }

}

/*=====  End of TEXT SIZE  ======*/

/*===================================
=            BREAK POINT            =
===================================*/

export const bp = {
    desktop: 1900,
    laptop: 1450,
    tablet: 1250,
    tabletMini: 850,
    mobile: 600,
}

/*=====  End of BREAK POINT  ======*/

/*----------  SECTION  ----------*/
export const Section = styled.div.attrs(props =>({
    height: props.height,
}))`
  width: 100%;
  height: ${props => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
`

/*----------  GRID  ----------*/

export const Grid = styled.div.attrs(props =>({
    height: props.height || '100%',
}))`
  display: flex;
  width: 1400px;
  height: ${props => props.height};
  @media screen and (min-width: ${bp.laptop}px){
    width: 1140px;
  }
  @media screen and (max-width: ${bp.tablet}px){
    max-width: 800px;
  }
  @media screen and (max-width: ${bp.tabletMini}px){
    max-width: 670px;
  }
   @media screen and (max-width: ${bp.mobile}px){
     max-width: 310px;
   }
`
/*----------  COLUMN  ----------*/

const paramsContainer = props => ({
    justify: props.justify || 'center',
    align: props.align || 'center',
    width: props.width || '100%',
    height: props.height || '100%',
})

export const Column = styled.div.attrs(props => {paramsContainer(props)})`
    height: ${props => props.height};
    width:  ${props => props.width};
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align};
    justify-content:${props => props.justify} ;
`
/*----------  ROW  ----------*/

export const Row = styled.div.attrs(props => {paramsContainer(props)})`
    height: ${props => props.height};
    width:  ${props => props.width};
    display: flex;
    align-items: ${props => props.align};
    justify-content:${props => props.justify} ;
    @media screen and (max-width: ${bp.mobile}px){
     flex-wrap: wrap;
  }
`
/*----------  HEADING  ----------*/
const paramsHeading = props => ({
    font: props.font,
    color: props.color,
    textAlign: props.align || 'center',
    lineHeight: props.lineHeight,
})
/*----------  H1  ----------*/

export const H1 = styled.h1.attrs(props => {paramsHeading(props)})`
  ${FontSerif_900};
  line-height: ${props => props.lineHeight};
  color: ${props => props.color};
  font-size: ${textSize.desktop.h1}px;
  text-align: ${props => props.textAlign};
  font-family: ${props => props.font};
  @media screen and (max-width: ${bp.tablet}px){
    font-size: ${textSize.tablet.h1}px;
  }
  @media screen and (max-width: ${bp.mobile}px){
    font-size: ${textSize.mobile.h1}px;
  }
`
/*----------  H2  ----------*/

export const H2 = styled.h2.attrs(props => {paramsHeading(props)})`
  ${FontSerif_700};
  color: ${props => props.color};
  font-size: ${textSize.desktop.h2}px;
  text-align: ${props => props.textAlign};
  line-height: ${props => props.lineHeight};
    font-family: ${props => props.font};


  @media screen and (max-width: ${bp.tablet}px){
    font-size: ${textSize.tablet.h2}px;
  }
  @media screen and (max-width: ${bp.mobile}px){
    font-size: ${textSize.mobile.h2}px;
  }
`
/*----------  H3  ----------*/

export const H3 = styled.h3.attrs(props => {paramsHeading(props)})`
  ${Font_500};
  line-height:  ${props => props.lineHeight};;
  color: ${props => props.color};
  text-align: ${props => props.textAlign};
  font-size: ${textSize.desktop.h3}px;
    font-family: ${props => props.font};
  @media screen and (max-width: ${bp.tablet}px){
    font-size: ${textSize.tablet.h3}px;
  }
  @media screen and (max-width: ${bp.mobile}px){
    font-size: ${textSize.mobile.h3}px;
  }
`
/*----------  PARAGRAPH REGULAR  ----------*/
const paramsPg = props => ({
    font: props.font,
    color: props.color,
    textAlign: props.align || 'center',
    lineHeight: props.lineHeight,
    fontSizeDesktop: props.fontSizeDesktop,
    fontSizeTablet: props.fontSizeTablet,
    fontSizeMobile: props.fontSizeMobile,
})

export const Paragraph = styled.span.attrs(props => {paramsPg(props)})`
  font-family: ${props => props.font};
  color: ${props => props.color};
  font-size:  ${props => props.fontSizeDesktop};
  line-height: ${props => props.lineHeight};
  text-align: ${props => props.textAlign};
  
  @media screen and (max-width: ${bp.tablet}px){
      font-size:  ${props => props.fontSizeTablet};
  }
  @media screen and (max-width: ${bp.mobile}px){
      font-size:  ${props => props.fontSizeMobile};
  }
`

/*----------  LINKS  ----------*/
const paramsLink = props => ({
    font: props.font,
    color: props.color,
    hoverColor: props.hoverColor,
    fontSizeDesktop: props.fontSizeDesktop,
    fontSizeTablet: props.fontSizeTablet,
    fontSizeMobile: props.fontSizeMobile,
})

export const DefaultLink = styled.a.attrs(props => (paramsLink(props)))`
  cursor: pointer;
  font-family: ${props => props.font};
  color: ${props => props.color};
  font-size:  ${props => props.fontSizeDesktop};
  text-decoration: none;
    &:active{
      color: ${props => props.hoverColor};
    }
   @media (pointer: fine){
      &:hover{
      color: ${props => props.hoverColor};      }  
  }
  @media screen and (max-width: ${bp.tablet}px){
      font-size:  ${props => props.fontSizeTablet};
  }
  @media screen and (max-width: ${bp.mobile}px){
      font-size:  ${props => props.fontSizeMobile};
  }
`

/*----------  INPUT  ----------*/
const paramsInput = props => ({
    border: props.border || 'none',
    borderRad: props.borderRad || 0,
    type: props.type || 'text',
    font: props.font,
    fontSize: props.fontSize,
    color: props.color,
})
const DefaultInput = styled.input.attrs(props => (paramsInput(props)))`
  background: transparent;
  box-shadow: none;
  transition: all .8s linear;
  border: ${props => props.border};
  border-radius:  ${props => props.borderRad};
  color:  ${props => props.color};
  &::placeholder{
    font-family: ${props => props.font};
    font-size:  ${props => props.fontSize};
    color:  ${props => props.color};
  }
`

/*----------  TEXTAREA  ----------*/

const paramsTextArea = props => ({
    border: props.border || 'none',
    borderRad: props.borderRad || 0,
    font: props.font,
    fontSize: props.fontSize,
    color: props.color,
    resize: props.resize || 'none'
})

export const DefaultTextArea = styled.textarea.attrs(props => (paramsTextArea(props)))`
    font-family: ${props => props.font};
    font-size:  ${props => props.fontSize};
    color:  ${props => props.color};
    border: ${props => props.border};
    border-radius:  ${props => props.borderRad};
    resize: ${props => props.resize};
`
/*----------  BUTTONS  ----------*/

const paramsButton = props => ({
    height: props.height,
    width: props.width,
    background: props.background,
    hoverBackground: props.hoverBackground,
    color: props.color,
    hoverColor:props.hoverColor,
    border: props.border || '0',
    hoverBorder: props.hoverBorder || '0',
    borderRad: props.borderRad || 0,
})

export const Button = styled.button.attrs(props => (paramsButton(props)))`
    display: flex;
    height: ${props => props.height};
    width: ${props => props.width};
    background: ${props => props.background};
    justify-content: center;
    align-items: center;
    
      &:hover, &:active{ 
      background: ${props => props.hoverBackground};
      color:  ${props => props.hoverColor};
      border: ${props => props.hoverBorder};
      }
  `
/*----------  IMAGE RESPONSIVE  ----------*/

export const ImgRes = css`
     display: block;
     width: 100%;
     height: auto;
`
const CommonStyle = () => {
    return(
        <GlobalStyle/>
    )
}

export default CommonStyle
