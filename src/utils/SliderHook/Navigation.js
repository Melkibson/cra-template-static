import styled from "styled-components";
import {
    Row,
    colors, Column
} from "../CommonStyles";

const NavContainer = styled(Row)`

`
const NavButton = styled.button.attrs(props => ({
    height: props.height,
    width: props.width,
}))`
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 50%;
  border: 5px solid #333;
  cursor: pointer;
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
  transform: rotate(${props => props.left ? '-45deg': '45deg'});
`
const Navigation = () => {
    return(
        <NavContainer
            justify={'space-between'}
        >
            <NavButton>
                <NavIcon
                    left
                    height={'50px'}
                    width={'50px'}
                    justify={'space-evenly'}
                    align={'center'}
                >
                    <ArrowLine
                        left
                        width={'30px'}
                        height={'5px'}
                    />
                    <ArrowLine
                        width={'30px'}
                        height={'5px'}
                    />
                </NavIcon>
            </NavButton>
            <NavButton>
                <NavIcon
                    height={'50px'}
                    width={'50px'}
                    justify={'space-evenly'}
                    align={'center'}
                >
                    <ArrowLine
                        width={'30px'}
                        height={'5px'}
                    />
                    <ArrowLine
                        left
                        width={'30px'}
                        height={'5px'}
                    />
                </NavIcon>
            </NavButton>
        </NavContainer>

    )

}

export default Navigation
