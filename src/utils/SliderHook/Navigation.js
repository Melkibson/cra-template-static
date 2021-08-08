import styled from "styled-components";
import {
    Row,
    colors, Column
} from "../CommonStyles";

const params = {
    icn: {
       w: '25px',
        h: '5px',
    },
    btn: '50px',
}

const NavContainer = styled(Row)`
position: absolute;
padding: 0 20px;
`
const NavIcon = styled(Column)`
  transform: translateX(${props => props.left ? '-5%': '5%'});
  padding: 5px;
`
const ArrowLine = styled.span.attrs(props => ({
    height: props.height,
    width: props.width,
}))`
  width: ${props => props.width};
  height: ${props => (props.height)};
  background: ${colors.black};
    transition: all 0.3s ease-in-out;

  transform: rotate(${props => props.left ? '-45deg': '45deg'});
`
const NavButton = styled.button.attrs(props => ({
    height: props.height,
    width: props.width,
}))`
  height: ${props => props.height};
  width: ${props => props.width};
  cursor: pointer;
  background: transparent;
  border: 0;
  &:hover {
    ${NavIcon} {
        ${ArrowLine}{
          background: ${colors.white};
        }
    }
  }
`


const Navigation = ({navPrev, navNext}) => {
    return(
        <NavContainer
            justify={'space-between'}
        >
            <NavButton ref={navPrev}>
                <NavIcon
                    left
                    height={params.btn}
                    width={params.btn}
                    justify={'space-evenly'}
                    align={'center'}
                >
                    <ArrowLine
                        left
                        width={params.icn.w}
                        height={params.icn.h}
                    />
                    <ArrowLine
                        width={params.icn.w}
                        height={'5px'}
                    />
                </NavIcon>
            </NavButton>
            <NavButton ref={navNext}>
                <NavIcon
                    height={params.btn}
                    width={params.btn}
                    justify={'space-evenly'}
                    align={'center'}
                >
                    <ArrowLine
                        width={params.icn.w}
                        height={'5px'}
                    />
                    <ArrowLine
                        left
                        width={params.icn.w}
                        height={params.icn.h}
                    />
                </NavIcon>
            </NavButton>
        </NavContainer>

    )

}

export default Navigation
