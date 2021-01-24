import styled from "styled-components";


export const Container = styled.header`
display: flex;
justify-content: space-between;
padding: 30px;
`

export const Logo = styled.img`
height: 32px;
width: 108px;
margin-right: 40px;
`

export const Menu = styled.img`
height: 32px;
width: 30px;
cursor: pointer;

@media (min-width: 1000px) {
    display: none;
}
`

export const Nav = styled.img`
height: 32px;
width: 30px;
cursor: pointer;

@media (min-width: 1000px) {
    display: none;
}
`